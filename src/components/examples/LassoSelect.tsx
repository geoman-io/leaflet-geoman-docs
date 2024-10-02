import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import "@geoman-io/leaflet-geoman-pro/dist/leaflet-geoman.css";
import "leaflet/dist/leaflet.css";

interface Props {
  
}

const Example: React.FC<Props> = ({}) => {

  const polygonsToAdd = [
    {
      type: "Polygon",
      coordinates: [
        [
          [7.456541, 51.512161],
          [7.461689, 51.518224],
          [7.46525, 51.515046],
          [7.470054, 51.517636],
          [7.472972, 51.511173],
          [7.469797, 51.50738],
          [7.461132, 51.507006],
          [7.460745, 51.509277],
          [7.456541, 51.512161],
        ],
      ],
    },
    {
      type: "Point",
      coordinates: [7.454336, 51.518523],
    },
    {
      type: "Point",
      coordinates: [7.458336, 51.521523],
    },
    {
      type: "Point",
      coordinates: [7.458336, 51.520523],
    },
  ]

  const geomanControlOptions = {
    controls: {
      drawControls: true,
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawPolygon: false,
      drawRectangle: false,
      drawCircle: false,
      drawText: false,
      optionsControls: true,
      editControls: true,
      dragMode: false,
      cutPolygon: false,
      editPolygon: true,
      removalMode: false,
      rotateMode: false,
      scaleMode: false,
      splitMode: false,
      mergePolygons: false,
      unionMode: false,
      differenceMode: false,
      pinningOption: false,
      snappingOption: false,
      autoTracingOption: false,
      snapGuidesOption: false,
      lassoSelect: true,
    },
    init: (map: L.Map) => {
      map.addLayer(L.geoJSON(polygonsToAdd));
      map.pm.setLassoAppendMode()
      map.pm.enableGlobalLassoMode()
      map.pm.setGlobalOptions({
        measurements: { measurement: false, displayFormat: "metric", showTooltip: false, showTooltipOnHover: false },
      })
    },
  }

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
    {() => {
      const LibComponent =
        require('@site/src/components/Map').default;
      return     <LibComponent
      geomanControlOptions={geomanControlOptions}
    />
    }}
  </BrowserOnly>
  );
};

export default Example;