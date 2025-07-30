import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { isNumber } from 'class-validator';

@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: number) {
    if (!isNumber(value)) {
      throw new BadRequestException('ID invalid!');
    }

    return value;
  }
}
