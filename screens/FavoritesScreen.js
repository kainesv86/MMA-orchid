import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { color } from "../constant/common";
import OrchidCard from "../components/card/OrchidCard";
import { Button, Icon } from "react-native-elements";

function FavoritesScreen() {
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
            } else {
                newFavorites = [...favorites, item];
            }
            setFavorites(newFavorites);
            await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemoveAllFavorites = async () => {
        setFavorites([]);
        try {
            await AsyncStorage.setItem("favorites", JSON.stringify([]));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View
            className="flex flex-col items-center justify-start h-full gap-2 p-2"
            style={{
                position: "relative",
            }}
        >
            <Text
                style={{
                    color: color.indigo[700],
                    fontSize: 32,
                }}
            >
                Orchids Favorites
            </Text>
            <View
                style={{
                    padding: 8,
                    flex: 1,
                    width: "100%",
                }}
            >
                {favorites.length > 0 ? (
                    <FlatList
                        data={favorites}
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
                ) : (
                    <Text
                        style={{
                            color: color.gray[800],
                            fontSize: 14,
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        You have no favorites yet.
                    </Text>
                )}
            </View>
            {favorites.length > 0 && (
                <View
                    style={{
                        position: "absolute",
                        bottom: 16,
                        right: 16,
                    }}
                >
                    <Button
                        type="outline"
                        buttonStyle={{
                            height: 48,
                            width: 48,
                            backgroundColor: color.gray[100],
                            borderColor: color.red[600],
                            borderWidth: 1,
                            borderRadius: 12,
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() =>
                            Alert.alert("Remove all favorites?", "Are you sure you want to remove all orchids from your favorites?", [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel",
                                },
                                { text: "OK", onPress: () => handleRemoveAllFavorites() },
                            ])
                        }
                        icon={<Icon name="dangerous" type="material" color={color.red[600]} size={28} />}
                    />
                </View>
            )}
        </View>
    );
}

export default FavoritesScreen;
