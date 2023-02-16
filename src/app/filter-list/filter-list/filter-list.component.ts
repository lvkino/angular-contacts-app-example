import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterListComponent<T> implements OnDestroy, AfterViewInit {

  @Input() list: T[];
  @Input() doNotFilterPropertyList: string[];
  @Output() filter = new EventEmitter<T[]>();
  @ViewChild('input', {static: false}) input: ElementRef;

  subscription: Subscription;

  constructor() { }

  ngAfterViewInit(): void {

    this.subscription = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap((event: KeyboardEvent) => {
          const element = event.target as HTMLInputElement;
          this.filter.emit(this.searchTextInObject(element.value, this.list));
        })
      )
      .subscribe();
  }

  searchTextInObject(text: string, list: T[]): T[] {
    // If research string length is lower than 2 characters return the entire list
    if (text.length < 2) { return list; }
    const regEx = new RegExp(text, 'gi');

    // Reduce to a list of items having at least 1 property's value string matching text
    return list.reduce((acc, object) => {
      let matchedText = false;
      // Clone object to not modify the original one
      object = Object.assign([], object);
      // Loop properties' object
      for (const property of this.getFilteredObjectKeys(object)) {
        // If property's value matches the regEx, wrap text in <strong></strong> html tags
        if (object[property].match(regEx)) {
          matchedText = true;
          object[property] = object[property].replace(regEx, (textToReplace) => {
            return `<strong>${textToReplace}</strong>`;
          });
        }
      }

      if (matchedText) { acc.push(object); }

      return acc;
    }, []);
  }

  // Filter object's key list exluding properties in `this.doNotFilterPropertyList` and not string property's value
  getFilteredObjectKeys(object: T): string[] {
    return Object.keys(object).filter(prop => {
      return (
        this.doNotFilterPropertyList.indexOf(prop) < 0 &&
        typeof(object[prop]) === 'string'
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
