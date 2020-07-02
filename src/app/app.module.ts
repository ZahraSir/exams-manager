import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './layouts/admin/admin.module';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './modules/home';
import {LoginComponent} from './modules/login';
import {RegisterComponent} from './modules/register';
import {AlertComponent} from './modules/_components';
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './modules/_helpers';
import { ResponsableComponent } from './layouts/responsable/responsable.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

registerLocaleData(localeFr);





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ResponsableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BsDropdownModule.forRoot(),

  ],
  providers: [/*{provide: LOCALE_ID, useValue: 'fr'}*/,
   /* {
    provide: CalendarDateFormatter,
    useClass: CalendarCreateComponent,
  }*/,        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
