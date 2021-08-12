"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtherCellEvolutionClient = void 0;
const typechain_1 = require("../typechain");
class EtherCellEvolutionClient {
    constructor() {
        this._waitConfirmations = 5;
    }
    connectProvider(address, provider) {
        this.provider = provider;
        this.cellEvolution = typechain_1.CellEvolutionNewWorld__factory.connect(address, this.provider);
        return this;
    }
    connectSigner(signer) {
        this.signer = signer;
        return this;
    }
    setWaitConfirmations(num) {
        this._waitConfirmations = num;
    }
    contract() {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return Promise.resolve(this.cellEvolution);
    }
    inheritance(config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.inheritance({ ...config });
    }
    getCellHistory(cellHistoryId, config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.getCellHistory(cellHistoryId, { ...config });
    }
    getCellDB(cellDBId, config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.getCellDB(cellDBId, { ...config });
    }
    isOpen(config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.isOpen({ ...config });
    }
    admAdd(config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.admAdd({ ...config });
    }
    totalcell(config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.totalcell({ ...config });
    }
    historyno(config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.historyno({ ...config });
    }
    version(config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.version({ ...config });
    }
    inheritanceno(config) {
        if (this.provider === undefined || this.cellEvolution === undefined) {
            return Promise.reject('need to connect a valid provider');
        }
        return this.cellEvolution.inheritanceno({ ...config });
    }
    async setIsOpen(isopen, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.setIsOpen(isopen, { ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .setIsOpen(isopen, { gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async setCellno(cellno, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.setCellno(cellno, { ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .setCellno(cellno, { gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async sethistoryno(historyno, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.sethistoryno(historyno, { ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .setCellno(historyno, { gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async setVersion(versionno, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.setVersion(versionno, { ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .setVersion(versionno, { gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async setHomeworld(worldId, newtitle, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.setHomeworld(worldId, newtitle, { ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .setHomeworld(worldId, newtitle, {
            gasLimit: gas.mul(13).div(10),
            ...config
        });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async writeworld(cellHistory, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.writeworld(cellHistory, { ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .writeworld(cellHistory, { gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async writecell(cellEvolution, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.writecell(cellEvolution, { ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .writecell(cellEvolution, { gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async dnamerge(id, cellno, adaption, surviveability, division, environment, day, totoalscore, finaltitle, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.dnamerge(id, cellno, adaption, surviveability, division, environment, day, totoalscore, finaltitle, { ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .dnamerge(id, cellno, adaption, surviveability, division, environment, day, totoalscore, finaltitle, { gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async newinheritance(config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.newinheritance({ ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .newinheritance({ gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async worldtitlecheck(config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.worldtitlecheck({ ...config });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .worldtitlecheck({ gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
    async checkdeath(cellno, adaption, surviveability, division, config = {}) {
        if (this.provider === undefined ||
            this.cellEvolution === undefined ||
            this.signer === undefined) {
            return Promise.reject('need to connect a valid provider and signer');
        }
        const gas = await this.cellEvolution
            .connect(this.signer)
            .estimateGas.checkdeath(cellno, adaption, surviveability, division, {
            ...config
        });
        const transaction = await this.cellEvolution
            .connect(this.signer)
            .checkdeath(cellno, adaption, surviveability, division, {
            gasLimit: gas.mul(13).div(10),
            ...config
        });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }
}
exports.EtherCellEvolutionClient = EtherCellEvolutionClient;
//# sourceMappingURL=ethers-cellevolution-client.js.map