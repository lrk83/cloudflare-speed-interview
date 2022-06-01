import React from "react";
import { Container, Spinner } from "react-bootstrap";

export const LoadingBlock: React.FC = () => {
  return (
    <Container>
      <Spinner animation="grow" variant="primary" />{" "}
    </Container>
  );
};
