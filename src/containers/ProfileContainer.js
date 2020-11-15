import React from "react";
import { StyleSheet, View, Text } from "react-native";

class ProfileContainer extends React.Component {

    //input request to retrieve all posts from the week

    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileContainer</Text>
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
  
export default ProfileContainer