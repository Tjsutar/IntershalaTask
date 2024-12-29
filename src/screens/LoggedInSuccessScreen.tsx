// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../types';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { getLoggedInUser } from '../mockApi';

// type NavigationProps = StackNavigationProp<RootStackParamList, 'SignIn'>;

// const LoggedInSuccessScreen = () => {
//   const [loggedInUser, setLoggedInUserState] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true); // Added loading state
//   const navigation = useNavigation<NavigationProps>();

//   useEffect(() => {
//     const fetchLoggedInUser = async () => {
//       try {
//         const user = await getLoggedInUser(); // Fetch logged-in user from AsyncStorage
//         setLoggedInUserState(user); // Set logged-in user data in the state
//       } catch (error) {
//         console.error('Error fetching logged-in user:', error);
//         setLoggedInUserState(null); // If error, set null
//       } finally {
//         setLoading(false); // Stop loading once the user is fetched
//       }
//     };

//     fetchLoggedInUser();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text style={styles.loadingText}>Loading user data...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.successText}>Successfully Logged In!</Text>
//       {loggedInUser ? (
//         <Text style={styles.userText}>Logged In User: {loggedInUser}</Text>
//       ) : (
//         <Text style={styles.errorText}>Error fetching user data.</Text>
//       )}
//       <TouchableOpacity style={styles.buttonContainer}>
//         <Button
//           title="Go to Home"
//           onPress={() => {
//             navigation.navigate('SignIn');
//           }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   successText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'green',
//     marginBottom: 20,
//   },
//   userText: {
//     fontSize: 18,
//     marginBottom: 20,
//     color: 'black',
//   },
//   errorText: {
//     fontSize: 18,
//     marginBottom: 20,
//     color: 'red',
//   },
//   loadingText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'gray',
//   },
//   buttonContainer: {
//     marginTop: 20,
//     width: '60%',
//   },
// });

// export default LoggedInSuccessScreen;
