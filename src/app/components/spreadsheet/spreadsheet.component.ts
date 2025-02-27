import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Handsontable from 'handsontable/base';
import 'handsontable/dist/handsontable.full.css';
import HyperFormula from 'hyperformula';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  standalone: true,
  styleUrls: ['./spreadsheet.component.css'],
})
export class SpreadsheetComponent implements AfterViewInit {
  @ViewChild('hotTable', { static: true }) hotTable!: ElementRef;

  private hot!: Handsontable;

  ngAfterViewInit() {
    if (!this.hotTable) return; // Ensure the container exists

    this.hot = new Handsontable(this.hotTable.nativeElement, {
      data: Array(50)
        .fill(null)
        .map(() => Array(26).fill('')),
      rowHeaders: true,
      colHeaders: Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(65 + i)
      ),
      formulas: { engine: HyperFormula.buildEmpty() },
      width: '100%',
      height: '90vh', // Takes full screen height
      manualRowResize: true,
      manualColumnResize: true,
      stretchH: 'all',
      contextMenu: true, // Enable right-click options
      licenseKey: 'non-commercial-and-evaluation',
    });
  }

  addRow() {
    this.hot.alter('insert_row_below', this.hot.countRows());
  }

  addColumn() {
    this.hot.alter('insert_col_end', this.hot.countCols());
  }
}
