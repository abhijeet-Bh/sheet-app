import { Component } from '@angular/core';
import { SpreadsheetComponent } from './components/spreadsheet/spreadsheet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpreadsheetComponent],
  template: `<app-spreadsheet></app-spreadsheet>`,
})
export class AppComponent {}
