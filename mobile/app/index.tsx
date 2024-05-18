import { Link, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Link href="/details" asChild>
        <Pressable>
          <Text>Go to Details Page</Text>
        </Pressable>
      </Link>
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

export default HomeScreen;
