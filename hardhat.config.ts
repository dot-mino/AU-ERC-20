import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();
const alchemy_key = process.env.ALCHEMY_URL;
const pkey = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
  sepolia: {
    url: alchemy_key ,
    accounts: [pkey]
  }
}
};

export default config;
