import { enableScreens } from "react-native-screens";
enableScreens();  // ✅ Enable native screen optimizations

import React from "react";
import { TamaguiProvider } from "@tamagui/core";
import config from "../tamagui.config"; // Custom Tamagui theme
import HomeScreen from "./screens/HomeScreen"; // Import HomeScreen
import NavBar from "./components/NavBar"; // Import NavBar

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <NavBar />
    </TamaguiProvider>
  );
}
