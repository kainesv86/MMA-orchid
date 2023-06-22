const color = {
  red: {
    100: "#FFCDD2",
    200: "#EF9A9A",
    300: "#E57373",
    400: "#EF5350",
    500: "#F44336",
    600: "#E53935",
    700: "#D32F2F",
    800: "#C62828",
    900: "#B71C1C",
  },
  gray: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  blue: {
    100: "#BBDEFB",
    200: "#90CAF9",
    300: "#64B5F6",
    400: "#42A5F5",
    500: "#2196F3",
    600: "#1E88E5",
    700: "#1976D2",
    800: "#1565C0",
    900: "#0D47A1",
  },
  indigo: {
    100: "#C5CAE9",
    200: "#9FA8DA",
    300: "#7986CB",
    400: "#5C6BC0",
    500: "#3F51B5",
    600: "#3949AB",
    700: "#303F9F",
    800: "#283593",
    900: "#1A237E",
  },
  white: "#FFFFFF",
  black: "#000000",
};

const data = [
  {
    id: 1,
    name: "Phalaenopsis",
    imageUrl:
      "https://www.thespruce.com/thmb/kUynhE6tcv6ZPlR_itz6yzzMNu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phalaenopsis-orchids-definition-1902866-04-445f6982c7884a71a48f906a7ccf6e0b.jpg",
    description:
      "Phalaenopsis, also known as moth orchids, is a genus of about seventy species of plants in the family Orchidaceae. Orchids in this genus are monopodial epiphytes or lithophytes with long, coarse roots, short, leafy stems and long-lasting, flat flowers arranged in a flowering stem that often branches near the end. ",
    categoryId: "1",
  },
  {
    id: 2,
    name: "Cattleya",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cattleya_labiata_Orchi_1013.jpg/220px-Cattleya_labiata_Orchi_1013.jpg",
    description:
      "Epiphytic or terrestrial orchids with cylindrical rhizome from which the fleshy noodle-like roots grow. Pseudobulbs can be conical, spindle-shaped or cylindrical; with upright growth; one or two leaves growing from the top of them. The leaves can be oblong, lanceolate or elliptical, somewhat fleshy, with smooth margin. The inflorescence is a terminal raceme with few or several flowers.",
    categoryId: "1",
  },
  {
    id: 3,
    name: "Dendrobium",
    imageUrl:
      "https://www.thespruce.com/thmb/NC06SRw3TbkmsT-vUY1_1oq3X30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grow-cane-and-dendrobium-orchids-1902862-03-f556e5d73b0e414088ec849bdf6ea6f4.jpg",
    description:
      "Dendrobium is a genus of mostly epiphytic and lithophytic orchids in the family Orchidaceae. It is a very large genus, containing more than 1,800 species that are found in diverse habitats throughout much of south, east and southeast Asia, including China, Japan, India, the Philippines, Indonesia, Australia, New Guinea, Vietnam and many of the islands of the Pacific.",
    categoryId: "1",
  },
  {
    id: 4,
    name: "Cymbidium",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/62c9fbcd178d631e0dcf7b29/1657645408937-IWIWS27N2J8EKWIKM4FK/cymbidium-orchid-flower",
    description:
      "Cymbidium, or boat orchid, is a genus of 52 evergreen species in the orchid family Orchidaceae. The new Latin genus name is derived from the Latin cymba meaning boat.",
    categoryId: "2",
  },
  {
    id: 5,
    name: "Oncidium",
    imageUrl:
      "https://plantly.io/wp-content/uploads/2022/01/dancing-lady-orchid.jpg",
    description:
      "Oncidium, abbreviated as Onc. in the horticultural trade, is a genus that contains about 330 species of orchids from the subtribe Oncidiinae of the orchid family. As presently conceived, it is distributed across much of South America, Central America, Mexico and the West Indies, with one species (O. ensatum) extending into Florida.",
    categoryId: "2",
  },
  {
    id: 6,
    name: "Vanda",
    imageUrl:
      "https://www.gardeningknowhow.com/wp-content/uploads/2014/01/vanda-orchid.jpg",
    description: `Vanda, abbreviated in the horticultural trade as V., is a genus in the orchid family, Orchidaceae. There are about 80 species, and the genus is commonly cultivated for the marketplace. This genus and its allies are considered to be among the most specifically adapted of all orchids within the Orchidaceae.",`,
    categoryId: "3",
  },
];

export const categories = [
  {
    id: "",
    name: "All",
  },
  {
    id: "1",
    name: "Orchid I",
  },
  {
    id: "2",
    name: "Orchid II",
  },
  {
    id: "3",
    name: "Orchid III",
  },
];

export { color, data };
