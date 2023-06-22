import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, View, FlatList, Alert } from "react-native";
import OrchidCard from "../components/card/OrchidCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { categories, color, data } from "../constant/common";
import { Button } from "react-native-elements";

function HomeScreen() {
  const [favorites, setFavorites] = React.useState([]);
  const [displayList, setDisplayList] = React.useState(data);
  const isFocused = useIsFocused();

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        setFavorites(JSON.parse(favorites));
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (isFocused) loadFavorites();
  }, [isFocused]);

  const handleRemoveFavorite = async (item) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== item.id));
    try {
      await AsyncStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((favorite) => favorite.id !== item.id))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleFavorite = async (item) => {
    try {
      let newFavorites = [];
      if (favorites.find((favorite) => favorite.id === item.id)) {
        Alert.alert(
          "Remove from favorites?",
          "Are you sure you want to remove this orchid from your favorites?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => handleRemoveFavorite(item) },
          ]
        );
        return;
        // newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      } else {
        newFavorites = [...favorites, item];
      }
      setFavorites(newFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisplayList = (id) => {
    if (!Boolean(id)) {
      setDisplayList(data);
      return;
    }

    const newListDisplay = data.filter((item) => item.categoryId === id);
    setDisplayList(newListDisplay);
  };

  return (
    <View
      style={{
        display: "flex",
        gap: 10,
        padding: 12,
      }}
    >
      <Text
        style={{
          color: color.indigo[700],
          fontSize: 32,
        }}
      >
        Orchids
      </Text>
      {/* <View
        style={{
          //   padding: 8,
          flexDirection: "column",
          display: "flex",
        }}
      > */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        {categories.map((item) => (
          <Button
            buttonStyle={{
              minWidth: 80,
            }}
            key={item.name}
            title={item.name}
            onPress={() => handleDisplayList(item.id)}
            type="solid"
          />
        ))}
      </View>
      <FlatList
        data={displayList}
        numColumns={1}
        renderItem={({ item }) => (
          <OrchidCard
            item={item}
            isFavorite={favorites.find((favorite) => favorite.id === item.id)}
            handleToggleFavorite={handleToggleFavorite}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* </View> */}
    </View>
  );
}

export default HomeScreen;
