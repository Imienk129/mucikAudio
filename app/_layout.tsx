import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#1DB954",
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      {/* Home sebagai “/” */}
      <Tabs.Screen
        name="index"
        options={{
          title: "PlayList",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Search sebagai “/search” */}
      <Tabs.Screen
        name="search/index"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />

      {/* Detail Lagu, HIDDEN dari TabBar */}
      <Tabs.Screen
        name="song/[id]"
        options={{
          title: "Detail Lagu",
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
