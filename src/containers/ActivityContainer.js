import React, {useState, useReducer} from "react";
import { StyleSheet, View } from "react-native";
import ActivityStackNavigator from "../navigation/ActivityStackNavigator";

function ActivityContainer (props) {
  const [currentUser,getToken] = props

  const [title,setTitle] = useState(null)
  const [pointValue,setPointValue] = useState(null)
  const [category,setCategory] = useState(null)
  const [audible,setAudible] = useState(false)
  const [energyType,setEnergyType] = useState(null)
  
  //Submits new activity to be associated to current user
  submitActivity = async () => {
      const token = await getToken();

      const activity = {
        title : title,
        point_value : pointValue,
        category : category,
        audible : audible,
        energy_type : energyType
      }

      const configObj = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            accepts: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({ activity: activity }), 
        };

      fetch(
      `http://localhost:3000/api/v1/users/${currentUser.id}/submit_activity`,
      configObj
      ).then((response) => response.json());
    }

    return (
        <View style={styles.container}>
            <ActivityStackNavigator 
                submitActivity={submitActivity}
                title={title}
                pointValue={pointValue}
                category={category}
                audible={audible}
                energyType={energyType}
                setTitle={setTitle}
                setPointValue={setPointValue}
                setCategory={setCategory}
                setAudible={setAudible}
                setEnergyType={setEnergyType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
    },
  });

export default ActivityContainer