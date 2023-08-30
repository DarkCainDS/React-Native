import React from "react";
import { View, Text, Button } from "react-native";

const SettingsScreen = (props) => {
  const { navigation } = props;

  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <Text>asetting screen</Text>
      <Text>b</Text>

      <Text>c</Text>
      <Text>d</Text>
      <Text>e</Text>
      <Button onPress={goToHome} title="Ir a Home" />
    </View>
  );
};

export default SettingsScreen;
