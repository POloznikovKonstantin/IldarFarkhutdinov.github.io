export interface IObjectLink {
    id: number;
    text: string;
    href: string
}

export interface IAccordionObject {
    logo: string | undefined;
    headerText: string;
    dateText: string;
    subTitleText: string
}


export interface IPatentsObject {
    patentImg: string | undefined;
    headerText: string;
    mainText: string;
    subTitleText: string
}