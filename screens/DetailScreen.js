import React from "react";
import { Alert, Image, Text, View } from "react-native";
import { color } from "../constant/common";
import { Button, Icon } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function DetailScreen({ route }) {
    const { item } = route.params;
    const { imageUrl, name, id, description } = item;

    const [favorites, setFavorites] = React.useState([]);
    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) loadFavorites();
    }, [isFocused]);

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

    return (
        <View
            style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                padding: 16,
                gap: 12,
                position: "relative",
            }}
        >
            <Image
                style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 12,
                }}
                source={{
                    uri: imageUrl,
                }}
            />
            <Text
                style={{
                    fontSize: 32,
                    fontWeight: "600",
                    color: color.gray[900],
                }}
            >
                {name}
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: color.gray[700],
                }}
            >
                {description}
            </Text>

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
                        backgroundColor: color.gray[100],
                        borderColor: favorites.find((favorite) => favorite.id === id) ? color.red[600] : color.gray[700],
                        borderWidth: 1,
                        borderRadius: 8,
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => handleToggleFavorite(item)}
                    icon={
                        <Icon
                            name="heart"
                            type="font-awesome"
                            color={favorites.find((favorite) => favorite.id === id) ? color.red[600] : color.gray[700]}
                            size={24}
                        />
                    }
                />
            </View>
        </View>
    );
}

export default DetailScreen;
