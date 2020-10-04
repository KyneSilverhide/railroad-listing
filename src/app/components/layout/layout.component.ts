import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ItemService} from '../../services/item.service';
import {LangService} from '../../services/lang.service';
import {map, shareReplay} from 'rxjs/operators';
import {Language} from '../../models/lang.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isHandset$: Observable<boolean>;
  sections: any;

  constructor(private breakpointObserver: BreakpointObserver, private itemService: ItemService, private langService: LangService) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
    this.fetchSections(this.langService.getCurrentLanguage());
    this.langService.onLanguageChanged.subscribe(value => this.fetchSections(value));
  }

  fetchSections(lang: Language): void {
    this.itemService.getSections(lang).subscribe(value => this.sections = value);
  }

  scroll(elId: string): void {
    // document.getElementById(elId).scrollIntoView();

    const element = document.getElementById(elId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + 130;
    console.log('Y', y);
    setTimeout(() => {
      window.scrollTo({top: y});
    }, 2);
  }
}
