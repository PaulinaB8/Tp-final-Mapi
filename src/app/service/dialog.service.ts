import { Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NCalendar } from '../interfaces/calendario';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogData = signal<NCalendar.IEvent | null>(null);

  constructor(public dialog: MatDialog) {}

  

  setEvent(item: NCalendar.IEvent) {
    this.dialogData.set(item);
  }

  get getEvent() {
    return this.dialogData();
  }

}