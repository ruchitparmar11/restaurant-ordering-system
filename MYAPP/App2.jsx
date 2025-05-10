import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const dummy = [
  {id:1,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:2,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:3,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:4,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:5,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:6,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:7,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:8,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:9,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:10,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:11,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
  {id:12,name:"Muskan",email:"muskan123@gmail.com",image :"https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200"},
]

const App = () => {
  return (
    <View style={styles.conatiner}>

      <FlatList
        data={dummy}
        renderItem={({item})=> (
          <View style={styles.Card}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 50 }}
            source={{ uri: "https://staticimg.amarujala.com/assets/images/2024/11/24/ind-vs-aus-2024-live-score-ind-vs-aus-live-score-ind-vs-aus-border-gavaskar-trophy-ind-vs-aus-1s_2aface8f40a86057e299370632fc26c9.jpeg?w=1200" }}>
              </Image>
          <Text>Naam</Text>
          <Text>Email</Text>
        </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style ={{width:10}}/>}
        // numraw={2}
        // columnWrapperStyle={{gap:10}}
        horizontal

      />
      
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  conatiner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#dadada",
    paddingHorizontal:20,
    paddingVertical: 10
  },

  Card: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems:"center",
    justifyContent:"center"
  }
})