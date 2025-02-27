import { Component, ElementRef, AfterViewInit } from '@angular/core';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import { HyperFormula } from 'hyperformula';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  standalone: true,
  styleUrls: ['./spreadsheet.component.css'],
})
export class SpreadsheetComponent implements AfterViewInit {
  private hot!: Handsontable;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const container = this.elRef.nativeElement.querySelector('#spreadsheet');

    // Initialize HyperFormula for formula calculations
    const hfInstance = HyperFormula.buildEmpty();

    this.hot = new Handsontable(container, {
      data: Array(50)
        .fill(null)
        .map(() => Array(26).fill('')),
      rowHeaders: true,
      colHeaders: true,
      formulas: {
        engine: hfInstance, // Enable formulas
      },
      licenseKey: 'non-commercial-and-evaluation',
    });
  }
}
