import { StyleSheet, Text, View } from "react-native";

export function Header() {
    return(
        <View style={styles.title}>
        <Text style={styles.titleLogo}>My Drinks
          </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: "#fff5f5",
        height: 60,
        display: "flex",
        justifyContent: "flex-end",
        paddingLeft: 17,
        paddingBottom: 4,
        fontSize: 24,
        width: "100%"
      },
      titleLogo: {
        fontSize:24,
      },

})