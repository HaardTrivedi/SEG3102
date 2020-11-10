import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../authors/model/author';

@Pipe({
  name: 'booktitle'
})
export class BooktitlePipe implements PipeTransform {

  transform(value: Book[]): string {
     return value.map((book) => `${book.title}`).join(' <b>and</b> ');
   }

}
