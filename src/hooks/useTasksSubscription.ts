import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectCurrentUser } from "../features/auth/authSlice";
import { setTasks, setTasksLoading } from "../features/tasks/tasksSlice";
import { subscribeToTasks } from "../services/tasks/tasksService";

export const useTasksSubscription = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    if (!user) return;

    dispatch(setTasksLoading(true));

    const unsubscribe = subscribeToTasks(user.uid, (tasks) => {
      dispatch(setTasks(tasks));
    });

    return unsubscribe;
  }, [user, dispatch]);
};
