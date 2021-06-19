import { IInsuranceCoverage } from './iinsurance-coverage';
export interface IYears {
    year:number;
    minBonus:number;
    maxBonus:number;
    minimumTerm:number;
    maximumTerm:number;
    commission:number;
    rate1:number;
    starMonth1:number;
    endMonth1:number;
    typeRate1:string;
    rate2:number;
    starMonth2:number;
    endMonth2:number;
    typeRate2:any;
    rate3:number;
    starMonth3:number;
    endMonth3:number;
    typeRate3:any;
    rate4:number;
    starMonth4:number;
    endMonth4:number;
    typeRate4:any;
    insuranceCoverage: IInsuranceCoverage;
    bonusList:Array<number>;
    monthList:Array<number>;
}
