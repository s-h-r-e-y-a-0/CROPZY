// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Platform,
// } from "react-native";
// import { useRouter } from "expo-router";

// const { width, height } = Dimensions.get("window");

// // Adjustable layout constants
// const LOGO_WIDTH_PERCENT = 0.25;        // logo width as % of screen width
// const LOGO_HEIGHT_PERCENT = 0.12;       // logo height as % of screen height
// const TITLE_MARGIN_TOP = 20;             // space below navbar for title
// const OPTIONS_MARGIN_TOP = 20;           // space below title for language options
// const BOTTOM_IMAGE_HEIGHT_PERCENT = 0.28; // bottom image height as % of screen height

// export default function LanguageSelection() {
//   const router = useRouter();
//   const [selectedLanguage, setSelectedLanguage] = useState("English");

//   const bottomImageHeight = Math.round(height * BOTTOM_IMAGE_HEIGHT_PERCENT);
//   const logoWidth = Math.round(width * LOGO_WIDTH_PERCENT);
//   const logoHeight = Math.round(height * LOGO_HEIGHT_PERCENT);

//   const handleNext = () => {
//     if (selectedLanguage === "हिन्दी") {
//       router.push("/hindiVerification");
//     } else {
//       router.push("/englishVerification");
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safe}>
//       {/* Navbar */}
//       <View style={styles.navbar}>
//         <Image
//           source={require("../assets/images/cropzylogo.png")}
//           style={{ width: logoWidth, height: logoHeight, resizeMode: "contain" }}
//         />
//       </View>

//       {/* Title */}
//       <Text style={[styles.title, { marginTop: TITLE_MARGIN_TOP }]}>
//         Language Selection
//       </Text>

//       {/* Language Options */}
//       <View style={[styles.content, { marginTop: OPTIONS_MARGIN_TOP, marginBottom: bottomImageHeight + 12 }]}>
//         {/* English */}
//         <TouchableOpacity
//           activeOpacity={0.8}
//           style={styles.optionRow}
//           onPress={() => setSelectedLanguage("English")}
//         >
//           <View
//             style={[
//               styles.radioOuter,
//               selectedLanguage === "English" && styles.radioOuterActive,
//             ]}
//           >
//             {selectedLanguage === "English" && <View style={styles.radioInner} />}
//           </View>

//           <View
//             style={[
//               styles.langPill,
//               selectedLanguage === "English" && styles.langPillActive,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.langText,
//                 selectedLanguage === "English" && styles.langTextActive,
//               ]}
//             >
//               English
//             </Text>
//           </View>
//         </TouchableOpacity>

//         {/* Hindi */}
//         <TouchableOpacity
//           activeOpacity={0.8}
//           style={styles.optionRow}
//           onPress={() => setSelectedLanguage("हिन्दी")}
//         >
//           <View
//             style={[
//               styles.radioOuter,
//               selectedLanguage === "हिन्दी" && styles.radioOuterActive,
//             ]}
//           >
//             {selectedLanguage === "हिन्दी" && <View style={styles.radioInner} />}
//           </View>

//           <View
//             style={[
//               styles.langPill,
//               selectedLanguage === "हिन्दी" && styles.langPillActive,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.langText,
//                 selectedLanguage === "हिन्दी" && styles.langTextActive,
//               ]}
//             >
//               हिन्दी
//             </Text>
//           </View>
//         </TouchableOpacity>

//         {/* Next */}
//         <TouchableOpacity style={styles.nextBox} onPress={handleNext}>
//           <Text style={styles.nextText}>Next</Text>
//           <View style={styles.nextUnderline} />
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Image */}
//       <View style={[styles.bottomImageWrap, { height: bottomImageHeight }]}>
//         <Image
//           source={require("../assets/images/farmer1.png")}
//           style={styles.bottomImage}
//           resizeMode="cover"
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },

//   // Navbar
//   navbar: {
//     height: Platform.OS === "ios" ? 80 : 70,
//     backgroundColor: "#50C878",
//     justifyContent: "flex-start", // align logo to left
//     alignItems: "center",
//     flexDirection: "row",
//     paddingHorizontal: 16,
//     paddingTop: Platform.OS === "android" ? 20 : 0,
//   },

//   // Title
//   title: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#222",
//     alignSelf: "center",
//   },

//   // Content area
//   content: {
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingHorizontal: 21,
//     width: "100%",
//   },

