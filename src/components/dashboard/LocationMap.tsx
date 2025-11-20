import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locationData = [
  {
    city: "New York",
    value: "72K",
    width: "100%",
    coordinates: [-74.006, 40.7128],
  },
  {
    city: "San Francisco",
    value: "39K",
    width: "54%",
    coordinates: [-122.4194, 37.7749],
  },
  {
    city: "Sydney",
    value: "25K",
    width: "34%",
    coordinates: [151.2093, -33.8688],
  },
  {
    city: "Singapore",
    value: "61K",
    width: "85%",
    coordinates: [103.8198, 1.3521],
  },
];

const LocationMap = () => (
  <div className="bg-card rounded-xl p-6 h-full flex flex-col">
    <h3 className="text-sm font-semibold text-foreground mb-4">
      Revenue by Location
    </h3>

    <div className="flex-1 w-full min-h-[180px] mb-4">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 130,
          center: [10, 40],
        }}
        className="w-full h-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="fill-[#CFDFEB] dark:fill-[#677681] outline-none stroke-none"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#ace4ff" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {locationData.map(({ city, coordinates }) => (
          <Marker key={city} coordinates={coordinates as [number, number]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 7 6"
              fill="none"
            >
              <path
                d="M3.02625 0.5C1.63721 0.500028 0.499878 1.61316 0.499878 3C0.499878 4.38684 1.63721 5.49997 3.02625 5.5C4.41531 5.5 5.55261 4.38685 5.55261 3C5.55261 1.61315 4.41531 0.5 3.02625 0.5Z"
                fill="#1C1C1C"
                stroke="white"
              />
            </svg>
          </Marker>
        ))}
      </ComposableMap>
    </div>

    <div className="space-y-4">
      {locationData.map((item) => (
        <div key={item.city} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-foreground">{item.city}</span>
            <span className="text-foreground font-medium">{item.value}</span>
          </div>
          <div className="h-0.5 w-full bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-blue-300" style={{ width: item.width }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LocationMap;
