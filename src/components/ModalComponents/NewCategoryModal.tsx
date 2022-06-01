import { Formik } from "formik";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { categoryValidationSchema } from "../../constants/app.constrants";
import { ModalProps } from "../../types/DataHandlingTypes";
import { NewCategoryForm } from "../FormComponents/NewCategoryForm";

export const NewCategoryModal: React.FC<ModalProps> = ({
  show,
  close,
  actions,
}) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, { setSubmitting }) => {
          actions.handleSubmitCategory(values, setSubmitting);
          close();
        }}
        validationSchema={categoryValidationSchema}
        render={({ handleSubmit, isSubmitting, errors, touched }) => (
          <>
            <NewCategoryForm />
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
        )}
      />
    </Modal>
  );
};
