import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import CustomMarkerView  from '../../components/CustomMarkerView';
export default function Principal() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
        // console.log(location)
        
      }

    
    const [markers, setMarkers] = useState([
        {
            title: 'Hello San Francisco',
            coordinates: {
                latitude: 37.78825,
                longitude: -122.4324,
            },
        },
        {
            title: 'Hello Seattle',
            coordinates: {
                latitude: 47.6062,
                longitude: -122.3321,
            },
        },
    ]);


    useEffect(() => {
        if (location) {
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
        setMarkers([
            {
                title: 'Cheikh Ndiaye',
                coordinates: {
                    latitude: location?.coords.latitude+0.031 || 37.78825,
                    longitude: location?.coords.longitude+0.021 || -122.4324,
                },
            },
            {
                title: 'Saliou Niane',
                coordinates: {
                    latitude: location?.coords.latitude+0.01 || 37.78825,
                    longitude: location?.coords.longitude+0.01 || -122.4324,
                },
            },
        ]);
    }, [location]);






    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={region}
                region={region}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinates}
                        title={marker.title}
                    >
                        <CustomMarkerView />
                    </Marker>
                ))}

                <Marker
                    coordinate={{
                        latitude: location?.coords.latitude || 37.78825,
                        longitude: location?.coords.longitude || -122.4324,
                    }}

                    title="Ta Position"
                    description="I am here"
                >
                </Marker>

            </MapView>
            <View style = {styles.footerMap}>
                

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '85%',
    },

    footerMap : {
        width : '95%',
        height : '20%',
        backgroundColor : 'white',
        // il me faut un shadow
        boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.4)',
        // border radius top
        borderTopLeftRadius: 20,
        // margin : 10
    }
});

