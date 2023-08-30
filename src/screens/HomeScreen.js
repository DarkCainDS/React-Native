import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import NavigationStack from "../navigation/NavigationStack";

const HomeScreen = (props) => {
  console.log(props);

  const { navigation } = props;

  const goToSetting = () => {
    navigation.navigate("Settings");
  };
  return (
    <View>
      <Text>Hi</Text>
      <Text>Hey</Text>

      <Text>look</Text>

      <Text>listen</Text>
      <Text>Hey</Text>
      <Text>Hi</Text>
      <Button onPress={goToSetting} title="Ir a ajuste" />
    </View>
  );
};

export default HomeScreen;
