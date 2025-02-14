import React from "react";
import { YStack, Text, useTheme } from "tamagui";

const UserProfile = () => {
  return (
    <YStack f={1} jc="center" ai="center" bg="white"> 
      <Text fontSize="$6" fontWeight="bold">USER PROFILE</Text>
    </YStack>
  );
};

export default UserProfile;
