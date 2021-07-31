import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Cadmus modules
import { CadmusMaterialModule } from '@myrmidon/cadmus-material';
import { CadmusRefsExternalIdsModule } from '@myrmidon/cadmus-refs-external-ids';

import { ExternalIdsPartComponent } from './external-ids-part/external-ids-part.component';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';

@NgModule({
  declarations: [ExternalIdsPartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Cadmus
    CadmusUiModule,
    CadmusMaterialModule,
    CadmusRefsExternalIdsModule,
  ],
  exports: [ExternalIdsPartComponent],
})
export class CadmusPartRefsUiModule {}
