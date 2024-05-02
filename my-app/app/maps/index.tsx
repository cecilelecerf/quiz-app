import { View } from '@gluestack-ui/themed';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as Location from 'expo-location';
import JourneyComponent from '../../component/UIkit/Journey/JourneyComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

const Maps = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [region, setRegion] = useState({
    latitude: 48.8566, // Latitude de Paris
    longitude: 2.3522, // Longitude de Paris
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestination] = useState<LatLng | null>();
  const mapRef = useRef<MapView>(null);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };
  useEffect(() => {
    userLocation();
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        followsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
      >
        <Marker coordinate={region} title='you' />
        {origin && <Marker coordinate={origin} title='origin' />}
        {destination && <Marker coordinate={destination} title='destination' />}
      </MapView>
      <JourneyComponent
        mapRef={mapRef}
        setDestination={setDestination}
        setOrigin={setOrigin}
      />
    </View>
  );
};

export default Maps;
