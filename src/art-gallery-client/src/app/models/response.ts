import {ResponseException} from './response-exception';

export class Response<T> {
  operation: string;
  executedAt: string;
  result: T;
  exceptions: ResponseException[];
}
