import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const currentWeatherIcon = ({ focused }) => {
  return (
    <Feather name="droplet" size={24} color={focused ? "tomato" : "black"} />
  );
};

const upcomingWeatherIcon = ({ focused }) => {
  return (
    <Feather name="clock" size={24} color={focused ? "tomato" : "black"} />
  );
};

const cityIcon = ({ focused }) => {
  return <Feather name="home" size={24} color={focused ? "tomato" : "black"} />;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarIcon: currentWeatherIcon,
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{ tabBarIcon: upcomingWeatherIcon }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{ tabBarIcon: cityIcon }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
