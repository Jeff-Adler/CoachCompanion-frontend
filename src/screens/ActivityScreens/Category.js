import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

function Category (props) {
  const {navigation, category, setCategory} = props
    
  return (
      <View style={styles.container}>
          <CheckBox
          center
          title="Vocation"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={category === "vocation"}
          value="vocation"
          onPress={value => setCategory(value)}
          />
          <CheckBox
          center
          title="Health"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={category === "health"}
          value="health"
          onPress={value => setCategory(value)}
          />
          <CheckBox
          center
          title="Relationship"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={category === "relationship"}
          value="relationship"
          onPress={value => setCategory(value)}
          />
          <CheckBox
          center
          title="Social"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={category === "social"}
          value="social"
          onPress={value => setCategory(value)}
          />
          <Button
          style={styles.button}
          title="Next"
          onPress={() => navigation.navigate("Audible")}
          />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      // alignItems: "center",
    },
    button: {
      alignItems: "center",
      // backgroundColor: "#fff",
    },
  });

export default Category