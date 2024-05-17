import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import SecureStorageService from '../services/store'; // Import du service de stockage sécurisé
import { useRouter } from "expo-router"; // Utilisez useRouter au lieu de router


// import {
//   Pusher,
//   PusherMember,
//   PusherChannel,
//   PusherEvent,
// } from '@pusher/pusher-websocket-react-native';
// const pusher = Pusher.getInstance();
// try {
//   await pusher.init({
//     apiKey: APP_KEY,
//     cluster: APP_CLUSTER,
//     // authEndpoint: '<YOUR ENDPOINT URI>',
//     onConnectionStateChange,
//     onError,
//     onEvent,
//     onSubscriptionSucceeded,
//     onSubscriptionError,
//     onDecryptionFailure,
//     onMemberAdded,
//     onMemberRemoved,
//     onSubscriptionCount,
//   });

//   await pusher.subscribe({ channelName });
//   await pusher.connect();
// } catch (e) {
//   console.log(`ERROR: ${e}`);
// }


const Loader = () => {
  const router = useRouter(); // Initialisez le router ici

  useEffect(() => {
    
    const checkToken = async () => {
      try {
        const token = await SecureStorageService.getValue('token'); // Utilisation du service pour récupérer le token
        console.log('token:', token);
        if (token) {
          router.navigate('/Principal'); // Redirection vers la page principale si le token existe
        } else {
          router.navigate('/login'); // Redirection vers la page de connexion si le token n'existe pas
        }
      } catch (error) {
        console.error('Error checking token:', error);
        router.navigate('/login'); // En cas d'erreur, redirection vers la page de connexion par défaut
      }
    };

    checkToken(); // Vérification du token
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
      <Text style={styles.text}>Vérification du token...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Loader;
