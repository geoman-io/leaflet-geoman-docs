import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


type displayFormat = "metric" | "imperial";

interface Props {
  limitMarkersToCount?: number,
  limitMarkersToZoom?: number,
  limitMarkersToViewPort?: boolean,
  limitMarkersToClick?: boolean,
}

const Example: React.FC<Props> = ({limitMarkersToCount=-1, limitMarkersToZoom=-1, limitMarkersToViewPort=false, limitMarkersToClick=false }) => {

  const polygonsToAdd = [
    {
      type: "Feature",
      properties: {
        id: 3278,
        shape: "Polygon",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [7.450401, 51.515553],
            [7.451345, 51.51825],
            [7.453404, 51.520226],
            [7.45645, 51.520787],
            [7.457136, 51.521428],
            [7.455892, 51.521295],
            [7.454219, 51.521054],
            [7.452503, 51.520387],
            [7.451817, 51.519959],
            [7.451173, 51.518758],
            [7.450744, 51.518037],
            [7.450186, 51.517449],
            [7.449715, 51.516595],
            [7.449114, 51.5155],
            [7.448857, 51.514779],
            [7.449028, 51.513149],
            [7.449071, 51.512535],
            [7.449028, 51.511066],
            [7.448728, 51.510051],
            [7.447441, 51.510238],
            [7.446883, 51.510986],
            [7.447055, 51.513096],
            [7.447226, 51.514458],
            [7.448899, 51.517396],
            [7.450486, 51.520066],
            [7.451387, 51.521081],
            [7.455677, 51.522496],
            [7.457135, 51.52255],
            [7.459366, 51.522389],
            [7.461554, 51.522283],
            [7.463656, 51.522336],
            [7.465329, 51.522309],
            [7.467217, 51.522363],
            [7.469361, 51.522202],
            [7.471678, 51.521935],
            [7.473823, 51.521268],
            [7.474338, 51.520387],
            [7.47511, 51.518865],
            [7.472836, 51.518811],
            [7.471892, 51.520013],
            [7.46979, 51.521001],
            [7.466487, 51.521481],
            [7.463956, 51.521588],
            [7.461511, 51.521562],
            [7.459066, 51.521268],
            [7.457522, 51.520814],
            [7.456188, 51.519633],
            [7.457264, 51.518758],
            [7.455574, 51.516429],
            [7.451644, 51.514698],
            [7.450401, 51.515553],
          ],
        ],
      },
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
      measurementOption: false,
    },
    init: (map: L.Map) => {
      map.pm.setGlobalOptions({
        limitMarkersToCount: limitMarkersToCount,
        limitMarkersToViewPort: limitMarkersToViewPort,
        limitMarkersToClick: limitMarkersToClick,
        limitMarkersToZoom: limitMarkersToZoom,
      })
      map.addLayer(L.geoJSON(polygonsToAdd))
      map.pm.enableGlobalEditMode({
        limitMarkersToCount: limitMarkersToCount,
        limitMarkersToViewPort: limitMarkersToViewPort,
        limitMarkersToClick: limitMarkersToClick,
        limitMarkersToZoom: limitMarkersToZoom,
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