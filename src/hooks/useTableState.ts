import { useEffect, useState } from "react";
import { submitTasks, useFetchData } from "./useSWR";
import { isEqual } from "lodash";
import { TaskFormValues } from "../components/ModalComponents/NewTaskModal";
import { CategoryFormValues } from "../components/FormComponents/NewCategoryForm";
import { Category, TableData, Task } from "../types/DataHandlingTypes";

export const useTableState = () => {
  const { data, error, isLoading } = useFetchData();

  const [tableData, updateTableData] = useState({} as TableData);

  const tableLoading = isLoading || tableData === undefined;

  useEffect(() => {
    updateTableData(data);
  }, [isLoading, data]);

  const handleForward: (task: Task, category: Category) => void = (
    task,
    category
  ) => {
    const newTableData = { ...tableData };
    const column = task.status;
    task.status = column + 1;
    category.tasks[column + 1].push(task);
    category.tasks[column] = category.tasks[column].filter(
      (t) => !isEqual(t, task)
    );
    newTableData.categories[category.id] = category;
    updateTableData(newTableData);
  };

  const handleBack: (task: Task, category: Category) => void = (
    task,
    category
  ) => {
    const newTableData = { ...tableData };
    const column = task.status;
    task.status = column - 1;
    category.tasks[column - 1].push(task);
    category.tasks[column] = category.tasks[column].filter(
      (t) => !isEqual(t, task)
    );
    newTableData.categories[category.id] = category;
    updateTableData(newTableData);
  };

  const createTask = (value: TaskFormValues) => {
    const newTableData = { ...tableData };
    newTableData.categories[value.selectedCategory].tasks[value.status].push({
      name: value.name,
      description: value.description,
      status: value.status,
    });
    updateTableData(newTableData);
  };

  const handleSubmitTask = (
    value: TaskFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      createTask(value);
      setSubmitting(false);
    } catch {
      setSubmitting(false);
    }
  };

  const createCategory = (value: CategoryFormValues) => {
    const newTableData = { ...tableData };
    newTableData.categories.push({
      name: value.name,
      id: tableData.categories.length,
      tasks: [[], [], [], []],
    });
    updateTableData(newTableData);
  };

  const handleSubmitCategory = (
    value: CategoryFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      createCategory(value);
      setSubmitting(false);
    } catch {
      setSubmitting(false);
    }
  };

  const handleDeleteCategory = (value: Category) => {
    const newTableData = { ...tableData };
    newTableData.categories = tableData.categories.filter(
      (c) => !isEqual(c, value)
    );
    updateTableData(newTableData);
  };

  const handleDeleteTask: (task: Task, category: Category) => void = (
    task,
    category
  ) => {
    const newTableData = { ...tableData };
    const column = task.status;
    category.tasks[column] = category.tasks[column].filter(
      (t) => !isEqual(t, task)
    );
    newTableData.categories[category.id] = category;
    updateTableData(newTableData);
  };

  const handleSaveData = () => {
    submitTasks(tableData);
  };

  return {
    tableData,
    error,
    tableLoading,
    taskActions: {
      handleForward,
      handleBack,
      handleDeleteTask,
      handleDeleteCategory,
    },
    formActions: {
      handleSubmitTask,
      handleSubmitCategory,
      handleSaveData,
    },
  };
};
