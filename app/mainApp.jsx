import "react-native-get-random-values";

import { Animated, ScrollView, View } from "react-native";
import { Card, Provider, Text, Toast } from "@ant-design/react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import { addSearch, removeSearch } from "./store/actions/searchActions";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { config } from "./config";
import { debounce } from "lodash";
import { getMockPlaceDetails } from "./services/googleService";
import { styles } from "./styles";

export default function MainApp() {
  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    description: "",
  });
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = useRef(null);
  const bounceValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const searchHistory = useSelector((state) => state.search.history);
  const [historyCollapsed, setHistoryCollapsed] = useState(true);

  const bounce = () => {
    bounceValue.setValue(0);
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: -10,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(bounceValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onPlaceSelected = (data, details) => {
    if (details?.geometry?.location) {
      const { lat: latitude, lng: longitude } = details.geometry.location;
      const newRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setPin({ latitude, longitude, description: data?.description || "" });
      setRegion(newRegion);
      bounce();

      if (mapRef.current) {
        mapRef.current.animateToRegion(newRegion, 1000);
      }

      Toast.info(`Moved to ${details.name}`, 1);
      dispatch(
        addSearch({ latitude, longitude, description: data?.description || "" })
      );
    }
  };

  const fetchMockData = debounce(() => {
    const mock = getMockPlaceDetails();
    dispatch(addSearch(mock));
    setPin(mock);
  }, 5000);

  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="Search Places"
          fetchDetails={true}
          keyboardShouldPersistTaps="always"
          minLength={2}
          timeout={20000}
          predefinedPlaces={[]}
          onPress={onPlaceSelected}
          onFail={(error) => {
            Toast.info(`Using mock location due to API error`);
            fetchMockData();
          }}
          query={{
            key: config.API_KEY,
            language: "en",
            type: "geocode",
          }}
          styles={{
            container: {
              position: "absolute",
              width: "100%",
              zIndex: 2,
              top: 10,
              paddingHorizontal: 10,
            },
            textInput: {
              height: 45,
              borderRadius: 8,
              paddingHorizontal: 10,
              backgroundColor: "#fff",
              fontSize: 16,
              elevation: 3,
            },
            listView: {
              backgroundColor: "#fff",
              elevation: 4,
              borderRadius: 8,
            },
          }}
          textInputProps={{
            placeholderTextColor: "#999",
          }}
        />

        <MapView
          ref={mapRef}
          style={styles.map}
          region={region}
          provider="google"
        >
          <Marker coordinate={pin}>
            <Animated.View style={{ transform: [{ translateY: bounceValue }] }}>
              <View style={styles.customMarker} />
            </Animated.View>
          </Marker>
          <Circle center={pin} radius={1000} strokeColor="#1e90ff55" />
        </MapView>

        <View style={styles.infoCard}>
          {/* <Card>
            <Card.Header title={`Current Location : ${pin.description}`} />
            <Card.Body>
              <Text>Latitude: {pin.latitude.toFixed(5)}</Text>
              <Text>Longitude: {pin.longitude.toFixed(5)}</Text>
            </Card.Body>
          </Card> */}
          <Card style={styles.cardContainer}>
            <Card.Header
              title={
                <View style={styles.headerContainer}>
                  <FontAwesome name="map-marker" size={20} color="#007AFF" />
                  <Text style={styles.headerText}>
                    Current Location: {pin.description || "Unknown"}
                  </Text>
                </View>
              }
            />
            <Card.Body>
              <View style={styles.bodyContainer}>
                <View style={styles.locationRow}>
                  <FontAwesome name="compass" size={18} color="#007AFF" />
                  <Text style={styles.locationText}>
                    Latitude: {pin.latitude?.toFixed(5) || "N/A"}
                  </Text>
                </View>
                <View style={styles.locationRow}>
                  <FontAwesome name="globe" size={18} color="#007AFF" />
                  <Text style={styles.locationText}>
                    Longitude: {pin.longitude?.toFixed(5) || "N/A"}
                  </Text>
                </View>
              </View>
            </Card.Body>
          </Card>

          <View style={styles.collapsibleContainer}>
            <Text
              style={styles.collapsibleHeader}
              onPress={() => setHistoryCollapsed(!historyCollapsed)}
            >
              {historyCollapsed
                ? "▼ Show Search History"
                : "▲ Hide Search History"}
            </Text>

            {!historyCollapsed && (
              <ScrollView
                nestedScrollEnabled
                contentContainerStyle={{ padding: 10 }}
                showsVerticalScrollIndicator={true}
                style={styles.historyScroll}
              >
                {searchHistory.length === 0 ? (
                  <Text style={styles.emptyText}>No previous searches.</Text>
                ) : (
                  searchHistory.map((item, idx) => (
                    <View key={idx} style={styles.historyItemContainer}>
                      <Text
                        style={styles.historyItemText}
                        onPress={() => {
                          setPin({
                            latitude: item.latitude,
                            longitude: item.longitude,
                            description: item.description,
                          });
                          setRegion({
                            latitude: item.latitude,
                            longitude: item.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                          });
                          if (mapRef.current) {
                            mapRef.current.animateToRegion(
                              {
                                latitude: item.latitude,
                                longitude: item.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                              },
                              1000
                            );
                          }
                          Toast.info(`Moved to ${item.description}`, 1);
                        }}
                      >
                        {item.description}
                      </Text>
                      <Text
                        style={styles.deleteButton}
                        onPress={() => dispatch(removeSearch(idx))}
                      >
                        ✕
                      </Text>
                    </View>
                  ))
                )}
              </ScrollView>
            )}
          </View>
        </View>
      </View>
    </Provider>
  );
}
