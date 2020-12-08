import React, {useState} from 'react';
import {View, Platform, Button, StyleSheet} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export const TimeSelection = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const {timeSelector} = props

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const pressHandler = () => {
    timeSelector(date);
    props.navigation.navigate("SubmitActivity");
  };

  return (
    <View style={styles.container}>
      <View>
        <Button onPress={showDatepicker} title="Choose Date" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Choose Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Button style={styles.button} title="Submit" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      alignItems: "center",
    },
  });
  