import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

function Category (props) {
  const {navigation, category, setCategory} = props

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory)
  }
    
  return (
      <View style={styles.container}>
          <CheckBox
          center
          title="Vocation"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={category === "vocation"}
          onPress={() => handleCategoryChange("vocation")}
          />
          <CheckBox
          center
          title="Health"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={category === "health"}
          onPress={() => handleCategoryChange("health")}
          />
          <CheckBox
          center
          title="Relationship"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={category === "relationship"}
          onPress={() => handleCategoryChange("relationship")}
          />
          <CheckBox
          center
          title="Social"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={category === "social"}
          onPress={() => handleCategoryChange("social")}
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