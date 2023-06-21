import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "../../constant/common";

function OrchidCard({ item, isFavorite, handleToggleFavorite }) {
    const { imageUrl, name, description } = item;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Detail", { item });
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#fefefe",
                    marginBottom: 16,
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 12,
                    shadowColor: "#000",
                    gap: 16,
                }}
            >
                <Image
                    source={{ uri: imageUrl }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 12,
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: 8,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "700",
                            color: color.gray[900],
                        }}
                        numberOfLines={1}
                    >
                        {name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: color.gray[600],
                        }}
                        numberOfLines={3}
                    >
                        {description}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => handleToggleFavorite(item)}>
                    <View>
                        <Icon
                            type="font-awesome"
                            name={isFavorite ? "heart" : "heart-o"}
                            size={20}
                            color={isFavorite ? color.red[600] : color.gray[800]}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default OrchidCard;
