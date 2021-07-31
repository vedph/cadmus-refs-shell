import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusMaterialModule } from '@myrmidon/cadmus-material';
import { CadmusRefsExternalIdsModule } from '@myrmidon/cadmus-refs-external-ids';
import { CommonModule } from '@angular/common';
import { CadmusCoreModule } from '@myrmidon/cadmus-core';
import { CadmusStateModule } from '@myrmidon/cadmus-state';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';
import { CadmusPartRefsUiModule } from 'projects/myrmidon/cadmus-part-refs-ui/src/public-api';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExternalIdsPgComponent } from './external-ids-pg/external-ids-pg.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ExternalIdsPgComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'refs/external-ids', component: ExternalIdsPgComponent },
        { path: '**', component: HomeComponent },
      ],
      {
        initialNavigation: 'enabled',
        useHash: true,
        relativeLinkResolution: 'legacy',
      }
    ),
    // Cadmus
    CadmusUiModule,
    CadmusMaterialModule,
    CadmusRefsExternalIdsModule,
    CadmusCoreModule,
    CadmusMaterialModule,
    CadmusStateModule,
    CadmusUiModule,
    CadmusUiPgModule,
    CadmusPartRefsUiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
