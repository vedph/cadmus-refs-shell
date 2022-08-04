import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgToolsModule } from '@myrmidon/ng-tools';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

// Cadmus modules
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { AuthJwtLoginModule } from '@myrmidon/auth-jwt-login';

import { ExternalIdsPartComponent } from './external-ids-part/external-ids-part.component';
import { CadmusRefsAssertedIdsModule } from '@myrmidon/cadmus-refs-asserted-ids';

@NgModule({
  declarations: [ExternalIdsPartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    // Cadmus
    NgToolsModule,
    AuthJwtLoginModule,
    CadmusUiModule,
    CadmusRefsAssertedIdsModule,
  ],
  exports: [ExternalIdsPartComponent],
})
export class CadmusPartRefsUiModule {}
