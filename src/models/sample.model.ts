export module ProductModelNamespace {

    export interface ProductInfo {
        id: number;
        name: string;
        manufacturerId: number;
        manufacturerName: string;
        matrixId: number;
        matrixName: string;
    }

    export interface LotInfo {
        id: number;
        productId: number;
        productName: string;
        lotNumber: string;
        expirationDate: string;
    }

    export interface Product {
        displayName: string;
        productId: string;
        productMasterLotId: string;
        productCustomName: string;
        productInfo: ProductInfo;
        lotInfo: LotInfo;
        levelSettings?: any;
        id: string;
        parentNodeId: string;
        nodeType: number;
        children?: any;
    }

    export interface ProductFiltered {
      date: string;
      list: string[];
    }

}