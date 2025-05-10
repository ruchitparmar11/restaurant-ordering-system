import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const App = () => {
  const theme = useColorScheme()
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? "black" : "white";
  const textColor = isDarkMode ? "white" : "black";

 
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.text,{color: textColor}]}>hello world</Text>
      <Image
        style={{width:200,height:300}}
        source={{ uri: "https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200" }} >
          </Image>
          {/* <TouchableOpacity style={{padding:10,backgroundColor:"grey"}} onPress={() => Alert.alert("Pressed!!")}>
            <Text>Button</Text>
          </TouchableOpacity> */}
          <Pressable style={styles.button}>
            <Text style={styles.btnText}>Press Me</Text>
          </Pressable>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    width:"100%",
      height:"100%",
      backgroundColor:"#123456",
      padding:20,
      gap:10,
      flex:1

  },
  text:{
    color:"white",
    fontSize:25,
    fontWeight:"bold"
    
  },
  button:{
    width:100,
    padding:10,
  //  paddingVertical:5,
  //  paddingHorizontal:10,
    backgroundColor:"yellow",
    justifyContent:"center",
    alignContent:"center",
    borderRadius:50,
    marginTop:10,
    borderWidth:5,
    borderColor:"white"

  },
  btnText:{
    color:"black",
    fontWeight:"500",
    fontSize:16
  }
})