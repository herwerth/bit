import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCryptoDialogComponent } from './add-crypto-dialog.component';

describe('AddCryptoDialogComponent', () => {
  let component: AddCryptoDialogComponent;
  let fixture: ComponentFixture<AddCryptoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCryptoDialogComponent]
    });
    fixture = TestBed.createComponent(AddCryptoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
