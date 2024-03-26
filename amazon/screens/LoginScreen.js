import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.companyLogo}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
        <Text>Login to your Account</Text>
      </View>
      <View style={{ marginTop: 70 }}></View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  companyLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
