import { Slug } from "sanity";



export interface Product {
    _id : string;
    name : string;
    _type : "product";
    imageUrl? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description : string;
    slug : {
        _type : "slug"
        current : string;
    };
    stockLevel : number;
    quantity?: number;
    
}