import "dotenv/config";
import type { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-mocha";
import "@nomicfoundation/hardhat-ethers-chai-matchers";
import "@nomicfoundation/hardhat-network-helpers";

import hardhatEthers from "@nomicfoundation/hardhat-ethers";
import hardhatMocha from "@nomicfoundation/hardhat-mocha";
import hardhatEthersChaiMatchers from "@nomicfoundation/hardhat-ethers-chai-matchers";
import hardhatNetworkHelpers from "@nomicfoundation/hardhat-network-helpers";

const config: HardhatUserConfig = {
  solidity: "0.8.20",

  plugins: [
    hardhatEthers,
    hardhatMocha,
    hardhatEthersChaiMatchers,
    hardhatNetworkHelpers,
  ],

  networks: {
    amoy: {
      type: "http",
      url: process.env.RPC_URL || "",
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
