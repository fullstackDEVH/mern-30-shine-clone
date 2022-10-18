export interface IBlog {
    img ?: string,
    decription ?: string
}

interface IServiceItem {
    serviceTit : string,
    serviceSubtit : string,
    serviceImg : string
}

export interface IService {
    banner : string,
    services : IServiceItem[]
}

export interface ILayout {
    type : string,
    title : string,
    subtitle : string ,
    isViewAll : boolean
    blog ?: IBlog[],
    service ?: IService,
}