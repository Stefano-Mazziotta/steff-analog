interface IPhoto {
    id: number;
    width: number;
    height: number;
    description: string;
    shootDate: string;
    film: IFilm;
    camera: ICamera;
    location: ILocation;
    category: ICategory;
    src: ISrc;
    createdTimestamp: number;
  }
  
  interface IFilm {
    id: number;
    name: string;
    createdYear: number;
    madeIn: ICountry;
  }
  
  interface ICamera {
    id: number;
    name: string;
    createdYear: number;
    madeIn: ICountry;
  }
  
  interface ILocation {
    id: number;
    name: string;
    city: ICity;
  }
  
  interface ICity {
    id: number;
    name: string;
    country: ICountry;
  }
  
  interface ICountry {
    id: string;
    name: string;
  }
  
  interface ICategory {
    id: number;
    name: string;
  }
  
  interface ISrc {
    raw: IPhotoFile;
    full: IPhotoFile;
    regular: IPhotoFile;
    small: IPhotoFile;
    thumb: IPhotoFile;
  }
  
  interface IPhotoFile {
    id: number;
    url: string;
    name: string;
  }
  
  interface Query {
    photos: IPhoto[];
    categories: ICategory[];
  }