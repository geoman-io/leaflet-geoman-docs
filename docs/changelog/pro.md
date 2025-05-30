---
title: Leaflet-Geoman Pro ⭐
---
## v2.15.0 Adding `pm:error` event
April 2025

- Fix handling the ratio conversion in scaleLayer (Breaking Change)
- New event `pm:error` is fired on the map when an Geoman error is thrown.


## v2.14.0 Adding cancel to Modes
Feburary 2025

- To the modes `Edit`, `Drag`, `Removal`, `Rotate`, `Scale`, `LineSimplification` we added a `cancel()` logic. 
  - New events: 
    - `pm:cancel` fired for the layer
    - `pm:globalcancel` fired if the cancel method of a global mode is executed.
    - `pm:undoremove` fired if a removed layer is added back to the map via cancel.
  - New methods:
    - `cancel()` for all Shapes
    - `cancelGlobalEditMode()`
    - `cancelGlobalDragMode()`
    - `cancelGlobalRemovalMode()`
    - `cancelGlobalRotateMode()`
    - `cancelGlobalScaleMode()`
    - `cancelGlobalLineSimplificationMode()`
  - Toolbar
    - The option `hideCancelActionOf` hides the `cancel` button for each mode in the Toolbar.
- Scaling fires `pm:update` and `pm:change` now too
- Updated Typscript-Types to the latest code
- Updated base to Leaflet-Geoman-Free version 2.18.3
- Fixed: Invalid splitting caused re-creation of the layer
- Fixed: closedPolygonEdge didn't worked well with removeLastVertex


## v2.13.0

### Features
October 2024

