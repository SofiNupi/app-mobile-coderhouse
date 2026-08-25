import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

import HomeStack from "../navigation/HomeStack";
import TaskStack from "../navigation/TaskStack";
import ProfileStack from "../navigation/ProfileStack";

import { colors } from "../theme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        id="TabNavigator"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.surface,
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 50,        
            backgroundColor: colors.primary, 
            paddingBottom: 5,
            paddingTop: 5,
          },
        }}
      >
         <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="home"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tareas"
          component={TaskStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="checklist"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="person"
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
