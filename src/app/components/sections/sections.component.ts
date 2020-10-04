import {Component, OnInit} from '@angular/core';
import {Section} from '../../models/item.model';
import {ItemService} from '../../services/item.service';
import {LangService} from '../../services/lang.service';
import {Language} from '../../models/lang.model';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  constructor(private itemService: ItemService, private langService: LangService) {
  }

  sections: Section[];

  ngOnInit(): void {
    this.loadSections(this.langService.getCurrentLanguage());
    this.langService.onLanguageChanged.subscribe(lang => this.loadSections(lang));
  }

  loadSections(lang: Language): void {
    this.itemService.getSections(lang).subscribe(value => this.sections = value);
  }
}
