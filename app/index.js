// import React from 'react';
// import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width, height } = Dimensions.get('window');

// const LandingScreen = () => {
//   return (
//     <LinearGradient
//       colors={['#d1f4e0', '#ffffff']} 
//       style={styles.container}
//     >
//       {/* Logo + Tagline */}
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../assets/images/cropzylogo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
        
//       </View>

//       {/* Bottom Illustration */}
//       <Image
//         source={require('../assets/images/farmer.jpg')}
//         style={styles.bottomImage}
//         resizeMode="cover"
//       />
//     </LinearGradient>
//   );
// };

// export default LandingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     marginTop: height * 0.15,
//     alignItems: 'center',
//   },
//   logo: {
//     width:250,
//     height:250,
//   },
//   tagline: {
//     fontSize: 18,
//     color: '#444',
//     fontWeight: '600',
//     marginTop: 12,
//   },
//   bottomImage: {
//     width: width,
//     height: height * 0.45,
//   },
// });


// import React from 'react';
// import { View, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width, height } = Dimensions.get('window');

// const LandingScreen = () => {
//   return (
//     <View style={styles.container}>
//       {/* Bottom farmer image */}
//       <ImageBackground
//         source={require('../assets/images/farmer.jpg')}
//         style={styles.imageBackground}
//         resizeMode="cover"
//       >
//         {/* Top gradient to blend white into image */}
//         <LinearGradient
//           colors={['#ffffff', 'transparent']}
//           style={styles.gradientOverlay}
//         />

//         {/* Logo in middle */}
//         <View style={styles.logoContainer}>
//           <Image
//             source={require('../assets/images/cropzylogo.png')}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// export default LandingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff', // fallback color
//   },
//   imageBackground: {
//     flex: 1,
//     width: width,
//     height: height,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gradientOverlay: {
//     position: 'absolute',
//     top: 0,
//     width: width,
//     height: height * 0.1, // adjust how much white blends into the image
//   },
//   logoContainer: {
//     position: 'absolute',
//     top: 0.10, // fixed pixels from top (works better than tiny percentages)
//     left: 0,
//     right: 0,
//     alignItems: 'center', // center horizontally
//   },

//   logo: {
//     width: 350,
//     height:250,
//   },
// });










///////////////////////////////////////////////////////////////////

import React, { useEffect } from "react";
import { View, Image, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function LandingScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/verification"); // Navigate to verification after 3s
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/farmer.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient colors={["#ffffff", "transparent"]} style={styles.gradientOverlay} />
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/cropzylogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  imageBackground: { flex: 1, width, height, justifyContent: "center", alignItems: "center" },
  gradientOverlay: { position: "absolute", top: 0, width, height: height * 0.1 },
  logoContainer: { position: "absolute", top: 50, left: 0, right: 0, alignItems: "center" },
  logo: { width: 350, height: 250 },
});



