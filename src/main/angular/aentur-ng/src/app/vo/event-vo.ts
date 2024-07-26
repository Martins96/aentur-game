export class EventChoiceVO {
	
	private location: string = "";
	private eventID: string = "";
	private choice: number = -1;
	private rollD100: number = -1;
	private rollD12: number = -1;

    
    public get getLocation() : string {
        return this.location;
    }
    public set setLocation(zlocation : string) {
        this.location = zlocation;
    }

    public get getEventID() : string {
        return this.eventID;
    }
    public set setEventID(zeventID : string) {
        this.eventID = zeventID;
    }

    public get getChoice() : number {
        return this.choice;
    }
    public set setChoice(zchoice: number) {
        this.choice = zchoice;
    }
    
    public get getRollD100() : number {
        return this.rollD100;
    }
    public set setRollD100(zrollD100 : number) {
        this.rollD100 = zrollD100;
    }

    public get getRollD12() : number {
        return this.rollD12;
    }
    public set setRollD12(zrollD12 : number) {
        this.rollD12 = zrollD12;
    }
    
}

export class EventVO {
	
	private _eventID: string = "";
	private _eventMessage: string = "";
	private _playerChoices: string[] = [];

    public get eventID() : string {
        return this._eventID;
    }
    public set eventID(eventID : string) {
        this._eventID = eventID;
    }

    public get eventMessage() : string {
        return this._eventMessage;
    }
    public set eventMessage(eventMessage : string) {
        this._eventMessage = eventMessage;
    }

    public get playerChoices() : string[] {
        return this._playerChoices;
    }
    public set playerChoices(playerChoices : string[]) {
        this._playerChoices = playerChoices;
    }

}

export class EventResponseVO {
    private _eventResult: string = "";
	private _imageResultName: string = "";

    public get eventResult() : string {
        return this._eventResult;
    }
    public set eventResult(eventResult : string) {
        this._eventResult = eventResult;
    }

    public get imageResultName() : string {
        return this._imageResultName;
    }
    public set imageResultName(imageResultName : string) {
        this._imageResultName = imageResultName;
    }
}