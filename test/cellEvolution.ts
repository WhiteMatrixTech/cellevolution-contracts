import chai, {expect} from 'chai';
import {ethers, network} from 'hardhat';
import {solidity} from 'ethereum-waffle';
import {BigNumber, ContractFactory, utils, Event} from 'ethers';
import {CellEvolutionNewWorld} from '../sdk/src/typechain';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import pino from 'pino';

chai.use(solidity);
const ONE_ETH = utils.parseEther('1');
const Logger = pino();

describe('RiverBoxImpl with Proxy', () => {
  let operator: SignerWithAddress;
  let accountA: SignerWithAddress;
  let accountB: SignerWithAddress;
  let accountC: SignerWithAddress;
  let RiverBoxFactory: ContractFactory;
  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

  before('setup accounts', async () => {
    [operator, accountA, accountB, accountC] = await ethers.getSigners();
  });

  describe('test base Information', () => {
    let cellEvolution: CellEvolutionNewWorld;

    beforeEach('deploy and init contract', async () => {
      Logger.info('deploy cellEvolutionNewWorld proxy');
      cellEvolution = (await (
        await ethers.getContractFactory('CellEvolutionNewWorld')
      )
        .connect(operator)
        .deploy()) as unknown as CellEvolutionNewWorld;
      Logger.info(`deployed at ${cellEvolution.address}`);
    });

    it('check dnamerge', async () => {
      await cellEvolution.dnamerge(1, 1, 1, 1, 1, 1, 1, 1, '1');
      console.log((await cellEvolution.getCellHistory(1)));
      const cellHistroy=await cellEvolution.getCellHistory(1);

      expect(cellHistroy.id).equal(BigNumber.from(1));
      expect(cellHistroy.cellno).equal(BigNumber.from(1));
      expect(cellHistroy.adaption).equal(BigNumber.from(1));
      expect(cellHistroy.surviveability).equal(BigNumber.from(1));
      expect(cellHistroy.division).equal(BigNumber.from(1));
      expect(cellHistroy.environment).equal(BigNumber.from(1));
      expect(cellHistroy.day).equal(BigNumber.from(1));
      expect(cellHistroy.totalscore).equal(BigNumber.from(1));
      expect(cellHistroy.worldtitle).equal('evolutionary world');
      expect(cellHistroy.startcellid).equal(BigNumber.from(0));
      expect(cellHistroy.endcellid).equal(BigNumber.from(1));
      expect(cellHistroy.cellsdetail).equal(`1,${operator.address.toLowerCase()},1,1,1,1,1,1,1,1,1|`);
      expect(cellHistroy.version).equal(BigNumber.from(0));
    });

    it('check newinheritance', async () => {
      await cellEvolution.newinheritance();
      expect(await cellEvolution.inheritanceno()).to.equal(1001);
      //console.log(await cellEvolution.inheritance())
    });
  });
});
