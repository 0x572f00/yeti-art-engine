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
    // GENESIS 525
    growEditionSizeTo: 241,
    layersOrder: [
      { name: "Background.genesis" },
      { name: "Snow.genesis" },
      { name: "Shadow" },
      { name: "Genesis.Fur.white" },
      { name: "Genesis.Cyber" },
      { name: "Genesis.Eyes" },
      { name: "Genesis.Accessory" },
    ],
  },
  {
    growEditionSizeTo: 482,
    layersOrder: [
      { name: "Background.genesis" },
      { name: "Snow.genesis" },
      { name: "Shadow" },
      { name: "Genesis.Fur.blue" },
      { name: "Genesis.Cyber" },
      { name: "Genesis.Eyes" },
      { name: "Genesis.Accessory" },
    ],
  },

  // ski 8%
  {
    growEditionSizeTo: 503,
    layersOrder: [
      { name: "Background.genesis" },
      { name: "Snow.genesis" },
      { name: "Genesis.Fur.white" },
      { name: "Genesis.Cyber" },
      { name: "Genesis.Eyes" },
      { name: "Genesis.Accessory" },
      { name: "Genesis.Ski.white" },
    ],
  },
  {
    growEditionSizeTo: 525,
    layersOrder: [
      { name: "Background.genesis" },
      { name: "Snow.genesis" },
      { name: "Genesis.Fur.blue" },
      { name: "Genesis.Cyber" },
      { name: "Genesis.Eyes" },
      { name: "Genesis.Accessory" },
      { name: "Genesis.Ski.blue" },
    ],
  },


  // {
  //   // laser
  //   growEditionSizeTo: 525,
  //   layersOrder: [
  //     { name: "Background.genesis" },
  //     { name: "Snow.genesis" },
  //     { name: "Shadow" },
  //     { name: "Genesis.Fur" },
  //     { name: "Genesis.Cyber" },
  //     { name: "Genesis.Eyes" },
  //     { name: "Genesis.Accessory" },
  //   ],
  // },

  // end Genesis

  // EARTH 248 - 4 * 62

  {
    growEditionSizeTo: 587,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Shadow" },
      { name: "Earth.Fur.Earth" },
      { name: "Earth.Leaf.Earth" },
      { name: "Earth.Flowers.Earth" },
      { name: "Earth.Lance.Earth" },
      { name: "Eyes.white" },
      { name: "Accessory" },
    ],
  },
  {
    growEditionSizeTo: 649,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Shadow" },
      { name: "Earth.Fur.Grass" },
      { name: "Earth.Leaf.Grass" },
      { name: "Earth.Flowers.Grass" },
      { name: "Earth.Lance.Grass" },
      { name: "Eyes.white" },
      { name: "Accessory" },
    ],
  },
  {
    growEditionSizeTo: 711,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Shadow" },
      { name: "Earth.Fur.Polly" },
      { name: "Earth.Leaf.Polly" },
      { name: "Earth.Flowers.Polly" },
      { name: "Earth.Lance.Polly" },
      { name: "Eyes.white" },
      { name: "Accessory" },
    ],
  },
  {
    growEditionSizeTo: 773,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Shadow" },
      { name: "Earth.Fur.Yellow" },
      { name: "Earth.Leaf.Yellow" },
      { name: "Earth.Flowers.Yellow" },
      { name: "Earth.Lance.Yellow" },
      { name: "Eyes.white" },
      { name: "Accessory" },
    ],
  },

  // SOLANA - 496

    {
      growEditionSizeTo: 872,
      layersOrder: [
        { name: "Background.cold" },
        { name: "Shadow" },
        { name: "Solana.b1" },
        { name: "Solana.b1.eyes" },
        { name: "Solana.b1.accessory" },
      ],
    },
    {
      growEditionSizeTo: 971,
      layersOrder: [
        { name: "Background.cold" },
        { name: "Shadow" },
        { name: "Solana.b2" },
        { name: "Solana.b2.eyes" },
        { name: "Solana.b2.accessory" },
      ],
    },
    {
      growEditionSizeTo: 1070,
      layersOrder: [
        { name: "Background.cold" },
        { name: "Shadow" },
        { name: "Solana.b3" },
        { name: "Solana.b3.eyes" },
        { name: "Solana.b3.accessory" },
      ],
    },
    {
      growEditionSizeTo: 1169,
      layersOrder: [
        { name: "Background.cold" },
        { name: "Shadow" },
        { name: "Solana.b4" },
        { name: "Solana.b4.eyes" },
        { name: "Solana.b4.accessory" },
      ],
    },
    {
      growEditionSizeTo: 1268,
      layersOrder: [
        { name: "Background.cold" },
        { name: "Shadow" },
        { name: "Solana.b5" },
        { name: "Solana.b5.eyes" },
        { name: "Solana.b5.accessory" },
      ],
    },
    // laser 5%
    // ...


    // FIRE

    // {
    //   growEditionSizeTo: 1021,
    //   layersOrder: [
    //     { name: "Background.warm" },
    //     { name: "Shadow" },
    //     { name: "Fur.fire" },
    //     { name: "Eyes.white" },
    //     { name: "Accessory.fire" },
    //   ],
    // },

  // WATER


  
  // AIR



