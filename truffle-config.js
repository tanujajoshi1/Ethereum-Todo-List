module.exports = {
  networks: {
    development: {     //connecting to ganache
      host: "127.0.0.1",
      port: 7045,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}