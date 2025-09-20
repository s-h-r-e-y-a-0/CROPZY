// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";

// export default function LanguageSelection() {
//   const router = useRouter();
//   const [selectedLanguage, setSelectedLanguage] = useState("English");

//   const handleNext = () => {
//     // You can store the selected language in state or AsyncStorage if needed
//     router.push("/verification"); // Navigate to verification screen
//   };

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Image
//         source={require("../assets/images/cropzylogo.png")}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       {/* Title */}
//       <Text style={styles.title}>Language Selection</Text>

//       {/* Language Options */}
//       <View style={styles.languageContainer}>
//         <TouchableOpacity
//           style={[
//             styles.languageButton,
//             selectedLanguage === "English" && styles.selectedLanguage,
//           ]}
//           onPress={() => setSelectedLanguage("English")}
//         >
//           <View style={styles.radioOuter}>
//             {selectedLanguage === "English" && <View style={styles.radioInner} />}
//           </View>
//           <Text style={styles.languageText}>English</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[
//             styles.languageButton,
//             selectedLanguage === "हिन्दी" && styles.selectedLanguage,
//           ]}
//           onPress={() => setSelectedLanguage("हिन्दी")}
//         >
//           <View style={styles.radioOuter}>
//             {selectedLanguage === "हिन्दी" && <View style={styles.radioInner} />}
//           </View>
//           <Text style={styles.languageText}>हिन्दी</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Next Button */}
//       <TouchableOpacity onPress={handleNext} style={styles.nextContainer}>
//         <Text style={styles.nextText}>Next</Text>
//         <View style={styles.nextLine} />
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
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   logo: {
//     width: 150,
//     height: 60,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "600",
//     marginBottom: 40,
//   },
//   languageContainer: {
//     width: "80%",
//     gap: 20,
//     marginBottom: 50,
//   },
//   languageButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#E2F2E2",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   selectedLanguage: {
//     backgroundColor: "#4CAF50",
//   },
//   radioOuter: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#000",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   radioInner: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#000",
//   },
//   languageText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#000",
//   },
//   nextContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   nextText: {
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   nextLine: {
//     width: 60,
//     height: 1,
//     backgroundColor: "gray",
//     marginTop: 4,
//   },
//   bottomImage: {
//     width: 300,
//     height: 150,
//     marginTop: "auto",
//   },
// });

//##############################################################################
// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";

// export default function LanguageSelection() {
//   const router = useRouter();
//   const [selectedLanguage, setSelectedLanguage] = useState("English");

//   const handleNext = () => {
//     // Navigate to IdentifyPlant screen
//     router.push("/identifyPlant");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Image
//         source={require("../assets/images/cropzylogo.png")}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       {/* Title */}
//       <Text style={styles.title}>Language Selection</Text>

//       {/* Language Options */}
//       <View style={styles.languageContainer}>
//         <TouchableOpacity
//           style={[
//             styles.languageButton,
//             selectedLanguage === "English" && styles.selectedLanguage,
//           ]}
//           onPress={() => setSelectedLanguage("English")}
//         >
//           <View style={styles.radioOuter}>
//             {selectedLanguage === "English" && <View style={styles.radioInner} />}
//           </View>
//           <Text style={styles.languageText}>English</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[
//             styles.languageButton,
//             selectedLanguage === "हिन्दी" && styles.selectedLanguage,
//           ]}
//           onPress={() => setSelectedLanguage("हिन्दी")}
//         >
//           <View style={styles.radioOuter}>
//             {selectedLanguage === "हिन्दी" && <View style={styles.radioInner} />}
//           </View>
//           <Text style={styles.languageText}>हिन्दी</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Next Button → IdentifyPlant */}
//       <TouchableOpacity onPress={handleNext} style={styles.nextContainer}>
//         <Text style={styles.nextText}>Next</Text>
//         <View style={styles.nextLine} />
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
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   logo: { width: 150, height: 60, marginBottom: 30 },
//   title: { fontSize: 22, fontWeight: "600", marginBottom: 40 },
//   languageContainer: { width: "80%", gap: 20, marginBottom: 50 },
//   languageButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#E2F2E2",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   selectedLanguage: { backgroundColor: "#4CAF50" },
//   radioOuter: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#000",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   radioInner: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#000",
//   },
//   languageText: { fontSize: 16, fontWeight: "500", color: "#000" },
//   nextContainer: { alignItems: "center", marginBottom: 30 },
//   nextText: { fontSize: 18, fontWeight: "600" },
//   nextLine: { width: 60, height: 1, backgroundColor: "gray", marginTop: 4 },
//   bottomImage: { width: 300, height: 150, marginTop: "auto" },
// });


import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LanguageSelection() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleNext = () => {
    if (selectedLanguage === "हिन्दी") {
      router.push("/hindiVerification");
    } else {
      router.push("/englishVerification");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/cropzylogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Language Selection</Text>

      <View style={styles.langBox}>
        <TouchableOpacity
          style={[styles.langBtn, selectedLanguage === "English" && styles.selected]}
          onPress={() => setSelectedLanguage("English")}
        >
          <Text style={styles.langText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.langBtn, selectedLanguage === "हिन्दी" && styles.selected]}
          onPress={() => setSelectedLanguage("हिन्दी")}
        >
          <Text style={styles.langText}>हिन्दी</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleNext} style={styles.nextBox}>
        <Text style={styles.nextText}>Next</Text>
        <View style={styles.line} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 60, backgroundColor: "white" },
  logo: { width: 150, height: 60, marginBottom: 40 },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 40 },
  langBox: { width: "80%", gap: 20 },
  langBtn: {
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#E2F2E2",
    alignItems: "center",
  },
  selected: { backgroundColor: "#4CAF50" },
  langText: { fontSize: 16, fontWeight: "500" },
  nextBox: { alignItems: "center", marginTop: 50 },
  nextText: { fontSize: 18, fontWeight: "600" },
  line: { width: 60, height: 1, backgroundColor: "gray", marginTop: 4 },
});
