import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RequisitionForm {
  id: string;
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly formsSubject = new BehaviorSubject<RequisitionForm[]>([]);

  addForm(form: RequisitionForm): void {
    this.formsSubject.next([...this.formsSubject.value, form]);
  }

  getForms(): Observable<RequisitionForm[]> {
    return this.formsSubject.asObservable();
  }
}
