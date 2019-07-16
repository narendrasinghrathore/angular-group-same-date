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

  data: ProductModelNamespace.Product[] = [
    {
      displayName: "ABC",
      productId: "2",
      productMasterLotId: "74",
      productCustomName: "",
      productInfo: {
        "id": 2,
        "name": "ABC",
        "manufacturerId": 2,
        "manufacturerName": "XYZ",
        "matrixId": 3,
        "matrixName": "test1"
      },
      lotInfo: {
        id: 74,
        productId: 2,
        productName: "ABC",
        lotNumber: "54545",
        expirationDate: "2021-05-31T00:00:00"
      },
      levelSettings: null,
      id: "051CDF9E5AE740D5942EE7A5B442E9E9",
      parentNodeId: "90C6F1D52C6A40B0876C387DFA302F85",
      nodeType: 5,
      children: null
    },
    {
      displayName: "test2",
      productId: "446",
      productMasterLotId: "9",
      productCustomName: "Test2",
      productInfo: {
        id: 446,
        name: "dsdfdgh",
        manufacturerId: 2,
        manufacturerName: "XYZ",
        matrixId: 3,
        matrixName: "test2M"
      },
      lotInfo: {
        id: 9,
        productId: 446,
        productName: "test2P",
        lotNumber: "48510",
        expirationDate: "2020-01-31T00:00:00"
      },
      levelSettings: null,
      id: "DFE2F8A906DB4C44A6E9029A50D18D1A",
      parentNodeId: "90C6F1D52C6A40B0876C387DFA302F85",
      nodeType: 5,
      children: null
    },
    {
      displayName: "test3",
      productId: "63",
      productMasterLotId: "390",
      productCustomName: "",
      productInfo: {
        id: 63,
        name: "Multiqual 1,2,3",
        manufacturerId: 2,
        manufacturerName: "XYZ",
        matrixId: 3,
        matrixName: "test3M"
      },
      lotInfo: {
        id: 390,
        productId: 63,
        productName: "test3P",
        lotNumber: "45810",
        expirationDate: "2021-04-30T00:00:00"
      },
      levelSettings: null,
      id: "920F5F5D2FEA45FABE2FC8F270DBC2DA",
      parentNodeId: "90C6F1D52C6A40B0876C387DFA302F85",
      nodeType: 5,
      children: null
    },
    {
      displayName: "test4",
      productId: "63",
      productMasterLotId: "391",
      productCustomName: "",
      productInfo: {
        id: 63,
        name: "Multiqual 1,2,3",
        manufacturerId: 2,
        manufacturerName: "XYZ",
        matrixId: 3,
        matrixName: "test3M"
      },
      lotInfo: {
        id: 390,
        productId: 63,
        productName: "test3P",
        lotNumber: "45810",
        expirationDate: "2021-04-30T00:00:00"
      },
      levelSettings: null,
      id: "920F5F5D2FEA45FABE2FC8F270DBC2DA",
      parentNodeId: "90C6F1D52C6A40B0876C387DFA302F85",
      nodeType: 5,
      children: null
    },
    {
      displayName: "test5",
      productId: "63",
      productMasterLotId: "392",
      productCustomName: "",
      productInfo: {
        id: 63,
        name: "Multiqual 1,2,3",
        manufacturerId: 2,
        manufacturerName: "XYZ",
        matrixId: 3,
        matrixName: "test3M"
      },
      lotInfo: {
        id: 390,
        productId: 63,
        productName: "test3P",
        lotNumber: "45810",
        expirationDate: "2021-04-30T00:00:00"
      },
      levelSettings: null,
      id: "920F5F5D2FEA45FABE2FC8F270DBC2DA",
      parentNodeId: "90C6F1D52C6A40B0876C387DFA302F85",
      nodeType: 5,
      children: null
    }
  ];


  filteredData: ProductModelNamespace.ProductFiltered[] = [];

  name = 'Angular';

  constructor(private ngzone: NgZone) { }

  ngOnInit() {
    this.filterData();

  }

  filterData() {
    this.ngzone.runOutsideAngular(() => {
      let dateRepeated: Date = null;
      this.data.forEach((item: ProductModelNamespace.Product) => {
        // if same date
        if (dateRepeated === item.lotInfo.expirationDate) {

          const itemIndex = this.filteredData
            .findIndex((i: ProductModelNamespace.ProductFiltered) =>
              i.date === dateRepeated);
          this.filteredData[itemIndex].list.push(item.productMasterLotId);
          return;
        }
        // If date is not matching then
        {

          dateRepeated = item.lotInfo.expirationDate;
          this.filteredData.push({
            date: dateRepeated,
            list: [item.productMasterLotId]
          });
        }
      });
    });
  }


}
