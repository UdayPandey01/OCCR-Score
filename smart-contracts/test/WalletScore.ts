import { ethers } from "hardhat";
import { expect } from "chai";

describe("WalletScore", function () {
  let walletScore: any;
  let owner: any, scorer: any, user: any;

  beforeEach(async () => {
    [owner, scorer, user] = await ethers.getSigners();

    const WalletScore = await ethers.getContractFactory("WalletScore");
    walletScore = await WalletScore.deploy();
    await walletScore.waitForDeployment();
  });

  it("should allow owner to authorize a scorer", async () => {
    await walletScore.setScorer(scorer.address, true);
    expect(await walletScore.scorers(scorer.address)).to.equal(true);
  });

  it("should not allow non-owner to authorize a scorer", async () => {
    await expect(
      walletScore.connect(scorer).setScorer(user.address, true)
    ).to.be.revertedWith("Not the owner");
  });

  it("should allow authorized scorer to set score", async () => {
    await walletScore.setScorer(scorer.address, true);
    await walletScore.connect(scorer).setScore(user.address, 750);
    expect(await walletScore.getScore(user.address)).to.equal(750);
  });

  it("should not allow non-scorer to set score", async () => {
    await expect(
      walletScore.connect(user).setScore(user.address, 600)
    ).to.be.revertedWith("Not authorized scorer");
  });

  it("should not allow score > 1000", async () => {
    await walletScore.setScorer(scorer.address, true);
    await expect(
      walletScore.connect(scorer).setScore(user.address, 2000)
    ).to.be.revertedWith("Score exceeds max");
  });
});
