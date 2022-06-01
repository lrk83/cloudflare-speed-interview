import React from "react";
import { Button, Card } from "react-bootstrap";
import { translations } from "../../constants/app.translations";
import { Category, Task, TaskActions } from "../../types/DataHandlingTypes";

export interface TaskCardProps {
  task: Task;
  taskActions: TaskActions;
  category: Category;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  taskActions,
  category,
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-align-center">{task.name}</Card.Title>
        <Card.Text className="text-align-center">{task.description}</Card.Text>
        <Button
          variant="outline-primary"
          onClick={() => taskActions.handleForward(task, category)}
          {...(task.status === 3 && { disabled: true })}
          className="wide"
        >
          {translations.forward}
        </Button>
        <Button
          className="wide"
          variant="outline-primary"
          onClick={() => taskActions.handleBack(task, category)}
          {...(task.status === 0 && { disabled: true })}
        >
          {translations.back}
        </Button>
        <Button
          className="wide"
          variant="outline-danger"
          onClick={() => taskActions.handleDeleteTask(task, category)}
        >
          {translations.delete}
        </Button>
      </Card.Body>
    </Card>
  );
};
