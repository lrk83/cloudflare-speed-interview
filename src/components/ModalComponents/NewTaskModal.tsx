import { Formik } from "formik";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import {
  initialValues,
  taskValidationSchema,
} from "../../constants/app.constrants";
import { ModalProps } from "../../types/DataHandlingTypes";
import { NewTaskForm } from "../FormComponents/NewTaskForm";

export interface TaskFormValues {
  name: string;
  description: string;
  selectedCategory: number;
  status: number;
}

export const NewTaskModal: React.FC<ModalProps> = ({
  show,
  close,
  data,
  actions,
}) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          actions.handleSubmitTask(values, setSubmitting);
          close();
        }}
        validationSchema={taskValidationSchema}
        render={({ handleSubmit, isSubmitting, errors, touched }) => {
          return (
            <>
              <NewTaskForm options={data.categories} />
              {errors.name && touched.name && <div>{errors.name}</div>}
              <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleSubmit()}
                  disabled={isSubmitting || errors.name !== undefined}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </>
          );
        }}
      />
    </Modal>
  );
};
