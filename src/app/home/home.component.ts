import { Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AddCryptoDialogComponent } from '../add-crypto-dialog/add-crypto-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tabs: any[] = [];

  constructor(private dialog: MatDialog) {
    this.initializeTabs();
  }

  initializeTabs() {
    this.tabs = [
      { label: 'First', content: 'Content 1' },
      { label: 'Second', content: 'Content 2' },
      { label: 'Third', content: 'Content 3' },
    ];
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  openAddCryptoDialog() {
    this.dialog.open(AddCryptoDialogComponent, {
      width: '213px',
    });
  }
}

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
})
export class HomeModule { }
