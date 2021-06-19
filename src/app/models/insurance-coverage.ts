import { IInsuranceCoverage } from './iinsurance-coverage';
import { Value } from './value';

export class InsuranceCoverage implements IInsuranceCoverage{
    CoberturaA:Value;
    CoberturaB:Value;
    CoberturaC:Value;
    CoberturaD:Value;
    CoberturaE:Value;
    CoberturaJ:Value;

    constructor(CoberturaA:Value,CoberturaB:Value,CoberturaC:Value,CoberturaD:Value,CoberturaE:Value,CoberturaJ:Value){
        this.CoberturaA = CoberturaA;
        this.CoberturaB = CoberturaB;
        this.CoberturaC = CoberturaC;
        this.CoberturaD = CoberturaD;
        this.CoberturaE = CoberturaE;
        this.CoberturaJ = CoberturaJ;
    }
}
