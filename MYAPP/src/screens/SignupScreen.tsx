// SignupScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Tab: undefined;
  Cart: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    // ... existing validation ...
  
    try {
      const response = await axios.post("https://react-native-scan-serve.onrender.com/api/auth/register", {
        username: name,
        email,
        password,
      });
      
      console.log("API Response:", response.data); // Check if you're getting a token
      
      await AsyncStorage.setItem("token", response.data.token);
      console.log("Token stored successfully"); // Verify storage works
      
      // Test navigation directly without alert
      navigation.navigate('Tab');
      
    } catch (error) {
      console.error("Signup error:", error); // Check for API errors
      Alert.alert("Signup Failed", "Please try again.");
    }
  };

  // const handleSignup = async () => {
  //   if (!name || !email || !password) {
  //     Alert.alert("Error", "All fields are required!");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("https://react-native-scan-serve.onrender.com/api/auth/register", {
  //       username: name,
  //       email,
  //       password,
  //     });
  //     await AsyncStorage.setItem("token", response.data.token);
  //     Alert.alert("Success", "Account created successfully!");
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     Alert.alert("Signup Failed", "Please try again.");
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: { width: "80%", padding: 12, borderBottomWidth: 1, marginBottom: 20 },
  button: { backgroundColor: "#ff5733", padding: 15, borderRadius: 8, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  linkText: { marginTop: 20, color: "#007BFF" },
});
