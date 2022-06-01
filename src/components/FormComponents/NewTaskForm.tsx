import { Field, FieldProps } from "formik";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { STATUS_NAMES } from "../../constants/app.constrants";
import { Category } from "../../types/DataHandlingTypes";

export interface TaskFormProps {
  options: Category[];
}

export const NewTaskForm: React.FC<TaskFormProps> = ({ options }) => {
  return (
    <Container>
      <Row className="form-row">
        <Field
          name="name"
          render={({ field }: FieldProps) => {
            return <input type="text" placeholder="name" {...field} />;
          }}
        />
      </Row>

      <Row className="form-row">
        <Field
          name="description"
          render={({ field }: FieldProps) => {
            return <input type="text" placeholder="description" {...field} />;
          }}
        />
      </Row>

      <Row className="form-row">
        <Field name="selectedCategory" as="select">
          {options.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </Field>
      </Row>

      <Row className="form-row">
        <Field name="status" as="select">
          {STATUS_NAMES.map((name, index) => {
            return (
              <option key={index} value={index}>
                {name}
              </option>
            );
          })}
        </Field>
      </Row>
    </Container>
  );
};
