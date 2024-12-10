import { Component, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NCalendar } from '../../interfaces/calendario';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
 import { formatDate, getSelectedDate, templateCalendarData } from '../../service/calendario';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    HeaderComponent
  ],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {
  
  private totalItems = 35;

  private date = new Date();

  headers: NCalendar.Header = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  calendarData: NCalendar.Body[] = [];

  constructor() {
    this.createCalendarData();
  }

  private createCalendarData() {    
    const firstDayInMonth = getSelectedDate(this.date, 1).getDay();
    const previousMonth = getSelectedDate(this.date).getDate();
    //Calcula el índice del día primero del mes
    //Obtiene el número de días del mes anterior
    

    for (let index = firstDayInMonth; index > 0; index --) {      
      this.calendarData.push(templateCalendarData(previousMonth - (index - 1), 
      getSelectedDate(this.date, previousMonth - (index - 1), -1)));
    }


    const daysInMonth = getSelectedDate(this.date, 0, 1).getDate();
    
    for (let index = 1; index <= daysInMonth; index++) {
      const newDate = getSelectedDate(this.date, index);            

      this.calendarData.push(
        {
          ...templateCalendarData(index, newDate),
          isCurrentDay: formatDate(this.date) === formatDate(newDate),
          isCurrentMonth: true,
        }
      );
    } //Agrega los días a la cuadricula

    const calendarLength = this.calendarData.length;

    for (let index = 1; index <= (this.totalItems - calendarLength); index++) {
      this.calendarData.push(templateCalendarData(index, getSelectedDate(this.date, index, 1)));
    }
    //Agrega los días del mes siguiente
  }

  mes = "";

  ngOnInit(){
    let fecha : Date = new Date();
    let mes = fecha.toLocaleDateString("es-Cl", {
      month: "long",  
    })
    
    this.mes = mes.toUpperCase();
    //Lo hace mayúscula
  }
}
