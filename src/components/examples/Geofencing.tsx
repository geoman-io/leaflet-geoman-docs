import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface Props {
  preventIntersection?: boolean;
  requireContainment?: boolean;
}

const Example: React.FC<Props> = ({preventIntersection=false, requireContainment=false}) => {
  // const polygonsToAdd = [
  //   {
  //     type: "Polygon",
  //     coordinates: [
  //       [
  //         [7.456541, 51.512161],
  //         [7.461689, 51.518224],
  //         [7.46525, 51.515046],
  //         [7.470054, 51.517636],
  //         [7.472972, 51.511173],
  //         [7.469797, 51.50738],
  //         [7.461132, 51.507006],
  //         [7.460745, 51.509277],
  //         [7.456541, 51.512161],
  //       ],
  //     ],
  //   },
  // ]

  var latlngs = [
    [
      [
        [51.512161,7.456541],
        [51.518224,7.461689],
        
        [51.517636,7.470054],
        [51.511173,7.472972],
        [51.50738,7.469797],
        
        [51.509277,7.460745],
        [51.512161,7.456541],
      ],
    ],
  ];
  const geomanControlOptions = {
    controls: {
      drawControls: true,
      drawMarker: true,
      drawCircleMarker: false,
      drawPolyline: false,
      drawFreehand: false,
      drawPolygon: true,
      drawRectangle: false,
      drawCircle: false,
      drawText: false,
      optionsControls: false,
      editControls: true,
      dragMode: true,
      cutPolygon: false,
      editPolygon: true,
      removalMode: false,
      rotateMode: true,
      scaleMode: false,
      splitMode: false,
      mergePolygons: false,
      unionMode: false,
      differenceMode: false,
    },
    init: (map: L.Map) => {
      const lp = L.polygon(latlngs)
      map.addLayer(lp);
      //map.addLayer(L.geoJSON(polygonsToAdd));
      if (preventIntersection) map.pm.setGlobalOptions({ preventIntersection: [lp] });
      if (requireContainment) map.pm.setGlobalOptions({ requireContainment: [lp] });

      map.pm.enableDraw("Polygon", {
        snappable: true,
        snapDistance: 20,
      });
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