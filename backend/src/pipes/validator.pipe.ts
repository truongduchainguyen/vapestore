import { HttpException, Injectable, PipeTransform } from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ObjectSchema, ValidationError } from 'joi';

@Injectable()
export class JoiValidatorPipe implements PipeTransform {
    constructor(private readonly schema: ObjectSchema) {}

    private mapJoiError(error: ValidationError) {
        const errorObj = {};

        for (const item of error.details) errorObj[item.context.key] = item.message;
        return errorObj;
    }

    transform(input: any) {
        if (!input) throw new HttpException({ errorMessage: 'error.invalid-input' }, StatusCodes.BAD_REQUEST);
        if (typeof input !== 'object') return input;

        const { error, value } = this.schema.validate(input, { abortEarly: false });
        if (error) throw new HttpException(this.mapJoiError(error), StatusCodes.BAD_REQUEST);

        return value;
    }
}
