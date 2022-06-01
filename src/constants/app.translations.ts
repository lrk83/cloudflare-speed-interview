const formTranslations = {
  name_required: "Please enter a name",
  in_planning: "In planning",
  to_do: "To do",
  in_progress: "In progress",
  completed: "Completed",
};

const headerTranslations = {
  header: "Kanban",
  new_task: "New Task",
  new_category: "New Category",
  save_tasks: "Save Tasks",
};

const buttonTranslations = {
  forward: "Forward",
  back: "Back",
  delete: "Delete",
};

export const translations = {
  ...formTranslations,
  ...headerTranslations,
  ...buttonTranslations,

  error_block_msg: "Hmmm.... Something seems amiss. Perhaps a refresh?",
};
