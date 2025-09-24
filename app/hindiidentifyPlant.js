import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const PlantIdentificationScreen = () => {
  const handleImagePick = () => {
    // Handle image picker functionality
    console.log('Image picker pressed');
  };

  const handleCamera = () => {
    // Handle camera functionality
    console.log('Camera pressed');
  };

  const handleRefresh = () => {
    // Handle refresh functionality
    console.log('Refresh pressed');
  };

  const handleScanPlant = () => {
    // Handle plant scanning functionality
    console.log('Scan plant pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#50C878" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/cropzylogo.png')} 
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
          पौधे को कैमरा के और{'\n'}फोटो खींचे के लिए टैप करे
        </Text>

        {/* Scan Button */}
        <TouchableOpacity style={styles.scanButton} onPress={handleScanPlant}>
          <Text style={styles.scanButtonText}>पौधे को स्कैन करें</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Action Buttons */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleImagePick}>
          <ImageIcon name="image-outline" size={30} color="#50C878" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
          <View style={styles.cameraButtonInner}>
            <Icon name="camera-alt" size={35} color="white" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleRefresh}>
          <Icon name="refresh" size={30} color="#50C878" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#50C878',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 40,
    width: 120,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  cameraFrame: {
    width: 250,
    height: 250,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  frameCorner: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderColor: '#50C878',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantIcon: {
    width: 80,
    height: 80,
    position: 'relative',
  },
  stem: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    marginLeft: -2,
    width: 4,
    height: 30,
    backgroundColor: '#8B4513',
    borderRadius: 2,
  },
  leftLeaf: {
    position: 'absolute',
    top: 10,
    left: 15,
    width: 25,
    height: 35,
    backgroundColor: '#50C878',
    borderRadius: 15,
    transform: [{ rotate: '-15deg' }],
  },
  rightLeaf: {
    position: 'absolute',
    top: 5,
    right: 15,
    width: 30,
    height: 40,
    backgroundColor: '#50C878',
    borderRadius: 18,
    transform: [{ rotate: '20deg' }],
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  scanButton: {
    backgroundColor: '#50C878',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  scanButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 60,
  },
  actionButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#50C878',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cameraButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#50C878',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlantIdentificationScreen;