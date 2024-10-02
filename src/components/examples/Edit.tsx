import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Example: React.FC = () => {
  const position: [number, number] = [51.514244, 7.468429];

  // Define the options for GeomanControl
  const controls = {
    drawControls: false,
    optionsControls: false,
    editControls: true,
    dragMode: false,
    cutPolygon: false,
    removalMode: false,
    rotateMode: false,
    scaleMode: false,
    splitMode: false,
    mergePolygons: false,
    unionMode: false,
    differenceMode: false,
  };

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

  // Define the init function for the map
  const handleMapInit = (map: L.Map) => {
    map.pm.enableGlobalEditMode()
    map.addLayer(L.geoJSON(polygonsToAdd));
  };

  const geomanControlOptions = {
    zoom: 14,
    controls,
    init: handleMapInit,
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