import { IYears } from './iyears';
import { InsuranceCoverage } from './insurance-coverage';

export class Years implements IYears{
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
    insuranceCoverage: InsuranceCoverage;
    bonusList:Array<number>;
    monthList:Array<number>;

    constructor(
        year:number,
        minBonus:number,
        maxBonus:number,
        minimumTerm:number,
        maximumTerm:number,
        commission:number,
        rate1:number,
        starMonth1:number,
        endMonth1:number,
        typeRate1:string,
        rate2:number,
        starMonth2:number,
        endMonth2:number,
        typeRate2:number,
        rate3:number,
        starMonth3:number,
        endMonth3:number,
        typeRate3:any,
        rate4:number,
        starMonth4:number,
        endMonth4:number,
        typeRate4:any,
        insuranceCoverage:InsuranceCoverage,
        bonusList:Array<number>,
        monthList:Array<number>
    ){
        this.year = year;
        this.minBonus = minBonus;
        this.maxBonus = maxBonus;
        this.minimumTerm = minimumTerm;
        this.maximumTerm = maximumTerm;
        this.commission = commission;
        this.rate1 = rate1;
        this.starMonth1 = starMonth1;
        this.endMonth1 = endMonth1;
        this.typeRate1 = typeRate1;
        this.rate2 = rate2;
        this.starMonth2 = starMonth2;
        this.endMonth2 = endMonth2;
        this.typeRate2 = typeRate2;
        this.rate3 = rate3;
        this.starMonth3 = starMonth3;
        this.endMonth3 = endMonth3;
        this.typeRate3 = typeRate3;
        this.rate4 = rate4;
        this.starMonth4 = starMonth4;
        this.endMonth4 = endMonth4;
        this.typeRate4 = typeRate4;
        this.insuranceCoverage = insuranceCoverage;
        this.bonusList = bonusList;
        this.monthList = monthList;
    }
}
