import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import icon from "../assets/marker.png";
import Leaflet from "leaflet";
import { useState } from "react";
import SideDetail from "./SideDetail";
const MapView = () => {
  const state = useSelector((store) => store);
  const [detailId, setDetailId] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const planeMarker = Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45],
  });

  const handleClick = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };
  console.log(state);
  return (
    <div className="container">
      <h3>{state.flights.length} Uçuş Bulundu</h3>
      <MapContainer center={[39.9334, 32.8597]} zoom={7} scrollWheelZoom={true}>
        {/* gösterilicek harita */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*
         * ekranda bulunan imleç
         * bizden prop olrak imlecin konum bilgisine sahip
         * bir dizi ister bu dizinin ilk değeri
         * enlem ikinci değeri boylam
         */}

        {state.flights.map((flight) => (
          <Marker
            key={flight.id}
            icon={planeMarker}
            position={[flight.lat, flight.lng]}
          >
            <Popup>
              <div className="popup">
                <span>Kod :{flight.code} </span>
                <button
                  className="detailBtn"
                  onClick={() => handleClick(flight.id)}
                >
                  Detay
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {showDetail && <SideDetail id={detailId} setShowDetail={setShowDetail} />}
    </div>
  );
};

export default MapView;
