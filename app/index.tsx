import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { searchTracks } from "../lib/api";
import SongCard from "../components/SongCard";
import { useRouter } from "expo-router";
import { Feather } from "node_modules/@expo/vector-icons/build/Icons";

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const router = useRouter();
  useEffect(() => {
    searchTracks("taylor swift").then(setTracks);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>Musik Terbaru</Text>
        <Feather name="music" size={25} color={"rgb(255, 243, 243)"} />
      </View>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.trackId.toString()}
        renderItem={({ item }) => (
          <SongCard
            track={item}
            onPress={() => router.push(`/song/${item.trackId}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#121212" },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    paddingRight: 10,
  },
});
