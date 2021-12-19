import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgToolsModule } from '@myrmidon/ng-tools';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CadmusCoreModule, PendingChangesGuard } from '@myrmidon/cadmus-core';
import {
  CadmusPartRefsUiModule,
  EXTERNAL_IDS_PART_TYPEID,
} from '@myrmidon/cadmus-part-refs-ui';
import { CadmusStateModule } from '@myrmidon/cadmus-state';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';

import { ExternalIdsPartFeatureComponent } from './external-ids-part-feature/external-ids-part-feature.component';

export const RouterModuleForChild = RouterModule.forChild([
  {
    path: `${EXTERNAL_IDS_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: ExternalIdsPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
]);

@NgModule({
  declarations: [ExternalIdsPartFeatureComponent],
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
    RouterModuleForChild,
    CadmusCoreModule,
    CadmusStateModule,
    CadmusUiModule,
    CadmusUiPgModule,
    CadmusPartRefsUiModule,
  ],
  exports: [ExternalIdsPartFeatureComponent],
})
export class CadmusPartRefsPgModule {}
