import {
  Component, ChangeDetectionStrategy,
  NgZone
} from '@angular/core';
import { ProductModelNamespace } from '../models/sample.model';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy
    .OnPush
})
export class AppComponent {

  selectedItem: any;
  data: ProductModelNamespace.RootObject[]
    = [
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "7C5D003690ED4560B8B23D33BF7EF971",
          "parentNodeId": "59D36FED7570493B95196A40EB4BCBD2",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "E4C973D128CA40DDB72304EBBB53328D",
          "parentNodeId": "875B1172657A40F298AF94759049C14F",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "1775AA62355F43719CB26A6EE9DD9F94",
          "parentNodeId": "9656D2779A994AF6A6D9800F55C2D267",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "AF39DEE940154B2FB340B39F07C7C191",
          "parentNodeId": "17C54027F2D3460DB2FE42B8E0C13960",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "93F7844E8A5D413694E1833A12326532",
          "parentNodeId": "F57E21D90A4E4014B98C82B6AE636589",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 405,
        "productId": 405,
        "productName": "Diabetes (Liquichek Vista)",
        "lotNumber": "38530V",
        "expirationDate": "2019-02-28T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "D-10",
          "instrumentId": "2749",
          "instrumentCustomName": "",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "5119981C10AC4865B92C6DA1C846B3E7",
          "parentNodeId": "4CCC0DEF16574B0B8508637B3EE5FF53",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "A0C151F5DCAD4C78923D4C0DFD61D207",
          "parentNodeId": "4CCC0DEF16574B0B8508637B3EE5FF53",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "A0C151F5DCAD4C78923D4C0DFD61D207",
          "parentNodeId": "4CCC0DEF16574B0B8508637B3EE5FF53",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "96A6DABC8F454FE79C2199F853C93BF4",
          "parentNodeId": "E1D726804D80498290577DB982631ED9",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "83326A03FA2249D99C297C043C277235",
          "parentNodeId": "A00006C745714F1689B8F7F814BD61BF",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "B21F3E669C3941B8993DD25D921F87C8",
          "parentNodeId": "8C22D858310C481CA4CD5B73331B60A3",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 20,
        "productId": 20,
        "productName": "Immunology",
        "lotNumber": "66370",
        "expirationDate": "2019-01-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "A0C151F5DCAD4C78923D4C0DFD61D207",
          "parentNodeId": "4CCC0DEF16574B0B8508637B3EE5FF53",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "ABFCA83BB596442D80AB8FB9F0673245",
          "parentNodeId": "4B4A9BD0634640AF8ECC741D7F50A235",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "4E506FAD6BD5407DA40E0C7AE2E605F1",
          "parentNodeId": "D0C33665BB064213A2CB10455153A811",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "7D1D8A985B57468C8D4D9E09F91D79FF",
          "parentNodeId": "BC1E7791828742EFA91AA636A04B56DE",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "9763370153C744C5A08FAECD48E5D455",
          "parentNodeId": "A7224BFD24FA475986AE8A7D75A519F5",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "D341DA3B3FFA4DA89DAB92E27777BB59",
          "parentNodeId": "0BDA9121C52446B8AB370E8C15C5FDD2",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "964987DCED36489186175A45F1764FB4",
          "parentNodeId": "EFF2DA6399044A2AB07070EC7FE1BD7F",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "AB06F3EDF8E540A2AA5B6F7A47B62F7B",
          "parentNodeId": "70920CB9346D488C8ED076F2090C47A7",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 405,
        "productId": 405,
        "productName": "Diabetes (Liquichek Vista)",
        "lotNumber": "38530V",
        "expirationDate": "2019-02-28T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "A0C151F5DCAD4C78923D4C0DFD61D207",
          "parentNodeId": "4CCC0DEF16574B0B8508637B3EE5FF53",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Instrument",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Instrument",
          "instrumentSerial": "000089",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "352868658E964D99A2978CBDEE7DC0A9",
          "parentNodeId": "1A31AEA2E1EA4C14B4B15406978F9A43",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "014F235CD7B148CABCB66C14B4577BF9",
          "parentNodeId": "CC61D9F16F48453084C2BFDBE06E4C94",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "5D7C506B918846A988AB28BAAE4705B2",
          "parentNodeId": "AFEF24A9C9344F83A6F572E84947F3C0",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "01A0B4D1770649979C4C800B46585039",
          "parentNodeId": "17DA35E3442B4971A477A3B804AE0B93",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "E53AA559D3F94134B77193010E080955",
          "parentNodeId": "7AD246EE516E440A981CC69F41FA8AF8",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "0CD6309943D849E9A999E307AF6AE3F7",
          "parentNodeId": "699B51F09CA44C2D97D65E0725320821",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "6F7AB5A68DB742D194B719AB6158C17A",
          "parentNodeId": "98DE2FEDE4D041F7AB94BFF64EB07E6C",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "D1ACD9F12F494EC1BC8EEED203C95F9A",
          "parentNodeId": "4E7BE41BE99D4F3E8763CC0227084CBA",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      },
      {
        "id": 17,
        "productId": 17,
        "productName": "Hemoglobin A2",
        "lotNumber": "34480",
        "expirationDate": "2019-03-31T00:00:00",
        "actionableType": 0,
        "parentInstrument": {
          "displayName": "Bio-Rad D10 Test",
          "instrumentId": "2749",
          "instrumentCustomName": "Bio-Rad D10 Test",
          "instrumentSerial": "0000",
          "instrumentInfo": {
            "id": 2749,
            "name": "D-10",
            "manufacturerId": 2,
            "manufacturerName": "Bio-Rad"
          },
          "levelSettings": null,
          "id": "C66A4076D0914CB6B1B8333C2449F8DE",
          "parentNodeId": "0AE8740E70AA4192B45F7710DAD4CD2E",
          "parentNode": null,
          "nodeType": 4,
          "children": null
        }
      }
    ];


  filteredData: ProductModelNamespace.ProductFiltered[] = [];

  name = 'Angular';

  multipleItems:string;

  constructor(private ngzone: NgZone) { }

  ngOnInit() {
    this.filterData();

  }

  filterData() {
    this.ngzone.runOutsideAngular(() => {
      let dateRepeated: string = null;
      this.data.forEach((item: ProductModelNamespace.RootObject) => {

        dateRepeated = item.expirationDate;

        const itemIndex = this.filteredData
          .findIndex((i: ProductModelNamespace.ProductFiltered) =>
            i.date === dateRepeated);

        // if same date
        if (itemIndex > -1) {
          this.filteredData[itemIndex]
          .list
          .push(
            {  id: item.parentInstrument.id, name: item.productName });
          return;
        }
        // If date is not matching
        this.filteredData.push({
          date: dateRepeated,
          list: [{ id: item.parentInstrument.id, name: item.productName,  }],

        });




      });
    });
  }

  getData(id) {
    this.checkIfMultiple(id);
    const index = this.data.findIndex(
      item => item.parentInstrument.id === id);

    if (index > -1) {
      this.selectedItem = this.data[index]
    }
  }

  /**
   * Don't use this , this method is demo purpose to let you know that id is not 
   * unique, we would require a unique id, the given data doesn't have any id.
   * Most of id's are repeated
   */
  checkIfMultiple(id) {
    const arr = this.data.filter(item => item.parentInstrument.id === id);
    if (arr.length > 1) {
    this.multipleItems  = `Selected item has multiple occurence in given data.
      Total: ${arr.length}`;

      return;
    }
    this.multipleItems = `Selected item has only one occurence in given data`;
  }


}
