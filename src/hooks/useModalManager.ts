import { useState } from "react";

export const useModalManager = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const [showNewCategory, setShowNewCategory] = useState(false);

  const handleCloseTask = () => setShowNewTask(false);
  const handleShowTask = () => setShowNewTask(true);

  const handleCloseCategory = () => {
    setShowNewCategory(false);
  };
  const handleShowCategory = () => {
    setShowNewCategory(true);
  };

  return {
    showNewTask,
    setShowNewTask,
    handleCloseTask,
    handleShowTask,
    showNewCategory,
    setShowNewCategory,
    handleCloseCategory,
    handleShowCategory,
  };
};
