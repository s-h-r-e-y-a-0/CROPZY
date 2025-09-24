// import { LinearGradient } from "expo-linear-gradient";
// import { useRouter } from "expo-router";
// import { useEffect } from "react";
// import { Dimensions, Image, StyleSheet, View } from "react-native";

// const { width, height } = Dimensions.get("window");

// export default function LandingScreen() {
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.replace("/languageSelection"); // Navigate after 3s
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [router]);

//   return (
//     <View style={styles.container}>
//       {/* Logo Section */}
//       <View style={styles.logoContainer}>
//         <Image
//           source={require("../assets/images/cropzylogo.png")}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//       </View>

//       {/* Bottom Image Section */}
//       <View style={styles.bottomImageContainer}>
//         <Image
//           source={require("../assets/images/farmer.png")}
//           style={styles.bottomImage}
//           resizeMode="contain"
//         />
//         <LinearGradient
//           colors={["transparent", "#ffffff"]}
//           style={styles.gradientOverlay}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     justifyContent: "space-between",
//   },
//   logoContainer: {
//     flex: 3,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logo: {
//     width: width * 0.9, // adjustable width
//     height: height * 0.9, // adjustable height
//   },
//   bottomImageContainer: {
//     width: "100%",
//     height: height * 0.50, // bottom 45% of screen
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   bottomImage: {
//     width: "110%",
//     height: "110%",
//   },
//   gradientOverlay: {
//     position: "absolute",
//     top: 0,
//     width: "100%",
//     height: 40, // fade effect at top of bottom image
//   },
// });


import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function LandingScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/languageSelection");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/cropzylogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Image Section */}
      <View style={styles.bottomImageContainer}>
        <Image
          source={require("../assets/images/farmer.png")}
          style={styles.bottomImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(255, 255, 255, 0.8)", "#ffffff"]}
          style={styles.gradientOverlay}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.05,
  },
  logo: {
    width: Math.min(width * 0.8, height * 0.4), // Responsive with max constraints
    height: Math.min(width * 0.8, height * 0.4),
    maxWidth: 300, // Maximum size limit
    maxHeight: 300,
  },
  bottomImageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  bottomImage: {
    width: width,
    height: height * 0.6, // More conservative height
    position: "absolute",
    bottom: 0,
  },
  
});