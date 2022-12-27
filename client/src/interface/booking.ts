export interface IExtension {
    photograph : boolean;
    consult : boolean;
    customerRequire : string;
};

export interface IInfor {
    salon : string;
    services : (string | number)[];
    time : string;
}

export interface IBooking {
    salon : string;
    services : (string | number)[];
    time : string;

    extension ?: IExtension;
};