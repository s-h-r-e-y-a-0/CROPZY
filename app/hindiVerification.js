import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function HindiVerification() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (val, i) => {
    const next = [...otp];
    next[i] = val.slice(0, 1);
    setOtp(next);
  };

  return (
    <View style={styles.container}>
      {/* Top Green Bar with Left-Aligned Logo */}
      <View style={styles.topBar}>
        <Image
          source={require("../assets/images/cropzylogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Phone Number Section */}
        <Text style={styles.label}>फ़ोन नंबर</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="फ़ोन नंबर"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.phoneInput}
          />
          {phone.length > 0 && (
            <Ionicons name="checkmark-circle" size={22} color="green" />
          )}
        </View>

        {/* Verify Button */}
        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>ओटीपी सत्यापित करें</Text>
        </TouchableOpacity>

        {/* OTP Input Section */}
        <View style={styles.otpContainer}>
          {otp.map((d, i) => (
            <TextInput
              key={i}
              value={d}
              maxLength={1}
              onChangeText={(v) => handleOtpChange(v, i)}
              keyboardType="numeric"
              style={styles.otpInput}
            />
          ))}
        </View>

        {/* Next Section */}
        <TouchableOpacity
          onPress={() => router.push("/hindiidentifyPlant")}
          style={styles.nextContainer}
        >
          <Text style={styles.nextText}>अगला</Text>
          <View style={styles.underline} />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Image Covering White Space */}
      <Image
        source={require("../assets/images/farmer1.png")}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topBar: {
    width: "100%",
    height: height * 0.09,
    backgroundColor: "#50C878", // green bar
    justifyContent: "center",
    paddingLeft: width * 0.03, // left padding for logo
  },
  logo: {
    width: width * 0.3, // bigger logo
    height: height * 0.15,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: width * 0.07,
    paddingTop: 90,
    paddingBottom: height * 0.4, // space for bottom farmer image
  },
  label: {
    fontSize: width * 0.05,
    fontWeight: "600",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  phoneInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
  },
  verifyButton: {
    marginTop: 16,
    backgroundColor: "#50C878",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  verifyButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  otpContainer: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "center",
  },
  otpInput: {
    width: width * 0.12,
    height: width * 0.12,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
  },
  nextContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  nextText: {
    fontSize: width * 0.05,
    fontWeight: "600",
  },
  underline: {
    width: 60,
    height: 1,
    backgroundColor: "gray",
    marginTop: 4,
  },
  bottomImage: {
    width: "100%",
    height: height * 0.39, // taller to fill white space
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
