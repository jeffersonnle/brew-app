import React, { useState } from "react";
import { YStack, Input, Button, Text, useTheme } from "tamagui";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const theme = useTheme(); // ✅ Get the current theme

  const handleRegister = () => {
    if (username && email && password) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <YStack f={1} jc="center" ai="center" p="$4" bg={theme.background}>
      <Text fontSize="$8" fontWeight="bold" color={theme.color}>
        Register
      </Text>

      {/* Fixed username input */}
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        bg={theme.gray3}
        px="$4"
        py="$3"
        my="$3"
        w="80%"
        color={theme.color}
        borderWidth={2}
        borderColor={theme.gray6}
      />

      {/* Email input */}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        bg={theme.gray3}
        px="$4"
        py="$3"
        my="$3"
        w="80%"
        color={theme.color}
        borderWidth={2}
        borderColor={theme.gray6}
      />

      {/* Password input */}
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        bg={theme.gray3}
        px="$4"
        py="$3"
        my="$3"
        w="80%"
        color={theme.color}
        borderWidth={2}
        borderColor={theme.gray6}
      />

      {/* Themed button */}
      <Button
        onPress={handleRegister}
        size="$3"
        bg={theme.blue10}  // ✅ Uses theme button color
        color={theme.white} // ✅ Ensures text color is readable
        px="$6"
        py="$4"
        my="$4"
        w="80%"
      >
        Register
      </Button>

      {/* Success message */}
      {success && (
        <Text color={theme.green10} mt="$2">
          Registration Successful! 🎉
        </Text>
      )}
    </YStack>
  );
};

export default RegisterScreen;
