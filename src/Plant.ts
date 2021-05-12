import {URIFile} from './utils/image/types';

export type Plant = {
  id: string;
  name: string;
  image: URIFile;
  species: string;
  birthDay: number;
};
