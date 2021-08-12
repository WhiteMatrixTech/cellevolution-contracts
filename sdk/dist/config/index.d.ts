export interface ContractInfo {
    address: string;
    impl: string;
}
export interface Deployment {
    operator: string;
    CellEvolution: ContractInfo;
}
export declare enum Network {
    localhost = "localhost",
    bscTest = "bscTest",
    bscMain = "bscMain",
    rinkeby = "rinkeby"
}
export interface CellEvolutionDeployment {
    [network: string]: Deployment;
}
export declare const DeploymentInfo: CellEvolutionDeployment;
