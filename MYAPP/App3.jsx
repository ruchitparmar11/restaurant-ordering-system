import { useState } from "react";
import { Button, StyleSheet,Text,TextInput,View } from "react-native";

const App = () => {

  const [text, setText] = useState('');
  const [submittedText, setsubmittedText] = useState('')

  const handleSubmit = () => {
      setsubmittedText(text);
      setText('');
  }

  return (
    <View style={styles.container}>
    <Text style={styles.title}>App</Text>

    <TextInput
      placeholder="Enter a text here...."
      style={styles.input}
      value={text}
      onChangeText={setText}
    />
   <Button title="SUBMIT" onPress={handleSubmit}></Button>

   {submittedText ? (<Text>Result: {submittedText}</Text>) :null}
    </View>
  )
}
export default App 

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding:20,
    gap:10
  },
  title:{
    fontSize:20,
    fontWeight:"500"
  },
  input: {
    width:"100%",
    padding:5,
    paddingVertical:10,
    borderWidth:1,
    borderRadius:5
  }
})