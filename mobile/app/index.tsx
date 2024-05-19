import { useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => router.navigate("Details")}
      />
      <Button
        title="Scan QR Code"
        onPress={() => router.navigate("QRCodeScannerScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
