import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e"

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  
  getWeather = async (latitude, longitude) => {
    const { data: {main: { temp }, weather} } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(temp, weather[0].main);
    this.setState({isLoading:false, temp:temp, condition: weather[0].main});
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
      // console.log(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");      
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
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
