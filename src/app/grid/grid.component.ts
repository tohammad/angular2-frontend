import { Component, OnInit } from '@angular/core';
import {GridOptions, IFilter} from 'ag-grid/main';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

   public gridOptions:GridOptions;
    public showGrid:boolean;
    private rowData:any[];
    public rowCount:string;

  constructor() { 

    // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.showGrid = true;

  }
  private createRowData() {
        var rowData:any[] = [];

        for (var i = 0; i < 10000; i++) {
            
            rowData.push({
                name: "Akshan" + ' ' + 'Gupta',
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: 'Wizni Software Pvt Ltd',
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: 'India',
                continent: 'India',
                language: 'English',
                mobile: this.createRandomPhoneNumber(),
                landline: this.createRandomPhoneNumber()
            });
        }

        this.rowData = rowData;
    }

    private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }

    private onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }

    private onReady() {
        console.log('onReady');
        this.calculateRowCount();
    }

    public onQuickFilterChanged($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    }

    private countryCellRenderer(params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + "aaa" + ".png'>";
        return flag + " " + params.value;
    }

    //noinspection JSUnusedLocalSymbols
    private skillsCellRenderer(params) {
        var data = params.data;
        var skills = [];
        
        return skills.join(' ');
    }

    //noinspection JSUnusedLocalSymbols
    private percentCellRenderer(params) {
        var value = params.value;

        var eDivPercentBar = document.createElement('div');
        eDivPercentBar.className = 'div-percent-bar';
        eDivPercentBar.style.width = value + '%';
        if (value < 20) {
            eDivPercentBar.style.backgroundColor = 'red';
        } else if (value < 60) {
            eDivPercentBar.style.backgroundColor = '#ff9900';
        } else {
            eDivPercentBar.style.backgroundColor = '#00A000';
        }

        var eValue = document.createElement('div');
        eValue.className = 'div-percent-value';
        eValue.innerHTML = value + '%';

        var eOuterDiv = document.createElement('div');
        eOuterDiv.className = 'div-outer-div';
        eOuterDiv.appendChild(eValue);
        eOuterDiv.appendChild(eDivPercentBar);

        return eOuterDiv;
    }

    //noinspection JSUnusedLocalSymbols
    private getSkillFilter():any {
        return "";
    }

    //noinspection JSUnusedLocalSymbols
    private getProficiencyFilter():any {
        return "";
    }

    //noinspection JSUnusedLocalSymbols
    private getCountryFilterParams():any {
        return {
            cellRenderer: this.countryCellRenderer,
            cellHeight: 20
        }
    }

    private createRandomPhoneNumber() {
        var result = '+';
        for (var i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }


  ngOnInit() {
  }

}
