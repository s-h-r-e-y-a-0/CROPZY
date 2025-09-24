// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// export default function EnglishVerification() {
//   const router = useRouter();
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   const handleOtpChange = (val, i) => {
//     const next = [...otp];
//     next[i] = val.slice(0, 1);
//     setOtp(next);
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", padding: 20 }}>
//       <Image source={require("../assets/images/cropzylogo.png")} style={{ width: 100, height: 40, marginBottom: 20 }} />

//       <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>Phone Number</Text>
//       <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, width: "100%", maxWidth: 300, alignItems: "center" }}>
//         <TextInput
//           placeholder="Phone Number"
//           value={phone}
//           onChangeText={setPhone}
//           keyboardType="phone-pad"
//           style={{ flex: 1, height: 40 }}
//         />
//         {phone.length > 0 && <Ionicons name="checkmark-circle" size={20} color="green" />}
//       </View>

//       <TouchableOpacity style={{ marginTop: 16, backgroundColor: "green", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 }}>
//         <Text style={{ color: "white", fontWeight: "600" }}>Verify OTP</Text>
//       </TouchableOpacity>

//       <View style={{ flexDirection: "row", marginTop: 24, gap: 10 }}>
//         {otp.map((d, i) => (
//           <TextInput
//             key={i}
//             value={d}
//             maxLength={1}
//             onChangeText={(v) => handleOtpChange(v, i)}
//             keyboardType="numeric"
//             style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 8, textAlign: "center", fontSize: 20 }}
//           />
//         ))}
//       </View>

//       <TouchableOpacity
//         onPress={() => router.push("/identifyPlant")}
//         style={{ alignItems: "center", marginTop: 30 }}
//       >
//         <Text style={{ fontSize: 18, fontWeight: "600" }}>Next</Text>
//         <View style={{ width: 60, height: 1, backgroundColor: "gray", marginTop: 4 }} />
//       </TouchableOpacity>

//       <Image
//         source={require("../assets/images/farmer1.png")}
//         style={{ width: 200, height: 120, marginTop: 40, resizeMode: "contain" }}
//       />
//     </View>
//   );
// }


// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const { width } = Dimensions.get("window");

// export default function EnglishVerification() {
//   const router = useRouter();
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   const handleOtpChange = (val, i) => {
//     const next = [...otp];
//     next[i] = val.slice(0, 1);
//     setOtp(next);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Logo Section */}
//       <Image
//         source={require("../assets/images/cropzylogo.png")}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       {/* Phone Number Section */}
//       <Text style={styles.label}>Phone Number</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Phone Number"
//           value={phone}
//           onChangeText={setPhone}
//           keyboardType="phone-pad"
//           style={styles.phoneInput}
//         />
//         {phone.length > 0 && <Ionicons name="checkmark-circle" size={220} color="green" />}
//       </View>

//       {/* Verify Button */}
//       <TouchableOpacity style={styles.verifyButton}>
//         <Text style={styles.verifyButtonText}>Verify OTP</Text>
//       </TouchableOpacity>

//       {/* OTP Input Section */}
//       <View style={styles.otpContainer}>
//         {otp.map((d, i) => (
//           <TextInput
//             key={i}
//             value={d}
//             maxLength={1}
//             onChangeText={(v) => handleOtpChange(v, i)}
//             keyboardType="numeric"
//             style={styles.otpInput}
//           />
//         ))}
//       </View>

//       {/* Next Section */}
//       <TouchableOpacity onPress={() => router.push("/identifyPlant")} style={styles.nextContainer}>
//         <Text style={styles.nextText}>Next</Text>
//         <View style={styles.underline} />
//       </TouchableOpacity>

//       {/* Bottom Image */}
//       <Image
//         source={require("../assets/images/farmer1.png")}
//         style={styles.bottomImage}
//         resizeMode="contain"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 5,
//     backgroundColor: "50C878",
//     alignItems: "left",
//     padding: 25,
//   },
//   logo: {
//     width: 125,
//     height: 55,
//     marginBottom: 110,
//   },
//   label: {
//     fontSize: 25,
//     fontWeight: "600",
//     marginBottom: 8,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     width: "100%",
//     maxWidth: 300,
//     alignItems: "center",
//   },
//   phoneInput: {
//     flex: 1,
//     height: 40,
//   },
//   verifyButton: {
//     marginTop: 16,
//     backgroundColor: "green",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   verifyButtonText: {
//     color: "white",
//     fontWeight: "600",
//   },
//   otpContainer: {
//     flexDirection: "row",
//     marginTop: 24,
//     justifyContent: "center",
//     gap: 10,
//   },
//   otpInput: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 8,
//     textAlign: "center",
//     fontSize: 20,
//   },
//   nextContainer: {
//     alignItems: "center",
//     marginTop: 30,
//   },
//   nextText: {
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   underline: {
//     width: 60,
//     height: 1,
//     backgroundColor: "gray",
//     marginTop: 4,
//   },
//   bottomImage: {
//     width: width * 0.999,
//     height: 320,
//     marginTop: 100,
//   },
// });

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
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Phone Number"
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
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
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
          onPress={() => router.push("/identifyPlant")}
          style={styles.nextContainer}
        >
          <Text style={styles.nextText}>Next</Text>
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
    width: width * 0.30, // bigger logo
    height: height * 0.15,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: width * 0.07,
    paddingTop: 90,
    paddingBottom: height * 0.4, // give space so content doesn't overlap farmer image
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
    height: height * 0.39, // taller so it covers all white space
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
