import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button } from "react-native";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  const name = useState("DarkCainDS");

  return (
    <NavigationContainer>
      {/*<NavigationStack />*/}
      {/*<NavigationTab />*/}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
