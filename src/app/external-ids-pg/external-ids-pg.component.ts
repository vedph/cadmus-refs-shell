import { Component, OnInit } from '@angular/core';
import { ThesauriSet } from '@myrmidon/cadmus-core';
import {
  ExternalIdsPart,
  EXTERNAL_IDS_PART_TYPEID,
} from '@myrmidon/cadmus-part-refs-ui';

@Component({
  selector: 'app-external-ids-pg',
  templateUrl: './external-ids-pg.component.html',
  styleUrls: ['./external-ids-pg.component.css'],
})
export class ExternalIdsPgComponent implements OnInit {
  public itemId: string;
  public part: ExternalIdsPart;
  public thesauri: ThesauriSet;

  constructor() {
    this.itemId = 'ce66b23b-778c-459d-94a6-d2fc5fd81fa6';
    this.part = {
      id: 'c9e8a5e1-8574-4f9d-a949-77733838c079',
      creatorId: 'zeus',
      timeCreated: new Date(),
      userId: 'zeus',
      timeModified: new Date(),
      itemId: this.itemId,
      typeId: EXTERNAL_IDS_PART_TYPEID,
      roleId: '',
      ids: [],
    };
    this.thesauri = {
      'external-id-types': {
        id: 'external-id-types',
        entries: [
          {
            id: 'r',
            value: 'red',
          },
          {
            id: 'g',
            value: 'green',
          },
          {
            id: 'b',
            value: 'blue',
          },
        ],
      },
    };
  }

  ngOnInit(): void {}

  public onModelChange(part: ExternalIdsPart): void {
    this.part = part;
  }

  public onDirtyChange(dirty: boolean): void {
    console.log('dirty=' + dirty);
  }
}
