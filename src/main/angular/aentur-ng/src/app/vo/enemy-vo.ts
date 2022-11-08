export class EnemyVO {

    private _id: number=-1;
    private _name: string="";
    private _description: string="";
    private _difficulty: string="";
	private _attacks: number[]=[];
	private _defences: number[]=[];

    constructor() {}

    
    public set id(id : number) {
        this._id = id;
    }
    public get id(): number {
        return this._id;
    }
    
    public set name(name : string) {
        this._name = name;
    }
    public get value() : string {
        return this._name;
    }

    public set description(description : string) {
        this._description = description;
    }
    public get description() : string {
        return this._description;
    }

    public set difficulty(difficulty : string) {
        this._difficulty = difficulty;
    }
    public get difficulty() : string {
        return this._difficulty;
    }

    public set attacks(attacks : number[]) {
        this._attacks = attacks;
    }
    public get attacks() : number[] {
        return this._attacks;
    }

    public set defences(defences : number[]) {
        this._defences = defences;
    }
    public get defences() : number[] {
        return this._defences;
    }
    
    



}

export class EnemyAttackVO {

    private _id: number=-1;
	private _name: string="";
	private _effect: string="";
	private _difficulty: number=0;
	private _category: string[]=[];

    constructor() {}
    
    public set id(id: number) {
        this._id = id;
    }
    public get id(): number {
        return this._id;
    }

    public set name(name: string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }

    public set effect(effect: string) {
        this._effect = effect;
    }
    public get effect(): string {
        return this._effect;
    }

    public set difficulty(difficulty: number) {
        this._difficulty = difficulty;
    }
    public get difficulty(): number {
        return this._difficulty;
    }

    public set category(category: string[]) {
        this._category = category;
    }
    public get category(): string[] {
        return this._category;
    }
}

export class EnemyDefenseVO {

    private _id: number=-1;
	private _name: string="";
	private _effect: string="";
	private _difficulty: number=0;
	private _category: string[]=[];

    constructor() {}
    
    public set id(id: number) {
        this._id = id;
    }
    public get id(): number {
        return this._id;
    }

    public set name(name: string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }

    public set effect(effect: string) {
        this._effect = effect;
    }
    public get effect(): string {
        return this._effect;
    }

    public set difficulty(difficulty: number) {
        this._difficulty = difficulty;
    }
    public get difficulty(): number {
        return this._difficulty;
    }

    public set category(category: string[]) {
        this._category = category;
    }
    public get category(): string[] {
        return this._category;
    }
    
}