const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe("Game4", function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory("Game4");
    const game = await Game.deploy();
    const signer0 = ethers.provider.getSigner(0);
    const address0 = await signer0.getAddress();

    return { game, signer0, address0 };
  }
  it("should be a winner", async function () {
    const { game, signer0, address0 } = await loadFixture(
      deployContractAndSetVariables
    );

    await game.write(address0);
    await game.win(address0);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
