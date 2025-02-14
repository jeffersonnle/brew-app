import React from "react";
import { YStack, Text, useTheme } from "tamagui";

const HomeScreen = () => {
  return (
    <YStack f={1} jc="center" ai="center" bg="white"> 
      <Text fontSize="$6" fontWeight="bold">Home Screen</Text>
    </YStack>
  );
};

export default HomeScreen;
