import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


type displayFormat = "metric" | "imperial";

interface Props {
  angles: number[];
}

const Example: React.FC<Props> = ({angles=[90]}) => {

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
        [7.466393, 51.524284],
        [7.474372, 51.519746],
      ],
    },
  ]

  const geomanControlOptions = {
    controls: {
      drawControls: true,
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: true,
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
      pinningOption: false,
      snappingOption: false,
      autoTracingOption: false,
      snapGuidesOption: true,
    },
    init: (map: L.Map) => {
      map.pm.setGlobalOptions({
        showSnapGuides: true,
        snapGuidesAngles: angles,
      })
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