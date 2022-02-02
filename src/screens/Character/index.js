import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

function Home() {
  return (
    <TouchableOpacity
      style={{
        width: 100,
        height: 40,
        backgroundColor: 'red',
        marginTop: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{}}>Enter Amount</Text>
    </TouchableOpacity>
  );
}

export default Home;

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }
