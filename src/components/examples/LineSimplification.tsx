import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


type displayFormat = "metric" | "imperial";

interface Props {
  displayFormat?: displayFormat;
}

const Example: React.FC<Props> = ({displayFormat}) => {

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
      type: "LineString",
      coordinates: [
        [7.442198, 51.517237],
        [7.456393, 51.518284],
        [7.466393, 51.524284],
        [7.476393, 51.524284],
        [7.474372, 51.519746],
      ],
    },
  ]

  const geomanControlOptions = {
    controls: {
      drawControls: false,
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawPolygon: false,
      drawRectangle: false,
      drawCircle: true,
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
      lineSimplificationMode: true
    },
    init: (map: L.Map) => {
      map.pm.enableGlobalLineSimplificationMode()
      map.addLayer(L.geoJSON(polygonsToAdd))

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