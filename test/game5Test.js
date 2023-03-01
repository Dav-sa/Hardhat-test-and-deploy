const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe("Game5", function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    const signer0 = ethers.provider.getSigner(0);
    const address0 = await signer0.getAddress();

    return { game, signer0, address0 };
  }
  it("should be a winner", async function () {
    const { game, signer0, address0 } = await loadFixture(
      deployContractAndSetVariables
    );

    await game.connect(signer0).win();

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
