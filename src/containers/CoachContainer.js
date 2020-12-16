import React from "react";
import { StyleSheet, View, Text } from "react-native";


//Adjust placeholder to allow for sync
function CoachContainer () {
    return (
        <View style={styles.container}>
            <Text>(Placeholder)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default CoachContainer