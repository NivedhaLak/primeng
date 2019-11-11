import { Component ,ElementRef } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SelectItem } from 'primeng/api';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownList: any[]=[];
   selectedItems: any[] = [];
   dropdownSettings : IDropdownSettings = {};
   cars: SelectItem[];

       selectedCars1: string[] = [];

       selectedCars2: SelectItem[] = [];

       items: SelectItem[];

       item: string;
  constructor(private eleRef: ElementRef) {
    this.cars = [
              {label: 'Audi', value: 'Audi111'},
              {label: 'BMW', value: 'BMW1'},
              {label: 'Fiat', value: 'Fiat2'},
              {label: 'Ford', value: 'Ford4'},
              {label: 'Honda', value: 'Honda6'},
              {label: 'Jaguar', value: 'Jaguar8'},
              {label: 'Mercedes', value: 'Mercedes9'},
              {label: 'Renault', value: 'Renault4'},
              {label: 'VW', value: 'VW4'},
              {label: 'Volvo', value: 'Volvo1'},
          ];

          // this.items = [];
          // for (let i = 0; i < 10000; i++) {
          //     this.items.push({label: 'Item ' + i, value: 'Item ' + i});
          // }
  };
   ngOnInit() {
     this.dropdownList = [
       { 'item_id': '1', 'item_text': 'Mumbai' ,'select':'1'},
       { 'item_id': '2', 'item_text': 'Bangaluru' ,'select':'1'},
       { 'item_id': '3', 'item_text': 'Pune' ,'select':'1'},
       { 'item_id': '4', 'item_text': 'Navsari','select':'1' },
       { 'item_id': '5', 'item_text': 'New Delhi' ,'select':'1'}
     ];
     this.selectedItems = [
       { 'item_id': '3', 'item_text': 'Pune','select':'1'},
       { 'item_id': '4', 'item_text': 'Navsari' ,'select':'2'}
     ];
     this.dropdownSettings = {
       singleSelection: false,
       idField: 'item_id',
       textField: 'item_text',
       selectAllText: 'Select All',
       unSelectAllText: 'UnSelect All',
       itemsShowLimit: 100,
       allowSearchFilter: true
     };
     // this.handleClick();
   }
   onItemSelect(item: any) {
     this.selectedItems=[];
     alert("in onItemSelect");
     console.log(item);
   }
   onSelectAll(items: any) {
     console.log(items);
   }

   handleClick($event) {
     $event.srcElement.className = $event.srcElement.className+" fa fa-check";
     }
      // smallBox.dispatchEvent('click');
    

    onchangeevent($event){
      alert("in onchangeevent($event)");
    }
}
