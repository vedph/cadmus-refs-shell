import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

import { ModelEditorComponentBase } from '@myrmidon/cadmus-ui';
import { ThesaurusEntry, CadmusValidators } from '@myrmidon/cadmus-core';
import { ExternalId } from '@myrmidon/cadmus-refs-external-ids';
import { AuthJwtService } from '@myrmidon/auth-jwt-login';
import { deepCopy } from '@myrmidon/ng-tools';

import {
  ExternalIdsPart,
  EXTERNAL_IDS_PART_TYPEID,
} from '../external-ids-part';

/**
 * External IDs part editor component.
 * Thesauri: external-id-types, external-id-tags (all optional).
 */
@Component({
  selector: 'cadmus-refs-external-ids-part',
  templateUrl: './external-ids-part.component.html',
  styleUrls: ['./external-ids-part.component.css'],
})
export class ExternalIdsPartComponent
  extends ModelEditorComponentBase<ExternalIdsPart>
  implements OnInit
{
  public initialIds: ExternalId[];
  public ids: FormControl;

  // external-id-scopes
  public scopeEntries: ThesaurusEntry[] | undefined;
  // external-id-tags
  public tagEntries: ThesaurusEntry[] | undefined;

  constructor(authService: AuthJwtService, formBuilder: FormBuilder) {
    super(authService);
    this.initialIds = [];
    // form
    this.ids = formBuilder.control(
      [],
      CadmusValidators.strictMinLengthValidator(1)
    );
    this.form = formBuilder.group({
      ids: this.ids,
    });
  }

  public ngOnInit(): void {
    this.initEditor();
  }

  private updateForm(model: ExternalIdsPart): void {
    if (!model) {
      this.form?.reset();
      return;
    }
    this.initialIds = model.ids || [];
    this.form?.markAsPristine();
  }

  protected onModelSet(model: ExternalIdsPart): void {
    this.updateForm(deepCopy(model));
  }

  protected onThesauriSet(): void {
    let key = 'external-id-scopes';
    if (this.thesauri && this.thesauri[key]) {
      this.scopeEntries = this.thesauri[key].entries;
    } else {
      this.scopeEntries = undefined;
    }

    key = 'external-id-tags';
    if (this.thesauri && this.thesauri[key]) {
      this.tagEntries = this.thesauri[key].entries;
    } else {
      this.tagEntries = undefined;
    }
  }

  protected getModelFromForm(): ExternalIdsPart {
    let part = this.model;
    if (!part) {
      part = {
        itemId: this.itemId || '',
        id: '',
        typeId: EXTERNAL_IDS_PART_TYPEID,
        roleId: this.roleId,
        timeCreated: new Date(),
        creatorId: '',
        timeModified: new Date(),
        userId: '',
        ids: [],
      };
    }
    part.ids = this.ids.value;
    return part;
  }

  public onIdsChange(ids: ExternalId[]): void {
    this.ids.setValue(ids);
  }
}
