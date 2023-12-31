import { AtomicProperty } from './atomicproperty';
import { ValidatorRegistry, PropertyGroup } from '.';
import { ExpressionCompilerFactory } from '../expression-compiler-factory';
import { SchemaValidatorFactory } from '../schemavalidatorfactory';
import { PROPERTY_TYPE_MAPPING } from './typemapping';
import {ISchema} from './ISchema';
import { LogService } from '../log.service';

export class NullProperty extends AtomicProperty {
  fallbackValue() {
    return null;
  }
}

PROPERTY_TYPE_MAPPING.null = (
    schemaValidatorFactory: SchemaValidatorFactory,
    validatorRegistry: ValidatorRegistry,
    expressionCompilerFactory: ExpressionCompilerFactory,
    schema: ISchema,
    parent: PropertyGroup,
    path: string,
    logger: LogService
) => {
    return new NullProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