// dispatch -> 1479

// colored fur: 492 = 164 * 3

  // {
  //   // YETI GREEN
  //   growEditionSizeTo: 1103,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Snow" },
  //     { name: "Accessory.l0" },
  //     { name: "Shadow" },
  //     { name: "Fur.surgeGreen" },
  //     { name: "Eyes.surgeGreen" },
  //     { name: "Accessory" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 1185,
  //   layersOrder: [
  //     { name: "Background.warm" },
  //     { name: "Accessory.l0" },
  //     { name: "Shadow" },
  //     { name: "Fur.surgeGreen" },
  //     { name: "Eyes.surgeGreen" },
  //     { name: "Accessory" },
  //   ],
  // },

  // {
  //   // YETI BLUE
  //   growEditionSizeTo: 1267,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Snow" },
  //     { name: "Accessory.l0" },
  //     { name: "Shadow" },
  //     { name: "Fur.oceanBlue" },
  //     { name: "Eyes.oceanBlue" },
  //     { name: "Accessory" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 1349,
  //   layersOrder: [
  //     { name: "Background.warm" },
  //     { name: "Accessory.l0" },
  //     { name: "Shadow" },
  //     { name: "Fur.oceanBlue" },
  //     { name: "Eyes.oceanBlue" },
  //     { name: "Accessory" },
  //   ],
  // },


  // {
  //   // YETI PURPLE
  //   growEditionSizeTo: 1431,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Snow" },
  //     { name: "Accessory.l0" },
  //     { name: "Shadow" },
  //     { name: "Fur.purpleDino" },
  //     { name: "Eyes.purpleDino" },
  //     { name: "Accessory" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 1513,
  //   layersOrder: [
  //     { name: "Background.warm" },
  //     { name: "Accessory.l0" },
  //     { name: "Shadow" },
  //     { name: "Fur.purpleDino" },
  //     { name: "Eyes.purpleDino" },
  //     { name: "Accessory" },
  //   ],
  // },


// dispatch -> 987


  {
    // YETI
    // fur white
    growEditionSizeTo: 1982,
    layersOrder: [
      { name: "Background" },
      { name: "Snow" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.white" },
      { name: "Eyes.white" },
      { name: "Accessory" },
    ],
  },
  {
    // laser 5%
    growEditionSizeTo: 2006,
    layersOrder: [
      { name: "Background" },
      { name: "Snow" },
      { name: "Accessory.l0" },
      { name: "Shadow.laser" },
      { name: "Fur.laser" },
      { name: "Accessory" },
    ],
  },

  {
    // 
    // warm
    growEditionSizeTo: 2476,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Accessory.l0" },
      { name: "Shadow" },
      { name: "Fur.white" },
      { name: "Eyes.white" },
      { name: "Accessory" },
    ],
  },
  {
    // laser 5%
    growEditionSizeTo: 2500,
    layersOrder: [
      { name: "Background.warm" },
      { name: "Accessory.l0" },
      { name: "Shadow.laser" },
      { name: "Fur.laser" },
      { name: "Accessory" },
    ],
  },

];

const shuffleLayerConfigurations = false;

const debugLogs = false;

// 1200

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
