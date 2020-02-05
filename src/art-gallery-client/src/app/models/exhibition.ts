import {Era} from './era';
import {Style} from './style';
import {Artist} from './artist';

export class Exhibition {
  id: number;

  name: string;
  startDate: string;
  endDate: string;
  era: Era;
  style: Style;
  artist: Artist;
}
