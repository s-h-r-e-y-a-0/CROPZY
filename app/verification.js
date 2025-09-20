// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export default function OTPVerification() {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   const handleOtpChange = (value, index) => {
//     if (value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "white" }}>
      
//       {/* Logo */}
//       <Image source={require("../assets/images/cropzylogo.png")} style={{ width: 100, height: 40, marginBottom: 20 }} />

//       {/* Phone Input */}
//       <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>Phone Number</Text>
//       <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, width: "100%", maxWidth: 300 }}>
//         <TextInput
//           placeholder="Phone Number"
//           value={phone}
//           onChangeText={setPhone}
//           style={{ flex: 1, height: 40 }}
//           keyboardType="phone-pad"
//         />
//         {phone.length > 0 && (
//           <Ionicons name="checkmark-circle" size={20} color="green" />
//         )}
//       </View>

//       {/* Verify OTP Button */}
//       <TouchableOpacity style={{ marginTop: 16, backgroundColor: "green", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 }}>
//         <Text style={{ color: "white", fontWeight: "600" }}>Verify OTP</Text>
//       </TouchableOpacity>

//       {/* OTP Boxes */}
//       <View style={{ flexDirection: "row", marginTop: 24, gap: 10 }}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             value={digit}
//             onChangeText={(val) => handleOtpChange(val, index)}
//             maxLength={1}
//             keyboardType="numeric"
//             style={{
//               width: 50,
//               height: 50,
//               borderWidth: 1,
//               borderRadius: 8,
//               textAlign: "center",
//               fontSize: 20,
//             }}
//           />
//         ))}
//       </View>

//       {/* Next Button */}
//       <Text style={{ marginTop: 30, fontSize: 18, fontWeight: "600" }}>Next</Text>
//       <View style={{ width: 60, height: 1, backgroundColor: "gray", marginTop: 4 }} />

//       {/* Farmer Illustration */}
//       <Image source={require("../assets/images/farmer1.png")} style={{ width: 200, height: 120, marginTop: 40, resizeMode: "contain" }} />
//     </View>
//   );
// }



// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// export default function OTPVerification() {
//   const router = useRouter();
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   const handleOtpChange = (value, index) => {
//     if (value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "white" }}>
//       <Image source={require("../assets/images/cropzylogo.png")} style={{ width: 100, height: 40, marginBottom: 20 }} />

//       <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>Phone Number</Text>
//       <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, width: "100%", maxWidth: 300 }}>
//         <TextInput
//           placeholder="Phone Number"
//           value={phone}
//           onChangeText={setPhone}
//           style={{ flex: 1, height: 40 }}
//           keyboardType="phone-pad"
//         />
//         {phone.length > 0 && <Ionicons name="checkmark-circle" size={20} color="green" />}
//       </View>

//       <TouchableOpacity
//         onPress={() => router.push("/languageSelection")} // Navigate to LanguageSelection
//         style={{ marginTop: 16, backgroundColor: "green", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 }}
//       >
//         <Text style={{ color: "white", fontWeight: "600" }}>Verify OTP</Text>
//       </TouchableOpacity>

//       <View style={{ flexDirection: "row", marginTop: 24, gap: 10 }}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             value={digit}
//             onChangeText={(val) => handleOtpChange(val, index)}
//             maxLength={1}
//             keyboardType="numeric"
//             style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 8, textAlign: "center", fontSize: 20 }}
//           />
//         ))}
//       </View>

//       <Text style={{ marginTop: 30, fontSize: 18, fontWeight: "600" }}>Next</Text>
//       <View style={{ width: 60, height: 1, backgroundColor: "gray", marginTop: 4 }} />

//       <Image source={require("../assets/images/farmer1.png")} style={{ width: 200, height: 120, marginTop: 40, resizeMode: "contain" }} />
//     </View>
//   );
// }


//####################################################//

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function OTPVerification() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value, index) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerifyOtp = () => {
    // TODO: add actual OTP verification logic here (API call / validation).
    // For now it only logs to console.
    console.log("Verify OTP pressed", { phone, otp });
  };

  const handleNext = () => {
    // Navigate to LanguageSelection when the "Next" control is tapped
    router.push("/languageSelection");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "white" }}>
      <Image source={require("../assets/images/cropzylogo.png")} style={{ width: 100, height: 40, marginBottom: 20 }} />

      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>Phone Number</Text>
      <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, width: "100%", maxWidth: 300 }}>
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          style={{ flex: 1, height: 40 }}
          keyboardType="phone-pad"
        />
        {phone.length > 0 && <Ionicons name="checkmark-circle" size={20} color="green" />}
      </View>

      {/* Verify OTP - no navigation here */}
      <TouchableOpacity
        onPress={handleVerifyOtp}
        style={{ marginTop: 16, backgroundColor: "green", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Verify OTP</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 24, gap: 10 }}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(val) => handleOtpChange(val, index)}
            maxLength={1}
            keyboardType="numeric"
            style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 8, textAlign: "center", fontSize: 20 }}
          />
        ))}
      </View>

      {/* NEXT - now navigates to languageSelection */}
      <TouchableOpacity onPress={handleNext} style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Next</Text>
        <View style={{ width: 60, height: 1, backgroundColor: "gray", marginTop: 4 }} />
      </TouchableOpacity>

      <Image source={require("../assets/images/farmer1.png")} style={{ width: 200, height: 120, marginTop: 40, resizeMode: "contain" }} />
    </View>
  );
}