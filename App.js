import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Font from "expo-font";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });
    setIsReady(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!isReady) return null

  return (
    <>
      {Platform.OS !== "ios" ? <RegistrationScreen /> : <LoginScreen />}
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
    </>
  );
}