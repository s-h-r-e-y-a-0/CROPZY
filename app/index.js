
// import { LinearGradient } from "expo-linear-gradient";
// import { useRouter } from "expo-router";
// import { useEffect } from "react";
// import { Dimensions, Image, ImageBackground, StyleSheet, View } from "react-native";

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
//       <ImageBackground
//         source={require("../assets/images/farmer.png")}
//         style={styles.imageBackground}
//         resizeMode="cover"
//       >
//         <LinearGradient
//           colors={["#ffffff", "transparent"]}
//           style={styles.gradientOverlay}
//         />

//         {/* Centered logo */}
//         <View style={styles.logoContainer}>
//           <Image
//             source={require("../assets/images/cropzylogo.png")}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },
//   imageBackground: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   gradientOverlay: {
//     position: "absolute",
//     top: 0,
//     width: "100%",
//     height: "15%", // covers 15% of screen height
//   },
//   logoContainer: {
//     position: "absolute",
//     top: height * 0.1, // 10% from top dynamically
//     left: 0,
//     right: 0,
//     alignItems: "center",
//   },
//   logo: {
//     width: width * 0.7, // 70% of screen width
//     height: height * 0.25, // 25% of screen height
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
      router.replace("/languageSelection"); // Navigate after 3s
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
          resizeMode="contain"
        />
        <LinearGradient
          colors={["transparent", "#ffffff"]}
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
    justifyContent: "space-between",
  },
  logoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width * 0.9, // adjustable width
    height: height * 0.9, // adjustable height
  },
  bottomImageContainer: {
    width: "100%",
    height: height * 0.50, // bottom 45% of screen
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomImage: {
    width: "110%",
    height: "110%",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 40, // fade effect at top of bottom image
  },
});
