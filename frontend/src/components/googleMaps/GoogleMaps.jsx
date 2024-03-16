import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import { StyledGoogleMaps } from "./styles.ts";

const GoogleMaps = () => {
  const position = { lat: -27.590824, lng: -48.551262 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCSBL1oa1ZZwJDPaClYwnUP_yPasnu18H8",
  });
  return (
    <StyledGoogleMaps>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Posição Teste",
                className: "map-marker",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </StyledGoogleMaps>
  );
};

export default GoogleMaps;
