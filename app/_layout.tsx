// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }


//################################################################//
// import { Stack } from "expo-router";

// export default function Layout() {
//   return (
//     <Stack
//       initialRouteName="index"   // This forces the landing screen to be index.js
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name="index" />
//       <Stack.Screen name="verification" />
//       <Stack.Screen name="languageSelection" />
//     </Stack>
//   );
// }



import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      initialRouteName="index"    // Landing screen remains index.js
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="languageSelection" />
       <Stack.Screen name="englishVerification" />
      <Stack.Screen name="hindiVerification" />
      {/* <Stack.Screen name="verification" /> */}
      <Stack.Screen name="identifyPlant" />
    </Stack>
  );
}
