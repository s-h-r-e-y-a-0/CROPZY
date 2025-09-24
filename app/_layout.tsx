import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      initialRouteName="index"  
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="languageSelection" />
       <Stack.Screen name="englishVerification" />
        <Stack.Screen name="identifyPlant" />
       <Stack.Screen name="hindiVerification" />
        <Stack.Screen name="hindiidentifyPlant" />
    </Stack>
  );
}
