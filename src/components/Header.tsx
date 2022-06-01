import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { translations } from "../constants/app.translations";
import { useModalManager } from "../hooks/useModalManager";
import { FormActions, TableData } from "../types/DataHandlingTypes";
import { NewCategoryModal } from "./ModalComponents/NewCategoryModal";
import { NewTaskModal } from "./ModalComponents/NewTaskModal";

export interface HeaderProps {
  data: TableData;
  actions: FormActions;
}

export const Header: React.FC<HeaderProps> = ({ data, actions }) => {
  const {
    showNewCategory,
    showNewTask,
    handleCloseCategory,
    handleCloseTask,
    handleShowTask,
    handleShowCategory,
  } = useModalManager();

  return (
    <>
      <Container>
        <Row className="text-align-center">
          <h1>{translations.header}</h1>
        </Row>
        <Row className="center-align">
          <Button
            variant="primary"
            onClick={handleShowTask}
            {...(data.categories.length === 0 && { disabled: true })}
          >
            {translations.new_task}
          </Button>
          <Button variant="primary" onClick={handleShowCategory}>
            {translations.new_category}
          </Button>
          <Button variant="outline-primary" onClick={actions.handleSaveData}>
            {translations.save_tasks}
          </Button>
        </Row>
      </Container>
      <NewTaskModal
        actions={actions}
        data={data}
        show={showNewTask}
        close={handleCloseTask}
      />
      <NewCategoryModal
        actions={actions}
        data={data}
        show={showNewCategory}
        close={handleCloseCategory}
      />
    </>
  );
};
