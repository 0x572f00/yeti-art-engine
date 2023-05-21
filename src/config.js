const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "WATY";
const description = "lorum ipsum dolor si amet";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "WATY",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  creators: [
    {
      address: '5mtPkwDu4KVLnRGiSkEaiouaBJwvEp8813HuBmBpH1Rj',
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    // GENESIS
    growEditionSizeTo: 263,
    layersOrder: [
      { name: "Background.genesis" },
      { name: "Snow.genesis" },
      { name: "Shadow" },
      { name: "Fur.arctic" },
      { name: "Eyes.arctic" },
      // { name: "Accessory.genesis" },
    ],
  },
  {
    // GENESIS
    growEditionSizeTo: 525,
    layersOrder: [
      { name: "Background.genesis" },
      { name: "Snow.genesis" },
      { name: "Shadow" },
      { name: "Fur.greyBlue" },
      { name: "Eyes.greyBlue" },
      // { name: "Accessory.genesis" },
    ],
  },

  {
    // YETI
    growEditionSizeTo: 850,
    layersOrder: [
      { name: "Background" },
      { name: "Snow" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.surgeGreen" },
      { name: "Eyes.surgeGreen" },
    ],
  },
  {
    growEditionSizeTo: 1175,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.surgeGreen" },
      { name: "Eyes.surgeGreen" },
    ],
  },

  {
    // YETI
    growEditionSizeTo: 1375,
    layersOrder: [
      { name: "Background" },
      { name: "Snow" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.oceanBlue" },
      { name: "Eyes.oceanBlue" },
    ],
  },
  {
    // YETI
    growEditionSizeTo: 1575,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.oceanBlue" },
      { name: "Eyes.oceanBlue" },
    ],
  },


  {
    // YETI
    growEditionSizeTo: 1650,
    layersOrder: [
      { name: "Background" },
      { name: "Snow" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.purpleDino" },
      { name: "Eyes.purpleDino" },
    ],
  },

  {
    // YETI
    growEditionSizeTo: 1750,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.purpleDino" },
      { name: "Eyes.purpleDino" },
    ],
  },

  {
    // YETI
    growEditionSizeTo: 2124,
    layersOrder: [
      { name: "Background" },
      { name: "Snow" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.white" },
      { name: "Eyes.white" },
      // { name: "Accessory" },
    ],
  },
  {
    // YETI laser
    growEditionSizeTo: 2174,
    layersOrder: [
      { name: "Background" },
      { name: "Snow" },
      { name: "Accessory.l0" },
      { name: "Shadow.laser" },
      { name: "Fur.laser" },
      // { name: "Accessory" },
    ],
  },
    {
      growEditionSizeTo: 2499,
      layersOrder: [
        { name: "Background" },
        { name: "Snow" },
        { name: "Accessory.l0" },
        { name: "Shadow" },
        { name: "Fur.white" },
        { name: "Eyes.white" },
        // { name: "Accessory" },
      ],
  },

];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 600,
  height: 600,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  // brightness: "80%",
  // static: false,
  // default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
