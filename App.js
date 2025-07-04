import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import * as MapLibreRN from '@maplibre/maplibre-react-native';

export default function MapRemountExample() {
  // mapKey drives the actual remount
  const [mapKey, setMapKey] = useState(0);
  // mountCount tracks how many times we've mounted
  const [mountCount, setMountCount] = useState(1);

  const remountMap = () => {
    setMapKey(k => k + 1);
    setMountCount(c => c + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={remountMap} style={styles.button}>
          <Text style={styles.buttonText}>Reload map</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.counterWrapper}>
        <Text style={styles.counterText}>Mount: {mountCount}</Text>
      </View>

      <MapLibreRN.MapView
        key={mapKey}
        styleURL="https://demotiles.maplibre.org/style.json"
        style={styles.map}
      >
        <MapLibreRN.Camera zoomLevel={4} centerCoordinate={[-2.0, 49]} />
      </MapLibreRN.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
  },
  buttonWrapper: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  button: {
    backgroundColor: '#007AFF', // iOS blue
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  counterWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    zIndex: 10,
  },
  counterText: {
    color: '#fff',
    fontSize: 14,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
