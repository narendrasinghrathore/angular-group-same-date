export module ProductModelNamespace {

     export interface InstrumentInfo {
        id: number;
        name: string;
        manufacturerId: number;
        manufacturerName: string;
    }

    export interface ParentInstrument {
        displayName: string;
        instrumentId: string;
        instrumentCustomName: string;
        instrumentSerial: string;
        instrumentInfo: InstrumentInfo;
        levelSettings?: any;
        id: string;
        parentNodeId: string;
        parentNode?: any;
        nodeType: number;
        children?: any;
    }

    export interface RootObject {
        id: number;
        productId: number;
        productName: string;
        lotNumber: string;
        expirationDate: string;
        actionableType: number;
        parentInstrument: ParentInstrument;
    }

    export interface ProductFiltered {
      date: string;
      list: Array<{[key: string] : any}>[];
    }

}