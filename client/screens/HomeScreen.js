import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { AntDesign, Entypo, Ionicons} from "@expo/vector-icons";
import Swiper from 'react-native-deck-swiper';


const fake_data = [
  {
    companyName: "McDonalds",
    worth: "$215 Billion",
    photoURL: "https://image.cnbcfm.com/api/v1/image/107180422-1674061950534-gettyimages-1285446341-dsc_2675_20201113110927535.jpeg?v=1680474077&w=1920&h=1080",
    id: 123
  },

  {
    companyName: "BurgerKing",
    worth: "$5 Billion",
    photoURL: "https://cdn.vox-cdn.com/thumbor/-IGirKOhzc8K4Gb4_xVpk3wM-kA=/0x0:1024x546/1200x800/filters:focal(431x192:593x354)/cdn.vox-cdn.com/uploads/chorus_image/image/54743759/13915326878_49bd04626f_b.0.0.0.jpg",
    id: 456
  },

  {
    companyName: "Taco Bell",
    worth: "$2 Billion",
    photoURL: "https://www.allrecipes.com/thmb/95Bm-8ifb1f7ZL4FVLg5OX_C6P4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taco-bell-storefront-purple-boarder-3x2-1-ac2942ad32b94c9b94afd5b1895e9496.png",
    id: 789
  },

]


const HomeScreen = ({navigation}) => {

  const swipeRef = useRef(null);

  // const swipeLeft = async () => {
  //   swipeLeft(cardIndex)
  // }

  // const swipeRight = async () => {
  //   swipeRight(cardIndex)
  // }



  return ( 
    <SafeAreaView style={styles.big_con}> 

        <View style={styles.small_con}>
    
          <TouchableOpacity onPress={() => navigation.navigate('Modal')} style={styles.profile_btn} >
            <Image style={styles.profile_pic} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKWsrQjrLklNeCqRe4FXVCTLKzyQaXWqwWUDyFvq8e1YXaPFu-thyqOzkiwXLshME9H0&usqp=CAU"}}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LoginInvestor')}>
              <Image style={styles.logo} source={require("../Logo.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.chat_btn} >
              <Ionicons name='chatbubbles-sharp' size={40} color={"#0B6DB7"}/>
          </TouchableOpacity>
        </View>

        <View style={styles.swiper}>
          <Swiper 
            ref={swipeRef}
            containerStyle={{backgroundColor: "transparent"}}
            cards={fake_data}
            stackSize={5}
            cardIndex={0}
            verticalSwipe={false}
            onSwipedLeft={() => {
              console.log("Swipe PASS")
            }}
            onSwipedRight={() => {
              console.log("Swipe MATCH")
            }}
            overlayLabels={{
              left: {
                title: "Pass",
                style: {
                  label: {
                    textAlign: "right",
                    color: "red",
                  },
                },
              },
              right: {
                title: "Match",
                style: {
                  label: {
                    color: "#4DED30",
                  },
                },
              },
            }}

            renderCard={(card) => card ? (
              <View style={styles.card}>
                <Image
                style={styles.card_img}
                source={{uri: card.photoURL}}/>

                <View style={styles.card_info}>
                    <Text style={styles.card_text}>{card.companyName}</Text>
                    <Text style={styles.card_text}>{card.worth}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.no_card}>
                <Text style={styles.card_text}>No  More Companies</Text>
                <Text style={styles.emoji}>😢</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.btn_con}>
          <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()} style={styles.x}>
              <Entypo name="cross" size={24}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => swipeRef.current.swipeRight()} style={styles.heart}>
              <AntDesign name="heart" size={24}/>
          </TouchableOpacity>

        </View>

    </SafeAreaView>
  )
}

export default HomeScreen



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  big_con: {
    flex: 1
  },

  small_con: {
    position: 'relative',
    alignItems: 'center',
  },

  profile_btn: {
    position: 'absolute',
    left: 5,
    top: 3
  },

  profile_pic: {
    width: 60,
    height: 48,
    borderRadius: 100
  },

  logo: {
    width: 60,
    height: 48,
    borderRadius: 100
  },

  chat_btn: {
    position: 'absolute',
    right: 10,
    top: 3
  },

  swiper: {
    flex: 1,
    marginTop: -6
  },

  card: {
    position: 'relative',
    backgroundColor: "#0B6DB7",
    height: "75%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.2,
    shadowRadius: 1.41,
    elevation: 2
  },

  card_img: {
    position: 'absolute',
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10
  },

  card_info: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: "#0B6DB7",
    width: "100%",
    height: "10%",
    borderRadius: 5,
    alignItems: 'between',
    justifyContent: 'between',
  },

  card_text: {
    fontSize: 24,
    fontWeight: "bold"
  },

  btn_con: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  x: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: "#FE5454",
    bottom: 30
    
  },

  heart: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: "#8FFB9E",
    bottom: 30
  },

  no_card: {
    position: 'relative',
    backgroundColor: "#0B6DB7",
    height: "75%",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.2,
    shadowRadius: 1.41,
    elevation: 2
  },

  emoji: {
    fontSize: 50,
  }

});

  