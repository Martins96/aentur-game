export class BossVO {

    private _id: number=-1;
	private _location: string="";
	private _name: string="";
	private _description: string="";
	private _actions: number[]=[];

    constructor(id ?: number, location ?: string, name ?: string, description ?: string, actions ?: number[]) {
        if (id)
            this._id = id
        if (location)
            this._location = location
        if (name)
            this._name = name
        if (description)
            this._description = description
        if (actions)
            this._actions = actions
    }

    
    public get id() : number {
        return this._id;
    }
    public set id(id : number) {
        this._id = id;
    }

    
    public get location() : string {
        return this._location;
    }
    public set location(location : string) {
        this._location = location;
    }

    public get name() : string {
        return this._name;
    }
    public set name(name : string) {
        this._name = name;
    }

    
    public get description() : string {
        return this._description;
    }
    public set description(description : string) {
        this._description = description;
    }

    
    public get actions() : number[] {
        return this._actions;
    }
    public set actions(actions : number[]) {
        this._actions = actions;
    }

}

export class BossActionVO {

    public _id: number = -1;
	public _title: string = "";
	public _description: string = "";
	public _effect: string = "";
	public _img: string = "";


    constructor(id ?: number, title ?: string, description ?: string, effect ?: string, img ?: string) {
        if (id)
            this._id = id
        if (title)
            this._title = title
        if (description)
            this._description = description
        if (effect)
            this._effect = effect
        if (img)
            this._img = img
    }


    public get id() : number {
        return this._id;
    }
    public set id(id : number) {
        this._id = id;
    }

    
    public get title() : string {
        return this._title;
    }
    public set title(title : string) {
        this._title = title;
    }

    
    public get description() : string {
        return this._description;
    }
    public set description(description : string) {
        this._description = description;
    }

    public get effect() : string {
        return this._effect;
    }
    public set effect(effect : string) {
        this._effect = effect;
    }

    public get img() : string {
        return this._img;
    }
    public set img(img : string) {
        this._img = img;
    }

}