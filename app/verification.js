// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const AuthScreen = () => {
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '']);

//   const handleOtpChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Image
//           source={require('../assets/images/cropzylogo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         {/* Placeholder menu icon */}
//         <View style={styles.menuIcon}>
//           <View style={styles.menuLine} />
//           <View style={styles.menuLine} />
//           <View style={styles.menuLine} />
//         </View>
//       </View>

//       {/* Scrollable form section */}
//       <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
//         <Text style={styles.label}>Phone Number</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number"
//           value={phone}
//           onChangeText={setPhone}
//           keyboardType="phone-pad"
//         />

//         <TouchableOpacity style={styles.verifyButton}>
//           <Text style={styles.verifyText}>Verify OTP</Text>
//         </TouchableOpacity>

//         <Text style={styles.label}>Verify OTP</Text>
//         <View style={styles.otpContainer}>
//           {otp.map((digit, index) => (
//             <TextInput
//               key={index}
//               style={styles.otpInput}
//               value={digit}
//               onChangeText={(value) => handleOtpChange(index, value)}
//               maxLength={1}
//               keyboardType="numeric"
//             />
//           ))}
//         </View>

//         <TouchableOpacity style={styles.nextButton}>
//           <Text style={styles.nextText}>Next →</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* Bottom Image */}
//       <Image
//         source={require('../assets/images/verifyimg.png')}
//         style={styles.illustration}
//         resizeMode="cover"
//       />
//     </View>
//   );
// };

// export default AuthScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#b7efc5',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   logo: {
//     width: 100,
//     height: 40,
//   },
//   menuIcon: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//   },
//   menuLine: {
//     width: 20,
//     height: 2,
//     backgroundColor: '#333',
//     marginVertical: 2,
//     borderRadius: 1,
//   },
//   form: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   label: {
//     fontWeight: 'bold',
//     marginVertical: 8,
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#aaa',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     height: 44,
//     fontSize: 16,
//   },
//   verifyButton: {
//     backgroundColor: '#a4e2ae',
//     borderRadius: 8,
//     paddingVertical: 10,
//     marginTop: 12,
//     alignItems: 'center',
//   },
//   verifyText: {
//     color: '#000',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   otpInput: {
//     width: width * 0.18,
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#aaa',
//     borderRadius: 8,
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   nextButton: {
//     marginTop: 24,
//     alignItems: 'center',
//   },
//   nextText: {
//     fontSize: 18,
//     fontWeight: '600',
//     borderBottomWidth: 1,
//     paddingBottom: 4,
//     borderColor: '#333',
//   },
//   illustration: {
//     width: width,
//     height: height * 0.3,
//   },
// });
