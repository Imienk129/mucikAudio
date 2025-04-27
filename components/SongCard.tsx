import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function SongCard({
  track,
  onPress,
}: {
  track: any;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: track.artworkUrl100 }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {track.trackName}
        </Text>
        <Text style={styles.artist}>{track.artistName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // buat Android
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  artist: {
    color: "#bbb",
    fontSize: 14,
    marginTop: 4,
  },
});
