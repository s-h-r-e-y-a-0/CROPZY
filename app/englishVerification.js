import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function EnglishVerification() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (val, i) => {
    const next = [...otp];
    next[i] = val.slice(0, 1);
    setOtp(next);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", padding: 20 }}>
      <Image source={require("../assets/images/cropzylogo.png")} style={{ width: 100, height: 40, marginBottom: 20 }} />

      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>Phone Number</Text>
      <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, width: "100%", maxWidth: 300, alignItems: "center" }}>
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={{ flex: 1, height: 40 }}
        />
        {phone.length > 0 && <Ionicons name="checkmark-circle" size={20} color="green" />}
      </View>

      <TouchableOpacity style={{ marginTop: 16, backgroundColor: "green", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 }}>
        <Text style={{ color: "white", fontWeight: "600" }}>Verify OTP</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 24, gap: 10 }}>
        {otp.map((d, i) => (
          <TextInput
            key={i}
            value={d}
            maxLength={1}
            onChangeText={(v) => handleOtpChange(v, i)}
            keyboardType="numeric"
            style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 8, textAlign: "center", fontSize: 20 }}
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={() => router.push("/identifyPlant")}
        style={{ alignItems: "center", marginTop: 30 }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Next</Text>
        <View style={{ width: 60, height: 1, backgroundColor: "gray", marginTop: 4 }} />
      </TouchableOpacity>

      <Image
        source={require("../assets/images/farmer1.png")}
        style={{ width: 200, height: 120, marginTop: 40, resizeMode: "contain" }}
      />
    </View>
  );
}
