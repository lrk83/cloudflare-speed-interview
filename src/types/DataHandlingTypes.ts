import { CategoryFormValues } from "../components/FormComponents/NewCategoryForm";
import { TaskFormValues } from "../components/ModalComponents/NewTaskModal";

export interface Task {
  name: string;
  description?: string;
  status: number;
}

export interface Category {
  name: string;
  tasks: [Task[], Task[], Task[], Task[]];
  id: number;
}

export interface TableData {
  categories: Category[];
}

export interface TaskActions {
  handleForward: (task: Task, category: Category) => void;
  handleBack: (task: Task, category: Category) => void;
  handleDeleteTask: (task: Task, category: Category) => void;
  handleDeleteCategory: (category: Category) => void;
}

export interface FormActions {
  handleSubmitTask: (
    value: TaskFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void;
  handleSubmitCategory: (
    value: CategoryFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void;
  handleSaveData: () => void;
}

export interface ModalProps {
  show: boolean;
  close: () => void;
  data: TableData;
  actions: FormActions;
}
