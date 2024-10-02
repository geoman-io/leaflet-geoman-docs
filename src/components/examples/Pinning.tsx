import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


interface PinningProps {
  pinning?: boolean; // ExpGeomanControlProps should define the options you want to pass
}

const Example: React.FC<PinningProps> = ({pinning}) => {

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
      type: "Polygon",
      coordinates: [
        [
          [7.470054, 51.517636],
          [7.480991, 51.521668],
          [7.490185, 51.516114],
          [7.472972, 51.511173],
          [7.470054, 51.517636],
        ],
      ],
    },
  ]

  const geomanControlOptions = {
    controls: {
      drawControls: false,
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawPolygon: true,
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
      pinningOption: true,
      snappingOption: false,
      autoTracingOption: false,
      snapGuidesOption: false,
    },
    init: (map: L.Map) => {
      map.addLayer(L.geoJSON(polygonsToAdd))
      map.pm.setGlobalOptions({
        pinning: pinning ?? true,
      })
      map.pm.enableGlobalEditMode()
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