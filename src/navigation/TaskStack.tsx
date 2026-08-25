import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailTaskScreen from "../screens/DetailTaskScreen";
import TaskScreen from "../screens/TaskScreen";
import { TaskType } from "../types";

const Stack = createNativeStackNavigator();

const TaskStack = () => {

  // const [tasks, setTasks] = useState<TaskType[]>([]);

  // const onToggleTask = (id: string) => {
  //   setTasks((prev) =>
  //     prev.map((task) =>
  //       task.id === id ? { ...task, done: !task.done } : task
  //     )
  //   );
  // };

  // const deleteTask = useCallback((id: string) => {
  //   setTasks((prev) => prev.filter((task) => task.id !== id));
  // }, []);


  return (
    <Stack.Navigator
      id="TaskStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name="Detail" component={DetailTaskScreen} />
    </Stack.Navigator>
  );
};

export default TaskStack;
