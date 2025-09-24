import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function IdentifyPlant() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#50C878" barStyle="light-content" />

      {/* Top Green Bar with Logo */}
      <View style={styles.topBar}>
        <Image
          source={require("../assets/images/cropzylogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Scanner Section */}
      <View style={styles.scanner}>
        <Ionicons
          name="scan-outline"
          size={width * 0.55}
          color="#50C878"
        />
      </View>

      {/* Instruction */}
      <Text style={styles.instruction}>Align plant and tap to scan</Text>

      {/* Identify Button */}
      <TouchableOpacity style={styles.identifyBtn}>
        <Text style={styles.identifyText}>Identify Plant</Text>
      </TouchableOpacity>

      {/* Bottom Toolbar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <MaterialIcons
            name="photo-library"
            size={width * 0.08}
            color="#50C878"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons
            name="camera-outline"
            size={width * 0.1}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name="refresh"
            size={width * 0.08}
            color="#50C878"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    backgroundColor: "#50C878",
    justifyContent: "center",
    paddingLeft: width * 0.03,
  },
  logo: {
    width: width * 0.3,
    height: height * 0.12,
  },
  scanner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.03,
  },
  instruction: {
    fontSize: width * 0.045,
    textAlign: "center",
    color: "#333",
    marginBottom: height * 0.02,
  },
  identifyBtn: {
    backgroundColor: "#50C878",
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.2,
    borderRadius: 25,
    alignSelf: "center",
    marginBottom: height * 0.03,
  },
  identifyText: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "600",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.15,
  },
  cameraButton: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    backgroundColor: "#50C878",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