#### 1. Line Simplification Mode
![Line Simplification Feature](https://assets.geoman.io//assets/linesimplification-polygons.gif)

- Enables easy simplification of line and polygon geometry
- Global enable/disable methods added
- New toolbar button for quick access

#### 2. Copy Layer Mode
- Allows creation of copies of existing layers (points, lines, polygons)
- Global enable/disable methods implemented
- New toolbar button for easy activation

#### 3. Custom Shapes Mode
![Custom Shapes Feature](https://assets.geoman.io//assets/custom-shapes.gif)

- Enables drawing of predefined custom shapes
- Add/remove custom shapes to internal library
- Add custom shapes to toolbar for quick access
- Supports GeoJSON input and styling options

#### 4. Freehand Drawing Mode
- Enables intuitive freehand drawing of polygons or lines
- Configurable options for fill and styling
- Integrated into the toolbar with polygon/line switching

#### 5. Lasso Select Mode
![Lasso Select Feature](https://assets.geoman.io//assets/lasso-intersect.gif)
- Allows selection of multiple layers by drawing a freehand shape
- Multiple selection modes: append, subtract, reset
- Configurable options for selection behavior and styling

#### 6. Geofencing
![Geofencing Feature](https://assets.geoman.io//assets/geofence-containment.gif)

- Introduced advanced geofencing capabilities to prevent layer intersections and ensure containment
- Added global options for `preventIntersection` and `requireContainment`
- Implemented collision detection for various layer types including Marker, CircleMarker, Circle, Line, Polygon, Rectangle, Text, and ImageOverlay
- Applied geofencing rules to Draw Mode, Edit Mode, Drag Mode, Rotation, Scaling, Freehand Drawing, and Copy Layer operations
- Introduced visual feedback (red highlighting) for collision or containment violations
- Added new events: `pm:intersectionviolation` and `pm:containmentviolation` for violation detection
- Enabled fine-grained control over spatial constraints, improving map data accuracy and consistency

These new features significantly enhance Leaflet-Geoman's capabilities for map editing and interaction, providing users with more advanced tools for manipulating and creating geographical data.

## v2.12.0: Added Union and Difference Modes

- Add [Union feature](/modes/9.union-mode) that merges two layers into one
- Add [Difference feature](/modes/10.difference-mode) that subtracts one layer from another and returns the difference as a new layer
- Various bug fixes and improvements
- Merged all updates from [Leaflet-Geoman Free 2.17.0](https://github.com/geoman-io/leaflet-geoman/releases/tag/v2.17.0)

## v2.11.0: Added SnapGuides

### Features
Add SnapGuide feature that enables 90° guides while drawing and editing shapes

![Snap Guides Demo](https://assets.geoman.io//assets/snap-guides-fast.gif)

Snap Guides are a powerful tool to create precise geometries. They are especially useful when drawing or editing shapes. Exclusive for Leaflet-Geoman Pro ⭐



### Patches
* Add measurement translations for all languages
* Fix bug with snapping priority

## v2.10.0

- Merged all updates from [Leaflet-Geoman Free 2.15.0](https://github.com/geoman-io/leaflet-geoman/releases/tag/v2.15.0)


## v2.9.0

### Patches

- Merged all updates from [Leaflet-Geoman Free 2.14.1](https://github.com/geoman-io/leaflet-geoman/releases/tag/v2.14.1)
- `getGeomanLayers()` now properly returns the scale help-layer
- Cleanup polygon shape while drawing
- Fixed various pinning bugs
- Remove duplicated function pxRadiusToMeter
- Fix pinning bugs

## v2.8.1

### Features

#### Add a vertex by clicking on line
`addVertexOnClick`
```
map.pm.setGlobalOptions({addVertexOnClick: true});
```

#### Closed Polygon drawing
`closedPolygonEdge`
`closedPolygonFill`

```
map.pm.setGlobalOptions({
        closedPolygonEdge: true,
        closedPolygonFill: true
})
```

#### Circle cutting
New option `allowCircleCut` per default `true`
Or cut as Circle shape: `cutAsCircle: true` / `map.pm.enableDraw('CutCircle')`

#### AutoTracing

Control: `autoTracingOption`
Options: `autoTracing`, `autoTraceMaxZoom`, `autoTraceMaxDistance`

```
map.pm.setGlobalOptions({autoTracing: true});
```

![AutoTracing Demo](https://assets.geoman.io//assets/auto-tracing.gif)

## v2.8.0

### Features

- Merge OSS 2.13.0 (Add Text Layer Support & Fixes)


## v2.7.0

### Minor Changes 

- Moved tests for Pro features into seperate files and fix an error with measurement: #41
- Listen on layer remove event while scaling - remove temp layer: #42
- Feature/oss 2.11.4: #40
- Merge OSS 2.12: #44

### Patches 

- Fix Tooltip test: #43


## v2.6.0


### Features

#### Add Scale Mode

Scale mode allows you to scale shapes by dragging a corner of the shape. 


### Minor Changes 

- Update from OSS version 2.11.2: #39
- Enhance Split with latest OSS improvements: #38

### Patches 

## v2.5.0

### Minor Changes 

*Split*
![geoman-pro-split](https://assets.geoman.io//assets/split.gif)

*Measurement*
![geoman-pro-measurement](https://assets.geoman.io//assets/measurement-demo.gif)


- Snapping now works on circle border: #587
- Harmonize Drag Events for Markers and Circle Center: #591
- CircleMarkers are now editable in size and Layers can be snapped to circle border: #603
- Add Greek Translation: #611
- Add option to hide middle markers . Fixes #411: #615
- Add Powerful Toolbar Customizations . Fixes #614: #602
- Added function to get all Geoman layers: #625
- Toolbar Blocks can now be positioned independently: #626
- Shape fix in events: #643
- Add Hungarian translation: #647
- Add Split feature: #19
- Merge OSS 2.7.0 &amp; Split &amp; Measurement: #21
- Split fixes: #22
- Merge Leaflet-Geoman 2.8.0: b19f5a50ad4f02400be8f68d0b23b28b4d20530a
- Measurment CleanUp: 7994440f63ecc572de61bfe5449671c377799188
- Fix open Points like translation, imperial, TODOs: 975fa62061a974341144ce73df1837b1d48ee40d
- Fix typo: #637
- Replace difference and intersection from turf: #633
- Cut edit event: #624
- Add Merge Options: d6d682a37303e3ae1707047d3d37a8fa33c04a18
- Update Readme: 52d19214850c6513d5b924362863ab2bea5f8db7
- Add a small test: 97c7877e269451f9ff661504cf27683ee36d920a
- Add Mesasurement imperial format: 329680856609aecaa6d91137680f0d835924a6fa
- Fix Testing Bug: #658
- Merge pull request #655 from geoman-io/develop: a3e389b4f61bda11c27108f3ee85af70e609d8a9
- Merge OSS 2.7.0: db932e29bb3c7c1a31136f0d28aca30923621ba1
- Review fixes: d111cb0f7370a3b9594897f741e8ee89fa7def77
- Add support for multi-polygon: 43489065455b180dcb87ba697dce9f75640c71cf
- Close Tooltip while dragging: 33f925f4ff7415af07ffccb6a85e372a425a9f0d
- Merge OSS with Split &amp; Master: 3b36d4ccc1c6b51fa96a08e1fee1c0d3da2e36ac
- Merge branch &#39;measure&#39; into develop: 9a049d2390f18f002776273cc9d6515af46b1cd6
- Merge Measurement: ceba6014b85fa456126150487d40a53a0551ee7d
- Updated some dependencies: 5679397040aa1782bdb699ffad45de99cc011be1

### Patches 

- Updated Swedish translations: #571
- CSS Corner fix: #570
- Changing drag cursor behavior if preferCanvas is true. Fixes #528: #590
- Fix Marker SNap Behaviour when Drag Mode was previously enabled.: #577
- Updated Russian language: #581
- Updated Russian language   (#600): #581
- Fix Bug with preventMarkerRremoval . Fixes #576: #597
- Fix css for toolbar / controls on the right side: #601
- Updated documentation . Fixes #525, fixes #574: #593
- Marker drag check . Fixes #567: #594
- Support multiple self intersection . Fixes #455: #592
- Fix Prevention Of Draw-Finish when Self Intersection is forbidden: #548
- Fix Ghost Layers after cut: #598
- Remove Polygon on Vertex Removal if there are less than 3 vertices left . Fixes #606: #613
- Fix cutPolygon typo. Fixes 620: 8880b1f2a58c9f99d7b3720762bd29abdeafb53b
- Fix finishOn dblclick bug . Fixes #631: #632
- Fix Circle Drag Bug . Fixes #617: #623
- Fix bug when circle is the only layer on the map: #627
- Create LICENSE.md: 47cd94eee9f18707d769f5ea7f520099aa903869
- Typo drag -&gt; removal: a957555f8f56d0539765497fbfb88c37cba59467

### Credits 