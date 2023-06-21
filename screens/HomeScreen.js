import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, View, FlatList, Alert } from "react-native";
import OrchidCard from "../components/card/OrchidCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color, data } from "../constant/common";

function HomeScreen() {
    const [favorites, setFavorites] = React.useState([]);
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
            await AsyncStorage.setItem("favorites", JSON.stringify(favorites.filter((favorite) => favorite.id !== item.id)));
        } catch (error) {
            console.log(error);
        }
    };

    const handleToggleFavorite = async (item) => {
        try {
            let newFavorites = [];
            if (favorites.find((favorite) => favorite.id === item.id)) {
                Alert.alert("Remove from favorites?", "Are you sure you want to remove this orchid from your favorites?", [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => handleRemoveFavorite(item) },
                ]);
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

    return (
        <View className="flex flex-col items-center justify-start h-full gap-2 p-2">
            <Text
                style={{
                    color: color.indigo[700],
                    fontSize: 32,
                }}
            >
                Orchids
            </Text>
            <View
                style={{
                    padding: 8,
                    flex: 1,
                    width: "100%",
                }}
            >
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <OrchidCard
                            item={item}
                            isFavorite={favorites.find((favorite) => favorite.id === item.id)}
                            handleToggleFavorite={handleToggleFavorite}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    className="w-full p-2 mt-2"
                />
            </View>
        </View>
    );
}

export default HomeScreen;
