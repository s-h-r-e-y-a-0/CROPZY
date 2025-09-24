import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ImageIcon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

const PlantIdentificationScreen = () => {
  const handleImagePick = () => {
    console.log("Image picker pressed");
  };

  const handleCamera = () => {
    console.log("Camera pressed");
  };

  const handleRefresh = () => {
    console.log("Refresh pressed");
  };

  const handleScanPlant = () => {
    console.log("Scan plant pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#50C878" barStyle="light-content" />

      {/* Top Green Bar with Left-Aligned Logo */}
      <View style={styles.topBar}>
        <Image
          source={require("../assets/images/cropzylogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Camera Frame */}
        <View style={styles.cameraFrame}>
          <View style={[styles.frameCorner, styles.topLeft]} />
          <View style={[styles.frameCorner, styles.topRight]} />

          {/* Plant Icon in Center */}
          <View style={styles.plantIconContainer}>
            <View style={styles.plantIcon}>
              <View style={styles.stem} />
              <View style={styles.leftLeaf} />
              <View style={styles.rightLeaf} />
            </View>
          </View>

          <View style={[styles.frameCorner, styles.bottomLeft]} />
          <View style={[styles.frameCorner, styles.bottomRight]} />
        </View>

        {/* Instructions Text */}
        <Text style={styles.instructionText}>
          पौधे को कैमरा के और{"\n"}फोटो खींचे के लिए टैप करे
        </Text>

        {/* Scan Button */}
        <TouchableOpacity style={styles.scanButton} onPress={handleScanPlant}>
          <Text style={styles.scanButtonText}>पौधे को स्कैन करें</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Action Buttons */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleImagePick}>
          <ImageIcon name="image-outline" size={width * 0.08} color="#50C878" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
          <View style={styles.cameraButtonInner}>
            <Icon name="camera-alt" size={width * 0.1} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleRefresh}>
          <Icon name="refresh" size={width * 0.08} color="#50C878" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.1,
  },
  cameraFrame: {
    width: width * 0.65,
    height: width * 0.65,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.05,
  },
  frameCorner: {
    position: "absolute",
    width: width * 0.1,
    height: width * 0.1,
    borderColor: "#50C878",
    borderWidth: 3,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  plantIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  plantIcon: {
    width: width * 0.25,
    height: width * 0.25,
    position: "relative",
  },
  stem: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    marginLeft: -2,
    width: 4,
    height: width * 0.1,
    backgroundColor: "#8B4513",
    borderRadius: 2,
  },
  leftLeaf: {
    position: "absolute",
    top: width * 0.04,
    left: width * 0.07,
    width: width * 0.08,
    height: width * 0.12,
    backgroundColor: "#50C878",
    borderRadius: 15,
    transform: [{ rotate: "-15deg" }],
  },
  rightLeaf: {
    position: "absolute",
    top: width * 0.02,
    right: width * 0.07,
    width: width * 0.1,
    height: width * 0.14,
    backgroundColor: "#50C878",
    borderRadius: 18,
    transform: [{ rotate: "20deg" }],
  },
  instructionText: {
    fontSize: width * 0.045,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: height * 0.04,
  },
  scanButton: {
    backgroundColor: "#50C878",
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.015,
    borderRadius: 25,
  },
  scanButtonText: {
    color: "white",
    fontSize: width * 0.045,
    fontWeight: "600",
  },
  bottomActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.15,
  },
  actionButton: {
    width: width * 0.12,
    height: width * 0.12,
    justifyContent: "center",
    alignItems: "center",
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
  cameraButtonInner: {
    width: width * 0.17,
    height: width * 0.17,
    borderRadius: width * 0.085,
    backgroundColor: "#50C878",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlantIdentificationScreen;
