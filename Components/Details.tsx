import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
const {width: Width} = Dimensions.get('window');

const Details = () => {
  return (
    <View style={styles.container}>
        <View style={styles.mainTitle}>
            <View style={styles.titleElement}>
            <Image source={require('../assets/Logo.png')} />
            <Text style={styles.titleText}>The Food Cafe</Text>
            </View>
            <Image source={require('../assets/favorite.png')} />
        </View>

       {/* Ratings and Delivery time */}
        <View style={styles.BoxContainer}>
            <View style={styles.Box}>
            <View style={styles.innerBox}>
                <Image source={require('../assets/Star.png')} />
                <Text style={styles.boxText}>Ratings: 4.5 ( 502 reviews )</Text>
            </View>
            <View style={styles.innerBox}>
                <Image source={require('../assets/Clock.png')} />
                <Text style={styles.boxText}>Delivers in 15-20 min</Text>
            </View>
            <View style={styles.innerBox}>
                <Image source={require('../assets/Delivery.png')} />
                <Text style={styles.boxText}>Free delivery</Text>
            </View>
            </View>
        </View>

         {/* Button */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                <Image source={require('../assets/call.png')} />
                <Text style={styles.boxText}>Call Now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                <Image source={require('../assets/compass.png')} />
                <Text style={styles.boxText}>Navigate</Text>
                </TouchableOpacity>
            </View>
       {/* Button */}    
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 5,
      backgroundColor: '#13131B',
      paddingBottom: 30
    },
    mainTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
      },
      titleElement: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      titleText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
      Box: {
        width: Width - 30,
        height: 123,
        backgroundColor: '#1C1C24',
        borderRadius: 10,
        padding: 15,
        gap: 15,
      },
      BoxContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20,
      },
      boxText: {
        fontSize: 16,
        color: '#FFFFFF',
      },
      innerBox: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        gap: 8,
        alignItems: 'center',
      },
      btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 5,
      },
      btn: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: 174,
        height: 54,
        backgroundColor: '#1c1c24',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
  });