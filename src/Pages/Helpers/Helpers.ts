import { Moment } from "../../models/Moments/Moment";

export class Helpers{
    static getAgeOfMoment(moment: Moment){
        const today = new Date();
        const yearsOld : number = today.getFullYear() - moment.date?.getFullYear()!;
        const monthsOld : number = today.getMonth() - moment.date?.getMonth()!;
        const daysOld : number = today.getDate() - moment.date?.getDate()!;
        const weeksOld : number = Math.round(daysOld / 7);

        if(yearsOld > 0)    // If it happened outside of this year
            return yearsOld > 1 ? `${yearsOld} Years Ago` : `${yearsOld} Year Ago`;

        if(monthsOld > 0)   // If it happened outside of this month
            return monthsOld > 1 ? `${monthsOld} Months Ago` : `${monthsOld} Month Ago`;

        if(daysOld > 7)    // If it happened outside of this week
            return weeksOld > 1 ? `${weeksOld} Weeks Ago` : `${weeksOld} Week Ago`;
        
        if(daysOld == 0)
            return "Today"

        return daysOld > 1 ? `${daysOld} Days Ago` : `${daysOld} Day Ago`;  // Otherwise, it MUST have happened in the last 7 days
    }
}