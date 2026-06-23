// Docusaurus's @docusaurus/module-type-aliases declares *.svg/*.css/*.md but
// not raster image assets, so importing them (e.g. Leaflet's marker icons)
// fails type resolution. Declare them as URL string modules (webpack asset
// modules resolve them to a URL at build time).
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
