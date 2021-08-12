export declare type BigNumberHex = string;
export interface ERC721TextMetadata {
    name: string;
    description: string;
}
export interface ERC721Metadata extends ERC721TextMetadata {
    image: string;
}
export interface MultiLanguageTextMetadata {
    chinese?: ERC721TextMetadata;
    english?: ERC721TextMetadata;
}
export interface EnrichedERC721Metadata extends ERC721Metadata {
    animation_url: string;
}
export declare enum RiverNFTType {
    Part = "Part",
    Pawn = "Pawn",
    Place = "Place",
    Scene = "Scene",
    Whole = "Whole"
}
export interface MediaInfo {
    imageUrl: string;
    gifUrl?: string;
    modelUrl: string;
    videoUrl: string;
}
export declare enum DealStatus {
    Closed = "Closed",
    Open = "Open"
}
export interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
}
export interface DealInfo extends Timestamped {
    dealStatus: DealStatus;
    dealId: number;
    tokenId: number;
    price: BigNumberHex;
    seller: string;
    buyer?: string;
}
export interface NFTAppearance {
    signature: string;
    hat: string;
    head: string;
    type: string;
    jacket: string;
    trousers: string;
    shoes: string;
}
export interface RiverNFT extends Timestamped, ERC721Metadata {
    locationId: number;
    owner: string;
    thumbnail: string;
    parts: number[];
    fusionCount: number;
    type: RiverNFTType;
    tokenId: number;
    mediaInfo: MediaInfo;
    dealInfo?: DealInfo;
    appearance?: NFTAppearance;
    multiLanguageTextMetadata: MultiLanguageTextMetadata;
}
export interface OwnerInfo {
    owner: string;
    nftCount: number;
}
