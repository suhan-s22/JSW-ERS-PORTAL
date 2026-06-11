import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private readonly collapsedSubject = new BehaviorSubject<boolean>(false);

  readonly collapsed$: Observable<boolean> = this.collapsedSubject.asObservable();

  toggle(): void {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  isCollapsed(): boolean {
    return this.collapsedSubject.value;
  }
}
