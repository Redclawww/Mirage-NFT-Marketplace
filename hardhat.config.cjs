
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.22',
  networks: {
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/68fiDt_b91TBX3e3XUoWJgiZhLNlEPkd',
      accounts: ['30886755578b23b2e093c401adc7b92ba16aadd9ca1c92717c92cd4618040496']
    }
  }

}