//   // Option Row (radio + pill)
//   optionRow: {
//     width: "100%",
//     maxWidth: 360,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   radioOuter: {
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     borderWidth: 2,
//     borderColor: "#999",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   radioOuterActive: {
//     borderColor: "#50C878",
//   },
//   radioInner: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#50C878",
//   },
//   langPill: {
//     marginLeft: 14,
//     flex: 1,
//     backgroundColor: "#EAF9EE",
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   langPillActive: {
//     backgroundColor: "#50C878",
//   },
//   langText: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#222",
//   },
//   langTextActive: {
//     color: "#fff",
//   },

//   // Next button
//   nextBox: {
//     marginTop: 28,
//     alignItems: "center",
//   },
//   nextText: {
//     fontSize: 20,
//     fontWeight: "700",
//   },
//   nextUnderline: {
//     width: 80,
//     height: 2,
//     backgroundColor: "#222",
//     marginTop: 6,
//   },

//   // Bottom Image
//  bottomImageContainer: {
//   height: height * 0.50, // bottom half
//   justifyContent: "flex-end",
//   alignItems: "center",
//   overflow: "hidden", // hide overflow to avoid visible edges
//   width: "100%",
// },
// bottomImage: {
//   width: "135%",   // extra width to cover side edges
//   height: "90%",  // extra height to cover bottom edges
//   resizeMode: "cover", // ensures it fills without distortion
//   alignSelf: "center", // keeps the image centered
// },

// });




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

// Adjustable layout constants - easily customizable
const LAYOUT_CONFIG = {
  
logo: {
    widthPercent: 0.30,          // logo width as % of screen width
    heightPercent: 0.35,         // logo height as % of screen height
    alignToLeft: true,           // align logo to left side
    paddingLeftPercent: 0.09,    // padding from left edge
  },



  // Navbar settings
  navbar: {
    //heightIOS:,
    heightAndroid: 80,
    paddingTopAndroid: 20,
  },
  
  // Title settings
  title: {
    marginTopPercent: 0.14,      // margin top as % of screen height
    fontSize: 22,
    fontWeight: "700",
  },
  
  // Content spacing
  content: {
    marginTopPercent: 0.04,      // margin top as % of screen height
    paddingHorizontalPercent: 0.055, // horizontal padding as % of screen width
  },
  
  // Bottom image settings
  bottomImage: {
    heightPercent: 0.4,          // bottom image height as % of screen height
  }
};

export default function LanguageSelection() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Calculate responsive dimensions
  const logoWidth = Math.round(width * LAYOUT_CONFIG.logo.widthPercent);
  const logoHeight = Math.round(height * LAYOUT_CONFIG.logo.heightPercent);
  const logoMarginLeft = Math.round(width * LAYOUT_CONFIG.logo.marginLeftPercent);
  
  const titleMarginTop = Math.round(height * LAYOUT_CONFIG.title.marginTopPercent);
  const contentMarginTop = Math.round(height * LAYOUT_CONFIG.content.marginTopPercent);
  const contentPaddingHorizontal = Math.round(width * LAYOUT_CONFIG.content.paddingHorizontalPercent);
  
  const bottomImageHeight = Math.round(height * LAYOUT_CONFIG.bottomImage.heightPercent);

  const handleNext = () => {
    if (selectedLanguage === "हिन्दी") {
      router.push("/hindiVerification");
    } else {
      router.push("/englishVerification");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Navbar */}
        <View style={[
          styles.navbar,
          {
            height: Platform.OS === "ios" 
              ? LAYOUT_CONFIG.navbar.heightIOS 
              : LAYOUT_CONFIG.navbar.heightAndroid,
            paddingTop: Platform.OS === "android" 
              ? LAYOUT_CONFIG.navbar.paddingTopAndroid 
              : 0,
          }
        ]}>
          <Image
            source={require("../assets/images/cropzylogo.png")}
            style={{
              width: logoWidth,
              height: logoHeight,
              resizeMode: "contain",
              marginLeft: logoMarginLeft,
            }}
          />
        </View>

        {/* Content Area */}
        <View style={styles.contentArea}>
          {/* Title */}
          <Text style={[
            styles.title,
            {
              marginTop: titleMarginTop,
              fontSize: LAYOUT_CONFIG.title.fontSize,
              fontWeight: LAYOUT_CONFIG.title.fontWeight,
            }
          ]}>
            Language Selection
          </Text>

          {/* Language Options */}
          <View style={[
            styles.optionsContainer,
            {
              marginTop: contentMarginTop,
              paddingHorizontal: contentPaddingHorizontal,
            }
          ]}>
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

            {/* Next Button */}
            <TouchableOpacity style={styles.nextBox} onPress={handleNext}>
              <Text style={styles.nextText}>Next</Text>
              <View style={styles.nextUnderline} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Image - Fixed at bottom */}
        <View style={[
          styles.bottomImageContainer,
          { height: bottomImageHeight }
        ]}>
          <Image
            source={require("../assets/images/farmer1.png")}
            style={styles.bottomImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    flex: 1,
  },

  // Navbar
  navbar: {
    backgroundColor: "#50C878",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },

  // Content area that takes remaining space above bottom image
  contentArea: {
    flex: 1,
    alignItems: "center",
  },

  // Title
  title: {
    color: "#222",
    textAlign: "center",
  },

  // Options container
  optionsContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    flex: 1,
  },

  // Option Row (radio + pill)
  optionRow: {
    width: "100%",
    maxWidth: 360,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.015, // responsive margin
  },

  radioOuter: {
    width: Math.min(22, width * 0.055), // responsive radio size
    height: Math.min(22, width * 0.055),
    borderRadius: Math.min(11, width * 0.0275),
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
    width: Math.min(10, width * 0.025), // responsive inner radio size
    height: Math.min(10, width * 0.025),
    borderRadius: Math.min(5, width * 0.0125),
    backgroundColor: "#50C878",
  },

  langPill: {
    marginLeft: width * 0.035, // responsive margin
    flex: 1,
    backgroundColor: "#EAF9EE",
    paddingVertical: height * 0.018, // responsive padding
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  langPillActive: {
    backgroundColor: "#50C878",
  },

  langText: {
    fontSize: Math.min(18, width * 0.045), // responsive font size
    fontWeight: "600",
    color: "#222",
  },

  langTextActive: {
    color: "#fff",
  },

  // Next button
  nextBox: {
    marginTop: height * 0.04, // responsive margin
    alignItems: "center",
  },

  nextText: {
    fontSize: Math.min(20, width * 0.05), // responsive font size
    fontWeight: "700",
    color: "#222",
  },

  nextUnderline: {
    width: Math.min(80, width * 0.2), // responsive width
    height: 2,
    backgroundColor: "#222",
    marginTop: 6,
  },

  // Bottom Image Container - Fixed at bottom
  bottomImageContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
  },

  bottomImage: {
    width: "100%",
    height: "120%",
    resizeMode: "cover",
  },
});