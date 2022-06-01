import { Field, FieldProps } from "formik";
import React from "react";
import { Row } from "react-bootstrap";

export interface CategoryFormValues {
  name: string;
}

export const NewCategoryForm: React.FC = () => {
  return (
    <Row className="form-row">
      <Field
        name="name"
        render={({ field }: FieldProps) => {
          return <input type="text" placeholder="name" {...field} />;
        }}
      />
    </Row>
  );
};
