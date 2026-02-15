import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapBounds = ({ threats }) => {
  const map = useMap();

  React.useEffect(() => {
    if (threats.length > 0) {
      const bounds = threats.map(t => [t.lat, t.lng]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [threats, map]);

  return null;
};

const ThreatMap = ({ data }) => {
  const getMarkerColor = (severity) => {
    switch (severity) {
      case 'critical':
        return '#E85D75';
      case 'significant':
        return '#FFA15C';
      case 'suspicious':
        return '#FFD15C';
      default:
        return '#5DC1C5';
    }
  };

  const getMarkerSize = (threats) => {
    if (threats >= 35) return 20;
    if (threats >= 25) return 15;
    if (threats >= 15) return 12;
    return 8;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Threat Origins</h3>
        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
          Global View
        </span>
      </div>

      <div className="h-96 rounded-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapBounds threats={data} />
          {data.map((threat) => (
            <CircleMarker
              key={threat.id}
              center={[threat.lat, threat.lng]}
              radius={getMarkerSize(threat.threats)}
              fillColor={getMarkerColor(threat.severity)}
              fillOpacity={0.7}
              color="#fff"
              weight={2}
            >
              <Popup>
                <div className="text-xs">
                  <p className="font-semibold">{threat.city}, {threat.country}</p>
                  <p className="text-gray-600">Threats: {threat.threats}</p>
                  <p className="text-gray-600 capitalize">Severity: {threat.severity}</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Filter:</span>
          <span className="text-xs font-semibold text-gray-700">All</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs text-gray-600">Critical</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <span className="text-xs text-gray-600">Significant</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span className="text-xs text-gray-600">Suspicious</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatMap;
