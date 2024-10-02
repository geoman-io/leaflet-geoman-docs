import { createControlComponent } from '@react-leaflet/core'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import '@geoman-io/leaflet-geoman-pro'
import '@geoman-io/leaflet-geoman-pro/dist/leaflet-geoman.css'

// Define the props interface for ExpGeomanControl
export interface ExpGeomanControlProps {
  controls: {
    position?: string;
    drawMarker?: boolean;
    drawPolyline?: boolean;
    measurement?: boolean;
    drawCircle?: boolean;
    drawRectangle?: boolean;
    drawText?: boolean;
    dragMode?: boolean;
    cutPolygon?: boolean;
    splitMode?: boolean;
    scaleMode?: boolean;
    pinningOption?: boolean;
    snappingOption?: boolean;
    drawCircleMarker?: boolean;
    rotateMode?: boolean;
    snapGuidesOption?: boolean;
    autoTracingOption?: boolean;
  };
  init: (map: L.Map) => void;
  zoom?: number;
  center?: [number, number];
}

const Geoman = L.Control.extend({
  options: {},
  initialize(options) {
    L.setOptions(this, options)
  },

  addTo(map) {
    if (!map.pm) return

    map.pm.addControls({
      ...this.options.controls,
    })
    
    if (this.options.init) {
      this.options.init(map)
    }
    map.pm.setGlobalOptions({
      measurements: { measurement: true, displayFormat: 'metric' },
    })
  },
})

const createGeomanInstance = (props) => {
  return new Geoman(props)
}

export const ExpGeomanControl = createControlComponent(createGeomanInstance)