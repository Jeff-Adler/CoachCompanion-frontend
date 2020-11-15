import React from "react";
import { StyleSheet, View, Text } from "react-native";

class LoggerContainer extends React.Component {

    //input POST request to input new log

    // create_table "activities", force: :cascade do |t|
        // t.bigint "user_id", null: false
        // t.string "title"
        // t.integer "point_value"
        // t.string "category"
        // t.boolean "audible"
        // t.string "energy_type"
        // t.datetime "created_at", precision: 6, null: false
        // t.datetime "updated_at", precision: 6, null: false
        // t.index ["user_id"], name: "index_activities_on_user_id"
    // end


    render() {
        return (
            <View style={styles.container}>
                <Text>LoggerContainer</Text>
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

export default LoggerContainer