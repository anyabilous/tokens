require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider");

const MNEMONIC = process.env.MNEMONIC
const INFURA = process.env.INFURA

module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 8545,
   network_id: "*"
  },
  rinkeby: {
      provider: function() { 
       return new HDWalletProvider(MNEMONIC, INFURA);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  }
 }
};