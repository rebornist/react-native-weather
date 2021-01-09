import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';


export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
      // console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");      
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return <Loading />;
  }
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.yellowView}>
//         <Text>Hello!</Text>
//       </View>
//       <View style={styles.blueView}>
//         <Text>Hello!</Text>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   yellowView: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   blueView: {
//     flex: 1,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
