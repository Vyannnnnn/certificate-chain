import hre from "hardhat";

async function main() {
  const { ethers } = await hre.network.create("amoy");
  const Contract = await ethers.getContractFactory("CertificateRegistry");
  const contract = await Contract.deploy();
  await contract.waitForDeployment();
  console.log("Contract", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
