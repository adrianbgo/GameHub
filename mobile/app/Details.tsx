import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useRouteInfo } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Details: React.FC = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const route = useRouteInfo();
  const { scannedData } = route.params;
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (scannedData) {
      const ws = new WebSocket(scannedData as string);
      setWebsocket(ws);

      ws.onopen = () => {
        console.log("WebSocket connection opened");
      };

      ws.onmessage = (e) => {
        console.log("Message from server:", e.data);
      };

      ws.onerror = (e) => {
        console.error("WebSocket error:", e);
      };

      ws.onclose = (e) => {
        console.log("WebSocket connection closed");
      };

      return () => {
        ws.close();
      };
    }
  }, [scannedData]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Scanned Data: {scannedData}</Text>
      <Button title="Go Home" onPress={() => router.navigate("/")} />
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

export default Details;
