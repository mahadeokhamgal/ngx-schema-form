import { AfterViewInit, Directive } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

import { ArrayProperty } from "./model/arrayproperty";
import { FormProperty } from "./model/formproperty";
import { ObjectProperty } from "./model/objectproperty";
import { ISchema } from "./model/ISchema";

export abstract class Widget<T extends FormProperty> {
  formProperty: T;
  control: UntypedFormControl;
  errorMessages: string[];

  id: string = "";
  name: string = "";
  schema: ISchema = {};
}

@Directive()
export class ControlWidget
  extends Widget<FormProperty>
  implements AfterViewInit {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.valueChanges.subscribe((newValue) => {
      if (control.value !== newValue) {
        control.setValue(newValue, { emitEvent: false });
      }
    });
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, { emitEvent: true });
      const messages = (errors || [])
        .filter((e) => {
          return e.path && e.path.slice(1) === this.formProperty.path;
        })
        .map((e) => e.message);
      this.errorMessages = messages.filter((m, i) => messages.indexOf(m) === i);
    });
    control.valueChanges.subscribe((newValue) => {
      this.formProperty.setValue(newValue, false);
    });
  }
}

@Directive()
export class ArrayLayoutWidget
  extends Widget<ArrayProperty>
  implements AfterViewInit {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, { emitEvent: true });
    });
  }
}

@Directive()
export class ObjectLayoutWidget
  extends Widget<ObjectProperty>
  implements AfterViewInit {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, { emitEvent: true });
    });
  }
}
