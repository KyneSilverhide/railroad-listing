import {Component, OnInit} from '@angular/core';
import {LangService} from '../../services/lang.service';
import {Language} from '../../models/lang.model';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {

  language: Language = 'fr';

  constructor(private langService: LangService) {
  }

  ngOnInit(): void {
  }

  changeLanguage(): void {
    this.langService.setLanguage(this.language);
  }
}
