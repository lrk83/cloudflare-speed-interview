import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { translations } from "../../constants/app.translations";
import { TableData, TaskActions } from "../../types/DataHandlingTypes";
import { TaskCard } from "./TaskCard";

export interface TableProps {
  taskActions: TaskActions;
  tableData: TableData;
}

export const TasksTable: React.FC<TableProps> = ({
  taskActions,
  tableData,
}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>{translations.in_planning}</th>
          <th>{translations.to_do}</th>
          <th>{translations.in_progress}</th>
          <th>{translations.completed}</th>
        </tr>
      </thead>
      <tbody>
        {tableData.categories.map((category) => {
          return (
            <tr key={category.id}>
              <th>
                <Container>
                  <Row>{category.name}</Row>
                  <Button
                    variant="outline-danger"
                    onClick={() => taskActions.handleDeleteCategory(category)}
                  >
                    {translations.delete}
                  </Button>
                </Container>
              </th>
              {category.tasks.map((status, index) => (
                <th key={index}>
                  {status.map((task, index) => (
                    <TaskCard
                      key={index}
                      category={category}
                      task={task}
                      taskActions={taskActions}
                    />
                  ))}
                </th>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
