import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import UserProfile from "../screens/UserProfile";
import FeedScreen from "../screens/FeedScreen";
import SearchScreen from "../screens/SearchScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { XStack,XGroup, Text, Button, useTheme } from "tamagui";

const Tab = createBottomTabNavigator();

// Custom TabBar Component (Optional)
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <XStack
      f={1}
      fd="row"
      jc="space-around"
      ai="center"
      p="$4"
      bg="$backgroundLight"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height={80}
      borderTopWidth={1}
      borderColor="$gray6"
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        return (
          <Text
            key={route.name}
            fontSize="$5"
            color={isFocused ? "$blue10" : "$gray10"}
            onPress={() => navigation.navigate(route.name)}
          >
            {route.name}
          </Text>
        );
      })}
    </XStack>
  );
};

export default function Navbar() {
  return (
    <NavigationContainer>
        
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ lazy: false, animationEnabled: false }}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={UserProfile} />
        <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
    
    </NavigationContainer>
  );
}
