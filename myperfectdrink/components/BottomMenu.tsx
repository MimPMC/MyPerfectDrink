import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";

export function BottomMenu() {
  return (
    <View style={styles.barWrapper}>
      <View style={styles.bar}>
        <Icon name="home" size={25} color="#04331d" />
        <Icon name="coffee" size={25} color="#04331d" />
        <Icon name="comments" size={25} color="#04331d" />
        <Icon name="shopping-cart" size={25} color="#04331d" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barWrapper: {
    backgroundColor: "#fff5f5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // This is only for Android
  },
  bar: {
    height: 55,
    width: "100%",
    backgroundColor: "#fff5f5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
