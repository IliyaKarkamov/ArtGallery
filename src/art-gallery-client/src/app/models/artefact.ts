import {Era} from './era';
import {Style} from './style';
import {Artist} from './artist';
import {Exhibition} from './exhibition';

export class Artefact {
  id: number;

  name: string;
  createdAt: string;
  price: number;
  era: Era;
  style: Style;
  exhibition: Exhibition;
  artist: Artist;
  active: boolean;
}
