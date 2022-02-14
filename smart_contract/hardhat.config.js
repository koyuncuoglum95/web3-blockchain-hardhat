require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/5KSovvSkcmz8fu6p7T8kfCNQjsVRW2IP', // achemy key
      accounts: ['63ca03322822f20463cfc6b908e07c1c2f1e948e5911becb94a05f2881a5b322'], // metamask private key
    },
  },
};