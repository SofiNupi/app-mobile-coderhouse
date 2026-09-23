import {
  createSelector,
  createSlice,
  nanoid,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TaskType } from "../../types";
import type { RootState } from "../../store";

export type TaskFilter = "all" | "pending" | "completed";

export const FILTERS: Record<TaskFilter, string> = {
  all: "Todas",
  pending: "Pendientes",
  completed: "Completadas",
};

export type NewTaskInput = Omit<TaskType, "id" | "done">;

type TaskState = {
  items: TaskType[];
  filter: TaskFilter;
  isLoading: boolean;
};

const initialState: TaskState = {
  items: [],
  filter: "all",
  isLoading: true,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      prepare: (input: NewTaskInput) => ({
        payload: { id: nanoid(), done: false, ...input } as TaskType,
      }),
      reducer: (state, action: PayloadAction<TaskType>) => {
        state.items.unshift(action.payload);
      },
    },
  toggleTaskStatus: (state, action: PayloadAction<string>) => {
    const task = state.items.find((t) => t.id === action.payload);
    if (task) {
      task.done = !task.done;
    }
  },
  setTasks: (state, action: PayloadAction<TaskType[]>) => {
    state.items = action.payload;
    state.isLoading = false;
  },
  setTasksLoading: (state, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
  },
  deleteTask: (state, action: PayloadAction<string>) => {
    state.items = state.items.filter((t) => t.id !== action.payload);
  },
  setFilter: (state, action: PayloadAction<TaskFilter>) => {
    state.filter = action.payload;
  },
}});

export const {
  addTask,
  toggleTaskStatus,
  setTasks,
  setTasksLoading,
  deleteTask,
  setFilter,
} = tasksSlice.actions;
export default tasksSlice.reducer;

//SELECTORS

export const selectAllTasks = (state: RootState) => state.tasks.items;
export const selectFilter = (state: RootState) => state.tasks.filter;
export const selectTasksLoading = (state: RootState) => state.tasks.isLoading;

export const selectTaskById = (id: string) => (state: RootState) => {
  return state.tasks.items.find((t) => t.id === id);
};

export const selectVisibleTasks = createSelector(
  [selectAllTasks, selectFilter],
  (items, filter) => {
    switch (filter) {
      case "pending":
        return items.filter((t) => !t.done);
      case "completed":
        return items.filter((t) => t.done);
      default:
        return items;
    }
  }
);

export const selectTaskStats = createSelector([selectAllTasks], (items) => {
  const completed = items.filter((t) => t.done).length;
  const pending = items.length - completed;
  return { total: items.length, completed: completed, pending: pending };
});
