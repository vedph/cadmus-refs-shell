import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadmusCoreModule, PendingChangesGuard } from '@myrmidon/cadmus-core';
import { CadmusMaterialModule } from '@myrmidon/cadmus-material';
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
    // Cadmus
    RouterModuleForChild,
    CadmusCoreModule,
    CadmusMaterialModule,
    CadmusStateModule,
    CadmusUiModule,
    CadmusUiPgModule,
    CadmusPartRefsUiModule,
  ],
  exports: [ExternalIdsPartFeatureComponent],
})
export class CadmusPartRefsPgModule {}
