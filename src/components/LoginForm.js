import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native";

const LoginForm = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>name:{name}</Text>
      <TextInput placeholder="email"></TextInput>
      <TextInput placeholder="password"></TextInput>

      <Button
        title="Haz clic en mí"
        onPress={() => {
          alert("¡Botón presionado!");
        }}
      />
    </View>
  );
};

export default LoginForm;
