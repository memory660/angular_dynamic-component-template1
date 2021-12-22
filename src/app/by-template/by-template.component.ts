import {
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { HashDirective } from '../directives/hash.directive';

@Component({
  selector: 'app-by-template',
  templateUrl: './by-template.component.html',
  styleUrls: ['./by-template.component.scss'],
})
export class ByTemplateComponent {
  @ViewChildren(HashDirective) private hashes!: QueryList<HashDirective>;
  @ViewChild('appleTemplate', { read: TemplateRef })
  appleTemplate!: TemplateRef<any>;
  @ViewChild('strawberryTemplate', { read: TemplateRef })
  strawberryTemplate!: TemplateRef<any>;

  array = [
    {
      name: 'Bob',
      number: 1234567890,
    },
    {
      name: 'Jeff',
      number: 1234567890,
    },
  ];

  constructor(private cd: ChangeDetectorRef) {}

  apple(name: string) {
    this.loadDynamicTemplate(name, this.appleTemplate);
  }

  strawberry(name: string) {
    this.loadDynamicTemplate(name, this.strawberryTemplate);
  }

  getContainerFor(name: string): ViewContainerRef | undefined {
    return this.hashes.find((obj: any) => obj.appHash === name)?.vcRef;
  }

  loadDynamicTemplate(name: string, tpl: TemplateRef<any>) {
    const container: ViewContainerRef | undefined = this.getContainerFor(name);
    if (container) {
      container.clear();
      container.createEmbeddedView(tpl);
    }
  }
}
