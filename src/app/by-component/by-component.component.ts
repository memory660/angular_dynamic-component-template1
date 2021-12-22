import {
  Component,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { AppleComponent } from '../components/apple/apple.component';
import { StrawberryComponent } from '../components/strawberry/strawberry.component';
import { HashDirective } from '../directives/hash.directive';

@Component({
  selector: 'app-by-component',
  templateUrl: './by-component.component.html',
  styleUrls: ['./by-component.component.scss'],
})
export class ByComponentComponent implements OnInit {
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

  constructor() {}

  apple(name: string) {
    this.loadDynamicTemplate(name, AppleComponent);
  }

  strawberry(name: string) {
    this.loadDynamicTemplate(name, StrawberryComponent);
  }

  getContainerFor(name: string): ViewContainerRef | undefined {
    return this.hashes.find((obj: any) => obj.appHash === name)?.vcRef;
  }

  loadDynamicTemplate(name: string, component: any) {
    const container: ViewContainerRef | undefined = this.getContainerFor(name);
    if (container) {
      container.clear();
      container.createComponent(component);
    }
  }

  ngOnInit(): void {}
}
