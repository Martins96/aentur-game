import { ItemVO } from "./item-vo";

export class RewardVO {

    private _gold: number=0;
    private _item: ItemVO=new ItemVO();


    constructor(gold?:number, item?:ItemVO) {
        if (gold)
            this._gold = gold;
        if (item)
            this._item = item;
    }

    
    public get gold(): number {
        return this._gold;
    }
    public set gold(gold: number) {
        this._gold = gold;
    }
    
    
    public get item(): ItemVO {
        return this._item;
    }
    public set item(item: ItemVO) {
        this._item = item;
    }
    
    

}