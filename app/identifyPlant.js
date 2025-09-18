import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function IdentifyPlant() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top bar with logo */}
      <View style={styles.topBar}>
        <Image
          source={require("../assets/images/cropzylogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Scanner graphic */}
      <View style={styles.scanner}>
        <Ionicons name="scan-outline" size={200} color="#22c55e" />
      </View>

      {/* Instruction text */}
      <Text style={styles.instruction}>
        Align plant and tap to scan
      </Text>

      {/* Identify button */}
      <TouchableOpacity style={styles.identifyBtn}>
        <Text style={styles.identifyText}>Identify plant</Text>
      </TouchableOpacity>

      {/* Bottom toolbar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <MaterialIcons name="photo-library" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 50 }}>
          <Ionicons name="camera-outline" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="refresh" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  topBar: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: 90,
    height: 40,
  },
  scanner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  instruction: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  identifyBtn: {
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 8,
    marginBottom: 30,
  },
  identifyText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
