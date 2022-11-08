export class StepVO {

    constructor(number?: number, type?: 'ENEMY'|'EVENT'|'BOSS') {
        this._number=number? number:0;
        this._type=type? type:'ENEMY';
    }

    private _number: number;
	private _type: 'ENEMY'|'EVENT'|'BOSS';

    
    public get number() : number {
        return this._number;
    }
    public set number(number : number) {
        this._number = number;
    }
    
    public get type() : 'ENEMY'|'EVENT'|'BOSS' {
        return this._type;
    }
    public set type(type : 'ENEMY'|'EVENT'|'BOSS') {
        this._type = type;
    }
    
}