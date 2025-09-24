import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

// Adjustable layout constants
const LOGO_WIDTH_PERCENT = 0.25;        // logo width as % of screen width
const LOGO_HEIGHT_PERCENT = 0.12;       // logo height as % of screen height
const TITLE_MARGIN_TOP = 20;             // space below navbar for title
const OPTIONS_MARGIN_TOP = 20;           // space below title for language options
const BOTTOM_IMAGE_HEIGHT_PERCENT = 0.28; // bottom image height as % of screen height

export default function LanguageSelection() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const bottomImageHeight = Math.round(height * BOTTOM_IMAGE_HEIGHT_PERCENT);
  const logoWidth = Math.round(width * LOGO_WIDTH_PERCENT);
  const logoHeight = Math.round(height * LOGO_HEIGHT_PERCENT);

  const handleNext = () => {
    if (selectedLanguage === "हिन्दी") {
      router.push("/hindiVerification");
    } else {
      router.push("/englishVerification");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Image
          source={require("../assets/images/cropzylogo.png")}
          style={{ width: logoWidth, height: logoHeight, resizeMode: "contain" }}
        />
      </View>

      {/* Title */}
      <Text style={[styles.title, { marginTop: TITLE_MARGIN_TOP }]}>
        Language Selection
      </Text>

      {/* Language Options */}
      <View style={[styles.content, { marginTop: OPTIONS_MARGIN_TOP, marginBottom: bottomImageHeight + 12 }]}>
        {/* English */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.optionRow}
          onPress={() => setSelectedLanguage("English")}
        >
          <View
            style={[
              styles.radioOuter,
              selectedLanguage === "English" && styles.radioOuterActive,
            ]}
          >
            {selectedLanguage === "English" && <View style={styles.radioInner} />}
          </View>

          <View
            style={[
              styles.langPill,
              selectedLanguage === "English" && styles.langPillActive,
            ]}
          >
            <Text
              style={[
                styles.langText,
                selectedLanguage === "English" && styles.langTextActive,
              ]}
            >
              English
            </Text>
          </View>
        </TouchableOpacity>

        {/* Hindi */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.optionRow}
          onPress={() => setSelectedLanguage("हिन्दी")}
        >
          <View
            style={[
              styles.radioOuter,
              selectedLanguage === "हिन्दी" && styles.radioOuterActive,
            ]}
          >
            {selectedLanguage === "हिन्दी" && <View style={styles.radioInner} />}
          </View>

          <View
            style={[
              styles.langPill,
              selectedLanguage === "हिन्दी" && styles.langPillActive,
            ]}
          >
            <Text
              style={[
                styles.langText,
                selectedLanguage === "हिन्दी" && styles.langTextActive,
              ]}
            >
              हिन्दी
            </Text>
          </View>
        </TouchableOpacity>

        {/* Next */}
        <TouchableOpacity style={styles.nextBox} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
          <View style={styles.nextUnderline} />
        </TouchableOpacity>
      </View>

      {/* Bottom Image */}
      <View style={[styles.bottomImageWrap, { height: bottomImageHeight }]}>
        <Image
          source={require("../assets/images/farmer1.png")}
          style={styles.bottomImage}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // Navbar
  navbar: {
    height: Platform.OS === "ios" ? 80 : 70,
    backgroundColor: "#50C878",
    justifyContent: "flex-start", // align logo to left
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },

  // Title
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    alignSelf: "center",
  },

  // Content area
  content: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 21,
    width: "100%",
  },

  // Option Row (radio + pill)
  optionRow: {
    width: "100%",
    maxWidth: 360,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  radioOuterActive: {
    borderColor: "#50C878",
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#50C878",
  },
  langPill: {
    marginLeft: 14,
    flex: 1,
    backgroundColor: "#EAF9EE",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  langPillActive: {
    backgroundColor: "#50C878",
  },
  langText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
  langTextActive: {
    color: "#fff",
  },

  // Next button
  nextBox: {
    marginTop: 28,
    alignItems: "center",
  },
  nextText: {
    fontSize: 20,
    fontWeight: "700",
  },
  nextUnderline: {
    width: 80,
    height: 2,
    backgroundColor: "#222",
    marginTop: 6,
  },

  // Bottom Image
 bottomImageContainer: {
  height: height * 0.50, // bottom half
  justifyContent: "flex-end",
  alignItems: "center",
  overflow: "hidden", // hide overflow to avoid visible edges
  width: "100%",
},
bottomImage: {
  width: "133%",   // extra width to cover side edges
  height: "120%",  // extra height to cover bottom edges
  resizeMode: "cover", // ensures it fills without distortion
  alignSelf: "center", // keeps the image centered
},

});
