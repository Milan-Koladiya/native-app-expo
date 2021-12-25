import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, ScrollView, Text } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState("test");
  const [textList, setTextList] = useState([]);

  const handleSubmit = () => {
    setInputText("");
    setTextList([...textList, inputText]);
  }

  console.log("textList => ", textList);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText}  placeholder="Please input text" value={inputText} onChangeText={setInputText}/>
        <Button onPress={handleSubmit} style={styles.submitButton} title="Submit"/>
      </View>
      <View>
        <ScrollView>
          {textList.map((text, index) => 
            <View style={styles.listView}>
              <Text key={index}>{text}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 100
  },
  submitButton: {
    marginTop: 10
  },
  inputText: {
    borderColor: "red",
    borderRadius: 1
  },
  listView: {
    padding: 10,
    width: 80,
    backgroundColor: 'red',
    borderColor: 'red'
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
