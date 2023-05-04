import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../../assets/images/auth-bg.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? -208 : 0,
              }}
            >
              <Text style={styles.formTitle}>Увійти</Text>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onFocus={() => setIsShowKeyboard(true)}
                onSubmitEditing={() => setIsShowKeyboard(false)}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                onSubmitEditing={() => setIsShowKeyboard(false)}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                style={styles.btn}
                title="Зареєструватися"
                activeOpacity={0.8}
                onPress={onSubmit}
                onSubmitEditing={() => setIsShowKeyboard(false)}
              >
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.navLink}>Немає облікового запису? Зареєструватись</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 111,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formTitle: {
    marginBottom: 33,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    marginTop: 27,
    marginBottom: 16,

    backgroundColor: Platform.OS === "ios" ? "#FF6C00" : "skyblue",
    borderRadius: 100,
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 400,
    textAlign: "center",
    color: "#FFFFFF",
  },
  navLink: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
