import { IValue } from './ivalue';

export class Value implements IValue{
    value:number;

    constructor(value:number){
        this.value = value;
    }
}
