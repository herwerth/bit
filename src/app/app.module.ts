import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from './services/auth.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AddCryptoDialogComponent } from './add-crypto-dialog/add-crypto-dialog.component';
import { RegistrationComponent } from './registration/registration.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineChartModule } from './line-chart/line-chart.module';






@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    PagenotfoundComponent,
    AddCryptoDialogComponent,
    RegistrationComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    LineChartModule,




  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  export class AppModule {}
