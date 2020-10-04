import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Item} from '../../models/item.model';
import {ItemService} from '../../services/item.service';
import {LangService} from '../../services/lang.service';
import {Language} from '../../models/lang.model';
import {MatDialog} from '@angular/material/dialog';
import {PictureDialogComponent} from '../picture-dialog/picture-dialog.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {

  @Input() section: string;
  items: Item[];

  displayedColumns: string[] = ['image', 'reference', 'quantity', 'comment'];

  constructor(private itemService: ItemService, private languageService: LangService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchItems(this.languageService.getCurrentLanguage());
    this.languageService.onLanguageChanged.subscribe(value => {
      this.fetchItems(value);
    });
  }

  fetchItems(lang: Language): void {
    this.itemService.getItems(this.section, lang).subscribe(value => this.items = value);
  }

  openPicture(item: Item): void {
    this.dialog.open(PictureDialogComponent, {
      data: {item}
    });
  }

}
