module.exports = {
  compilers: {
    solc: {
      version: "0.7.4", // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
      parser: "solcjs"  // Leverages solc-js purely for speedy parsing
    }
  },
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      // https://github.com/trufflesuite/truffle/issues/271#issuecomment-341651827
      gas: 2900000
    }
  }
};