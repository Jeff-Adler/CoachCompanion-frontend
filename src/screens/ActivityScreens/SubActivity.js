import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

function SubActivity (props) {
  const {navigation,submitActivity} = props

    pressHandler = () => {
        submitActivity()
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>
            <Button title="Create activity!" onPress={pressHandler}/>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    //   alignItems: "center",
      justifyContent: "center",
    },
  });

export default SubActivity