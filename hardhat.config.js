require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/PZFAnnU6UVYha_YXMFPq65D2IErPe9Xs',
      accounts: ['6e9a627337511f095f915bb962cfb6013280286bb269e5c38d4ecd667caa460e'],
    },
  },
};