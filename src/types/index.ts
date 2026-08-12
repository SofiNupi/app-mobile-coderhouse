export type TaskType = {
  id: string;
  title: string;
  description: string;
  done: boolean;
  category: string;
  time: "today" | "tomorrow" | "week" | "month";
};
