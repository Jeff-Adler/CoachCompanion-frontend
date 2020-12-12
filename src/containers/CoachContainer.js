import React from "react";
import { StyleSheet, View, Text } from "react-native";


//Adjust placehodler to allow for sync
class CoachContainer extends React.Component {
    // state = {

    // }

    render() {
        // const {   } = this.state 
        return (
            <View style={styles.container}>
                <Text>(Placeholder)</Text>
            </View>
        )
    }
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