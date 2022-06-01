import React from "react";
import { Card, Container } from "react-bootstrap";
import { translations } from "../constants/app.translations";

export const ErrorBlock: React.FC = () => {
  return (
    <Container>
      <Card bg="danger">
        <Card.Header>Error</Card.Header>
        <Card.Body>
          <Card.Text>{translations.error_block_msg}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
