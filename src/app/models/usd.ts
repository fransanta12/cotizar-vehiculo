import { IUsd } from './iusd';
import { Years } from './years';

export class Usd implements IUsd{
    minimumAmount:number;
    maximumAmount:number;
    rateReference:string;
    amountList:Array<number>;
    yearsList:Array<number>;
    minYear:number;
    maxYear:number;
    years: Array<Years>;
    
    constructor(minimumAmount:number,maximumAmount:number,rateReference:string,amountList:Array<number>,yearsList:Array<number>,minYear:number,maxYear:number,years: Array<Years>){
        this.minimumAmount = minimumAmount;
        this.maximumAmount = maximumAmount;
        this.rateReference = rateReference;
        this.amountList = amountList;
        this.yearsList = yearsList;
        this.minYear = minYear;
        this.maxYear = maxYear;
        this.years = years;
    }
}
