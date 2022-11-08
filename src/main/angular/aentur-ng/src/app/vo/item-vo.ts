export class ItemVO {

    constructor() {
        this._id=0;
        this._name="";
        this._category="";
        this._effect="";
        this._rarity=0;
        this._availableOnShop=false;
        this._goldValue=0;
    }

    private _id: number;
	private _name: string;
	private _category: string;
	private _effect: string;
	private _rarity: number;
	private _availableOnShop: boolean;
	private _goldValue: number;

    get id(): number {
		return this._id;
	}
	set id(id: number) {
		this._id = id;
	}

	get name(): string {
		return this._name;
	}
	set name(name: string) {
		this.name = name;
	}

	get category(): string {
		return this._category;
	}
	set category(category: string) {
		this.category = category;
	}

	get effect(): string {
		return this._effect;
	}
	set effect(effect: string) {
		this._effect = effect;
	}

	get rarity(): number {
		return this._rarity;
	}
	set rarity(rarity: number) {
		this._rarity = rarity;
	}

	get availableOnShop(): boolean {
		return this._availableOnShop;
	}
	set availableOnShop(availableOnShop: boolean) {
		this._availableOnShop = availableOnShop;
	}

	get goldValue(): number {
		return this._goldValue;
	}
	set goldValue(goldValue: number) {
		this._goldValue = goldValue;
	}



}