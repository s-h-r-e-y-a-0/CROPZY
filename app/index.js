import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const LandingScreen = () => {
  return (
    <LinearGradient
      colors={['#d1f4e0', '#ffffff']} 
      style={styles.container}
    >
      {/* Logo + Tagline */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/cropzylogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        
      </View>

      {/* Bottom Illustration */}
      <Image
        source={require('../assets/images/farmer.jpg')}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </LinearGradient>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: height * 0.15,
    alignItems: 'center',
  },
  logo: {
    width:250,
    height:250,
  },
  tagline: {
    fontSize: 18,
    color: '#444',
    fontWeight: '600',
    marginTop: 12,
  },
  bottomImage: {
    width: width,
    height: height * 0.45,
  },
});


