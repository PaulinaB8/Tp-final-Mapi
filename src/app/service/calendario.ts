

export function formatDate(date: Date) {
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}
//Convierte la fecha en un formate legible


export function getSelectedDate(date: Date, day = 0, month = 0) {
    return new Date(date.getFullYear(), date.getMonth() + month, day);
}

export function templateCalendarData(day: number, date: Date) {
    return {
        day,
        date,
        isCurrentDay: false,
        isCurrentMonth: false,
    }
}