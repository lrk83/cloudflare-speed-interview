import * as Yup from "yup";
import { translations } from "./app.translations";

export const PAGE_TITLE = "Kanban";

export const BASE_URL = "https://speed-interview.lrk83.workers.dev";

export const STATUS_NAMES = [
  translations.in_planning,
  translations.to_do,
  translations.in_progress,
  translations.completed,
];

export const initialValues = {
  name: "",
  description: "",
  selectedCategory: 0,
  status: 0,
};

export const taskValidationSchema = Yup.object().shape({
  name: Yup.string().required(translations.name_required),
});

export const categoryValidationSchema = Yup.object().shape({
  name: Yup.string().required(translations.name_required),
});
