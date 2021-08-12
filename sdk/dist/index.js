"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellEvolution__factory = exports.cellEvolutionProvider = void 0;
const ethers_cellevolution_client_1 = require("./client/ethers-cellevolution-client");
function cellEvolutionProvider(mock = false) {
    if (mock) {
        throw 'Mock version deprecated';
    }
    else {
        return new ethers_cellevolution_client_1.EtherCellEvolutionClient();
    }
}
exports.cellEvolutionProvider = cellEvolutionProvider;
__exportStar(require("./model"), exports);
__exportStar(require("./util"), exports);
var typechain_1 = require("./typechain");
Object.defineProperty(exports, "CellEvolution__factory", { enumerable: true, get: function () { return typechain_1.CellEvolutionNewWorld__factory; } });
__exportStar(require("./config"), exports);
//# sourceMappingURL=index.js.map