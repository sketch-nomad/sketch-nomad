/**
 * Paintings pinned to the hero globe, each at the place its record gives in sketchnomad-backend.
 * Images and provenance: src/assets/images/pins/SOURCES.md.
 * The first two also show on the static poster globe that appears before the live map loads.
 */
export interface GlobePainting {
  src: string;
  alt: string;
  label: string;
  artist: string;
  coords: string;
  /** [longitude, latitude] of the place the work shows. */
  lngLat: [number, number];
  /** CSS object-position for the cropped pin thumbnail, when the subject is off-centre. */
  focus?: string;
}

export const globePaintings: GlobePainting[] = [
  {
    src: '~/assets/images/pins/van-gogh-auvers.jpg',
    alt: 'Green Wheat Fields, Auvers, painting by Vincent van Gogh',
    label: 'Auvers-sur-Oise',
    artist: 'Vincent van Gogh',
    coords: '49.07\u00b0N 2.17\u00b0E',
    lngLat: [2.17, 49.07],
  },
  {
    src: '~/assets/images/pins/levitan-vladimirka.jpg',
    alt: 'The Vladimirka Road, painting by Isaac Levitan',
    label: 'Vladimirka Road, Russia',
    artist: 'Isaac Levitan',
    coords: '55.95\u00b0N 39.70\u00b0E',
    lngLat: [39.7, 55.95],
  },
  {
    src: '~/assets/images/pins/yoshida-taj-mahal.jpg',
    alt: 'Morning Mist at Taj Mahal, painting by Hiroshi Yoshida',
    label: 'Taj Mahal, Agra',
    artist: 'Hiroshi Yoshida',
    coords: '27.18\u00b0N 78.04\u00b0E',
    lngLat: [78.04, 27.18],
  },
  {
    src: '~/assets/images/pins/north-matang.jpg',
    alt: 'View of Matang, Sarawak, Borneo, painting by Marianne North',
    label: 'Matang, Borneo',
    artist: 'Marianne North',
    coords: '1.58\u00b0N 110.22\u00b0E',
    lngLat: [110.22, 1.58],
  },
  {
    src: '~/assets/images/pins/kuroda-lakeside.jpg',
    alt: 'Lakeside, painting by Kuroda Seiki',
    label: 'Lake Ashi, Japan',
    artist: 'Kuroda Seiki',
    coords: '35.21\u00b0N 139.00\u00b0E',
    lngLat: [139.0, 35.21],
  },
  {
    src: '~/assets/images/pins/bierstadt-sierra-nevada.jpg',
    alt: 'Among the Sierra Nevada, California, painting by Albert Bierstadt',
    label: 'Sierra Nevada, USA',
    artist: 'Albert Bierstadt',
    coords: '36.58\u00b0N 118.30\u00b0W',
    lngLat: [-118.3, 36.58],
  },
  {
    src: '~/assets/images/pins/cole-oxbow.jpg',
    alt: 'View from Mount Holyoke (The Oxbow), painting by Thomas Cole',
    label: 'Mount Holyoke, USA',
    artist: 'Thomas Cole',
    coords: '42.30\u00b0N 72.59\u00b0W',
    lngLat: [-72.59, 42.3],
  },
  {
    src: '~/assets/images/pins/carr-gravel-pit.jpg',
    alt: 'Above the Gravel Pit, painting by Emily Carr',
    label: 'Metchosin, Canada',
    artist: 'Emily Carr',
    coords: '48.38\u00b0N 123.54\u00b0W',
    lngLat: [-123.54, 48.38],
  },
  {
    src: '~/assets/images/pins/church-chimborazo.jpg',
    alt: 'Chimborazo Volcano, painting by Frederic Edwin Church',
    label: 'Chimborazo, Ecuador',
    artist: 'Frederic Edwin Church',
    coords: '1.47\u00b0S 78.82\u00b0W',
    lngLat: [-78.82, -1.47],
  },
  {
    src: '~/assets/images/pins/north-gongo.jpg',
    alt: "Butterflies' Road through Gongo Forest, Brazil, painting by Marianne North",
    label: 'Gongo Soco, Brazil',
    artist: 'Marianne North',
    coords: '19.96\u00b0S 43.60\u00b0W',
    lngLat: [-43.6, -19.96],
  },
];
