import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";


export default function App() {
  return <Loading />;
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
