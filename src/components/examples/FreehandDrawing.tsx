import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface Props {
fill?: boolean;
}

const Example: React.FC<Props> = ({fill=false}) => {

  const geomanControlOptions = {
    controls: {
      drawControls: true,
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawFreehand: true,
      drawPolygon: false,
      drawRectangle: false,
      drawCircle: false,
      drawText: false,
      optionsControls: false,
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
    },
    init: (map: L.Map) => {
      map.pm.enableDraw('Freehand', {
        freehandOptions: {
          fill: fill,
        },
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