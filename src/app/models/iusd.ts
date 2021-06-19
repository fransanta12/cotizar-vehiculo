import { IYears } from './iyears';

export interface IUsd {
    minimumAmount:number;
    maximumAmount:number;
    rateReference:string;
    amountList:Array<number>;
    yearsList:Array<number>;
    minYear:number;
    maxYear:number;
    years: Array<IYears>;
}
