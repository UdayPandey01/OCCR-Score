import { ethers } from "hardhat";

async function main() {
  const WalletScore = await ethers.getContractFactory("WalletScore");
  const contract = await WalletScore.deploy();

  await contract.waitForDeployment();

  console.log("WalletScore deployed at:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
