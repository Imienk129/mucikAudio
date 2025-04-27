// app/song/[id].tsx

import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getTrackById } from "../../lib/api";

export default function SongDetail() {
  const { id } = useLocalSearchParams();
  const [track, setTrack] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getTrackById(id as string).then(setTrack);
    }
  }, [id]);

  if (!track) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#1DB954" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: track.artworkUrl100 }} style={styles.image} />
      <Text style={styles.title}>{track.trackName}</Text>
      <Text style={styles.artist}>{track.artistName}</Text>
      <Text style={styles.album}>Album: {track.collectionName}</Text>
      <Text style={styles.duration}>
        Durasi: {Math.floor(track.trackTimeMillis / 60000)}:
        {Math.floor((track.trackTimeMillis % 60000) / 1000)
          .toString()
          .padStart(2, "0")}{" "}
        menit
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  artist: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 4,
  },
  album: {
    fontSize: 16,
    color: "#999",
    marginBottom: 4,
  },
  duration: {
    fontSize: 16,
    color: "#999",
  },
});
