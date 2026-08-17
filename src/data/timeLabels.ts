import { TaskType } from "../types";

export const translateTime: Record<TaskType["time"], string> = {
  today: "Hoy",
  tomorrow: "Mañana",
  week: "Semana",
  month: "Mes",
};
