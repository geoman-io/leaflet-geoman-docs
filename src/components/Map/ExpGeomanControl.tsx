import { createControlComponent } from '@react-leaflet/core'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import '@geoman-io/leaflet-geoman-pro'
import '@geoman-io/leaflet-geoman-pro/dist/leaflet-geoman.css'

// Define the props interface for ExpGeomanControl.
// Extends L.ControlOptions so it satisfies the `P extends ControlOptions`
// constraint of @react-leaflet/core's createControlComponent.
export interface ExpGeomanControlProps extends L.ControlOptions {
  controls: L.PM.ToolbarOptions;
  init: (map: L.Map) => void;
  zoom?: number;
  center?: [number, number];
}

const Geoman = L.Control.extend({
  options: {},
  initialize(options: ExpGeomanControlProps) {
    L.setOptions(this, options)
  },

  addTo(map: L.Map) {
    const options = this.options as unknown as ExpGeomanControlProps
    if (!map.pm) return

    map.pm.addControls({
      ...options.controls,
    })

    if (options.init) {
      options.init(map)
    }
    map.pm.setGlobalOptions({
      measurements: { measurement: true, displayFormat: 'metric' },
    })
  },
})

const createGeomanInstance = (props: ExpGeomanControlProps) => {
  return new Geoman(props)
}

export const ExpGeomanControl = createControlComponent(createGeomanInstance)