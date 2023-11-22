"use strict";
(self["webpackChunkngx_schema_form"] = self["webpackChunkngx_schema_form"] || []).push([["main"],{

/***/ 8069:
/*!********************************************************!*\
  !*** ./projects/schema-form/src/lib/default.widget.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultWidget: () => (/* binding */ DefaultWidget)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DefaultWidget {
  static #_ = this.ɵfac = function DefaultWidget_Factory(t) {
    return new (t || DefaultWidget)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DefaultWidget,
    selectors: [["sf-default-field"]],
    decls: 2,
    vars: 0,
    template: function DefaultWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unknow type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 9100:
/*!*********************************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/_directives/disableControl.directive.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisableControlDirective: () => (/* binding */ DisableControlDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class DisableControlDirective {
  set disableControl(condition) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }
  constructor(ngControl) {
    this.ngControl = ngControl;
  }
  static #_ = this.ɵfac = function DisableControlDirective_Factory(t) {
    return new (t || DisableControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DisableControlDirective,
    selectors: [["", "disableControl", ""]],
    inputs: {
      disableControl: "disableControl"
    }
  });
}

/***/ }),

/***/ 5575:
/*!***************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/array/array.widget.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayWidget: () => (/* binding */ ArrayWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _formelement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formelement.component */ 1160);




function ArrayWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.schema.title, " ");
  }
}
function ArrayWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.schema.description);
  }
}
function ArrayWidget_div_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayWidget_div_3_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const itemProperty_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.removeItem(itemProperty_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r5.isRemoveButtonDisabled());
  }
}
function ArrayWidget_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "sf-form-element", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArrayWidget_div_3_button_2_Template, 3, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemProperty_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formProperty", itemProperty_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r2.schema.hasOwnProperty("minItems") && ctx_r2.schema.hasOwnProperty("maxItems") && ctx_r2.schema.minItems === ctx_r2.schema.maxItems));
  }
}
function ArrayWidget_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayWidget_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.addItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.isAddButtonDisabled());
  }
}
class ArrayWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ArrayLayoutWidget {
  addItem() {
    this.formProperty.addItem();
    this.updateButtonDisabledState();
  }
  removeItem(item) {
    this.formProperty.removeItem(item);
    this.updateButtonDisabledState();
  }
  trackByIndex(index, item) {
    return index;
  }
  updateButtonDisabledState() {
    this.buttonDisabledAdd = this.isAddButtonDisabled();
    this.buttonDisabledRemove = this.isRemoveButtonDisabled();
  }
  isAddButtonDisabled() {
    if (this.schema.hasOwnProperty('maxItems') && Array.isArray(this.formProperty.properties)) {
      if (this.formProperty.properties.length >= this.schema.maxItems) {
        return true;
      }
    }
    return false;
  }
  isRemoveButtonDisabled() {
    if (this.schema.hasOwnProperty('minItems') && Array.isArray(this.formProperty.properties)) {
      if (this.formProperty.properties.length <= this.schema.minItems) {
        return true;
      }
    }
    return false;
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵArrayWidget_BaseFactory;
    return function ArrayWidget_Factory(t) {
      return (ɵArrayWidget_BaseFactory || (ɵArrayWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ArrayWidget)))(t || ArrayWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ArrayWidget,
    selectors: [["sf-array-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "btn btn-default array-add-button", 3, "disabled", "click", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"], [3, "formProperty"], ["class", "btn btn-default array-remove-button", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-default", "array-remove-button", 3, "disabled", "click"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-minus"], [1, "btn", "btn-default", "array-add-button", 3, "disabled", "click"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-plus"]],
    template: function ArrayWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayWidget_label_1_Template, 2, 2, "label", 1)(2, ArrayWidget_span_2_Template, 2, 1, "span", 2)(3, ArrayWidget_div_3_Template, 3, 2, "div", 3)(4, ArrayWidget_button_4_Template, 3, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formProperty.properties);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.schema.hasOwnProperty("minItems") && ctx.schema.hasOwnProperty("maxItems") && ctx.schema.minItems === ctx.schema.maxItems));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _formelement_component__WEBPACK_IMPORTED_MODULE_1__.FormElementComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7874:
/*!*****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/button/button.widget.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonWidget: () => (/* binding */ ButtonWidget)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ButtonWidget {
  static #_ = this.ɵfac = function ButtonWidget_Factory(t) {
    return new (t || ButtonWidget)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ButtonWidget,
    selectors: [["sf-button-widget"]],
    decls: 2,
    vars: 1,
    consts: [[3, "click"]],
    template: function ButtonWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonWidget_Template_button_click_0_listener($event) {
          return ctx.button.action($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button.label);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2518:
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/checkbox/checkbox.widget.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckboxWidget: () => (/* binding */ CheckboxWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_directives/disableControl.directive */ 9100);





function CheckboxWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.schema.title, " ");
  }
}
function CheckboxWidget_div_2_input_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 8);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r3.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r3.name);
  }
}
function CheckboxWidget_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CheckboxWidget_div_2_input_3_Template, 1, 2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.control)("indeterminate", ctx_r1.control.value !== false && ctx_r1.control.value !== true ? true : null)("disableControl", ctx_r1.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r1.name)("id", ctx_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.schema.description, " ");
  }
}
function CheckboxWidget_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "label", 4)(2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CheckboxWidget_ng_container_3_div_1_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onCheck($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", option_r5.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r4.name)("disabled", ctx_r4.schema.readOnly)("checked", ctx_r4.checked[option_r5.enum[0]] ? true : null)("id", ctx_r4.id + "." + option_r5.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r5.description, " ");
  }
}
function CheckboxWidget_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckboxWidget_ng_container_3_div_1_Template, 4, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.schema.items.oneOf);
  }
}
class CheckboxWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ControlWidget {
  constructor() {
    super(...arguments);
    this.checked = {};
  }
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.valueChanges.subscribe(newValue => {
      if (control.value !== newValue) {
        control.setValue(newValue, {
          emitEvent: false
        });
        if (newValue && Array.isArray(newValue)) {
          newValue.map(v => this.checked[v] = true);
        }
      }
    });
    this.formProperty.errorsChanges.subscribe(errors => {
      control.setErrors(errors, {
        emitEvent: true
      });
    });
    control.valueChanges.subscribe(newValue => {
      this.formProperty.setValue(newValue, false);
    });
  }
  onCheck(el) {
    if (el.checked) {
      this.checked[el.value] = true;
    } else {
      delete this.checked[el.value];
    }
    this.formProperty.setValue(Object.keys(this.checked), false);
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵCheckboxWidget_BaseFactory;
    return function CheckboxWidget_Factory(t) {
      return (ɵCheckboxWidget_BaseFactory || (ɵCheckboxWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CheckboxWidget)))(t || CheckboxWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CheckboxWidget,
    selectors: [["sf-checkbox-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "checkbox", 4, "ngIf"], [4, "ngIf"], [1, "horizontal", "control-label"], [1, "checkbox"], ["type", "checkbox", 3, "formControl", "indeterminate", "disableControl"], ["type", "hidden", 3, "formControl", 4, "ngIf"], ["type", "hidden", 3, "formControl"], ["class", "checkbox", 4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "value", "change"]],
    template: function CheckboxWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckboxWidget_label_1_Template, 2, 2, "label", 1)(2, CheckboxWidget_div_2_Template, 5, 7, "div", 2)(3, CheckboxWidget_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.type != "array");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.type === "array");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__.DisableControlDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3557:
/*!******************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/defaultwidgetregistry.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultWidgetRegistry: () => (/* binding */ DefaultWidgetRegistry)
/* harmony export */ });
/* harmony import */ var _array_array_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/array.widget */ 5575);
/* harmony import */ var _button_button_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button.widget */ 7874);
/* harmony import */ var _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox/checkbox.widget */ 2518);
/* harmony import */ var _file_file_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file/file.widget */ 5568);
/* harmony import */ var _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integer/integer.widget */ 3047);
/* harmony import */ var _object_object_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object/object.widget */ 2477);
/* harmony import */ var _radio_radio_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio/radio.widget */ 2017);
/* harmony import */ var _range_range_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./range/range.widget */ 8238);
/* harmony import */ var _select_select_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select/select.widget */ 2331);
/* harmony import */ var _string_string_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string/string.widget */ 8725);
/* harmony import */ var _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./textarea/textarea.widget */ 5567);
/* harmony import */ var _widgetregistry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgetregistry */ 5280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);













class DefaultWidgetRegistry extends _widgetregistry__WEBPACK_IMPORTED_MODULE_11__.WidgetRegistry {
  constructor() {
    super();
    this.register('array', _array_array_widget__WEBPACK_IMPORTED_MODULE_0__.ArrayWidget);
    this.register('object', _object_object_widget__WEBPACK_IMPORTED_MODULE_5__.ObjectWidget);
    this.register('string', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('search', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('tel', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('url', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('email', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('password', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('color', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('date', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('date-time', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('time', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
    this.register('integer', _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__.IntegerWidget);
    this.register('number', _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__.IntegerWidget);
    this.register('range', _range_range_widget__WEBPACK_IMPORTED_MODULE_7__.RangeWidget);
    this.register('textarea', _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_10__.TextAreaWidget);
    this.register('file', _file_file_widget__WEBPACK_IMPORTED_MODULE_3__.FileWidget);
    this.register('select', _select_select_widget__WEBPACK_IMPORTED_MODULE_8__.SelectWidget);
    this.register('radio', _radio_radio_widget__WEBPACK_IMPORTED_MODULE_6__.RadioWidget);
    this.register('boolean', _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_2__.CheckboxWidget);
    this.register('checkbox', _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_2__.CheckboxWidget);
    this.register('button', _button_button_widget__WEBPACK_IMPORTED_MODULE_1__.ButtonWidget);
    this.setDefaultWidget(_string_string_widget__WEBPACK_IMPORTED_MODULE_9__.StringWidget);
  }
  static #_ = this.ɵfac = function DefaultWidgetRegistry_Factory(t) {
    return new (t || DefaultWidgetRegistry)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: DefaultWidgetRegistry,
    factory: DefaultWidgetRegistry.ɵfac
  });
}

/***/ }),

/***/ 5568:
/*!*************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/file/file.widget.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileWidget: () => (/* binding */ FileWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function FileWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.schema.title, " ");
  }
}
function FileWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.schema.description);
  }
}
function FileWidget_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx_r2.name);
  }
}
class FileWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ControlWidget {
  constructor() {
    super();
    this.reader = new FileReader();
    this.filedata = {};
  }
  ngAfterViewInit() {
    // OVERRIDE ControlWidget ngAfterViewInit() as ReactiveForms do not handle
    // file inputs
    const control = this.control;
    this.formProperty.errorsChanges.subscribe(errors => {
      control.setErrors(errors, {
        emitEvent: true
      });
    });
    this.reader.onloadend = () => {
      this.filedata.data = window.btoa(this.reader.result);
      this.formProperty.setValue(this.filedata, false);
    };
  }
  onFileChange($event) {
    const file = $event.target.files[0];
    this.filedata.filename = file.name;
    this.filedata.size = file.size;
    this.filedata['content-type'] = file.type;
    this.filedata.encoding = 'base64';
    this.reader.readAsBinaryString(file);
  }
  static #_ = this.ɵfac = function FileWidget_Factory(t) {
    return new (t || FileWidget)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FileWidget,
    selectors: [["sf-file-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 7,
    consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], ["type", "file", 1, "text-widget", "file-widget", 3, "name", "formControl", "change"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"], ["type", "hidden", 3, "formControl"]],
    template: function FileWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileWidget_label_1_Template, 2, 2, "label", 1)(2, FileWidget_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileWidget_Template_input_change_3_listener($event) {
          return ctx.onFileChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FileWidget_input_4_Template, 1, 2, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schema.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schema.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.name)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("disabled", ctx.schema.readOnly ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schema.readOnly);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2897:
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayWidget: () => (/* reexport safe */ _array_array_widget__WEBPACK_IMPORTED_MODULE_0__.ArrayWidget),
/* harmony export */   ButtonWidget: () => (/* reexport safe */ _button_button_widget__WEBPACK_IMPORTED_MODULE_10__.ButtonWidget),
/* harmony export */   CheckboxWidget: () => (/* reexport safe */ _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_1__.CheckboxWidget),
/* harmony export */   DefaultWidgetRegistry: () => (/* reexport safe */ _defaultwidgetregistry__WEBPACK_IMPORTED_MODULE_11__.DefaultWidgetRegistry),
/* harmony export */   DisableControlDirective: () => (/* reexport safe */ _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_12__.DisableControlDirective),
/* harmony export */   FileWidget: () => (/* reexport safe */ _file_file_widget__WEBPACK_IMPORTED_MODULE_2__.FileWidget),
/* harmony export */   IntegerWidget: () => (/* reexport safe */ _integer_integer_widget__WEBPACK_IMPORTED_MODULE_3__.IntegerWidget),
/* harmony export */   ObjectWidget: () => (/* reexport safe */ _object_object_widget__WEBPACK_IMPORTED_MODULE_4__.ObjectWidget),
/* harmony export */   RadioWidget: () => (/* reexport safe */ _radio_radio_widget__WEBPACK_IMPORTED_MODULE_5__.RadioWidget),
/* harmony export */   RangeWidget: () => (/* reexport safe */ _range_range_widget__WEBPACK_IMPORTED_MODULE_6__.RangeWidget),
/* harmony export */   SelectWidget: () => (/* reexport safe */ _select_select_widget__WEBPACK_IMPORTED_MODULE_7__.SelectWidget),
/* harmony export */   StringWidget: () => (/* reexport safe */ _string_string_widget__WEBPACK_IMPORTED_MODULE_8__.StringWidget),
/* harmony export */   TextAreaWidget: () => (/* reexport safe */ _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_9__.TextAreaWidget)
/* harmony export */ });
/* harmony import */ var _array_array_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/array.widget */ 5575);
/* harmony import */ var _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox/checkbox.widget */ 2518);
/* harmony import */ var _file_file_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file/file.widget */ 5568);
/* harmony import */ var _integer_integer_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integer/integer.widget */ 3047);
/* harmony import */ var _object_object_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object/object.widget */ 2477);
/* harmony import */ var _radio_radio_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio/radio.widget */ 2017);
/* harmony import */ var _range_range_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./range/range.widget */ 8238);
/* harmony import */ var _select_select_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.widget */ 2331);
/* harmony import */ var _string_string_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./string/string.widget */ 8725);
/* harmony import */ var _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./textarea/textarea.widget */ 5567);
/* harmony import */ var _button_button_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./button/button.widget */ 7874);
/* harmony import */ var _defaultwidgetregistry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultwidgetregistry */ 3557);
/* harmony import */ var _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_directives/disableControl.directive */ 9100);














/***/ }),

/***/ 3047:
/*!*******************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/integer/integer.widget.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntegerWidget: () => (/* binding */ IntegerWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function IntegerWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.schema.title, " ");
  }
}
function IntegerWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.schema.description);
  }
}
class IntegerWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ControlWidget {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵIntegerWidget_BaseFactory;
    return function IntegerWidget_Factory(t) {
      return (ɵIntegerWidget_BaseFactory || (ɵIntegerWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](IntegerWidget)))(t || IntegerWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IntegerWidget,
    selectors: [["sf-integer-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 12,
    consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [1, "text-widget", "integer-widget", "form-control", 3, "formControl"], [1, "horizontal", "control-label"], [1, "formHelp"]],
    template: function IntegerWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IntegerWidget_label_1_Template, 2, 2, "label", 1)(2, IntegerWidget_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schema.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schema.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("readonly", ctx.schema.readOnly ? true : null)("name", ctx.name)("id", ctx.id)("type", "number")("min", ctx.schema.minimum)("max", ctx.schema.maximum)("placeholder", ctx.schema.placeholder)("maxLength", ctx.schema.maxLength || null)("minLength", ctx.schema.minLength || null);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2477:
/*!*****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/object/object.widget.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectWidget: () => (/* binding */ ObjectWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _formelement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formelement.component */ 1160);




function ObjectWidget_fieldset_0_legend_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fieldset_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fieldset_r1.title);
  }
}
function ObjectWidget_fieldset_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fieldset_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fieldset_r1.description);
  }
}
function ObjectWidget_fieldset_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "sf-form-element", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fieldId_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formProperty", ctx_r4.formProperty.getProperty(fieldId_r7));
  }
}
function ObjectWidget_fieldset_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ObjectWidget_fieldset_0_legend_1_Template, 2, 1, "legend", 1)(2, ObjectWidget_fieldset_0_div_2_Template, 2, 1, "div", 1)(3, ObjectWidget_fieldset_0_div_3_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fieldset_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", fieldset_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", fieldset_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", fieldset_r1.fields);
  }
}
class ObjectWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ObjectLayoutWidget {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵObjectWidget_BaseFactory;
    return function ObjectWidget_Factory(t) {
      return (ɵObjectWidget_BaseFactory || (ɵObjectWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ObjectWidget)))(t || ObjectWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ObjectWidget,
    selectors: [["sf-form-object"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "formProperty"]],
    template: function ObjectWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ObjectWidget_fieldset_0_Template, 4, 3, "fieldset", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formProperty.schema.fieldsets);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _formelement_component__WEBPACK_IMPORTED_MODULE_1__.FormElementComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2017:
/*!***************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/radio/radio.widget.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioWidget: () => (/* binding */ RadioWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_directives/disableControl.directive */ 9100);





function RadioWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.schema.title);
  }
}
function RadioWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.schema.description);
  }
}
function RadioWidget_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", option_r4.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r2.control)("disableControl", ctx_r2.schema.readOnly || option_r4.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r2.name)("id", ctx_r2.id + "." + option_r4.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r4.description, " ");
  }
}
function RadioWidget_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 9);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r3.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r3.name);
  }
}
class RadioWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ControlWidget {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵRadioWidget_BaseFactory;
    return function RadioWidget_Factory(t) {
      return (ɵRadioWidget_BaseFactory || (ɵRadioWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](RadioWidget)))(t || RadioWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RadioWidget,
    selectors: [["sf-radio-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "widget", "form-group"], [4, "ngIf"], ["class", "formHelp", 4, "ngIf"], ["class", "radio", 4, "ngFor", "ngForOf"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [1, "formHelp"], [1, "radio"], [1, "horizontal", "control-label"], ["type", "radio", 3, "formControl", "value", "disableControl"], ["type", "hidden", 3, "formControl"]],
    template: function RadioWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RadioWidget_label_1_Template, 2, 1, "label", 1)(2, RadioWidget_span_2_Template, 2, 1, "span", 2)(3, RadioWidget_div_3_Template, 4, 6, "div", 3)(4, RadioWidget_input_4_Template, 1, 2, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.schema.oneOf);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.readOnly);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__.DisableControlDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8238:
/*!***************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/range/range.widget.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RangeWidget: () => (/* binding */ RangeWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_directives/disableControl.directive */ 9100);





function RangeWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.schema.title, " ");
  }
}
function RangeWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.schema.description);
  }
}
function RangeWidget_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r2.name);
  }
}
class RangeWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ControlWidget {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵRangeWidget_BaseFactory;
    return function RangeWidget_Factory(t) {
      return (ɵRangeWidget_BaseFactory || (ɵRangeWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](RangeWidget)))(t || RangeWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RangeWidget,
    selectors: [["sf-range-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 10,
    consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [1, "text-widget", "range-widget", 3, "name", "formControl", "disableControl"], ["type", "hidden", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"], ["type", "hidden"]],
    template: function RangeWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RangeWidget_label_1_Template, 2, 2, "label", 1)(2, RangeWidget_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RangeWidget_input_4_Template, 1, 1, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx.name)("formControl", ctx.control)("disableControl", ctx.schema.readOnly ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("type", "range")("min", ctx.schema.minimum)("max", ctx.schema.maximum);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.readOnly);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__.DisableControlDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2331:
/*!*****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/select/select.widget.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectWidget: () => (/* binding */ SelectWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_directives/disableControl.directive */ 9100);





function SelectWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.schema.title, " ");
  }
}
function SelectWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.schema.description, " ");
  }
}
function SelectWidget_select_3_ng_container_1_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", option_r9.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r9.description);
  }
}
function SelectWidget_select_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SelectWidget_select_3_ng_container_1_option_1_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.schema.oneOf);
  }
}
function SelectWidget_select_3_ng_template_2_option_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r11);
  }
}
function SelectWidget_select_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SelectWidget_select_3_ng_template_2_option_0_Template, 2, 2, "option", 11);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.schema.enum);
  }
}
function SelectWidget_select_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SelectWidget_select_3_ng_container_1_Template, 2, 1, "ng-container", 9)(2, SelectWidget_select_3_ng_template_2_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r2.control)("disableControl", ctx_r2.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r2.name)("id", ctx_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.schema.oneOf)("ngIfElse", _r7);
  }
}
function SelectWidget_select_4_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", option_r13.enum[0])("disabled", option_r13.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r13.description);
  }
}
function SelectWidget_select_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SelectWidget_select_4_option_1_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r3.control)("disableControl", ctx_r3.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r3.name)("id", ctx_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.schema.items.oneOf);
  }
}
function SelectWidget_input_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 16);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r4.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r4.name);
  }
}
class SelectWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ControlWidget {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵSelectWidget_BaseFactory;
    return function SelectWidget_Factory(t) {
      return (ɵSelectWidget_BaseFactory || (ɵSelectWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SelectWidget)))(t || SelectWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SelectWidget,
    selectors: [["sf-select-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 6,
    vars: 5,
    consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], ["class", "form-control", 3, "formControl", "disableControl", 4, "ngIf"], ["multiple", "", "class", "form-control", 3, "formControl", "disableControl", 4, "ngIf"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"], [1, "form-control", 3, "formControl", "disableControl"], [4, "ngIf", "ngIfElse"], ["use_enum", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["multiple", "", 1, "form-control", 3, "formControl", "disableControl"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [3, "ngValue", "disabled"], ["type", "hidden", 3, "formControl"]],
    template: function SelectWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SelectWidget_label_1_Template, 2, 2, "label", 1)(2, SelectWidget_span_2_Template, 2, 1, "span", 2)(3, SelectWidget_select_3_Template, 4, 6, "select", 3)(4, SelectWidget_select_4_Template, 2, 5, "select", 4)(5, SelectWidget_input_5_Template, 1, 2, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.type != "array");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.type === "array");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.readOnly);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__.DisableControlDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8725:
/*!*****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/string/string.widget.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringWidget: () => (/* binding */ StringWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_directives/disableControl.directive */ 9100);





function StringWidget_input_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r0.name);
  }
}
function StringWidget_ng_template_1_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.schema.title, " ");
  }
}
function StringWidget_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.schema.description);
  }
}
function StringWidget_ng_template_1_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 2);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r5.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx_r5.name);
  }
}
function StringWidget_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StringWidget_ng_template_1_label_1_Template, 2, 2, "label", 4)(2, StringWidget_ng_template_1_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StringWidget_ng_template_1_input_4_Template, 1, 2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.schema.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.schema.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.name)("formControl", ctx_r1.control)("disableControl", ctx_r1.schema.widget.id == "color" && ctx_r1.schema.readOnly ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("readonly", ctx_r1.schema.widget.id !== "color" && ctx_r1.schema.readOnly ? true : null)("type", !ctx_r1.schema.widget.id || ctx_r1.schema.widget.id === "string" ? "text" : ctx_r1.schema.widget.id)("id", ctx_r1.id)("placeholder", ctx_r1.schema.placeholder)("maxLength", ctx_r1.schema.maxLength || null)("minLength", ctx_r1.schema.minLength || null)("required", ctx_r1.schema.isRequired || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.schema.widget.id === "color" && ctx_r1.schema.readOnly);
  }
}
class StringWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ControlWidget {
  getInputType() {
    if (!this.schema.widget.id || this.schema.widget.id === 'string') {
      return 'text';
    } else {
      return this.schema.widget.id;
    }
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵStringWidget_BaseFactory;
    return function StringWidget_Factory(t) {
      return (ɵStringWidget_BaseFactory || (ɵStringWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](StringWidget)))(t || StringWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StringWidget,
    selectors: [["sf-string-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 2,
    consts: [["type", "hidden", 3, "formControl", 4, "ngIf", "ngIfElse"], ["notHiddenFieldBlock", ""], ["type", "hidden", 3, "formControl"], [1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [1, "text-widget.id", "textline-widget", "form-control", 3, "name", "formControl", "disableControl"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"]],
    template: function StringWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StringWidget_input_0_Template, 1, 2, "input", 0)(1, StringWidget_ng_template_1_Template, 5, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.schema.widget.id === "hidden")("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_1__.DisableControlDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5567:
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/textarea/textarea.widget.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextAreaWidget: () => (/* binding */ TextAreaWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget */ 3139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function TextAreaWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.schema.title, " ");
  }
}
function TextAreaWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.schema.description);
  }
}
class TextAreaWidget extends _widget__WEBPACK_IMPORTED_MODULE_0__.ControlWidget {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵTextAreaWidget_BaseFactory;
    return function TextAreaWidget_Factory(t) {
      return (ɵTextAreaWidget_BaseFactory || (ɵTextAreaWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TextAreaWidget)))(t || TextAreaWidget);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TextAreaWidget,
    selectors: [["sf-textarea-widget"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 9,
    consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [1, "text-widget", "textarea-widget", "form-control", 3, "readonly", "name", "formControl"], [1, "horizontal", "control-label"], [1, "formHelp"]],
    template: function TextAreaWidget_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TextAreaWidget_label_1_Template, 2, 2, "label", 1)(2, TextAreaWidget_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schema.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.schema.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.schema.readOnly)("name", ctx.name)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.schema.placeholder)("maxLength", ctx.schema.maxLength || null)("minLength", ctx.schema.minLength || null);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6090:
/*!*********************************************************************!*\
  !*** ./projects/schema-form/src/lib/expression-compiler-factory.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionCompilerFactory: () => (/* binding */ ExpressionCompilerFactory),
/* harmony export */   JEXLExpressionCompiler: () => (/* binding */ JEXLExpressionCompiler),
/* harmony export */   JEXLExpressionCompilerFactory: () => (/* binding */ JEXLExpressionCompilerFactory),
/* harmony export */   JEXLExpressionCompilerVisibiltyIf: () => (/* binding */ JEXLExpressionCompilerVisibiltyIf)
/* harmony export */ });
/* harmony import */ var jexl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jexl */ 5459);
/* harmony import */ var jexl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jexl__WEBPACK_IMPORTED_MODULE_0__);
class ExpressionCompilerFactory {}

class JEXLExpressionCompilerFactory extends ExpressionCompilerFactory {
  createExpressionCompiler() {
    return new JEXLExpressionCompiler();
  }
  createExpressionCompilerVisibilityIf() {
    return new JEXLExpressionCompilerVisibiltyIf();
  }
}
class JEXLExpressionCompiler {
  evaluate(expression, context = {}) {
    return new jexl__WEBPACK_IMPORTED_MODULE_0__.Jexl().evalSync(expression, context);
  }
}
class JEXLExpressionCompilerVisibiltyIf {
  evaluate(expression, context = {
    source: {},
    target: {}
  }) {
    return new jexl__WEBPACK_IMPORTED_MODULE_0__.Jexl().evalSync(expression, context);
  }
}

/***/ }),

/***/ 4076:
/*!********************************************************!*\
  !*** ./projects/schema-form/src/lib/form.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormComponent: () => (/* binding */ FormComponent),
/* harmony export */   useFactory: () => (/* binding */ useFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/actionregistry */ 7678);
/* harmony import */ var _model_formpropertyfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/formpropertyfactory */ 1151);
/* harmony import */ var _model_schemapreprocessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/schemapreprocessor */ 6875);
/* harmony import */ var _model_validatorregistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/validatorregistry */ 5357);
/* harmony import */ var _model_bindingregistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/bindingregistry */ 4237);
/* harmony import */ var _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemavalidatorfactory */ 4298);
/* harmony import */ var _widgetfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgetfactory */ 3413);
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terminator.service */ 3651);
/* harmony import */ var _property_binding_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./property-binding-registry */ 3724);
/* harmony import */ var _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expression-compiler-factory */ 6090);
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./log.service */ 7711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _formelement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formelement.component */ 1160);






















function FormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "sf-form-element", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("name", ctx_r0.rootProperty.rootName)("id", ctx_r0.rootProperty.rootName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formProperty", ctx_r0.rootProperty);
  }
}
function useFactory(schemaValidatorFactory, validatorRegistry, propertyBindingRegistry, expressionCompilerFactory, logService) {
  return new _model_formpropertyfactory__WEBPACK_IMPORTED_MODULE_1__.FormPropertyFactory(schemaValidatorFactory, validatorRegistry, propertyBindingRegistry, expressionCompilerFactory, logService);
}
class FormComponent {
  constructor(formPropertyFactory, actionRegistry, validatorRegistry, bindingRegistry, cdr, terminator) {
    this.formPropertyFactory = formPropertyFactory;
    this.actionRegistry = actionRegistry;
    this.validatorRegistry = validatorRegistry;
    this.bindingRegistry = bindingRegistry;
    this.cdr = cdr;
    this.terminator = terminator;
    this.schema = null;
    this.actions = {};
    this.validators = {};
    this.bindings = {};
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.onErrorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.onErrorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.rootProperty = null;
  }
  writeValue(obj) {
    if (this.rootProperty) {
      this.rootProperty.reset(obj, false);
    }
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
    if (this.rootProperty) {
      this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
    }
  }
  // TODO implement
  registerOnTouched(fn) {}
  // TODO implement
  // setDisabledState(isDisabled: boolean)?: void
  ngOnChanges(changes) {
    if (changes.validators) {
      this.setValidators();
    }
    if (changes.actions) {
      this.setActions();
    }
    if (changes.bindings) {
      this.setBindings();
    }
    if (this.schema && !this.schema.type) {
      this.schema.type = 'object';
    }
    if (this.schema && changes.schema) {
      if (!changes.schema.firstChange) {
        this.terminator.destroy();
      }
      _model_schemapreprocessor__WEBPACK_IMPORTED_MODULE_2__.SchemaPreprocessor.preprocess(this.schema);
      this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
      if (this.model) {
        // this.rootProperty.reset(this.model, false);
      }
      this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
      this.rootProperty.errorsChanges.subscribe(value => {
        this.onErrorChange.emit({
          value: value
        });
        this.isValid.emit(!(value && value.length));
      });
    }
    if (this.schema && (changes.model || changes.schema)) {
      this.rootProperty.reset(this.model, false);
      this.rootProperty._bindVisibility();
      this.cdr.detectChanges();
    }
  }
  setValidators() {
    this.validatorRegistry.clear();
    if (this.validators) {
      for (const validatorId in this.validators) {
        if (this.validators.hasOwnProperty(validatorId)) {
          this.validatorRegistry.register(validatorId, this.validators[validatorId]);
        }
      }
    }
  }
  setActions() {
    this.actionRegistry.clear();
    if (this.actions) {
      for (const actionId in this.actions) {
        if (this.actions.hasOwnProperty(actionId)) {
          this.actionRegistry.register(actionId, this.actions[actionId]);
        }
      }
    }
  }
  setBindings() {
    this.bindingRegistry.clear();
    if (this.bindings) {
      for (const bindingPath in this.bindings) {
        if (this.bindings.hasOwnProperty(bindingPath)) {
          this.bindingRegistry.register(bindingPath, this.bindings[bindingPath]);
        }
      }
    }
  }
  reset() {
    this.rootProperty.reset(null, true);
  }
  setModel(value) {
    if (this.model) {
      for (const key of Object.keys(this.model)) delete this.model[key];
      Object.assign(this.model, value);
    } else {
      this.model = value;
    }
  }
  onValueChanges(value) {
    if (this.onChangeCallback) {
      this.setModel(value);
      this.onChangeCallback(value);
    }
    // two way binding is used
    if (this.modelChange.observers.length > 0) {
      if (!this.onChangeCallback) {
        this.setModel(value);
      }
    }
    this.onChange.emit({
      value: value
    });
  }
  static #_ = this.ɵfac = function FormComponent_Factory(t) {
    return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_model_formpropertyfactory__WEBPACK_IMPORTED_MODULE_1__.FormPropertyFactory), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_model_actionregistry__WEBPACK_IMPORTED_MODULE_0__.ActionRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_model_validatorregistry__WEBPACK_IMPORTED_MODULE_3__.ValidatorRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_model_bindingregistry__WEBPACK_IMPORTED_MODULE_4__.BindingRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_terminator_service__WEBPACK_IMPORTED_MODULE_7__.TerminatorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: FormComponent,
    selectors: [["sf-form"]],
    inputs: {
      schema: "schema",
      model: "model",
      actions: "actions",
      validators: "validators",
      bindings: "bindings"
    },
    outputs: {
      onChange: "onChange",
      modelChange: "modelChange",
      isValid: "isValid",
      onErrorChange: "onErrorChange",
      onErrorsChange: "onErrorsChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([_model_actionregistry__WEBPACK_IMPORTED_MODULE_0__.ActionRegistry, _model_validatorregistry__WEBPACK_IMPORTED_MODULE_3__.ValidatorRegistry, _property_binding_registry__WEBPACK_IMPORTED_MODULE_8__.PropertyBindingRegistry, _model_bindingregistry__WEBPACK_IMPORTED_MODULE_4__.BindingRegistry, _model_schemapreprocessor__WEBPACK_IMPORTED_MODULE_2__.SchemaPreprocessor, _widgetfactory__WEBPACK_IMPORTED_MODULE_6__.WidgetFactory, {
      provide: _model_formpropertyfactory__WEBPACK_IMPORTED_MODULE_1__.FormPropertyFactory,
      useFactory: useFactory,
      deps: [_schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_5__.SchemaValidatorFactory, _model_validatorregistry__WEBPACK_IMPORTED_MODULE_3__.ValidatorRegistry, _property_binding_registry__WEBPACK_IMPORTED_MODULE_8__.PropertyBindingRegistry, _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_9__.ExpressionCompilerFactory, _log_service__WEBPACK_IMPORTED_MODULE_10__.LogService]
    }, _terminator_service__WEBPACK_IMPORTED_MODULE_7__.TerminatorService, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
      useExisting: FormComponent,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [3, "formProperty"]],
    template: function FormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, FormComponent_form_0_Template, 2, 3, "form", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.rootProperty);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _formelement_component__WEBPACK_IMPORTED_MODULE_11__.FormElementComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4268:
/*!**********************************************************************!*\
  !*** ./projects/schema-form/src/lib/formelement.action.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormElementComponentAction: () => (/* binding */ FormElementComponentAction)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _widgetfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgetfactory */ 3413);
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminator.service */ 3651);




const _c0 = ["target"];
function FormElementComponentAction_ng_template_0_Template(rf, ctx) {}
class FormElementComponentAction {
  constructor(widgetFactory = null, terminator) {
    this.widgetFactory = widgetFactory;
    this.terminator = terminator;
  }
  ngOnInit() {
    this.subs = this.terminator.onDestroy.subscribe(destroy => {
      if (destroy) {
        this.ref.destroy();
      }
    });
  }
  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.button.widget || 'button');
    this.ref.instance.button = this.button;
    this.ref.instance.formProperty = this.formProperty;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static #_ = this.ɵfac = function FormElementComponentAction_Factory(t) {
    return new (t || FormElementComponentAction)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_widgetfactory__WEBPACK_IMPORTED_MODULE_0__.WidgetFactory), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_terminator_service__WEBPACK_IMPORTED_MODULE_1__.TerminatorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FormElementComponentAction,
    selectors: [["sf-form-element-action"]],
    viewQuery: function FormElementComponentAction_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      button: "button",
      formProperty: "formProperty"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 0,
    consts: [["target", ""]],
    template: function FormElementComponentAction_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FormElementComponentAction_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1160:
/*!***************************************************************!*\
  !*** ./projects/schema-form/src/lib/formelement.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormElementComponent: () => (/* binding */ FormElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/actionregistry */ 7678);
/* harmony import */ var _model_bindingregistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/bindingregistry */ 4237);
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.service */ 7711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _formelement_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formelement.action.component */ 4268);
/* harmony import */ var _widgetchooser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgetchooser.component */ 4572);








function FormElementComponent_div_0_sf_form_element_action_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "sf-form-element-action", 3);
  }
  if (rf & 2) {
    const button_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("button", button_r2)("formProperty", ctx_r1.formProperty);
  }
}
function FormElementComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "sf-widget-chooser", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("widgetInstanciated", function FormElementComponent_div_0_Template_sf_widget_chooser_widgetInstanciated_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onWidgetInstanciated($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FormElementComponent_div_0_sf_form_element_action_2_Template, 1, 2, "sf-form-element-action", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("has-error", !ctx_r0.control.valid)("has-success", ctx_r0.control.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("widgetInfo", ctx_r0.formProperty.schema.widget);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.buttons);
  }
}
class FormElementComponent {
  static #_ = this.counter = 0;
  constructor(actionRegistry, bindingRegistry, renderer, elementRef, logger) {
    this.actionRegistry = actionRegistry;
    this.bindingRegistry = bindingRegistry;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.logger = logger;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', () => null);
    this.widget = null;
    this.buttons = [];
    this.unlisten = [];
  }
  ngOnInit() {
    this.parseButtons();
    this.setupBindings();
  }
  setupBindings() {
    const bindings = this.bindingRegistry.get(this.formProperty.path);
    if ((bindings || []).length) {
      bindings.forEach(binding => {
        for (const eventId in binding) {
          this.createBinding(eventId, binding[eventId]);
        }
      });
    }
  }
  createBinding(eventId, listeners) {
    this.unlisten.push(this.renderer.listen(this.elementRef.nativeElement, eventId, event => {
      const _listeners = Array.isArray(listeners) ? listeners : [listeners];
      for (const _listener of _listeners) {
        if (_listener instanceof Function) {
          try {
            _listener(event, this.formProperty);
          } catch (e) {
            this.logger.error(`Error calling bindings event listener for '${eventId}'`, e);
          }
        } else {
          this.logger.warn('Calling non function handler for eventId ' + eventId + ' for path ' + this.formProperty.path);
        }
      }
    }));
  }
  parseButtons() {
    if (this.formProperty.schema.buttons !== undefined) {
      this.buttons = this.formProperty.schema.buttons;
      for (let button of this.buttons) {
        this.createButtonCallback(button);
      }
    }
  }
  createButtonCallback(button) {
    button.action = e => {
      let action;
      if (button.id && (action = this.actionRegistry.get(button.id))) {
        if (action) {
          action(this.formProperty, button.parameters);
        }
      }
      e.preventDefault();
    };
  }
  onWidgetInstanciated(widget) {
    this.widget = widget;
    let id = this.formProperty.canonicalPathNotation || 'field' + FormElementComponent.counter++;
    if (this.formProperty.root.rootName) {
      id = `${this.formProperty.root.rootName}:${id}`;
    }
    this.widget.formProperty = this.formProperty;
    this.widget.schema = this.formProperty.schema;
    this.widget.name = id;
    this.widget.id = id;
    this.widget.control = this.control;
  }
  ngOnDestroy() {
    if (this.unlisten) {
      this.unlisten.forEach(item => {
        item();
      });
    }
  }
  static #_2 = this.ɵfac = function FormElementComponent_Factory(t) {
    return new (t || FormElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_model_actionregistry__WEBPACK_IMPORTED_MODULE_0__.ActionRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_model_bindingregistry__WEBPACK_IMPORTED_MODULE_1__.BindingRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_log_service__WEBPACK_IMPORTED_MODULE_2__.LogService));
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FormElementComponent,
    selectors: [["sf-form-element"]],
    inputs: {
      formProperty: "formProperty"
    },
    decls: 1,
    vars: 1,
    consts: [[3, "has-error", "has-success", 4, "ngIf"], [3, "widgetInfo", "widgetInstanciated"], [3, "button", "formProperty", 4, "ngFor", "ngForOf"], [3, "button", "formProperty"]],
    template: function FormElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, FormElementComponent_div_0_Template, 3, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formProperty.visible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _formelement_action_component__WEBPACK_IMPORTED_MODULE_3__.FormElementComponentAction, _widgetchooser_component__WEBPACK_IMPORTED_MODULE_4__.WidgetChooserComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8597:
/*!***********************************************!*\
  !*** ./projects/schema-form/src/lib/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionRegistry: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.ActionRegistry),
/* harmony export */   ArrayLayoutWidget: () => (/* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_13__.ArrayLayoutWidget),
/* harmony export */   ArrayProperty: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.ArrayProperty),
/* harmony export */   ArrayWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.ArrayWidget),
/* harmony export */   AtomicProperty: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.AtomicProperty),
/* harmony export */   BindingRegistry: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.BindingRegistry),
/* harmony export */   BooleanProperty: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.BooleanProperty),
/* harmony export */   ButtonComponent: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent),
/* harmony export */   ButtonWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.ButtonWidget),
/* harmony export */   CheckboxWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.CheckboxWidget),
/* harmony export */   ControlWidget: () => (/* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_13__.ControlWidget),
/* harmony export */   DefaultLogService: () => (/* reexport safe */ _log_service__WEBPACK_IMPORTED_MODULE_8__.DefaultLogService),
/* harmony export */   DefaultWidget: () => (/* reexport safe */ _default_widget__WEBPACK_IMPORTED_MODULE_3__.DefaultWidget),
/* harmony export */   DefaultWidgetRegistry: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.DefaultWidgetRegistry),
/* harmony export */   DisableControlDirective: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.DisableControlDirective),
/* harmony export */   ExpressionCompilerFactory: () => (/* reexport safe */ _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_4__.ExpressionCompilerFactory),
/* harmony export */   ExtendedProxyHandler: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.ExtendedProxyHandler),
/* harmony export */   FieldComponent: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.FieldComponent),
/* harmony export */   FieldParent: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.FieldParent),
/* harmony export */   FieldType: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.FieldType),
/* harmony export */   FileWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.FileWidget),
/* harmony export */   FormComponent: () => (/* reexport safe */ _form_component__WEBPACK_IMPORTED_MODULE_5__.FormComponent),
/* harmony export */   FormElementComponent: () => (/* reexport safe */ _formelement_component__WEBPACK_IMPORTED_MODULE_7__.FormElementComponent),
/* harmony export */   FormElementComponentAction: () => (/* reexport safe */ _formelement_action_component__WEBPACK_IMPORTED_MODULE_6__.FormElementComponentAction),
/* harmony export */   FormProperty: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.FormProperty),
/* harmony export */   FormPropertyFactory: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.FormPropertyFactory),
/* harmony export */   IntegerWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.IntegerWidget),
/* harmony export */   ItemComponent: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.ItemComponent),
/* harmony export */   JEXLExpressionCompiler: () => (/* reexport safe */ _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_4__.JEXLExpressionCompiler),
/* harmony export */   JEXLExpressionCompilerFactory: () => (/* reexport safe */ _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_4__.JEXLExpressionCompilerFactory),
/* harmony export */   JEXLExpressionCompilerVisibiltyIf: () => (/* reexport safe */ _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_4__.JEXLExpressionCompilerVisibiltyIf),
/* harmony export */   LOG_LEVEL: () => (/* reexport safe */ _log_service__WEBPACK_IMPORTED_MODULE_8__.LOG_LEVEL),
/* harmony export */   LogService: () => (/* reexport safe */ _log_service__WEBPACK_IMPORTED_MODULE_8__.LogService),
/* harmony export */   NullProperty: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.NullProperty),
/* harmony export */   NumberProperty: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.NumberProperty),
/* harmony export */   ObjectLayoutWidget: () => (/* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_13__.ObjectLayoutWidget),
/* harmony export */   ObjectProperty: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.ObjectProperty),
/* harmony export */   ObjectWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.ObjectWidget),
/* harmony export */   PROPERTY_TYPE_MAPPING: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING),
/* harmony export */   PropertyBindingRegistry: () => (/* reexport safe */ _property_binding_registry__WEBPACK_IMPORTED_MODULE_9__.PropertyBindingRegistry),
/* harmony export */   PropertyBindingTypes: () => (/* reexport safe */ _property_binding_registry__WEBPACK_IMPORTED_MODULE_9__.PropertyBindingTypes),
/* harmony export */   PropertyBindings: () => (/* reexport safe */ _property_binding_registry__WEBPACK_IMPORTED_MODULE_9__.PropertyBindings),
/* harmony export */   PropertyGroup: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.PropertyGroup),
/* harmony export */   RadioWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.RadioWidget),
/* harmony export */   RangeWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.RangeWidget),
/* harmony export */   SchemaFormModule: () => (/* reexport safe */ _schema_form_module__WEBPACK_IMPORTED_MODULE_10__.SchemaFormModule),
/* harmony export */   SchemaPreprocessor: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.SchemaPreprocessor),
/* harmony export */   SchemaValidatorFactory: () => (/* reexport safe */ _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_11__.SchemaValidatorFactory),
/* harmony export */   SelectWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.SelectWidget),
/* harmony export */   SimplePropertyIndexer: () => (/* reexport safe */ _property_binding_registry__WEBPACK_IMPORTED_MODULE_9__.SimplePropertyIndexer),
/* harmony export */   StringProperty: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.StringProperty),
/* harmony export */   StringWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.StringWidget),
/* harmony export */   TemplateSchemaDirective: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.TemplateSchemaDirective),
/* harmony export */   TemplateSchemaElement: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.TemplateSchemaElement),
/* harmony export */   TemplateSchemaModule: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.TemplateSchemaModule),
/* harmony export */   TemplateSchemaService: () => (/* reexport safe */ _template_schema__WEBPACK_IMPORTED_MODULE_2__.TemplateSchemaService),
/* harmony export */   TerminatorService: () => (/* reexport safe */ _terminator_service__WEBPACK_IMPORTED_MODULE_12__.TerminatorService),
/* harmony export */   TextAreaWidget: () => (/* reexport safe */ _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__.TextAreaWidget),
/* harmony export */   ValidatorRegistry: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.ValidatorRegistry),
/* harmony export */   Widget: () => (/* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_13__.Widget),
/* harmony export */   WidgetChooserComponent: () => (/* reexport safe */ _widgetchooser_component__WEBPACK_IMPORTED_MODULE_14__.WidgetChooserComponent),
/* harmony export */   WidgetFactory: () => (/* reexport safe */ _widgetfactory__WEBPACK_IMPORTED_MODULE_15__.WidgetFactory),
/* harmony export */   WidgetRegistry: () => (/* reexport safe */ _widgetregistry__WEBPACK_IMPORTED_MODULE_16__.WidgetRegistry),
/* harmony export */   ZSchemaValidatorFactory: () => (/* reexport safe */ _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_11__.ZSchemaValidatorFactory),
/* harmony export */   useFactory: () => (/* reexport safe */ _form_component__WEBPACK_IMPORTED_MODULE_5__.useFactory)
/* harmony export */ });
/* harmony import */ var _defaultwidgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultwidgets */ 2897);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ 41);
/* harmony import */ var _template_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-schema */ 336);
/* harmony import */ var _default_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.widget */ 8069);
/* harmony import */ var _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expression-compiler-factory */ 6090);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.component */ 4076);
/* harmony import */ var _formelement_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formelement.action.component */ 4268);
/* harmony import */ var _formelement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formelement.component */ 1160);
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./log.service */ 7711);
/* harmony import */ var _property_binding_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-binding-registry */ 3724);
/* harmony import */ var _schema_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schema-form.module */ 3130);
/* harmony import */ var _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schemavalidatorfactory */ 4298);
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./terminator.service */ 3651);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget */ 3139);
/* harmony import */ var _widgetchooser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgetchooser.component */ 4572);
/* harmony import */ var _widgetfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgetfactory */ 3413);
/* harmony import */ var _widgetregistry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widgetregistry */ 5280);


















/***/ }),

/***/ 7711:
/*!*****************************************************!*\
  !*** ./projects/schema-form/src/lib/log.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLogService: () => (/* binding */ DefaultLogService),
/* harmony export */   LOG_LEVEL: () => (/* binding */ LOG_LEVEL),
/* harmony export */   LogService: () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};


const LOG_LEVEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Logging level');
let LogService = class LogService {
  constructor(level /* should be of type `LogLevel` but AOT fails with : 'Error encountered in metadata generated for exported symbol 'DefaultLogService':"Could not resolve type LogLevel." */) {
    this.level = level;
    this.logLevel = 3 /* LogLevel.off */;
    this.logLevel = level;
  }
  isWarnEnabled() {
    return 4 /* LogLevel.all */ === this.logLevel || 1 /* LogLevel.warn */ === this.logLevel;
  }
  isErrorEnabled() {
    return 4 /* LogLevel.all */ === this.logLevel || 2 /* LogLevel.error */ === this.logLevel;
  }
  isLogEnabled() {
    return 4 /* LogLevel.all */ === this.logLevel || 0 /* LogLevel.log */ === this.logLevel;
  }
};
LogService = __decorate([__param(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional)()), __param(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject)(LOG_LEVEL))], LogService);

/**
 * Very simple abstraction of logging
 */
class DefaultLogService extends LogService {
  constructor(logLevel /* should be of type `LogLevel` but AOT fails with : 'Error encountered in metadata generated for exported symbol 'DefaultLogService':"Could not resolve type LogLevel." */) {
    super(logLevel);
    this.logLevel = logLevel;
    this.warn = !this.isWarnEnabled() ? () => {} : console.warn;
    this.error = !this.isErrorEnabled() ? () => {} : console.error;
    this.log = !this.isLogEnabled() ? () => {} : console.log;
    this.logLevel = logLevel;
  }
  static #_ = this.ɵfac = function DefaultLogService_Factory(t) {
    return new (t || DefaultLogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LOG_LEVEL, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DefaultLogService,
    factory: DefaultLogService.ɵfac
  });
}

/***/ }),

/***/ 6238:
/*!*******************************************************!*\
  !*** ./projects/schema-form/src/lib/model/ISchema.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8146:
/*!******************************************************!*\
  !*** ./projects/schema-form/src/lib/model/action.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7678:
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/actionregistry.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionRegistry: () => (/* binding */ ActionRegistry)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ActionRegistry {
  constructor() {
    this.actions = {};
  }
  clear() {
    this.actions = {};
  }
  register(actionId, action) {
    this.actions[actionId] = action;
  }
  get(actionId) {
    return this.actions[actionId];
  }
  static #_ = this.ɵfac = function ActionRegistry_Factory(t) {
    return new (t || ActionRegistry)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ActionRegistry,
    factory: ActionRegistry.ɵfac
  });
}

/***/ }),

/***/ 1665:
/*!*************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/arrayproperty.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayProperty: () => (/* binding */ ArrayProperty)
/* harmony export */ });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ 2520);
/* harmony import */ var _typemapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typemapping */ 3371);


class ArrayProperty extends _formproperty__WEBPACK_IMPORTED_MODULE_0__.PropertyGroup {
  constructor(formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) {
    super(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
    this.formPropertyFactory = formPropertyFactory;
  }
  addItem(value = null) {
    let newProperty = this.addProperty();
    newProperty.reset(value, false);
    newProperty._bindVisibility();
    return newProperty;
  }
  addProperty() {
    let itemSchema = this.schema.items;
    if (Array.isArray(this.schema.items)) {
      const itemSchemas = this.schema.items;
      if (itemSchemas.length > this.properties.length) {
        itemSchema = itemSchema[this.properties.length];
      } else if (this.schema.additionalItems) {
        itemSchema = this.schema.additionalItems;
      } else {
        // souldn't add new items since schema is undefined for the item at its position
        return null;
      }
    }
    let newProperty = this.formPropertyFactory.createProperty(itemSchema, this);
    this.properties.push(newProperty);
    return newProperty;
  }
  removeItem(item) {
    this.properties = this.properties.filter(i => i !== item);
    this.updateValueAndValidity(false, true);
  }
  setValue(value, onlySelf) {
    this.createProperties();
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }
  _hasValue() {
    return true;
  }
  _updateValue() {
    this.reduceValue();
  }
  reduceValue() {
    const value = [];
    this.forEachChild((property, _) => {
      if (property.visible && property._hasValue()) {
        value.push(property.value);
      }
    });
    this._value = value;
  }
  reset(value, onlySelf = true) {
    value = value || this.schema.default || [];
    this.properties = [];
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }
  createProperties() {
    this.properties = [];
  }
  resetProperties(value) {
    for (let idx in value) {
      if (value.hasOwnProperty(idx)) {
        let property = this.addProperty();
        property.reset(value[idx], true);
      }
    }
  }
}
_typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING.array = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, formPropertyFactory, logger) => {
  return new ArrayProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};

/***/ }),

/***/ 4274:
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/atomicproperty.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtomicProperty: () => (/* binding */ AtomicProperty)
/* harmony export */ });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ 2520);

class AtomicProperty extends _formproperty__WEBPACK_IMPORTED_MODULE_0__.FormProperty {
  setValue(value, onlySelf = false) {
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
  }
  reset(value = null, onlySelf = true) {
    this.resetValue(value);
    this.updateValueAndValidity(onlySelf, true);
  }
  resetValue(value) {
    if (value === null) {
      if (this.schema.default !== undefined) {
        value = this.schema.default;
      } else {
        value = this.fallbackValue();
      }
    }
    this._value = value;
  }
  _hasValue() {
    return this.fallbackValue() !== this.value;
  }
  _updateValue() {}
}

/***/ }),

/***/ 6794:
/*!*******************************************************!*\
  !*** ./projects/schema-form/src/lib/model/binding.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4237:
/*!***************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/bindingregistry.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindingRegistry: () => (/* binding */ BindingRegistry)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class BindingRegistry {
  constructor() {
    this.bindings = [];
  }
  clear() {
    this.bindings = [];
  }
  register(path, binding) {
    this.bindings[path] = [].concat(binding);
  }
  get(path) {
    return this.bindings[path];
  }
  static #_ = this.ɵfac = function BindingRegistry_Factory(t) {
    return new (t || BindingRegistry)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BindingRegistry,
    factory: BindingRegistry.ɵfac
  });
}

/***/ }),

/***/ 5858:
/*!***************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/booleanproperty.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanProperty: () => (/* binding */ BooleanProperty)
/* harmony export */ });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ 4274);
/* harmony import */ var _typemapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typemapping */ 3371);


class BooleanProperty extends _atomicproperty__WEBPACK_IMPORTED_MODULE_0__.AtomicProperty {
  fallbackValue() {
    return null;
  }
}
_typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING.boolean = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new BooleanProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};

/***/ }),

/***/ 2520:
/*!************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/formproperty.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedProxyHandler: () => (/* binding */ ExtendedProxyHandler),
/* harmony export */   FormProperty: () => (/* binding */ FormProperty),
/* harmony export */   PropertyGroup: () => (/* binding */ PropertyGroup)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _template_schema_field_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template-schema/field/field */ 3401);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ 7353);




class FormProperty {
  /**
   * Provides the unique path of this form element.<br/>
   * E.g.:
   * <code>/garage/cars</code>,<br/>
   * <code>/shop/book/0/page/1/</code>
   */
  get _canonicalPath() {
    return this.__canonicalPath;
  }
  set _canonicalPath(canonicalPath) {
    this.__canonicalPath = canonicalPath;
    this.__canonicalPathNotation = (this.__canonicalPath || '').replace(new RegExp('^/', 'ig'), '').replace(new RegExp('/$', 'ig'), '').replace(new RegExp('/', 'ig'), '.');
  }
  /**
   * Uses the unique path provided by the property <code>_canonicalPath</code><br/>
   * but converts it to a HTML Element Attribute ID compliant format.<br/>
   * E.g.:
   * <code>garage.cars</code>,<br/>
   * <code>shop.book.0.page.1.</code>
   */
  get canonicalPathNotation() {
    return this.__canonicalPathNotation;
  }
  /**
   * Provides the HTML Element Attribute ID/NAME compliant representation
   * of the root element.<br/>
   * Represents the HTML FORM NAME.<br/>
   * Only the root <code>FormProperty</code> will provide a value here.
   */
  get rootName() {
    return this._rootName;
  }
  constructor(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) {
    this.validatorRegistry = validatorRegistry;
    this.schema = schema;
    this.logger = logger;
    this._value = null;
    this._errors = null;
    this._valueChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this._errorsChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this._visible = true;
    this._visibilityChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
    this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
    this.expressionCompilerVisibiltyIf = expressionCompilerFactory.createExpressionCompilerVisibilityIf();
    this._parent = parent;
    if (parent) {
      this._root = parent.root;
    } else if (this instanceof PropertyGroup) {
      this._root = this;
      this._rootName = this.createRootName();
    }
    this._path = path;
  }
  /**
   * Creates the HTML ID and NAME attribute compliant string.
   */
  createRootName() {
    if (this.schema && this.schema['name']) {
      return this._rootName = this.schema['name'].replace(new RegExp('[\\s]+', 'ig'), '_');
    }
    return '';
  }
  get valueChanges() {
    return this._valueChanges;
  }
  get errorsChanges() {
    return this._errorsChanges;
  }
  get type() {
    return this.schema.type;
  }
  get isNullableType() {
    return Array.isArray(this.schema.type) && this.schema.type.some(type => type === _template_schema_field_field__WEBPACK_IMPORTED_MODULE_0__.FieldType.Null);
  }
  get parent() {
    return this._parent;
  }
  get root() {
    return this._root || this;
  }
  get path() {
    return this._path;
  }
  get value() {
    return this._value;
  }
  get visible() {
    return this._visible;
  }
  get valid() {
    return this._errors === null;
  }
  updateValueAndValidity(onlySelf = false, emitEvent = true) {
    this._updateValue();
    if (emitEvent) {
      this.valueChanges.next(this.value);
    }
    this._runValidation();
    if (this.parent && !onlySelf) {
      this.parent.updateValueAndValidity(onlySelf, emitEvent);
    }
  }
  /**
   * @internal
   */
  _runValidation() {
    let errors = this.schemaValidator(this._value) || [];
    let customValidator = this.validatorRegistry.get(this.path);
    if (customValidator) {
      let customErrors = customValidator(this.value, this, this.findRoot());
      errors = this.mergeErrors(errors, customErrors);
    }
    if (errors.length === 0) {
      errors = null;
    }
    this._errors = errors;
    this.setErrors(this._errors);
  }
  mergeErrors(errors, newErrors) {
    if (newErrors) {
      if (Array.isArray(newErrors)) {
        errors = errors.concat(...newErrors);
      } else {
        errors.push(newErrors);
      }
    }
    return errors;
  }
  setErrors(errors) {
    this._errors = errors;
    this._errorsChanges.next(errors);
  }
  extendErrors(errors) {
    errors = this.mergeErrors(this._errors || [], errors);
    this.setErrors(errors);
  }
  searchProperty(path) {
    let prop = this;
    let base = null;
    let result = null;
    if (path[0] === '/') {
      base = this.findRoot();
      result = base.getProperty(path.substr(1));
    } else {
      while (result === null && prop.parent !== null) {
        prop = base = prop.parent;
        result = base.getProperty(path);
      }
    }
    return result;
  }
  findRoot() {
    let property = this;
    while (property.parent !== null) {
      property = property.parent;
    }
    return property;
  }
  setVisible(visible) {
    this._visible = visible;
    this._visibilityChanges.next(visible);
    this.updateValueAndValidity();
  }
  /**
   * Making use of the expression compiler for the <code>visibleIf</code> condition
   * @param sourceProperty The source property where the `visibleIf` condition is set.
   * @param targetProperty  The target property what provided the `value` on which the `visibleIf` condition will be checked against. May be `null` or `undefined`
   * @param dependencyPath The dependency path of the `targetProperty`
   * @param value The value of the `targetProperty` to check the `visiblityIf` condintion against. May be `null` or `undefined`
   * @param expression The value or expression to check against the `value` for the `targetProperty`. May be `null` or `undefined`
   */
  __evaluateVisibilityIf(sourceProperty, targetProperty, dependencyPath, value = '', expression) {
    try {
      let valid = false;
      const expArray = Array.isArray(expression) ? expression : [expression];
      for (const expString of expArray) {
        if (typeof expString === 'boolean') {
          valid = !expString ? !value : value;
        } else if (typeof expString === 'number') {
          valid = !!value || value == 0 ? `${expString}` === `${value}` : false;
        } else if (-1 !== `${expString}`.indexOf('$ANY$')) {
          if (Array.isArray(value)) {
            valid = value.length > 0;
          } else if (typeof value === "number") {
            valid = true;
          } else if (typeof value === "boolean") {
            valid = true;
          } else if (typeof value === "string") {
            valid = value !== '';
          } else if (typeof value === "object") {
            valid = !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isEmptyObject)(value);
          }
        } else if (0 === `${expString}`.indexOf('$EXP$')) {
          const _expresssion = expString.substring('$EXP$'.length);
          valid = true === this.expressionCompilerVisibiltyIf.evaluate(_expresssion, {
            source: sourceProperty,
            target: targetProperty
          });
        } else if (Array.isArray(value)) {
          valid = value.some(val => `${val}` === `${expString}`);
        } else {
          valid = !!value ? `${expString}` === `${value}` : false;
        }
        if (valid) {
          break;
        }
      }
      return valid;
    } catch (error) {
      this.logger.error('Error processing "VisibileIf" expression for path: ', dependencyPath, `source - ${sourceProperty ? sourceProperty._canonicalPath : '<no-sourceProperty>'}: `, sourceProperty, `target - ${targetProperty ? targetProperty._canonicalPath : '<no-targetProperty>'}: `, targetProperty, 'value:', value, 'expression: ', expression, 'error: ', error);
    }
  }
  /**
   * binds visibility conditions of type `oneOf` and `allOf`.
   * @returns `true` if any visibility binding of type `oneOf` or `allOf` has been processed. Otherwise `false`.
   */
  __bindVisibility_oneOf_or_allOf() {
    /**
     * <pre>
     *     "oneOf":[{
     *         "path":["value","value"]
     *     },{
     *         "path":["value","value"]
     *     }]
     * </pre>
     * <pre>
     *     "allOf":[{
     *         "path":["value","value"]
     *     },{
     *         "path":["value","value"]
     *     }]
     * </pre>
     */
    // get the visibleIf property and check if it has a oneOf or allOf property
    const visibleIfProperty = this.schema.visibleIf;
    let oneOfOrAllOf;
    if (visibleIfProperty) {
      if (!!visibleIfProperty.oneOf) oneOfOrAllOf = visibleIfProperty.oneOf;else if (!!visibleIfProperty.allOf) oneOfOrAllOf = visibleIfProperty.allOf;
    }
    // oneOf or allOf is set so this method handles the binding
    if (visibleIfProperty && oneOfOrAllOf) {
      const finalObservable = this.__bindConditionalVisiblityChain(oneOfOrAllOf, !!visibleIfProperty.oneOf, !!visibleIfProperty.allOf);
      // subscribe to the last observable which collects all temporary results
      finalObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)()).subscribe(visible => {
        this.setVisible(visible);
      });
      return true;
    }
    // oneOf and allOf is not set. this method does not handle the logic
    return false;
  }
  /**
   * helper function to recursively bind visibilty in an arbitrary chain oneOf allOf chain
   * @param visbilityElement The element from the visibitly chain. Can be an array from e.g. {"oneOf": [...]} or an element with one property for the dependency path e.g. {"textField1": ...}
   * @param isOneOf Boolean to chain the oberservables as oneOf
   * @param isAllOf Boolean to chain the oberservables as allOf
   * @returns An Array with one
   */
  __bindConditionalVisiblityChain(visbilityElement, isOneOf, isAllOf) {
    // all observables are added to this array, if the element is oneOf or allOf
    const visibiltyBindings = [];
    // oneOf or allOf = visibiltyElement must be an array
    if (isOneOf || isAllOf) {
      for (const objInOf of visbilityElement) {
        // bind all elements recursively with the same function.
        // objInOf must be an object, which may contain allOf or oneOf again but this is checked by the recursive call to this method
        visibiltyBindings.push(this.__bindConditionalVisiblityChain(objInOf, false, false));
      }
      // visibiltyElement must be an obj, which may contain oneOf or allOf again
    } else {
      const containsOneOf = visbilityElement.hasOwnProperty("oneOf");
      const containsAllOf = visbilityElement.hasOwnProperty("allOf");
      let visibleIfOf = null;
      if (containsOneOf) visibleIfOf = visbilityElement.oneOf;else if (containsAllOf) visibleIfOf = visbilityElement.allOf;
      // if oneOf or allOf is present check if it is an array with at least 1 element
      if (visibleIfOf) {
        // empty arrays just return boolean false
        if (visibleIfOf.length == 0) return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
        // recursive call if visbilityElement has oneOf or allOf in it
        return this.__bindConditionalVisiblityChain(visibleIfOf, containsOneOf, containsAllOf);
      } else {
        // it's a dependency path
        const observables = this.__handleDependencyPath(visbilityElement);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(observables, (...values) => values.indexOf(true) !== -1);
      }
    }
    // combine all observables to one boolean by using logical and or logical or. eventually return the observable
    let ret;
    if (isAllOf) ret = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(visibiltyBindings, (...values) => values.indexOf(false) === -1);else if (isOneOf) ret = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(visibiltyBindings, (...values) => values.indexOf(true) !== -1);
    return ret;
  }
  /**
   * Handles a dependency path in a oneOf or allOf
   * @param dependencyElement An element / object which contains neither a field with oneOf or allOf as name. Handled as dependency path in json
   * @returns An oberservable boolean containing the evaluation of the statement, where the statement is the value of the dependency path field
   */
  __handleDependencyPath(dependencyElement) {
    const dependencyPath = Object.keys(dependencyElement)[0];
    const propertiesBinding = [];
    const properties = this.findProperties(this, dependencyPath);
    if ((properties || []).length) {
      for (const property of properties) {
        if (property) {
          let valueCheck;
          const _chk = value => this.__evaluateVisibilityIf(this, property, dependencyPath, value, dependencyElement[dependencyPath]) ? true : false;
          valueCheck = property.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(_chk));
          const visibilityCheck = property._visibilityChanges;
          const and = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
          propertiesBinding.push(and);
        }
      }
      return propertiesBinding;
    } else {
      this.logger.warn("Can't find property " + dependencyPath + " for visibility check of " + this.path);
      this.registerMissingVisibilityBinding(dependencyPath, this);
    }
    return [(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false)];
  }
  // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
  _bindVisibility() {
    if (this.__bindVisibility_oneOf_or_allOf()) return;
    let visibleIf = this.schema.visibleIf;
    if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
      this.setVisible(false);
    } else if (visibleIf !== undefined) {
      let propertiesBinding = [];
      for (let dependencyPath in visibleIf) {
        if (visibleIf.hasOwnProperty(dependencyPath)) {
          const properties = this.findProperties(this, dependencyPath);
          if ((properties || []).length) {
            for (const property of properties) {
              if (property) {
                const valueCheck = property.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => this.__evaluateVisibilityIf(this, property, dependencyPath, value, visibleIf[dependencyPath])));
                const visibilityCheck = property._visibilityChanges;
                const and = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
                propertiesBinding.push(and);
              }
            }
          } else {
            this.logger.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this.path);
            this.registerMissingVisibilityBinding(dependencyPath, this);
            // not visible if not existent
            this.setVisible(false);
          }
        }
      }
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(propertiesBinding, (...values) => {
        return values.indexOf(true) !== -1;
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)()).subscribe(visible => {
        this.setVisible(visible);
      });
    }
  }
  registerMissingVisibilityBinding(dependencyPath, formProperty) {
    formProperty._propertyBindingRegistry.getPropertyBindingsVisibility().add(dependencyPath, formProperty.path);
  }
  /**
   * Finds all <code>formProperties</code> from a path with wildcards.<br/>
   * e.g: <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * @param target
   * @param propertyPath
   */
  findProperties(target, propertyPath) {
    const props = [];
    const paths = this.findPropertyPaths(target, propertyPath);
    for (const path of paths) {
      const p = target.searchProperty(path);
      if (p) {
        props.push(p);
      }
    }
    return props;
  }
  /**
   * Creates canonical paths from a path with wildcards.
   * e.g:<br/>
   * From:<br/>
   * <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * it creates:<br/>
   * <code>/garage/cars/0/tires/0/name</code><br/>
   * <code>/garage/cars/0/tires/1/name</code><br/>
   * <code>/garage/cars/0/tires/2/name</code><br/>
   * <code>/garage/cars/0/tires/3/name</code><br/>
   * <code>/garage/cars/1/tires/0/name</code><br/>
   * <code>/garage/cars/2/tires/1/name</code><br/>
   * <code>/garage/cars/3/tires/2/name</code><br/>
   * <code>/garage/cars/3/tires/3/name</code><br/>
   * <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * <code>/garage/cars/&#42;/tires/2/name</code><br/>
   * <code>/garage/cars/&#42;/tires/3/name</code><br/>
   * <br/>etc...
   * @param target
   * @param path
   * @param parentPath
   */
  findPropertyPaths(target, path, parentPath) {
    const ix = path.indexOf('*');
    if (-1 !== ix) {
      const prePath = ix > -1 ? path.substring(0, ix - 1) : path;
      const subPath = ix > -1 ? path.substring(ix + 1) : path;
      const prop = target.searchProperty(prePath);
      let pathFound = [];
      if (prop instanceof PropertyGroup) {
        const arrProp = prop.properties;
        for (let i = 0; i < arrProp.length; i++) {
          const curreItemPath = (parentPath || '') + prePath + (prePath.endsWith('/') ? '' : '/') + i + subPath;
          const curreItemPrePath = (parentPath || '') + prePath + i;
          if (-1 === curreItemPath.indexOf('*')) {
            pathFound.push(curreItemPath);
          }
          const childrenPathFound = this.findPropertyPaths(arrProp[i], subPath, curreItemPrePath);
          pathFound = pathFound.concat(childrenPathFound);
        }
      }
      return pathFound;
    }
    return [path];
  }
}
class PropertyGroup extends FormProperty {
  constructor() {
    super(...arguments);
    this._properties = null;
    this._propertyProxyHandler = new ExtendedProxyHandler(this.logger);
  }
  get properties() {
    return this._properties;
  }
  set properties(properties) {
    /**
     * Override the setter to add an observer that notices when an item is added or removed.<br/>
     */
    this._properties = new Proxy(properties, this._propertyProxyHandler);
  }
  getProperty(path) {
    let subPathIdx = path.indexOf('/');
    let propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
    let property = this.properties[propertyId];
    if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
      let subPath = path.substr(subPathIdx + 1);
      property = property.getProperty(subPath);
    }
    return property;
  }
  forEachChild(fn) {
    for (let propertyId in this.properties) {
      if (this.properties.hasOwnProperty(propertyId)) {
        let property = this.properties[propertyId];
        fn(property, propertyId);
      }
    }
  }
  forEachChildRecursive(fn) {
    this.forEachChild(child => {
      fn(child);
    });
  }
  _bindVisibility() {
    super._bindVisibility();
    this._bindVisibilityRecursive();
  }
  _bindVisibilityRecursive() {
    this.forEachChildRecursive(property => {
      property._bindVisibility();
    });
  }
  isRoot() {
    return this === this.root;
  }
}
class ExtendedProxyHandler {
  constructor(logger) {
    this.logger = logger;
  }
  /**
   * When a new item is added it will be checked for visibility updates to proceed <br/>
   * if any other field has a binding reference to it.<br/>
   */
  set(target, p, value, receiver) {
    /**
     * 1) Make sure a canonical path is set
     */
    const assertCanonicalPath = propertyValue => {
      const formProperty = propertyValue;
      if (Array.isArray(target) && propertyValue instanceof FormProperty) {
        /**
         * Create a canonical path replacing the last '*' with the elements position in array
         * @param propertyPath
         * @param indexOfChild
         */
        const getCanonicalPath = (propertyPath, indexOfChild) => {
          let pos;
          if (propertyPath && -1 !== (pos = propertyPath.lastIndexOf('*'))) {
            return propertyPath.substring(0, pos) + indexOfChild.toString() + propertyPath.substring(pos + 1);
          }
        };
        if (formProperty) {
          formProperty._canonicalPath = getCanonicalPath(formProperty._canonicalPath, p);
        }
      }
      const recalculateCanonicalPath = formProperty => {
        if (!(formProperty instanceof PropertyGroup)) return;
        const propertyGroup = formProperty;
        const propertyGroupChildren = Array.isArray(propertyGroup.properties) ? propertyGroup.properties : Object.values(propertyGroup.properties || {});
        if (propertyGroupChildren.length || (formProperty.path || '').endsWith('/*')) {
          /**
           * If it is an array, then all children canonical paths must be computed now.
           * The children don't have the parent's path segment set yet,
           * because they are created before the parent gets attached to its parent.
           */
          for (const child of propertyGroupChildren) {
            if (child.__canonicalPath.indexOf('*')) {
              const p_path = formProperty._canonicalPath.split('/');
              child._canonicalPath = p_path.concat(child._canonicalPath.split('/').splice(p_path.length)).join('/');
            }
            recalculateCanonicalPath(child);
          }
        }
      };
      recalculateCanonicalPath(formProperty);
      const propertyGroup = formProperty;
      const propertyGroupChildren = Array.isArray(propertyGroup.properties) ? propertyGroup.properties : Object.values(propertyGroup.properties || {});
      return {
        property: formProperty,
        children: propertyGroupChildren
      };
    };
    const {
      property,
      children
    } = assertCanonicalPath(value);
    /**
     * 2) Add the new property before rebinding, so it can be found by <code>_bindVisibility</code>
     */
    const result = target[p] = value;
    /**
     * 3) Re-bind the visibility bindings referencing to this canonical paths
     */
    const rebindVisibility = () => {
      const rebindAll = [property].concat(children);
      const findPropertiesToRebind = formProperty => {
        const propertyBindings = formProperty._propertyBindingRegistry.getPropertyBindingsVisibility();
        let rebind = [];
        if (formProperty._canonicalPath) {
          rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty._canonicalPath) || []));
          if (formProperty._canonicalPath.startsWith('/')) {
            rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty._canonicalPath.substring(1)) || []));
          }
        }
        rebind = rebind.concat(propertyBindings.findByDependencyPath(formProperty.path) || []);
        if (formProperty.path.startsWith('/')) {
          rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty.path.substring(1)) || []));
        }
        const uniqueValues = {};
        for (const item of rebind) {
          uniqueValues[item] = item;
        }
        return Object.keys(uniqueValues);
      };
      for (const _property of rebindAll) {
        if (_property instanceof FormProperty) {
          try {
            const rebindPaths = findPropertiesToRebind(_property);
            for (const rebindPropPath of rebindPaths) {
              const rebindProp = _property.searchProperty(rebindPropPath);
              if (!rebindProp) {
                this.logger.warn('Can\'t find property to rebind visibility at path:', _property.path, 'property:', _property);
              } else {
                rebindProp._bindVisibility();
              }
            }
          } catch (e) {
            this.logger.error('Rebinding visibility error at path:', _property.path, 'property:', _property, e);
          }
        }
      }
    };
    rebindVisibility();
    return result;
  }
  get(target, p, receiver) {
    return target[p];
  }
  deleteProperty(target, p) {
    return delete target[p];
  }
}

/***/ }),

/***/ 1151:
/*!*******************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/formpropertyfactory.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormPropertyFactory: () => (/* binding */ FormPropertyFactory)
/* harmony export */ });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ 2520);
/* harmony import */ var _typemapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typemapping */ 3371);
/* harmony import */ var _template_schema_field_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template-schema/field/field */ 3401);



class FormPropertyFactory {
  constructor(schemaValidatorFactory, validatorRegistry, propertyBindingRegistry, expressionCompilerFactory, logger) {
    this.schemaValidatorFactory = schemaValidatorFactory;
    this.validatorRegistry = validatorRegistry;
    this.propertyBindingRegistry = propertyBindingRegistry;
    this.expressionCompilerFactory = expressionCompilerFactory;
    this.logger = logger;
  }
  createProperty(schema, parent = null, propertyId) {
    let newProperty = null;
    let path = '';
    let _canonicalPath = '';
    if (parent) {
      path += parent.path;
      if (parent.parent !== null) {
        path += '/';
        _canonicalPath += '/';
      }
      if (parent.type === 'object') {
        path += propertyId;
        _canonicalPath += propertyId;
      } else if (parent.type === 'array') {
        path += '*';
        _canonicalPath += '*';
      } else {
        throw new Error('Instanciation of a FormProperty with an unknown parent type: ' + parent.type);
      }
      _canonicalPath = (parent._canonicalPath || parent.path) + _canonicalPath;
    } else {
      path = '/';
      _canonicalPath = '/';
    }
    if (schema.$ref) {
      const refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
      newProperty = this.createProperty(refSchema, parent, path);
    } else {
      const type = this.isUnionType(schema.type) && this.isValidNullableUnionType(schema.type) ? this.extractTypeFromNullableUnionType(schema.type) : schema.type;
      if (_typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING[type]) {
        if (type === 'object' || type === 'array') {
          newProperty = _typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING[type](this.schemaValidatorFactory, this.validatorRegistry, this.expressionCompilerFactory, schema, parent, path, this, this.logger);
        } else {
          newProperty = _typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING[type](this.schemaValidatorFactory, this.validatorRegistry, this.expressionCompilerFactory, schema, parent, path, this.logger);
        }
      } else {
        throw new TypeError(`Undefined type ${type} (existing: ${Object.keys(_typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING)})`);
      }
    }
    newProperty._propertyBindingRegistry = this.propertyBindingRegistry;
    newProperty._canonicalPath = _canonicalPath;
    if (newProperty instanceof _formproperty__WEBPACK_IMPORTED_MODULE_0__.PropertyGroup) newProperty.reset(null, true);
    return newProperty;
  }
  isUnionType(unionType) {
    return Array.isArray(unionType) && unionType.length > 1;
  }
  isValidNullableUnionType(unionType) {
    if (!unionType.some(subType => subType === _template_schema_field_field__WEBPACK_IMPORTED_MODULE_2__.FieldType.Null)) {
      throw new TypeError(`Unsupported union type ${unionType}. Supports only nullable union types, for example ["string", "null"]`);
    }
    if (unionType.length !== 2) {
      throw new TypeError(`Unsupported count of types in nullable union type ${unionType}. Supports only two types one of the which should be "null"`);
    }
    const type = this.extractTypeFromNullableUnionType(unionType);
    if (!type || [_template_schema_field_field__WEBPACK_IMPORTED_MODULE_2__.FieldType.Object, _template_schema_field_field__WEBPACK_IMPORTED_MODULE_2__.FieldType.Array].includes(type)) {
      throw new TypeError(`Unsupported second type ${type} for nullable union. Allowed types are "${_template_schema_field_field__WEBPACK_IMPORTED_MODULE_2__.FieldType.Number}", "${_template_schema_field_field__WEBPACK_IMPORTED_MODULE_2__.FieldType.Integer}", "${_template_schema_field_field__WEBPACK_IMPORTED_MODULE_2__.FieldType.Boolean}", "${_template_schema_field_field__WEBPACK_IMPORTED_MODULE_2__.FieldType.String}"`);
    }
    return true;
  }
  extractTypeFromNullableUnionType(unionType) {
    return unionType.filter(type => type !== 'null')?.[0];
  }
}

/***/ }),

/***/ 41:
/*!*****************************************************!*\
  !*** ./projects/schema-form/src/lib/model/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionRegistry: () => (/* reexport safe */ _actionregistry__WEBPACK_IMPORTED_MODULE_1__.ActionRegistry),
/* harmony export */   ArrayProperty: () => (/* reexport safe */ _arrayproperty__WEBPACK_IMPORTED_MODULE_8__.ArrayProperty),
/* harmony export */   AtomicProperty: () => (/* reexport safe */ _atomicproperty__WEBPACK_IMPORTED_MODULE_6__.AtomicProperty),
/* harmony export */   BindingRegistry: () => (/* reexport safe */ _bindingregistry__WEBPACK_IMPORTED_MODULE_3__.BindingRegistry),
/* harmony export */   BooleanProperty: () => (/* reexport safe */ _booleanproperty__WEBPACK_IMPORTED_MODULE_10__.BooleanProperty),
/* harmony export */   ExtendedProxyHandler: () => (/* reexport safe */ _formproperty__WEBPACK_IMPORTED_MODULE_5__.ExtendedProxyHandler),
/* harmony export */   FormProperty: () => (/* reexport safe */ _formproperty__WEBPACK_IMPORTED_MODULE_5__.FormProperty),
/* harmony export */   FormPropertyFactory: () => (/* reexport safe */ _formpropertyfactory__WEBPACK_IMPORTED_MODULE_4__.FormPropertyFactory),
/* harmony export */   NullProperty: () => (/* reexport safe */ _nullproperty__WEBPACK_IMPORTED_MODULE_12__.NullProperty),
/* harmony export */   NumberProperty: () => (/* reexport safe */ _numberproperty__WEBPACK_IMPORTED_MODULE_11__.NumberProperty),
/* harmony export */   ObjectProperty: () => (/* reexport safe */ _objectproperty__WEBPACK_IMPORTED_MODULE_7__.ObjectProperty),
/* harmony export */   PROPERTY_TYPE_MAPPING: () => (/* reexport safe */ _typemapping__WEBPACK_IMPORTED_MODULE_16__.PROPERTY_TYPE_MAPPING),
/* harmony export */   PropertyGroup: () => (/* reexport safe */ _formproperty__WEBPACK_IMPORTED_MODULE_5__.PropertyGroup),
/* harmony export */   SchemaPreprocessor: () => (/* reexport safe */ _schemapreprocessor__WEBPACK_IMPORTED_MODULE_15__.SchemaPreprocessor),
/* harmony export */   StringProperty: () => (/* reexport safe */ _stringproperty__WEBPACK_IMPORTED_MODULE_9__.StringProperty),
/* harmony export */   ValidatorRegistry: () => (/* reexport safe */ _validatorregistry__WEBPACK_IMPORTED_MODULE_14__.ValidatorRegistry)
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ 8146);
/* harmony import */ var _actionregistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionregistry */ 7678);
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding */ 6794);
/* harmony import */ var _bindingregistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bindingregistry */ 4237);
/* harmony import */ var _formpropertyfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formpropertyfactory */ 1151);
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formproperty */ 2520);
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atomicproperty */ 4274);
/* harmony import */ var _objectproperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objectproperty */ 3713);
/* harmony import */ var _arrayproperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arrayproperty */ 1665);
/* harmony import */ var _stringproperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stringproperty */ 4827);
/* harmony import */ var _booleanproperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./booleanproperty */ 5858);
/* harmony import */ var _numberproperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./numberproperty */ 2184);
/* harmony import */ var _nullproperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nullproperty */ 6617);
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validator */ 6191);
/* harmony import */ var _validatorregistry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./validatorregistry */ 5357);
/* harmony import */ var _schemapreprocessor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./schemapreprocessor */ 6875);
/* harmony import */ var _typemapping__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./typemapping */ 3371);
/* harmony import */ var _ISchema__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ISchema */ 6238);



















/***/ }),

/***/ 6617:
/*!************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/nullproperty.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NullProperty: () => (/* binding */ NullProperty)
/* harmony export */ });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ 4274);
/* harmony import */ var _typemapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typemapping */ 3371);


class NullProperty extends _atomicproperty__WEBPACK_IMPORTED_MODULE_0__.AtomicProperty {
  fallbackValue() {
    return null;
  }
}
_typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING.null = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new NullProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};

/***/ }),

/***/ 2184:
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/numberproperty.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberProperty: () => (/* binding */ NumberProperty)
/* harmony export */ });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ 4274);
/* harmony import */ var _typemapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typemapping */ 3371);


class NumberProperty extends _atomicproperty__WEBPACK_IMPORTED_MODULE_0__.AtomicProperty {
  fallbackValue() {
    return null;
  }
  setValue(value, onlySelf = false) {
    if (typeof value === 'string') {
      if (value.length) {
        value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
      } else {
        value = null;
      }
    }
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
  }
}
_typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING.integer = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new NumberProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
_typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING.number = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new NumberProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};

/***/ }),

/***/ 3713:
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/objectproperty.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectProperty: () => (/* binding */ ObjectProperty)
/* harmony export */ });
/* harmony import */ var _typemapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typemapping */ 3371);
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formproperty */ 2520);


class ObjectProperty extends _formproperty__WEBPACK_IMPORTED_MODULE_1__.PropertyGroup {
  constructor(formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) {
    super(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
    this.formPropertyFactory = formPropertyFactory;
    this.propertiesId = [];
    this.createProperties();
  }
  setValue(value, onlySelf) {
    for (const propertyId in value) {
      if (value.hasOwnProperty(propertyId)) {
        this.properties[propertyId].setValue(value[propertyId], true);
      }
    }
    this.updateValueAndValidity(onlySelf, true);
  }
  reset(value, onlySelf = true) {
    value = value || this.schema.default || {};
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }
  resetProperties(value) {
    for (const propertyId in this.schema.properties) {
      if (this.schema.properties.hasOwnProperty(propertyId)) {
        this.properties[propertyId].reset(value[propertyId], true);
      }
    }
  }
  createProperties() {
    this.properties = {};
    this.propertiesId = [];
    for (const propertyId in this.schema.properties) {
      if (this.schema.properties.hasOwnProperty(propertyId)) {
        const propertySchema = this.schema.properties[propertyId];
        this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
        this.propertiesId.push(propertyId);
      }
    }
  }
  _hasValue() {
    return !!Object.keys(this.value).length;
  }
  _updateValue() {
    this.reduceValue();
  }
  _runValidation() {
    super._runValidation();
    if (this._errors) {
      this._errors.forEach(error => {
        const prop = this.searchProperty(error.path.slice(1));
        if (prop) {
          prop.extendErrors(error);
        }
      });
    }
  }
  reduceValue() {
    const value = {};
    this.forEachChild((property, propertyId) => {
      if (property.visible && property._hasValue()) {
        value[propertyId] = property.value;
      }
    });
    this._value = value;
  }
}
_typemapping__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_TYPE_MAPPING.object = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, formPropertyFactory, logger) => {
  return new ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};

/***/ }),

/***/ 6875:
/*!******************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/schemapreprocessor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemaPreprocessor: () => (/* binding */ SchemaPreprocessor)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 7353);
/* harmony import */ var _template_schema_field_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template-schema/field/field */ 3401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



function formatMessage(message, path) {
  return `Parsing error on ${path}: ${message}`;
}
function schemaError(message, path) {
  let mesg = formatMessage(message, path);
  throw new Error(mesg);
}
function schemaWarning(message, path) {
  let mesg = formatMessage(message, path);
  throw new Error(mesg);
}
class SchemaPreprocessor {
  static preprocess(jsonSchema, path = '/') {
    jsonSchema = jsonSchema || {};
    SchemaPreprocessor.normalizeExtensions(jsonSchema);
    if (jsonSchema.type === 'object') {
      SchemaPreprocessor.checkProperties(jsonSchema, path);
      SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
    } else if (jsonSchema.type === 'array') {
      SchemaPreprocessor.checkItems(jsonSchema, path);
    }
    SchemaPreprocessor.normalizeWidget(jsonSchema);
    SchemaPreprocessor.recursiveCheck(jsonSchema, path);
  }
  static checkProperties(jsonSchema, path) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBlank)(jsonSchema.properties)) {
      jsonSchema.properties = {};
      schemaWarning('Provided json schema does not contain a \'properties\' entry. Output schema will be empty', path);
    }
  }
  static checkAndCreateFieldsets(jsonSchema, path) {
    if (jsonSchema.fieldsets === undefined) {
      if (jsonSchema.order !== undefined) {
        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
      } else {
        SchemaPreprocessor.createFieldsets(jsonSchema);
      }
    }
    SchemaPreprocessor.checkFieldsUsage(jsonSchema, path);
  }
  static checkFieldsUsage(jsonSchema, path) {
    let fieldsId = Object.keys(jsonSchema.properties);
    let usedFields = {};
    for (let fieldset of jsonSchema.fieldsets) {
      for (let fieldId of fieldset.fields) {
        if (usedFields[fieldId] === undefined) {
          usedFields[fieldId] = [];
        }
        usedFields[fieldId].push(fieldset.id);
      }
    }
    for (const fieldId of fieldsId) {
      const isRequired = jsonSchema.required && jsonSchema.required.indexOf(fieldId) > -1;
      if (isRequired && jsonSchema.properties[fieldId]) {
        jsonSchema.properties[fieldId].isRequired = true;
      }
      if (usedFields.hasOwnProperty(fieldId)) {
        if (usedFields[fieldId].length > 1) {
          schemaError(`${fieldId} is referenced by more than one fieldset: ${usedFields[fieldId]}`, path);
        }
        delete usedFields[fieldId];
      } else if (isRequired) {
        schemaError(`${fieldId} is a required field but it is not referenced as part of a 'order' or a 'fieldset' property`, path);
      } else {
        delete jsonSchema[fieldId];
        schemaWarning(`Removing unreferenced field ${fieldId}`, path);
      }
    }
    for (let remainingfieldsId in usedFields) {
      if (usedFields.hasOwnProperty(remainingfieldsId)) {
        schemaWarning(`Referencing non-existent field ${remainingfieldsId} in one or more fieldsets`, path);
      }
    }
  }
  static createFieldsets(jsonSchema) {
    jsonSchema.order = Object.keys(jsonSchema.properties);
    SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
  }
  static replaceOrderByFieldsets(jsonSchema) {
    jsonSchema.fieldsets = [{
      id: 'fieldset-default',
      title: jsonSchema.title || '',
      description: jsonSchema.description || '',
      name: jsonSchema.name || '',
      fields: jsonSchema.order
    }];
    delete jsonSchema.order;
  }
  static normalizeWidget(fieldSchema) {
    let widget = fieldSchema.widget;
    if (widget === undefined) {
      widget = {
        'id': fieldSchema.type
      };
    } else if (typeof widget === 'string') {
      widget = {
        'id': widget
      };
    }
    fieldSchema.widget = widget;
  }
  static checkItems(jsonSchema, path) {
    if (jsonSchema.items === undefined) {
      schemaError('No \'items\' property in array', path);
    }
  }
  static recursiveCheck(jsonSchema, path) {
    if (jsonSchema.type === _template_schema_field_field__WEBPACK_IMPORTED_MODULE_1__.FieldType.Object) {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          let fieldSchema = jsonSchema.properties[fieldId];
          SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
        }
      }
      if (jsonSchema.hasOwnProperty('definitions')) {
        for (let fieldId in jsonSchema.definitions) {
          if (jsonSchema.definitions.hasOwnProperty(fieldId)) {
            let fieldSchema = jsonSchema.definitions[fieldId];
            SchemaPreprocessor.removeRecursiveRefProperties(fieldSchema, `#/definitions/${fieldId}`);
            SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
          }
        }
      }
    } else if (jsonSchema.type === 'array') {
      if (Array.isArray(jsonSchema.items || {})) {
        for (let i = 0; i < jsonSchema.items.length; i++) {
          SchemaPreprocessor.preprocess(jsonSchema.items[i], path + '*/');
        }
      } else {
        SchemaPreprocessor.preprocess(jsonSchema.items, path + '*/');
      }
      if (jsonSchema.additionalItems) {
        SchemaPreprocessor.preprocess(jsonSchema.additionalItems, path + '*/');
      }
    }
  }
  static removeRecursiveRefProperties(jsonSchema, definitionPath) {
    // to avoid infinite loop
    if (jsonSchema.type === _template_schema_field_field__WEBPACK_IMPORTED_MODULE_1__.FieldType.Object) {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          if (jsonSchema.properties[fieldId].$ref && jsonSchema.properties[fieldId].$ref === definitionPath) {
            delete jsonSchema.properties[fieldId];
          } else if (jsonSchema.properties[fieldId].type === 'object') {
            SchemaPreprocessor.removeRecursiveRefProperties(jsonSchema.properties[fieldId], definitionPath);
          }
        }
      }
    }
  }
  /**
   * Enables alias names for JSON schema extensions.
   *
   * Copies the value of each alias JSON schema property
   * to the JSON schema property of ngx-schema-form.
   *
   * @param schema JSON schema to enable alias names.
   */
  static normalizeExtensions(schema) {
    const extensions = [{
      name: "fieldsets",
      regex: /^x-?field-?sets$/i
    }, {
      name: "widget",
      regex: /^x-?widget$/i
    }, {
      name: "visibleIf",
      regex: /^x-?visible-?if$/i
    }];
    const keys = Object.keys(schema);
    for (let i = 0; i < keys.length; ++i) {
      let k = keys[i];
      let e = extensions.find(e => !!k.match(e.regex));
      if (e) {
        let v = schema[k];
        let copy = JSON.parse(JSON.stringify(v));
        schema[e.name] = copy;
      }
    }
  }
  static #_ = this.ɵfac = function SchemaPreprocessor_Factory(t) {
    return new (t || SchemaPreprocessor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SchemaPreprocessor,
    factory: SchemaPreprocessor.ɵfac
  });
}

/***/ }),

/***/ 4827:
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/stringproperty.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringProperty: () => (/* binding */ StringProperty)
/* harmony export */ });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ 4274);
/* harmony import */ var _typemapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typemapping */ 3371);


class StringProperty extends _atomicproperty__WEBPACK_IMPORTED_MODULE_0__.AtomicProperty {
  fallbackValue() {
    return this.isNullableType ? null : '';
  }
}
_typemapping__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_TYPE_MAPPING.string = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new StringProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};

/***/ }),

/***/ 3371:
/*!***********************************************************!*\
  !*** ./projects/schema-form/src/lib/model/typemapping.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROPERTY_TYPE_MAPPING: () => (/* binding */ PROPERTY_TYPE_MAPPING)
/* harmony export */ });
const PROPERTY_TYPE_MAPPING = {};

/***/ }),

/***/ 7353:
/*!*****************************************************!*\
  !*** ./projects/schema-form/src/lib/model/utils.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlank: () => (/* binding */ isBlank),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isPresent: () => (/* binding */ isPresent)
/* harmony export */ });
function isPresent(o) {
  return o !== null && o !== undefined;
}
function isBlank(o) {
  return o === null || o === undefined;
}
function isEmptyObject(o) {
  for (var i in o) return true;
  return false;
}

/***/ }),

/***/ 6191:
/*!*********************************************************!*\
  !*** ./projects/schema-form/src/lib/model/validator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5357:
/*!*****************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/validatorregistry.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidatorRegistry: () => (/* binding */ ValidatorRegistry)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ValidatorRegistry {
  constructor() {
    this.validators = [];
  }
  register(path, validator) {
    this.validators[path] = validator;
  }
  get(path) {
    return this.validators[path];
  }
  clear() {
    this.validators = [];
  }
  static #_ = this.ɵfac = function ValidatorRegistry_Factory(t) {
    return new (t || ValidatorRegistry)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ValidatorRegistry,
    factory: ValidatorRegistry.ɵfac
  });
}

/***/ }),

/***/ 3724:
/*!*******************************************************************!*\
  !*** ./projects/schema-form/src/lib/property-binding-registry.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyBindingRegistry: () => (/* binding */ PropertyBindingRegistry),
/* harmony export */   PropertyBindingTypes: () => (/* binding */ PropertyBindingTypes),
/* harmony export */   PropertyBindings: () => (/* binding */ PropertyBindings),
/* harmony export */   SimplePropertyIndexer: () => (/* binding */ SimplePropertyIndexer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

/**
 * General purpose propery binding registry
 */
class PropertyBindingRegistry {
  constructor() {
    this.bindings = {};
  }
  getPropertyBindings(type) {
    this.bindings[type] = this.bindings[type] || new PropertyBindings();
    return this.bindings[type];
  }
  getPropertyBindingsVisibility() {
    return this.getPropertyBindings(PropertyBindingTypes.visibility);
  }
  static #_ = this.ɵfac = function PropertyBindingRegistry_Factory(t) {
    return new (t || PropertyBindingRegistry)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PropertyBindingRegistry,
    factory: PropertyBindingRegistry.ɵfac
  });
}
/**
 * Defines the types of supported property bindings.<br/>
 * For now only <code>visibility</code> is supported.<br/>
 */
var PropertyBindingTypes;
(function (PropertyBindingTypes) {
  PropertyBindingTypes[PropertyBindingTypes["visibility"] = 0] = "visibility";
})(PropertyBindingTypes || (PropertyBindingTypes = {}));
/**
 * Storage that holds all bindings that are property paths related.<br/>
 */
class PropertyBindings {
  constructor() {
    this.sourcesIndex = new SimplePropertyIndexer();
    this.dependenciesIndex = new SimplePropertyIndexer();
  }
  add(dependencyPath, sourcePropertyPath) {
    this.sourcesIndex.store(sourcePropertyPath, dependencyPath);
    this.dependenciesIndex.store(dependencyPath, sourcePropertyPath);
  }
  findByDependencyPath(dependencyPath) {
    const result = this.dependenciesIndex.find(dependencyPath);
    result.results = result.results || [];
    let values = [];
    for (const res of result.results) {
      values = values.concat(Object.keys(res.value));
    }
    return result.found ? values : [];
  }
  getBySourcePropertyPath(sourcePropertyPath) {
    const result = this.sourcesIndex.find(sourcePropertyPath);
    result.results = result.results || [];
    let values = [];
    for (const res of result.results) {
      values = values.concat(Object.keys(res.value));
    }
    return result.found ? values : [];
  }
  createPathIndex(path) {
    return path.split('/');
  }
}
/**
 * Simple indexer to store property paths
 */
class SimplePropertyIndexer {
  constructor() {
    this.index = {};
    this.findOnlyWithValue = true;
  }
  static #_ = this.MARKER = '$____value';
  _createPathIndex(path) {
    return path.replace(new RegExp('//', 'g'), '/').replace(new RegExp('^/', 'g'), '').split('/').filter(item => item);
  }
  store(propertyPath, value) {
    this._storeIndex(this._createPathIndex(propertyPath), value);
  }
  _storeIndex(pathIndex, value) {
    let indexPos = this.index;
    for (const key of pathIndex) {
      indexPos[key] = indexPos[key] || {};
      indexPos = indexPos[key];
    }
    if (indexPos && value) {
      indexPos[SimplePropertyIndexer.MARKER] = indexPos[SimplePropertyIndexer.MARKER] || {};
      indexPos[SimplePropertyIndexer.MARKER][value] = value;
    }
  }
  /**
   * Find path in index.<br/>
   * Will find path like:<br/>
   * <ul>
   *     <li>/property/0/prop</li>
   *     <li>/property/0/prop/2/test</li>
   *     <li>/property/0/prop/&#42;/test</li>
   *     <li>/property/&#42;/prop/1/test</li>
   *     <li>/property/&#42;/prop/&#42;/test</li>
   *     <li>/property/1/prop/&#42;/test</li>
   *  </ul>
   * @param path
   */
  find(path) {
    return this._findInIndex(this._createPathIndex(path));
  }
  _findInIndex(path) {
    const ixRes = {
      target: path,
      found: false,
      results: []
    };
    this.__findIndex(ixRes, path, this.index, []);
    return ixRes;
  }
  __findIndex(indexerResults, path, index, parent) {
    const p = parent || [];
    const segment = path[0];
    const wild = '*' === segment ? Object.keys(index) : [];
    const _keys = (Array.isArray(segment) ? segment : [segment]).concat(wild);
    const keys = _keys.filter((item, pos) => '*' !== item && _keys.indexOf(item) === pos); // remove duplicates
    if (index['*']) {
      keys.push('*');
    }
    let paths = [];
    for (const key of keys) {
      const restPath = path.slice(1);
      const restIndex = index[key];
      const restParent = p.concat(key);
      if (path.length === 1) {
        // collect only the full paths
        if (!this.findOnlyWithValue || restIndex && restIndex[SimplePropertyIndexer.MARKER]) {
          indexerResults.results = indexerResults.results || [];
          indexerResults.results.push({
            path: restParent,
            value: restIndex[SimplePropertyIndexer.MARKER]
          });
          paths.push(restParent);
          indexerResults.found = indexerResults.results.length > 0;
        }
      }
      if (!restPath || !restPath.length || !restIndex) {
        break;
      }
      const restPaths = this.__findIndex(indexerResults, restPath, restIndex, restParent);
      paths = paths.concat(restPaths);
    }
    return paths;
  }
}

/***/ }),

/***/ 3130:
/*!************************************************************!*\
  !*** ./projects/schema-form/src/lib/schema-form.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemaFormModule: () => (/* binding */ SchemaFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _formelement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formelement.component */ 1160);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component */ 4076);
/* harmony import */ var _widgetchooser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgetchooser.component */ 4572);
/* harmony import */ var _defaultwidgets_array_array_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultwidgets/array/array.widget */ 5575);
/* harmony import */ var _defaultwidgets_button_button_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultwidgets/button/button.widget */ 7874);
/* harmony import */ var _defaultwidgets_object_object_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultwidgets/object/object.widget */ 2477);
/* harmony import */ var _defaultwidgets_checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultwidgets/checkbox/checkbox.widget */ 2518);
/* harmony import */ var _defaultwidgets_file_file_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultwidgets/file/file.widget */ 5568);
/* harmony import */ var _defaultwidgets_integer_integer_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./defaultwidgets/integer/integer.widget */ 3047);
/* harmony import */ var _defaultwidgets_textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultwidgets/textarea/textarea.widget */ 5567);
/* harmony import */ var _defaultwidgets_radio_radio_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./defaultwidgets/radio/radio.widget */ 2017);
/* harmony import */ var _defaultwidgets_range_range_widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultwidgets/range/range.widget */ 8238);
/* harmony import */ var _defaultwidgets_select_select_widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultwidgets/select/select.widget */ 2331);
/* harmony import */ var _defaultwidgets_string_string_widget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultwidgets/string/string.widget */ 8725);
/* harmony import */ var _defaultwidgets_defaultwidgetregistry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defaultwidgets/defaultwidgetregistry */ 3557);
/* harmony import */ var _defaultwidgets_directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./defaultwidgets/_directives/disableControl.directive */ 9100);
/* harmony import */ var _default_widget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default.widget */ 8069);
/* harmony import */ var _widgetregistry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widgetregistry */ 5280);
/* harmony import */ var _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./schemavalidatorfactory */ 4298);
/* harmony import */ var _formelement_action_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formelement.action.component */ 4268);
/* harmony import */ var _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./expression-compiler-factory */ 6090);
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./log.service */ 7711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 1699);

























const moduleProviders = [{
  provide: _widgetregistry__WEBPACK_IMPORTED_MODULE_17__.WidgetRegistry,
  useClass: _defaultwidgets_defaultwidgetregistry__WEBPACK_IMPORTED_MODULE_14__.DefaultWidgetRegistry
}, {
  provide: _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_18__.SchemaValidatorFactory,
  useClass: _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_18__.ZSchemaValidatorFactory
}, {
  provide: _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_20__.ExpressionCompilerFactory,
  useClass: _expression_compiler_factory__WEBPACK_IMPORTED_MODULE_20__.JEXLExpressionCompilerFactory
}, {
  provide: _log_service__WEBPACK_IMPORTED_MODULE_21__.LOG_LEVEL,
  useValue: 3 /* LogLevel.off */
}, {
  provide: _log_service__WEBPACK_IMPORTED_MODULE_21__.LogService,
  useClass: _log_service__WEBPACK_IMPORTED_MODULE_21__.DefaultLogService
}];
class SchemaFormModule {
  static forRoot() {
    return {
      ngModule: SchemaFormModule,
      providers: [...moduleProviders]
    };
  }
  static #_ = this.ɵfac = function SchemaFormModule_Factory(t) {
    return new (t || SchemaFormModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: SchemaFormModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](SchemaFormModule, {
    declarations: [_formelement_component__WEBPACK_IMPORTED_MODULE_0__.FormElementComponent, _formelement_action_component__WEBPACK_IMPORTED_MODULE_19__.FormElementComponentAction, _form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, _widgetchooser_component__WEBPACK_IMPORTED_MODULE_2__.WidgetChooserComponent, _default_widget__WEBPACK_IMPORTED_MODULE_16__.DefaultWidget, _defaultwidgets_array_array_widget__WEBPACK_IMPORTED_MODULE_3__.ArrayWidget, _defaultwidgets_button_button_widget__WEBPACK_IMPORTED_MODULE_4__.ButtonWidget, _defaultwidgets_object_object_widget__WEBPACK_IMPORTED_MODULE_5__.ObjectWidget, _defaultwidgets_checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_6__.CheckboxWidget, _defaultwidgets_file_file_widget__WEBPACK_IMPORTED_MODULE_7__.FileWidget, _defaultwidgets_integer_integer_widget__WEBPACK_IMPORTED_MODULE_8__.IntegerWidget, _defaultwidgets_textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_9__.TextAreaWidget, _defaultwidgets_radio_radio_widget__WEBPACK_IMPORTED_MODULE_10__.RadioWidget, _defaultwidgets_range_range_widget__WEBPACK_IMPORTED_MODULE_11__.RangeWidget, _defaultwidgets_select_select_widget__WEBPACK_IMPORTED_MODULE_12__.SelectWidget, _defaultwidgets_string_string_widget__WEBPACK_IMPORTED_MODULE_13__.StringWidget, _defaultwidgets_directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_15__.DisableControlDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule],
    exports: [_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, _formelement_component__WEBPACK_IMPORTED_MODULE_0__.FormElementComponent, _formelement_action_component__WEBPACK_IMPORTED_MODULE_19__.FormElementComponentAction, _widgetchooser_component__WEBPACK_IMPORTED_MODULE_2__.WidgetChooserComponent, _defaultwidgets_array_array_widget__WEBPACK_IMPORTED_MODULE_3__.ArrayWidget, _defaultwidgets_button_button_widget__WEBPACK_IMPORTED_MODULE_4__.ButtonWidget, _defaultwidgets_object_object_widget__WEBPACK_IMPORTED_MODULE_5__.ObjectWidget, _defaultwidgets_checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_6__.CheckboxWidget, _defaultwidgets_file_file_widget__WEBPACK_IMPORTED_MODULE_7__.FileWidget, _defaultwidgets_integer_integer_widget__WEBPACK_IMPORTED_MODULE_8__.IntegerWidget, _defaultwidgets_textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_9__.TextAreaWidget, _defaultwidgets_radio_radio_widget__WEBPACK_IMPORTED_MODULE_10__.RadioWidget, _defaultwidgets_range_range_widget__WEBPACK_IMPORTED_MODULE_11__.RangeWidget, _defaultwidgets_select_select_widget__WEBPACK_IMPORTED_MODULE_12__.SelectWidget, _defaultwidgets_string_string_widget__WEBPACK_IMPORTED_MODULE_13__.StringWidget, _defaultwidgets_directives_disableControl_directive__WEBPACK_IMPORTED_MODULE_15__.DisableControlDirective]
  });
})();

/***/ }),

/***/ 4298:
/*!****************************************************************!*\
  !*** ./projects/schema-form/src/lib/schemavalidatorfactory.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemaValidatorFactory: () => (/* binding */ SchemaValidatorFactory),
/* harmony export */   ZSchemaValidatorFactory: () => (/* binding */ ZSchemaValidatorFactory)
/* harmony export */ });
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! z-schema */ 1953);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_schema_field_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-schema/field/field */ 3401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class SchemaValidatorFactory {
  /**
   * Override this method to reset the schema validator instance.<br/>
   * This may be required since some schema validators keep a deep copy<br/>
   * of your schemas and changes at runtime are not recognized by the schema validator.<br/>
   * In this method you should either re-instantiate the schema validator or
   * clear its cache.<br/>
   * Example of re-instantiating schema validator
   * <code>
   *     reset(){
   *         this.zschema = new ZSchema({})
   *     }
   * </code>
   * <br/>
   * Since this method it self does nothing there is <br/>
   * no need to call the <code>super.reset()</code>
   */
  reset() {}
  /**
   * Override this method if the validator instance supports compiling a schema an resolve all refs and defs.
   * @param schema The schema to be compiled and get its refs, deps, etc. resolved
   * @returns The compiled schema. Per default it does simply return the give schema.
   */
  compile(schema) {
    return schema;
  }
}
class ZSchemaValidatorFactory extends SchemaValidatorFactory {
  constructor() {
    super();
    this.createSchemaValidator();
  }
  createSchemaValidator() {
    this.zschema = new (z_schema__WEBPACK_IMPORTED_MODULE_0___default())({
      breakOnFirstError: false
    });
  }
  reset() {
    this.createSchemaValidator();
  }
  compile(schema) {
    const zSchema = new (z_schema__WEBPACK_IMPORTED_MODULE_0___default())({});
    zSchema.compileSchema(schema);
    return zSchema.getResolvedSchema(schema);
  }
  createValidatorFn(schema) {
    return value => {
      if (schema.type === _template_schema_field_field__WEBPACK_IMPORTED_MODULE_1__.FieldType.Number || schema.type === _template_schema_field_field__WEBPACK_IMPORTED_MODULE_1__.FieldType.Integer) {
        value = +value;
      }
      this.zschema.validate(value, schema);
      // tslint:disable-next-line:prefer-const
      let err = this.zschema.getLastErrors();
      this.denormalizeRequiredPropertyPaths(err);
      return err || null;
    };
  }
  getSchema(schema, ref) {
    // check definitions are valid
    const isValid = this.zschema.compileSchema(schema);
    if (isValid) {
      return this.getDefinition(schema, ref);
    } else {
      throw this.zschema.getLastError();
    }
  }
  denormalizeRequiredPropertyPaths(err) {
    if (err && err.length) {
      err = err.map(error => {
        if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
          error.path = `${error.path}${error.params[0]}`;
        }
        return error;
      });
    }
  }
  getDefinition(schema, ref) {
    let foundSchema = schema;
    ref.split('/').slice(1).forEach(ptr => {
      if (ptr) {
        foundSchema = foundSchema[ptr];
      }
    });
    return foundSchema;
  }
  static #_ = this.ɵfac = function ZSchemaValidatorFactory_Factory(t) {
    return new (t || ZSchemaValidatorFactory)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ZSchemaValidatorFactory,
    factory: ZSchemaValidatorFactory.ɵfac
  });
}

/***/ }),

/***/ 765:
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/button/button.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonComponent: () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _template_schema_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template-schema-element */ 2514);



const _c0 = ["*"];
class ButtonComponent extends _template_schema_element__WEBPACK_IMPORTED_MODULE_0__.TemplateSchemaElement {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
    this.label = '';
    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  setLabelFromContent() {
    const textContent = this.getTextContent(this.elementRef);
    // label as @Input takes priority over content text
    if (textContent && !this.label) {
      this.label = textContent;
    }
  }
  ngAfterContentInit() {
    this.setLabelFromContent();
  }
  static #_ = this.ɵfac = function ButtonComponent_Factory(t) {
    return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ButtonComponent,
    selectors: [["sf-button"]],
    inputs: {
      id: "id",
      label: "label",
      widget: "widget"
    },
    outputs: {
      click: "click"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _template_schema_element__WEBPACK_IMPORTED_MODULE_0__.TemplateSchemaElement,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ButtonComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2937:
/*!****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/field-parent.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldParent: () => (/* binding */ FieldParent)
/* harmony export */ });
/* harmony import */ var _template_schema_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template-schema-element */ 2514);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field */ 3401);


class FieldParent extends _template_schema_element__WEBPACK_IMPORTED_MODULE_0__.TemplateSchemaElement {
  constructor() {
    super(...arguments);
    this.name = '';
  }
  get path() {
    if (!this.name) {
      return '';
    }
    return '/' + this.name;
  }
  getButtons() {
    return this.childButtons.map((button, index) => {
      if (!button.id) {
        const randomString = Math.random().toString(16).substr(2, 8);
        // generate id for button
        button.id = this.name + randomString + '_' + (index + 1);
      }
      // register as button action the EventEmitter click
      this.actionRegistry.register(button.id, button.click.emit.bind(button.click));
      const _button = {
        id: button.id,
        label: button.label
      };
      if (button.widget) {
        _button.widget = button.widget;
      }
      return _button;
    });
  }
  getFieldsValidators(fields) {
    return fields.reduce((validators, field) => {
      return validators.concat(field.getValidators());
    }, []);
  }
  getFieldsSchema(fields) {
    return fields.reduce((schema, field) => {
      switch (this.type) {
        case _field__WEBPACK_IMPORTED_MODULE_1__.FieldType.Array:
          schema.items = field.getSchema();
          break;
        default:
          if (!schema.properties) {
            schema.properties = {};
          }
          schema.properties[field.name] = field.getSchema();
          break;
      }
      const buttons = field.getButtons();
      if (buttons.length > 0) {
        schema.buttons = buttons;
      }
      if (!field.required) {
        return schema;
      }
      if (!schema.required) {
        schema.required = [];
      }
      schema.required.push(field.name);
      return schema;
    }, {});
  }
}

/***/ }),

/***/ 7949:
/*!*******************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/field.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldComponent: () => (/* binding */ FieldComponent)
/* harmony export */ });
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button.component */ 765);
/* harmony import */ var _field_parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-parent */ 2937);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ 3401);
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item.component */ 4799);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _template_schema_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template-schema.service */ 3894);
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/actionregistry */ 7678);








const _c0 = ["*"];
class FieldComponent extends _field_parent__WEBPACK_IMPORTED_MODULE_1__.FieldParent {
  constructor(elementRef, templateSchemaService, actionRegistry) {
    super();
    this.elementRef = elementRef;
    this.templateSchemaService = templateSchemaService;
    this.actionRegistry = actionRegistry;
    this.type = _field__WEBPACK_IMPORTED_MODULE_2__.FieldType.String;
    this.schema = {};
  }
  getSchema() {
    const {
      properties,
      items,
      required
    } = this.getFieldsSchema(this.childFields.filter(field => field !== this));
    const oneOf = this.getOneOf();
    const schema = {
      type: this.type
    };
    if (this.title !== undefined) {
      schema.title = this.title;
    }
    if (properties !== undefined) {
      schema.properties = properties;
    }
    if (items !== undefined) {
      schema.items = items;
    }
    // requried child fields
    if (required !== undefined) {
      schema.required = required;
    }
    if (oneOf !== undefined) {
      schema.oneOf = oneOf;
    }
    if (this.description !== undefined) {
      schema.description = this.description;
    }
    if (this.placeholder !== undefined) {
      schema.placeholder = this.placeholder;
    }
    if (this.format !== undefined) {
      schema.format = this.format;
    }
    if (this.widget !== undefined) {
      schema.widget = this.widget;
    }
    if (this.readOnly !== undefined) {
      schema.readOnly = this.readOnly;
    }
    const buttons = this.getButtons();
    if (buttons.length > 0) {
      schema.buttons = buttons;
    }
    // @Input schema takes precedence
    return Object.assign(schema, this.schema);
  }
  getValidators() {
    // registering validator here is not possible since prop full path is needed
    const childValidators = this.getFieldsValidators(this.childFields.filter(field => field !== this));
    const validators = childValidators.map(({
      path,
      validator
    }) => {
      return {
        path: this.path + path,
        validator
      };
    });
    if (!this.validator) {
      return validators;
    }
    validators.push({
      path: this.path,
      validator: this.validator
    });
    return validators;
  }
  ngOnChanges(changes) {
    const keys = Object.keys(changes);
    if (keys.length > 0) {
      for (const key of keys) {
        if (!changes[key].isFirstChange()) {
          // on any input change, force schema change generation
          this.templateSchemaService.changed();
          break;
        }
      }
    }
  }
  getOneOf() {
    if (this.childItems.length === 0) {
      return;
    }
    const items = this.childItems.map(({
      value,
      description
    }) => {
      if (!Array.isArray(value)) {
        return {
          enum: [value],
          description
        };
      }
      return {
        enum: value,
        description
      };
    });
    if (items.length === 0) {
      return;
    }
    return items;
  }
  setTitleFromContent() {
    const textContent = this.getTextContent(this.elementRef);
    //  title as @Input takes priority over content text
    if (textContent && !this.title) {
      this.title = textContent;
    }
  }
  ngAfterContentInit() {
    // cache it
    this.setTitleFromContent();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this.childFields.changes, this.childItems.changes, this.childButtons.changes).subscribe(() => this.templateSchemaService.changed());
  }
  static #_ = this.ɵfac = function FieldComponent_Factory(t) {
    return new (t || FieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_template_schema_service__WEBPACK_IMPORTED_MODULE_4__.TemplateSchemaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_model_actionregistry__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: FieldComponent,
    selectors: [["sf-field"]],
    contentQueries: function FieldComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, FieldComponent, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, _item_item_component__WEBPACK_IMPORTED_MODULE_3__.ItemComponent, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, _button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.childFields = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.childItems = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.childButtons = _t);
      }
    },
    inputs: {
      name: "name",
      type: "type",
      format: "format",
      required: "required",
      readOnly: "readOnly",
      title: "title",
      description: "description",
      placeholder: "placeholder",
      widget: "widget",
      validator: "validator",
      schema: "schema"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function FieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3401:
/*!*********************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/field.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldType: () => (/* binding */ FieldType)
/* harmony export */ });
var FieldType;
(function (FieldType) {
  FieldType["String"] = "string";
  FieldType["Object"] = "object";
  FieldType["Array"] = "array";
  FieldType["Boolean"] = "boolean";
  FieldType["Integer"] = "integer";
  FieldType["Number"] = "number";
  FieldType["Null"] = "null";
})(FieldType || (FieldType = {}));

/***/ }),

/***/ 4799:
/*!***********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/item/item.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemComponent: () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var _template_schema_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../template-schema-element */ 2514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


const _c0 = ["*"];
class ItemComponent extends _template_schema_element__WEBPACK_IMPORTED_MODULE_0__.TemplateSchemaElement {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.description = this.getTextContent(this.elementRef);
  }
  static #_ = this.ɵfac = function ItemComponent_Factory(t) {
    return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ItemComponent,
    selectors: [["sf-item"]],
    inputs: {
      value: "value"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 336:
/*!***************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonComponent: () => (/* reexport safe */ _button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent),
/* harmony export */   FieldComponent: () => (/* reexport safe */ _field_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent),
/* harmony export */   FieldParent: () => (/* reexport safe */ _field_field_parent__WEBPACK_IMPORTED_MODULE_2__.FieldParent),
/* harmony export */   FieldType: () => (/* reexport safe */ _field_field__WEBPACK_IMPORTED_MODULE_4__.FieldType),
/* harmony export */   ItemComponent: () => (/* reexport safe */ _field_item_item_component__WEBPACK_IMPORTED_MODULE_1__.ItemComponent),
/* harmony export */   TemplateSchemaDirective: () => (/* reexport safe */ _template_schema_directive__WEBPACK_IMPORTED_MODULE_6__.TemplateSchemaDirective),
/* harmony export */   TemplateSchemaElement: () => (/* reexport safe */ _template_schema_element__WEBPACK_IMPORTED_MODULE_5__.TemplateSchemaElement),
/* harmony export */   TemplateSchemaModule: () => (/* reexport safe */ _template_schema_module__WEBPACK_IMPORTED_MODULE_7__.TemplateSchemaModule),
/* harmony export */   TemplateSchemaService: () => (/* reexport safe */ _template_schema_service__WEBPACK_IMPORTED_MODULE_8__.TemplateSchemaService)
/* harmony export */ });
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/button.component */ 765);
/* harmony import */ var _field_item_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field/item/item.component */ 4799);
/* harmony import */ var _field_field_parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field/field-parent */ 2937);
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field/field.component */ 7949);
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field/field */ 3401);
/* harmony import */ var _template_schema_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-schema-element */ 2514);
/* harmony import */ var _template_schema_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template-schema.directive */ 4319);
/* harmony import */ var _template_schema_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template-schema.module */ 1277);
/* harmony import */ var _template_schema_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template-schema.service */ 3894);










/***/ }),

/***/ 2514:
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/template-schema-element.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSchemaElement: () => (/* binding */ TemplateSchemaElement)
/* harmony export */ });
class TemplateSchemaElement {
  getTextContent(elementRef) {
    const nodes = Array.from(elementRef.nativeElement.childNodes);
    const node = nodes.filter(el => {
      return el.nodeType === el.TEXT_NODE;
    }).pop();
    if (!node || !node.nodeValue) {
      return '';
    }
    return node.nodeValue.trim();
  }
}

/***/ }),

/***/ 4319:
/*!***********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/template-schema.directive.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSchemaDirective: () => (/* binding */ TemplateSchemaDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var _template_schema_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-schema.service */ 3894);
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field/field.component */ 7949);
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field/field */ 3401);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/button.component */ 765);
/* harmony import */ var _field_field_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field/field-parent */ 2937);
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/actionregistry */ 7678);
/* harmony import */ var _model_validatorregistry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/validatorregistry */ 5357);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form.component */ 4076);
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../terminator.service */ 3651);













class TemplateSchemaDirective extends _field_field_parent__WEBPACK_IMPORTED_MODULE_4__.FieldParent {
  constructor(actionRegistry, validatorRegistry, formComponent, terminatorService, templateSchemaService) {
    super();
    this.actionRegistry = actionRegistry;
    this.validatorRegistry = validatorRegistry;
    this.formComponent = formComponent;
    this.terminatorService = terminatorService;
    this.templateSchemaService = templateSchemaService;
  }
  setFormDocumentSchema(fields) {
    this.actionRegistry.clear();
    this.validatorRegistry.clear();
    const schema = this.getFieldsSchema(fields);
    const validators = this.getFieldsValidators(fields);
    validators.forEach(({
      path,
      validator
    }) => {
      this.validatorRegistry.register(path, validator);
    });
    const previousSchema = this.formComponent.schema;
    this.formComponent.schema = {
      type: _field_field__WEBPACK_IMPORTED_MODULE_2__.FieldType.Object,
      properties: schema.properties
    };
    if (schema.required && schema.required.length > 0) {
      this.formComponent.schema.requred = schema.required;
    }
    const buttons = this.getButtons();
    if (buttons.length > 0) {
      this.formComponent.schema.buttons = buttons;
    }
    this.formComponent.ngOnChanges({
      schema: new _angular_core__WEBPACK_IMPORTED_MODULE_9__.SimpleChange(previousSchema, this.formComponent.schema, Boolean(previousSchema))
    });
  }
  ngAfterContentInit() {
    if (this.childFields.length > 0) {
      this.setFormDocumentSchema(this.childFields.toArray());
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.childFields.changes, this.templateSchemaService.changes).subscribe(() => {
      this.terminatorService.destroy();
      this.setFormDocumentSchema(this.childFields.toArray());
    });
  }
  static #_ = this.ɵfac = function TemplateSchemaDirective_Factory(t) {
    return new (t || TemplateSchemaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_model_actionregistry__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_model_validatorregistry__WEBPACK_IMPORTED_MODULE_6__.ValidatorRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_form_component__WEBPACK_IMPORTED_MODULE_7__.FormComponent), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_terminator_service__WEBPACK_IMPORTED_MODULE_8__.TerminatorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_template_schema_service__WEBPACK_IMPORTED_MODULE_0__.TemplateSchemaService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
    type: TemplateSchemaDirective,
    selectors: [["sf-form", "templateSchema", ""]],
    contentQueries: function TemplateSchemaDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, _field_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, _button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.childFields = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.childButtons = _t);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_template_schema_service__WEBPACK_IMPORTED_MODULE_0__.TemplateSchemaService]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]]
  });
}

/***/ }),

/***/ 1277:
/*!********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/template-schema.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSchemaModule: () => (/* binding */ TemplateSchemaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field/field.component */ 7949);
/* harmony import */ var _template_schema_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-schema.directive */ 4319);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/button.component */ 765);
/* harmony import */ var _field_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field/item/item.component */ 4799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);






class TemplateSchemaModule {
  static #_ = this.ɵfac = function TemplateSchemaModule_Factory(t) {
    return new (t || TemplateSchemaModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: TemplateSchemaModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TemplateSchemaModule, {
    declarations: [_template_schema_directive__WEBPACK_IMPORTED_MODULE_1__.TemplateSchemaDirective, _field_field_component__WEBPACK_IMPORTED_MODULE_0__.FieldComponent, _button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _field_item_item_component__WEBPACK_IMPORTED_MODULE_3__.ItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
    exports: [_template_schema_directive__WEBPACK_IMPORTED_MODULE_1__.TemplateSchemaDirective, _field_field_component__WEBPACK_IMPORTED_MODULE_0__.FieldComponent, _button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _field_item_item_component__WEBPACK_IMPORTED_MODULE_3__.ItemComponent]
  });
})();

/***/ }),

/***/ 3894:
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/template-schema.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSchemaService: () => (/* binding */ TemplateSchemaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class TemplateSchemaService {
  constructor() {
    this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  changed() {
    this.changes.emit();
  }
  static #_ = this.ɵfac = function TemplateSchemaService_Factory(t) {
    return new (t || TemplateSchemaService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TemplateSchemaService,
    factory: TemplateSchemaService.ɵfac
  });
}

/***/ }),

/***/ 3651:
/*!************************************************************!*\
  !*** ./projects/schema-form/src/lib/terminator.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TerminatorService: () => (/* binding */ TerminatorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class TerminatorService {
  constructor() {
    this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  destroy() {
    this.onDestroy.next(true);
  }
  static #_ = this.ɵfac = function TerminatorService_Factory(t) {
    return new (t || TerminatorService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TerminatorService,
    factory: TerminatorService.ɵfac
  });
}

/***/ }),

/***/ 3139:
/*!************************************************!*\
  !*** ./projects/schema-form/src/lib/widget.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayLayoutWidget: () => (/* binding */ ArrayLayoutWidget),
/* harmony export */   ControlWidget: () => (/* binding */ ControlWidget),
/* harmony export */   ObjectLayoutWidget: () => (/* binding */ ObjectLayoutWidget),
/* harmony export */   Widget: () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class Widget {
  constructor() {
    this.id = "";
    this.name = "";
    this.schema = {};
  }
}
class ControlWidget extends Widget {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.valueChanges.subscribe(newValue => {
      if (control.value !== newValue) {
        control.setValue(newValue, {
          emitEvent: false
        });
      }
    });
    this.formProperty.errorsChanges.subscribe(errors => {
      control.setErrors(errors, {
        emitEvent: true
      });
      const messages = (errors || []).filter(e => {
        return e.path && e.path.slice(1) === this.formProperty.path;
      }).map(e => e.message);
      this.errorMessages = messages.filter((m, i) => messages.indexOf(m) === i);
    });
    control.valueChanges.subscribe(newValue => {
      this.formProperty.setValue(newValue, false);
    });
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵControlWidget_BaseFactory;
    return function ControlWidget_Factory(t) {
      return (ɵControlWidget_BaseFactory || (ɵControlWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ControlWidget)))(t || ControlWidget);
    };
  })();
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ControlWidget,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
class ArrayLayoutWidget extends Widget {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe(errors => {
      control.setErrors(errors, {
        emitEvent: true
      });
    });
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵArrayLayoutWidget_BaseFactory;
    return function ArrayLayoutWidget_Factory(t) {
      return (ɵArrayLayoutWidget_BaseFactory || (ɵArrayLayoutWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ArrayLayoutWidget)))(t || ArrayLayoutWidget);
    };
  })();
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ArrayLayoutWidget,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
class ObjectLayoutWidget extends Widget {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe(errors => {
      control.setErrors(errors, {
        emitEvent: true
      });
    });
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵObjectLayoutWidget_BaseFactory;
    return function ObjectLayoutWidget_Factory(t) {
      return (ɵObjectLayoutWidget_BaseFactory || (ɵObjectLayoutWidget_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ObjectLayoutWidget)))(t || ObjectLayoutWidget);
    };
  })();
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ObjectLayoutWidget,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}

/***/ }),

/***/ 4572:
/*!*****************************************************************!*\
  !*** ./projects/schema-form/src/lib/widgetchooser.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetChooserComponent: () => (/* binding */ WidgetChooserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _widgetfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgetfactory */ 3413);
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminator.service */ 3651);




const _c0 = ["target"];
class WidgetChooserComponent {
  constructor(widgetFactory = null, cdr, terminator) {
    this.widgetFactory = widgetFactory;
    this.cdr = cdr;
    this.terminator = terminator;
    this.widgetInstanciated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    this.subs = this.terminator.onDestroy.subscribe(destroy => {
      if (destroy) {
        this.ref.destroy();
      }
    });
  }
  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
    this.widgetInstanciated.emit(this.ref.instance);
    this.widgetInstance = this.ref.instance;
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static #_ = this.ɵfac = function WidgetChooserComponent_Factory(t) {
    return new (t || WidgetChooserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_widgetfactory__WEBPACK_IMPORTED_MODULE_0__.WidgetFactory), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_terminator_service__WEBPACK_IMPORTED_MODULE_1__.TerminatorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: WidgetChooserComponent,
    selectors: [["sf-widget-chooser"]],
    viewQuery: function WidgetChooserComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      widgetInfo: "widgetInfo"
    },
    outputs: {
      widgetInstanciated: "widgetInstanciated"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 0,
    consts: [["target", ""]],
    template: function WidgetChooserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", null, 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3413:
/*!*******************************************************!*\
  !*** ./projects/schema-form/src/lib/widgetfactory.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetFactory: () => (/* binding */ WidgetFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _widgetregistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgetregistry */ 5280);


class WidgetFactory {
  constructor(registry, resolver) {
    this.registry = registry;
    this.resolver = resolver;
  }
  createWidget(container, type) {
    let componentClass = this.registry.getWidgetType(type);
    let componentFactory = this.resolver.resolveComponentFactory(componentClass);
    return container.createComponent(componentFactory);
  }
  static #_ = this.ɵfac = function WidgetFactory_Factory(t) {
    return new (t || WidgetFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_widgetregistry__WEBPACK_IMPORTED_MODULE_0__.WidgetRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: WidgetFactory,
    factory: WidgetFactory.ɵfac
  });
}

/***/ }),

/***/ 5280:
/*!********************************************************!*\
  !*** ./projects/schema-form/src/lib/widgetregistry.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetRegistry: () => (/* binding */ WidgetRegistry)
/* harmony export */ });
class WidgetRegistry {
  constructor() {
    this.widgets = {};
  }
  setDefaultWidget(widget) {
    this.defaultWidget = widget;
  }
  getDefaultWidget() {
    return this.defaultWidget;
  }
  hasWidget(type) {
    return this.widgets.hasOwnProperty(type);
  }
  register(type, widget) {
    this.widgets[type] = widget;
  }
  getWidgetType(type) {
    if (this.hasWidget(type)) {
      return this.widgets[type];
    }
    return this.defaultWidget;
  }
}

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ 2266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);







function AppComponent_div_19_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_19_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeSchema());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_div_19_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.schemaUrl = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_19_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.loadSchema());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Load");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_19_button_5_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.schemaUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.schemaUrl);
  }
}
class AppComponent {
  constructor(appService, router) {
    this.appService = appService;
    this.router = router;
  }
  loadSchema() {
    this.appService.loadSchema(this.schemaUrl);
  }
  removeSchema() {
    this.schemaUrl = undefined;
    this.appService.removeSchema();
  }
  ngOnInit() {
    const data = this.appService.loadSchema();
    if (data && data.url) {
      this.schemaUrl = data.url;
    }
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(() => {
      this.page = this.router.routerState.snapshot.url.replace('/', '');
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 21,
    vars: 1,
    consts: [[1, "navbar", "navbar-default", "navbar-static-top"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#bs-example-navbar-collapse-1", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], ["routerLink", "/json", 1, "navbar-brand"], ["id", "bs-example-navbar-collapse-1", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active"], ["routerLink", "/json"], ["routerLink", "/template"], ["class", "navbar-form navbar-right", 4, "ngIf"], [1, "navbar-form", "navbar-right"], [1, "form-group"], ["type", "text", "name", "schemaUrl", "placeholder", "Load schema form URL", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-default", 2, "margin-left", "5px", 3, "click"], ["class", "btn btn-default", "style", "margin-left: 5px", 3, "click", 4, "ngIf"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 5)(7, "span", 5)(8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "NGX Schema Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "ul", 8)(13, "li", 9)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "JSON Schema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 9)(17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Template Schema");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_div_19_Template, 6, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page === "json");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-schema-form */ 8597);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 2016);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _json_schema_example_json_schema_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json-schema-example/json-schema-example.component */ 4610);
/* harmony import */ var _template_schema_example_template_schema_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-schema-example/template-schema-example.component */ 9434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _projects_schema_form_src_lib_schema_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/schema-form/src/lib/schema-form.module */ 3130);












class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [{
      provide: ngx_schema_form__WEBPACK_IMPORTED_MODULE_0__.WidgetRegistry,
      useClass: ngx_schema_form__WEBPACK_IMPORTED_MODULE_0__.DefaultWidgetRegistry
    }, {
      provide: ngx_schema_form__WEBPACK_IMPORTED_MODULE_0__.SchemaValidatorFactory,
      useClass: ngx_schema_form__WEBPACK_IMPORTED_MODULE_0__.ZSchemaValidatorFactory
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes), ngx_schema_form__WEBPACK_IMPORTED_MODULE_0__.SchemaFormModule.forRoot(), ngx_schema_form__WEBPACK_IMPORTED_MODULE_0__.TemplateSchemaModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _json_schema_example_json_schema_example_component__WEBPACK_IMPORTED_MODULE_3__.JsonSchemaExampleComponent, _template_schema_example_template_schema_example_component__WEBPACK_IMPORTED_MODULE_4__.TemplateSchemaExampleComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _projects_schema_form_src_lib_schema_form_module__WEBPACK_IMPORTED_MODULE_5__.SchemaFormModule, ngx_schema_form__WEBPACK_IMPORTED_MODULE_0__.TemplateSchemaModule]
  });
})();

/***/ }),

/***/ 2016:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _json_schema_example_json_schema_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-schema-example/json-schema-example.component */ 4610);
/* harmony import */ var _template_schema_example_template_schema_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-schema-example/template-schema-example.component */ 9434);


const routes = [{
  path: '',
  redirectTo: 'json',
  pathMatch: 'full'
}, {
  path: 'json',
  component: _json_schema_example_json_schema_example_component__WEBPACK_IMPORTED_MODULE_0__.JsonSchemaExampleComponent
}, {
  path: 'template',
  component: _template_schema_example_template_schema_example_component__WEBPACK_IMPORTED_MODULE_1__.TemplateSchemaExampleComponent
}];

/***/ }),

/***/ 2266:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



const DATA = 'data';
class AppService {
  get data() {
    if (this._data) {
      return this._data;
    }
    const data = sessionStorage.getItem(DATA);
    if (data) {
      this._data = JSON.parse(data);
      return this._data;
    }
    return;
  }
  set data(data) {
    this._data = data;
    sessionStorage.setItem(DATA, JSON.stringify(data));
  }
  constructor(http) {
    this.http = http;
    this.dataChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  }
  loadSchema(url) {
    if (!url) {
      this.dataChanged.next(this.data);
      return this.data;
    }
    this.http.get(url).subscribe(schema => {
      this.data = {
        url,
        schema
      };
      this.dataChanged.next(this.data);
    });
    return this.data;
  }
  removeSchema() {
    sessionStorage.removeItem(DATA);
    this._data = undefined;
    this.dataChanged.next(null);
  }
  static #_ = this.ɵfac = function AppService_Factory(t) {
    return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AppService,
    factory: AppService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2212:
/*!****************************************************************!*\
  !*** ./src/app/json-schema-example/binding_sample_bindings.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const myFormBindings = {
  '/name': [{
    'input': (event, formProperty) => {
      const parent = formProperty.findRoot();
      /**
       * Set the input value for the children
       */
      const child1 = parent.getProperty('children/0/name');
      child1.setValue(formProperty.value, false);
      const child2 = parent.getProperty('children/1/name');
      child2.setValue(event.target.value, false);
      /**
       * Get the input value for all the children
       */
      for (const objectProperty of parent.getProperty('children').properties) {
        console.log('Value for child ', objectProperty, objectProperty.properties['name'].value);
      }
    }
  }, {
    'click': (event, formProperty) => {
      console.log('2222 Called event!', event.target, event, formProperty);
    }
  }],
  '/forename': [{
    'mouseover': [(event, formProperty) => {
      console.log('Mouse over event triggered FIRST time!', event.target, event, formProperty);
    }, (event, formProperty) => {
      console.log('Mouse over event triggered SECOND time!', event.target, event, formProperty);
    }]
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myFormBindings);

/***/ }),

/***/ 4610:
/*!**********************************************************************!*\
  !*** ./src/app/json-schema-example/json-schema-example.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonSchemaExampleComponent: () => (/* binding */ JsonSchemaExampleComponent)
/* harmony export */ });
/* harmony import */ var _sampleschema_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sampleschema.json */ 9801);
/* harmony import */ var _samplemodel_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplemodel.json */ 699);
/* harmony import */ var _binding_sample_schema_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding_sample_schema.json */ 1855);
/* harmony import */ var _binding_sample_model_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binding_sample_model.json */ 2982);
/* harmony import */ var _binding_sample_bindings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding_sample_bindings */ 2212);
/* harmony import */ var _visibility_binding_example_schema_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visibility-binding-example-schema.json */ 5760);
/* harmony import */ var _visibility_binding_example_schema2_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visibility-binding-example-schema2.json */ 9594);
/* harmony import */ var _visibility_binding_example_schema3_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visibility-binding-example-schema3.json */ 1251);
/* harmony import */ var _visibility_binding_example_schema4_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visibility-binding-example-schema4.json */ 3849);
/* harmony import */ var _sample_canonical_path_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sample-canonical-path.json */ 8668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.service */ 2266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_schema_form_src_lib_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../projects/schema-form/src/lib/form.component */ 4076);















function JsonSchemaExampleComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("select", function JsonSchemaExampleComponent_option_7_Template_option_select_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const sample_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](sample_r1.event());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sample_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selected", sample_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](sample_r1.label);
  }
}
class JsonSchemaExampleComponent {
  constructor(appService) {
    this.appService = appService;
    this.schema = {
      properties: {}
    };
    this.model = {};
    this.fieldValidators = {};
    this.actions = {};
    this.fieldBindings = {};
    this.samples = [{
      label: 'Sample 1 - General',
      event: this.changeSchemaFirst,
      selected: true
    }, {
      label: 'Sample 2 - Custom bindings',
      event: this.changeSchemaWithBindings,
      selected: false
    }, {
      label: 'Sample 3 - Otherschema',
      event: this.changeSchemaOtherschema,
      selected: false
    }, {
      label: 'Sample 4 - Visibility binding',
      event: this.changeSchemaVisibilityBinding,
      selected: false
    }, {
      label: 'Sample 5 - Visibility binding 2',
      event: this.changeSchemaVisibilityBinding2,
      selected: false
    }, {
      label: 'Sample 6 - Visibility binding 3',
      event: this.changeSchemaVisibilityBinding3,
      selected: false
    }, {
      label: 'Sample 7 - Visibility binding 4',
      event: this.changeSchemaVisibilityBinding4,
      selected: false
    }, {
      label: 'Sample 8 - Canonical path',
      event: this.changeSchemaCanonicalPath,
      selected: false
    }];
  }
  ngOnInit() {
    this.subs = this.appService.dataChanged.subscribe(data => {
      if (data) {
        this.schema = data.schema;
        return;
      }
      this.changeSchemaInitial();
    });
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  logErrors(errors) {
    console.log('ERRORS', errors);
  }
  changeSchemaInitial() {
    for (const sample of this.samples) {
      if (sample.selected) {
        sample.event.bind(this)();
      }
    }
  }
  changeSchema(event) {
    for (const sample of this.samples) {
      if (sample.label === event) {
        sample.event.bind(this)();
      }
    }
  }
  changeSchemaFirst() {
    this.schema = _sampleschema_json__WEBPACK_IMPORTED_MODULE_0__;
    this.model = _samplemodel_json__WEBPACK_IMPORTED_MODULE_1__;
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
    this.fieldValidators['/bornOn'] = (value, property, form) => {
      let errors = null;
      const dateArr = value.split('-');
      if (dateArr.length === 3) {
        const now = new Date();
        const min = new Date(now.getFullYear() - 100, now.getMonth(), now.getDay()).getTime();
        const max = new Date().getTime();
        const born = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).getTime();
        if (born < min || born > max) {
          errors = [{
            bornOn: {
              expectedValue: '>today - 100 && < today',
              actualValue: value
            }
          }];
        }
      }
      return errors;
    };
    this.fieldValidators['/promotion'] = (value, property, form) => {
      if (value === 'student') {
        const bornOn = form.getProperty('/bornOn');
        if (bornOn.valid) {
          const date = bornOn.value.split('-');
          const validYear = new Date().getFullYear() - 17;
          try {
            const actualYear = parseInt(date[0], 10);
            if (actualYear < validYear) {
              return null;
            }
            return [{
              promotion: {
                bornOn: {
                  expectedValue: 'year<' + validYear,
                  actualValue: actualYear
                }
              }
            }];
          } catch (e) {}
        }
        return [{
          promotion: {
            bornOn: {
              expectedFormat: 'date',
              actualValue: bornOn.value
            }
          }
        }];
      }
      return null;
    };
    this.actions['alert'] = (property, options) => {
      property.forEachChildRecursive(child => {
        console.log(child.valid, child);
      });
      alert(JSON.stringify(property.value));
    };
    this.actions['reset'] = (form, options) => {
      form.reset();
    };
    this.actions['disable'] = this.disableAll.bind(this);
    this.actions['toggle_title'] = (formProperty, form, params) => {
      formProperty.schema.readOnly = !formProperty.schema.readOnly;
    };
  }
  changeSchemaOtherschema() {
    this.schema = _sampleschema_json__WEBPACK_IMPORTED_MODULE_0__;
    this.model = {};
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
  }
  changeSchemaWithBindings() {
    this.schema = _binding_sample_schema_json__WEBPACK_IMPORTED_MODULE_2__;
    this.model = _binding_sample_model_json__WEBPACK_IMPORTED_MODULE_3__;
    this.fieldBindings = _binding_sample_bindings__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.fieldValidators = {};
    this.actions = {};
  }
  changeSchemaVisibilityBinding() {
    this.schema = _visibility_binding_example_schema_json__WEBPACK_IMPORTED_MODULE_5__;
    this.model = {};
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
  }
  changeSchemaVisibilityBinding2() {
    this.schema = _visibility_binding_example_schema2_json__WEBPACK_IMPORTED_MODULE_6__;
    this.model = {};
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
  }
  changeSchemaVisibilityBinding3() {
    this.schema = _visibility_binding_example_schema3_json__WEBPACK_IMPORTED_MODULE_7__;
    this.model = {};
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
  }
  changeSchemaVisibilityBinding4() {
    this.schema = _visibility_binding_example_schema4_json__WEBPACK_IMPORTED_MODULE_8__;
    this.model = {};
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
  }
  changeSchemaCanonicalPath() {
    this.schema = _sample_canonical_path_json__WEBPACK_IMPORTED_MODULE_9__;
    this.model = {};
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
  }
  disableAll() {
    Object.keys(this.schema.properties).map(prop => {
      this.schema.properties[prop].readOnly = true;
    });
  }
  setValue(value) {
    this.value = value;
  }
  static #_ = this.ɵfac = function JsonSchemaExampleComponent_Factory(t) {
    return new (t || JsonSchemaExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_10__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: JsonSchemaExampleComponent,
    selectors: [["sf-json-schema-example"]],
    decls: 25,
    vars: 12,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-4"], ["for", "samples"], ["id", "samples", 3, "change"], [3, "selected", "select", 4, "ngFor", "ngForOf"], [3, "schema", "model", "validators", "actions", "bindings", "onErrorChange", "onChange", "modelChange"], [3, "selected", "select"]],
    template: function JsonSchemaExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Select schema form example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function JsonSchemaExampleComponent_Template_select_change_6_listener($event) {
          return ctx.changeSchema($event.target.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, JsonSchemaExampleComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Form:");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "sf-form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onErrorChange", function JsonSchemaExampleComponent_Template_sf_form_onErrorChange_12_listener($event) {
          return ctx.logErrors($event.value);
        })("onChange", function JsonSchemaExampleComponent_Template_sf_form_onChange_12_listener($event) {
          return ctx.setValue($event.value);
        })("modelChange", function JsonSchemaExampleComponent_Template_sf_form_modelChange_12_listener($event) {
          return ctx.model = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 2)(14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Schema:");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 2)(20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Model:");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.samples);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("schema", ctx.schema)("model", ctx.model)("validators", ctx.fieldValidators)("actions", ctx.actions)("bindings", ctx.fieldBindings);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 8, ctx.schema));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 10, ctx.value));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _projects_schema_form_src_lib_form_component__WEBPACK_IMPORTED_MODULE_11__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.JsonPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9434:
/*!******************************************************************************!*\
  !*** ./src/app/template-schema-example/template-schema-example.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSchemaExampleComponent: () => (/* binding */ TemplateSchemaExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_schema_form_src_lib_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/schema-form/src/lib/form.component */ 4076);
/* harmony import */ var _projects_schema_form_src_lib_template_schema_template_schema_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/schema-form/src/lib/template-schema/template-schema.directive */ 4319);
/* harmony import */ var _projects_schema_form_src_lib_template_schema_field_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/schema-form/src/lib/template-schema/field/field.component */ 7949);
/* harmony import */ var _projects_schema_form_src_lib_template_schema_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/schema-form/src/lib/template-schema/button/button.component */ 765);
/* harmony import */ var _projects_schema_form_src_lib_template_schema_field_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projects/schema-form/src/lib/template-schema/field/item/item.component */ 4799);








function TemplateSchemaExampleComponent_sf_field_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "sf-field", 53);
  }
}
const _c0 = () => ({
  maxLength: 40,
  minLength: 2
});
const _c1 = () => ({
  default: "1800-12-12"
});
const _c2 = () => ({
  default: true
});
const _c3 = () => [true];
const _c4 = a0 => ({
  moreInfo: a0
});
const _c5 = a2 => ({
  default: "#aaa111",
  pattern: "^#[0-9a-fA-F]{6}$",
  visibleIf: a2
});
const _c6 = () => ({
  default: "#aaa000",
  pattern: "ff$"
});
const _c7 = () => ({
  default: 15
});
const _c8 = () => ({
  minimun: 1,
  maximun: 10
});
const _c9 = () => ({
  default: "fedex"
});
class TemplateSchemaExampleComponent {
  constructor() {
    this.model = {};
  }
  onClick(message) {
    alert(message);
  }
  ngOnInit() {}
  setValue(value) {
    if (undefined === this.value) {
      /**
       * If the first time the variable is set, then setting timeout will prevents error:
       * `Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value:`
       */
      setTimeout(() => {
        this.value = value;
      }, 0);
      return;
    }
    this.value = value;
  }
  static #_ = this.ɵfac = function TemplateSchemaExampleComponent_Factory(t) {
    return new (t || TemplateSchemaExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TemplateSchemaExampleComponent,
    selectors: [["app-template-schema-example"]],
    decls: 286,
    vars: 32,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-4"], ["templateSchema", "", 3, "ngModel", "ngModelChange", "onChange"], ["form", ""], ["name", "recipient", "type", "object"], ["name", "firstName", "description", "(First Name)", "placeholder", "First Name", 3, "required", "schema"], ["name", "lastName", "description", "(Last Name)", "placeholder", "Last Name", 3, "required", "schema"], ["name", "categories", "type", "array", "widget", "checkbox"], ["type", "string"], ["value", "dog"], ["value", "cat"], ["value", "dolphin"], ["name", "bornOn", "widget", "date", "format", "date", "description", "(Born On)", "placeholder", "Ex: 2009-03-11", 3, "schema"], ["name", "moreInfo", "type", "boolean", "description", "More information?", "widget", "checkbox", 3, "schema"], ["name", "favoriteColor", "widget", "color", 3, "schema"], ["name", "colors", "type", "array", "widget", "array"], ["type", "string", "widget", "color"], ["id", "Remove", 3, "click"], ["id", "addItem", 3, "click"], ["id", "reset", 3, "click"], ["name", "survey", "type", "object"], ["name", "q1", "description", "Enter a number"], ["name", "q2", "type", "object", "description", "Address"], ["name", "color", "description", "Color", "widget", "color", 3, "schema"], ["name", "number", "description", "Zip", "widget", "number", 3, "schema"], ["name", "transaction", "type", "object"], ["name", "transactionNumber", "description", "Transaction number", "widget", "number", 3, "readOnly", "schema"], ["name", "transactionDescription", "widget", "textarea", "description", "What is being transacted"], ["name", "promotion", "widget", "radio", "description", "promotion"], ["value", "student"], ["value", "summer"], ["value", "none"], ["name", "category", "type", "array", "widget", "select", "description", "Category"], ["value", "design"], ["value", "hightech"], ["value", "materials"], ["value", "services"], ["name", "shipping", "type", "object"], ["name", "numberOfBoxes", "description", "Number of boxes required", "widget", "range", 3, "schema"], ["name", "delivery", "type", "string", "widget", "select", "description", "Delivery service", 3, "schema"], ["value", "fedex"], ["value", "ups"], ["value", "other"], ["name", "contact", "type", "object"], ["name", "useCustomEmail", "type", "boolean", "description", "Write a custom email ?"], ["name", "customEmail", "widget", "textarea", "description", "Email to send", 4, "ngIf"], ["name", "confirmation", "type", "object"], ["name", "confirmationEmail", "format", "email", "description", "Email"], ["name", "password", "widget", "password", "description", "Password"], [3, "click"], [1, "col-md-4", 2, "height", "1000px"], ["readonly", "", "wrap", "off", "resize", "off", 1, "template-schema"], ["name", "customEmail", "widget", "textarea", "description", "Email to send"]],
    template: function TemplateSchemaExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Form:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "sf-form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TemplateSchemaExampleComponent_Template_sf_form_ngModelChange_5_listener($event) {
          return ctx.model = $event;
        })("onChange", function TemplateSchemaExampleComponent_Template_sf_form_onChange_5_listener($event) {
          return ctx.setValue($event.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "sf-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Part 1 - Recipient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "sf-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "sf-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "sf-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "sf-field", 9)(16, "sf-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "sf-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "sf-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Dolphin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "sf-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Born On ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "sf-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "sf-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Favorite color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "sf-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Colors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "sf-field", 17)(30, "sf-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TemplateSchemaExampleComponent_Template_sf_button_click_30_listener() {
          return ctx.onClick("Supprimer");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Supprimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "sf-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TemplateSchemaExampleComponent_Template_sf_button_click_32_listener() {
          return ctx.onClick("Ajouter");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "sf-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TemplateSchemaExampleComponent_Template_sf_button_click_34_listener() {
          return ctx.onClick("Reset");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "sf-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " Little survey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "sf-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "sf-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "sf-field", 24)(41, "sf-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "sf-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, " Part 2 - Transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "sf-field", 27)(45, "sf-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "sf-field", 29)(47, "sf-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Student discount (20%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "sf-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Summer 2016 discount (15%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "sf-item", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "sf-field", 33)(54, "sf-field", 9)(55, "sf-item", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "sf-item", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "High-Tech");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "sf-item", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "sf-item", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "sf-field", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " Part 3 - Shipping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "sf-field", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "sf-field", 40)(67, "sf-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Fedex");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "sf-item", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "UPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "sf-item", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "sf-field", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " Part 4 - Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "sf-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, TemplateSchemaExampleComponent_sf_field_76_Template, 1, 0, "sf-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "sf-field", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Part 5 - Confirmation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "sf-field", 48)(80, "sf-field", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "sf-button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TemplateSchemaExampleComponent_Template_sf_button_click_81_listener() {
          return ctx.onClick("Something");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Do Something");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 51)(84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Template:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "sf-form #form [(ngModel)]=\"model\" templateSchema>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "sf-field name=\"recipient\" type=\"object\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "\n        Part 1 - Recipient\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "sf-field\n            name=\"firstName\"\n            [required]=\"true\"\n            description=\"(First Name)\"\n            placeholder=\"First Name\"\n            [schema]=\"{ maxLength: 40, minLength: 2 }\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "\n            First Name\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "sf-field\n            name=\"lastName\"\n            [required]=\"true\"\n            description=\"(Last Name)\"\n            placeholder=\"Last Name\"\n            [schema]=\"{ maxLength: 40, minLength: 2 }\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "\n            Last Name\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "sf-field name=\"categories\" type=\"array\" widget=\"checkbox\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "\n            Categories\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "sf-field type=\"string\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "sf-item value=\"dog\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Dog<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "sf-item value=\"cat\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Cat<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "sf-item value=\"dolphin\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Dolphin<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "sf-field\n            name=\"bornOn\"\n            widget=\"date\"\n            format=\"date\"\n            [schema]=\"{ default: '1800-12-12' }\"\n            description=\"(Born On)\"\n            placeholder=\"Ex: 2009-03-11\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "\n            Born On\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "sf-field\n            name=\"moreInfo\"\n            type=\"boolean\"\n            description=\"More information?\"\n            widget=\"checkbox\"\n            [schema]=\"{ default: true }\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "sf-field\n            name=\"favoriteColor\"\n            widget=\"color\"\n            [schema]=\"{ default: '#aaa111', pattern: '^#[0-9a-fA-F]{6}$', visibleIf: { moreInfo: [true] } }\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "\n            Favorite color\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "sf-field name=\"colors\" type=\"array\" widget=\"array\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "\n            Colors\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "sf-field type=\"string\" widget=\"color\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "sf-button id=\"Remove\" (click)=\"onClick('Supprimer')\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Supprimer<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "/sf-button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "sf-button id=\"addItem\" (click)=\"onClick('Ajouter')\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, "Ajouter<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "/sf-button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "sf-button id=\"reset\" (click)=\"onClick('Reset')\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Reset<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, "/sf-button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](151, "\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "\n\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "sf-field name=\"survey\" type=\"object\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "\n        Little survey\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "sf-field name=\"q1\" description=\"Enter a number\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "sf-field name=\"q2\" type=\"object\" description=\"Address\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "sf-field\n                name=\"color\"\n                description=\"Color\"\n                widget=\"color\"\n                [schema]=\"{ default: '#aaa000', pattern: 'ff$' }\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](165, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "sf-field\n                name=\"number\"\n                description=\"Zip\"\n                widget=\"number\"\n                [schema]=\"{ default: 15 }\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, "\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, "sf-field name=\"transaction\" type=\"object\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "\n        Part 2 - Transactions\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, "sf-field\n            name=\"transactionNumber\"\n            description=\"Transaction number\"\n            widget=\"number\"\n            [readOnly]=\"true\"\n            [schema]=\"{ default: 15 }\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "sf-field\n            name=\"transactionDescription\"\n            widget=\"textarea\"\n            description=\"What is being transacted\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](181, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, "\n\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "sf-field name=\"promotion\" widget=\"radio\" description=\"promotion\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](186, "sf-item value=\"student\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, "Student discount (20%)<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](189, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, "sf-item value=\"summer\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "Summer 2016 discount (15%)<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](192, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194, "sf-item value=\"none\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "None<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](197, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "\n\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](200, "sf-field name=\"category\" type=\"array\" widget=\"select\" description=\"Category\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](202, "sf-field type=\"string\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](203, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204, "sf-item value=\"design\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "Design<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](206, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](208, "sf-item value=\"hightech\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, "High-Tech<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](211, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](212, "sf-item value=\"materials\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, "Materials<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](216, "sf-item value=\"services\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, "Services<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](218, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](219, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](220, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](222, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](223, "\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](224, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, "\n\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](226, "sf-field name=\"shipping\" type=\"object\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](227, "\n        Part 3 - Shipping\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, "sf-field\n            name=\"numberOfBoxes\"\n            description=\"Number of boxes required\"\n            widget=\"range\"\n            [schema]=\"{ minimun: 1, maximun: 10 }\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](229, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](231, "\n\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232, "sf-field\n            name=\"delivery\"\n            type=\"string\"\n            widget=\"select\"\n            [schema]=\"{ default: 'fedex' }\"\n            description=\"Delivery service\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](233, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](234, "sf-item value=\"fedex\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235, "Fedex<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](236, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](237, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238, "sf-item value=\"ups\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](239, "UPS<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](240, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](241, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](242, "sf-item value=\"other\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](243, "Other<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](244, "/sf-item>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](245, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](246, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](247, "\n\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](248, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](249, "\n\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](250, "sf-field name=\"contact\" type=\"object\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](251, "\n        Part 4 - Email\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](252, "sf-field\n            name=\"useCustomEmail\"\n            type=\"boolean\"\n            description=\"Write a custom email ?\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](253, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](254, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](255, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](256, "sf-field\n            *ngIf=\"model?.contact?.useCustomEmail\"\n            name=\"customEmail\"\n            widget=\"textarea\"\n            description=\"Email to send\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](257, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](258, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](259, "\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](260, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](261, "\n\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](262, "sf-field name=\"confirmation\" type=\"object\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](263, "\n        Part 5 - Confirmation\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](264, "sf-field name=\"confirmationEmail\" format=\"email\" description=\"Email\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](265, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](266, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](267, "\n        <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](268, "sf-field name=\"password\" widget=\"password\" description=\"Password\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](269, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](270, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](271, "\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](272, "/sf-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](273, "\n\n    <");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](274, "sf-button (click)=\"onClick('Something')\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](275, "Do Something<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](276, "/sf-button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](277, "\n<");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](278, "/sf-form>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](279, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](280, "div", 2)(281, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](282, "Model:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](283, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](284);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](285, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true)("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](25, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](23, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c3))));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](27, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](28, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", true)("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](31, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.model == null ? null : ctx.model.contact == null ? null : ctx.model.contact.useCustomEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](285, 16, ctx.value));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _projects_schema_form_src_lib_form_component__WEBPACK_IMPORTED_MODULE_0__.FormComponent, _projects_schema_form_src_lib_template_schema_template_schema_directive__WEBPACK_IMPORTED_MODULE_1__.TemplateSchemaDirective, _projects_schema_form_src_lib_template_schema_field_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _projects_schema_form_src_lib_template_schema_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _projects_schema_form_src_lib_template_schema_field_item_item_component__WEBPACK_IMPORTED_MODULE_4__.ItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe],
    styles: ["textarea.template-schema[_ngcontent-%COMP%] {\n  resize: none;\n  width: 100% !important;\n  height: 100% !important;\n  padding: 9.5px;\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #6c6b6b;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVtcGxhdGUtc2NoZW1hLWV4YW1wbGUvdGVtcGxhdGUtc2NoZW1hLWV4YW1wbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYS50ZW1wbGF0ZS1zY2hlbWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDkuNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgY29sb3I6ICM2YzZiNmI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 2982:
/*!***************************************************************!*\
  !*** ./src/app/json-schema-example/binding_sample_model.json ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"","forename":"","children":[{"name":"","forename":"Maria","age":10},{"name":"","forename":"Ella","age":12}]}');

/***/ }),

/***/ 1855:
/*!****************************************************************!*\
  !*** ./src/app/json-schema-example/binding_sample_schema.json ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"object","title":"Example with custom bindings.","description":"Type a family name to see how the name gets synchronized with the children.","properties":{"name":{"type":"string","title":"Surname","description":" (Has a click event binding - see console)"},"forename":{"type":"string","title":"Forename","description":" (Has a mouse over event binding - see console)"},"children":{"type":"array","title":"Family","items":{"type":"object","title":"Children","properties":{"name":{"type":"string","title":"Surname"},"forename":{"type":"string","title":"forename"},"age":{"type":"number","title":"age"}}}},"test":{"type":"string","title":"Testparam","visibleIf":{"allOf":[{"forename":["$ANY$"]},{"name":["$ANY$"]}]}}}}');

/***/ }),

/***/ 8668:
/*!****************************************************************!*\
  !*** ./src/app/json-schema-example/sample-canonical-path.json ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"object","properties":{"form":{"type":"array","title":"Test canonical path","items":{"type":"object","properties":{"type":{"type":"string","title":"Type","default":"unset","widget":{"id":"hidden"}},"prop1":{"type":"object","title":"","properties":{"subProp1":{"type":"boolean","title":"This checkbox label must have correct \'for\' attribute set","widget":{"id":"checkbox"},"default":false},"subProp2":{"type":"string","title":"This is only visible if the checkbox above is checked","visibleIf":{"subProp1":[true]}}}}}},"minItems":1,"maxItems":3}}}');

/***/ }),

/***/ 699:
/*!******************************************************!*\
  !*** ./src/app/json-schema-example/samplemodel.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"firstName":"John","lastName":"Doe","categories":["cat","dog"],"transactionNumber":123456,"favoriteColor":"#aaafff","transactionDescription":"Payment for your subscription","password":"admin","category":["hightech"],"freeShipping":false,"customEmail":"Nothing here..."}');

/***/ }),

/***/ 9801:
/*!*******************************************************!*\
  !*** ./src/app/json-schema-example/sampleschema.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/hyper-schema#","type":"object","properties":{"title":{"type":"string","title":"Title","widget":{"id":"select"},"readOnly":true,"enum":["Prof","Dr","Ms","Mr"],"buttons":[{"id":"toggle_title","label":"Toggle title disabled state"}]},"firstName":{"type":"string","placeholder":"First name","minLength":2,"maxLength":40,"title":"First name","description":"First name"},"lastName":{"type":"string","placeholder":"Last name","minLength":2,"maxLength":40,"title":"Last name","description":"Last name"},"bornOn":{"type":"string","format":"date","widget":"date","default":"1800-12-12","placeholder":"Ex: 2009-03-11","description":"Born on"},"contributors":{"description":"Contributors","type":"array","items":{"type":"string"},"widget":"array"},"categories":{"type":"array","items":{"type":"string","oneOf":[{"description":"Dog","enum":["dog"]},{"description":"Cat","enum":["cat"]},{"description":"Daulphin","enum":["daulphin"]}]},"widget":"checkbox"},"moreInfo":{"type":"boolean","widget":"checkbox","description":"More information?","default":true},"survey":{"type":"object","description":"Little survey","properties":{"q1":{"type":"string","description":"Enter a number"},"q2":{"type":"object","description":"Address","properties":{"color":{"description":"color","type":"string","default":"#aaa000","pattern":"ff$","widget":"color"},"zip":{"description":"zip","type":"number","default":15}}}}},"favoriteColor":{"type":"string","pattern":"^#[0-9a-fA-F]{6}$","widget":"color","default":"#aaa111","description":"Favorite color","visibleIf":{"moreInfo":[true]}},"transactionNumber":{"type":"integer","minimum":0,"readOnly":"true","description":"Transaction number"},"transactionDescription":{"type":"string","widget":"textline","description":"What is being transacted"},"category":{"type":"array","widget":"select","items":{"type":"string","oneOf":[{"description":"Design","enum":["design"]},{"description":"High-Tech","enum":["hightech"]},{"description":"Materials","enum":["materials"]},{"description":"Services","enum":["services"]}]},"description":"Category"},"promotion":{"type":"string","description":"Promotion","widget":"radio","oneOf":[{"description":"Student discount (20%)","enum":["student"]},{"description":"Summer 2016 discount (15%)","enum":["summer"]},{"description":"None","enum":["none"]}]},"confirmationMail":{"type":"string","description":"Email","format":"email"},"password":{"type":"string","widget":"password","description":"Password"},"numberOfBoxes":{"type":"number","widget":{"id":"range"},"description":"Number of boxes required","minimum":1,"maximum":10},"deliveryService":{"type":"string","widget":"select","description":"Delivery service","oneOf":[{"description":"UPS","enum":["ups"]},{"description":"FedEx","enum":["fedex"]},{"description":"Other","enum":["other"]}],"default":"fedex"},"otherDeliveryService":{"type":"string","minLength":2,"visibleIf":{"deliveryService":["other"]}},"freeShipping":{"type":"boolean","widget":"checkbox","description":"Free shipping","visibleIf":{"deliveryService":["other","ups"]}},"shippingPrice":{"type":"number","description":"ShippingCost","minimum":0,"maximum":200,"visibleIf":{"freeShipping":[false]}},"sendApologies":{"type":"boolean","widget":"checkbox","description":"Send apologies for the shipping cost","visibleIf":{"shippingPrice":[22,23]}},"useCustomEmail":{"type":"boolean","description":"Write a custom email ?"},"customEmail":{"type":"string","widget":"textarea","description":"Email to send","visibleIf":{"useCustomEmail":[true]},"pattern":"^<h1>"},"userManual":{"type":"object","widget":"file","properties":{"content-type":{"type":"string"},"filename":{"type":"string"},"size":{"type":"integer"},"encoding":{"type":"string"},"data":{"type":"string"}},"description":"Add a manual for the delivered items","visibleIf":{"category":["hightech"]}},"colors":{"type":"array","description":"Colors","index":"i","items":{"type":"string","description":"Color $i","widget":"color","buttons":[{"label":"Supprimer","id":"Remove"}]},"buttons":[{"label":"Ajouter","id":"addItem","parameters":{"value":"#afeadd"}},{"label":"Reset","id":"reset"}]}},"buttons":[{"label":"Alert","id":"alert"},{"label":"Reset","id":"reset"},{"label":"Disable all","id":"disable"}],"fieldsets":[{"id":"part_1","title":"Part 1 - Recipient","fields":["title","firstName","lastName","contributors","categories","bornOn","moreInfo","favoriteColor","colors","survey"]},{"id":"part_2","title":"Part 2 - Transaction","fields":["transactionNumber","transactionDescription","promotion","category","userManual"]},{"id":"part_3","title":"Part 3 - Shipping","fields":["numberOfBoxes","deliveryService","otherDeliveryService","freeShipping","shippingPrice","sendApologies"]},{"id":"part_4","title":"Part 4 - Email","fields":["useCustomEmail","customEmail"]},{"id":"part_5","title":"Part 5 - Confirmation","fields":["confirmationMail","password"]}],"required":["firstName","lastName","transactionNumber","password"]}');

/***/ }),

/***/ 5760:
/*!****************************************************************************!*\
  !*** ./src/app/json-schema-example/visibility-binding-example-schema.json ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"My Visibility Binding Form DEMO","type":"object","description":"Some fields will only show if some condition do apply:","properties":{"description1":{"type":"object","title":"FIELD 1","description":"Is only visible if car #1 exists with name \'fiat\'","properties":{}},"description2":{"type":"object","title":"FIELD 2","description":"Is only visible if car #2 exists with name \'renault\'","properties":{}},"description3":{"type":"object","title":"FIELD 3","description":"Is only visible if car #2 exists and tire #3 is named \'michelin\'","properties":{}},"description4":{"type":"object","title":"FIELD 4","description":"Is only visible if any car exists and tire #2 is named \'michelin\'","properties":{}},"description5":{"type":"object","title":"FIELD 5","description":"Is only visible if any car has space for more than 3 passengers","properties":{}},"spacer 1":{"type":"object","title":" ","description":" ","properties":{}},"fields":{"type":"object","title":"Fields with visibility bindings","properties":{"field1":{"type":"string","title":"Field 1","description":" This field is only visible if car #1 exists with name \'fiat\'","default":"You named the 1st car FIAT","visibleIf":{"/garage/cars/0/name":["fiat"]}},"field2":{"type":"string","title":"Field 2","description":" This field is only visible if car #2 exists with name \'renault\'","default":"You named the 2nd car RENAULT","visibleIf":{"/garage/cars/1/name":["renault"]}},"field3":{"type":"string","title":"Field 3","description":" This field is only visible if car #2 exists and tire #3 is named \'michelin\'","default":"You named the 3rd tire of the 2nd car MICHELIN","visibleIf":{"/garage/cars/1/tires/2/name":["michelin"]}},"field4":{"type":"string","title":"Field 4","description":" This field is only visible if any car exists and tire #2 is named \'michelin\'","default":"You named the 2nd tire of any car/s MICHELIN","visibleIf":{"/garage/cars/*/tires/1/name":["michelin"]}},"field5":{"type":"string","title":"Field 5","description":" This field is only visible if any car has space for more than 3 passengers","default":"One car has space for more than 3 passengers","visibleIf":{"/garage/cars/*/space":["$EXP$ target.value > 3"]}}}},"spacer 2":{"type":"object","title":" ","description":" ","properties":{}},"garage":{"type":"object","title":"Garage","properties":{"name":{"type":"string","title":"Garage name"},"cars":{"title":"Cars","type":"array","items":{"type":"object","title":"Car","properties":{"name":{"widget":"select","type":"string","title":"Car name","oneOf":[{"enum":[""],"description":"Select car name"},{"enum":["fiat"],"description":"FIAT"},{"enum":["renault"],"description":"Renault"}]},"space":{"type":"number","title":"How many passengers","description":"How many passengers do fit in this car?","min":3,"max":5},"tires":{"title":"Tires","type":"array","maxItems":4,"items":{"type":"object","properties":{"name":{"widget":"select","type":"string","oneOf":[{"enum":[""],"description":"Select tire name"},{"enum":["michelin"],"description":"Michelin"},{"enum":["good year"],"description":"Good Year"}]}}}},"descriptionTires":{"type":"object","description":"Press the above buttons \'Add\' or \'Remove\' to add or remove tires","properties":{}}}}},"descriptionCars":{"type":"object","description":"Press the above buttons \'Add\' or \'Remove\' to add or remove cars","properties":{}}}}}}');

/***/ }),

/***/ 9594:
/*!*****************************************************************************!*\
  !*** ./src/app/json-schema-example/visibility-binding-example-schema2.json ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"properties":{"demo":{"type":"object","properties":{"typeTest":{"fieldsets":[{"id":"bool","title":"","description":"# 1. Test boolean","name":"","fields":["checkbool","testbool","testboolnegative","checkboolstring","testboolstring","testboolstringnegative"]},{"id":"num","title":"","description":"# 2. Test number","name":"","fields":["checknum","testnum","checknumstring","testnumstring"]},{"id":"num","title":"","description":"# 3. Test string","name":"","fields":["checkstring","teststring"]}],"type":"object","properties":{"checkbool":{"type":"boolean","description":"Boolean test (true) as boolean"},"testbool":{"type":"string","description":"Visible if value is \'true\' as boolean","visibleIf":{"checkbool":true}},"testboolnegative":{"type":"string","description":"Visible if value is \'false\' as boolean","visibleIf":{"checkbool":false}},"checkboolstring":{"type":"string","widget":"radio","description":"Boolean test (\\"true\\") as string","oneOf":[{"description":"String \'true\'","enum":["true"]},{"description":"String \'false\'","enum":["false"]}]},"testboolstring":{"type":"string","description":"Visible if value is \'true\' as string","visibleIf":{"checkboolstring":"true"}},"testboolstringnegative":{"type":"string","description":"Visible if value is \'false\' as string","visibleIf":{"checkboolstring":"false"}},"checknum":{"type":"number","description":"Number test (1)"},"testnum":{"type":"string","description":"Visible if value is \'1\' as number","visibleIf":{"checknum":1}},"checknumstring":{"type":"string","description":"Number test (\\"1\\") as string","widget":"select","oneOf":[{"description":"Select a number","enum":[""]},{"description":"Number 1","enum":["1"]},{"description":"Number 2","enum":["2"]}]},"testnumstring":{"type":"string","description":"Visible if value is \'1\' as string","visibleIf":{"checknumstring":"1"}},"checkstring":{"type":"string","description":"String test (a)"},"teststring":{"type":"string","description":"Visible if value is \'a\' as string","visibleIf":{"checkstring":"a"}}}},"visibleIfBinding1a":{"description":"# 4. Test \'VisibleIf\' with default \'one-of\' with multiple values","type":"object","properties":{"status1a":{"type":"string","description":"Visible component shows up if status is \'Warn\' or \'Fail\'","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"radio"},"visibleComponent1a":{"type":"string","description":"Visible component if status is \'Warn\' or \'Fail\'","visibleIf":{"/demo/visibleIfBinding1a/status1a":["Warn","Fail"]}}}},"visibleIfBinding1b":{"description":"# 5. Test \'VisibleIf\' with \'oneOf\' condition","type":"object","properties":{"status1b":{"type":"string","description":"Visible component shows up if status is \'Warn\' or \'Fail\'","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"radio"},"visibleComponent1b":{"type":"string","description":"Visible component if status is \'Warn\' or \'Fail\'","visibleIf":{"oneOf":[{"/demo/visibleIfBinding1b/status1b":["Warn"]},{"/demo/visibleIfBinding1b/status1b":["Fail"]}]}}}},"visibleIfBinding1c":{"description":"# 6. Test \'VisibleIf\' with \'oneOf\' and \'$ANY$\' condition","type":"object","properties":{"anyString1c":{"type":"string","description":"Visible component shows up with any string here.","widget":"string"},"anyNum1c":{"type":"number","description":"Visible component shows up if any number here","widget":"number"},"anyBoolean1c":{"type":"boolean","description":"Visible component shows up if any checked state","widget":"checkbox"},"anyArary1c":{"type":"array","widget":"select","items":{"type":"string","oneOf":[{"description":"Option1","enum":["Option1"]},{"description":"Option2","enum":["Option2"]},{"description":"Option3","enum":["Option3"]},{"description":"Option4","enum":["Option4"]}]},"description":"Visible component shows up if any selection here"},"visibleComponent1c":{"type":"string","description":"Visible if any values exist in a test input","visibleIf":{"oneOf":[{"anyString1c":["$ANY$"]},{"anyNum2c":["$ANY$"]},{"anyBoolean2c":["$ANY$"]},{"anyArary2c":["$ANY$"]}]}}}},"visibleIfBinding2a":{"description":"# 7. Test Boolean \'VisibleIf\' with \'allOf\' condition (check \'Warn\' and \'Fail\')","type":"object","properties":{"status2a":{"type":"boolean","description":"Pass","widget":"checkbox"},"status2b":{"type":"boolean","description":"Warn","widget":"checkbox"},"status2c":{"type":"boolean","description":"Fail","widget":"checkbox"},"visibleComponent2a":{"type":"string","description":"Visible component if status \'Warn\' and \'Fail\' are checked","visibleIf":{"allOf":[{"/demo/visibleIfBinding2a/status2b":[true]},{"/demo/visibleIfBinding2a/status2c":[true]}]}}}},"visibleIfBinding2b":{"description":"# 8. Test String \'VisibleIf\' with \'allOf\' condition (select \'Warn\' and \'Fail\')","type":"object","properties":{"status2a":{"type":"string","oneOf":[{"description":"...","enum":[""]},{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"status2b":{"type":"string","oneOf":[{"description":"Select \'Warn\' here","enum":[""]},{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"status2c":{"type":"string","oneOf":[{"description":"Select \'Fail\' here","enum":[""]},{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"visibleComponent2b":{"type":"string","description":"Visible component if status \'Warn\' and \'Fail\' are checked","visibleIf":{"allOf":[{"/demo/visibleIfBinding2b/status2b":["Warn"]},{"/demo/visibleIfBinding2b/status2c":["Fail"]}]}}}},"updateVisibiltyTest":{"type":"object","description":"Test oneOf - Set age to 15, set last name to \'aaa\'","properties":{"age":{"id":"age","name":"age","title":"Age","type":"string","widget":{"id":"string"}},"firstName":{"id":"firstName","name":"firstName","title":"First Name","type":"string","visibleIfOperator":"and","widget":{"id":"string"},"visibleIf":{"allOf":[{"lastName":"aaa"},{"age":15}]}},"lastName":{"id":"lastName","name":"lastName","title":"Last Name","type":"string","widget":{"id":"select"},"oneOf":[{"description":"AAA","enum":["aaa"]},{"description":"BBB","enum":["bbb"]}]}}}}}}}');

/***/ }),

/***/ 1251:
/*!*****************************************************************************!*\
  !*** ./src/app/json-schema-example/visibility-binding-example-schema3.json ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"properties":{"demo":{"type":"object","properties":{"visibleIfBinding1":{"description":"# 1. Test \'VisibleIf\' with \'all-of\' of \'one-of\'s. One of 1a and 1b must be Pass and one of 1c and 1d must be Pass","type":"object","properties":{"status1a":{"type":"string","description":"Status 1a","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"status1b":{"type":"string","description":"Status 1b","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"status1c":{"type":"string","description":"Status 1c","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"status1d":{"type":"string","description":"Status 1d","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"visibleComponent1a":{"type":"string","description":"Visible component if above condition is fulfilled","visibleIf":{"allOf":[{"oneOf":[{"/demo/visibleIfBinding1/status1a":["Pass"]},{"/demo/visibleIfBinding1/status1b":["Pass"]}]},{"oneOf":[{"/demo/visibleIfBinding1/status1c":["Pass"]},{"/demo/visibleIfBinding1/status1d":["Pass"]}]}]}}}},"visibleIfBinding2":{"description":"# 2. Test \'VisibleIf\' with \'one-of\' of \'all-of\'s. All of 2a, 2b and 2c must be Fail or 2d must be Fail","type":"object","properties":{"status2a":{"type":"string","description":"Status 2a","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"status2b":{"type":"string","description":"Status 2b","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"status2c":{"type":"string","description":"Status 2c","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"status2d":{"type":"string","description":"Status 2d","oneOf":[{"description":"Pass","enum":["Pass"]},{"description":"Warn","enum":["Warn"]},{"description":"Fail","enum":["Fail"]}],"widget":"select"},"visibleComponent2a":{"type":"string","description":"Visible component if above condition is fulfilled","visibleIf":{"oneOf":[{"allOf":[{"/demo/visibleIfBinding2/status2a":["Fail"]},{"/demo/visibleIfBinding2/status2b":["Fail"]},{"/demo/visibleIfBinding2/status2c":["Fail"]}]},{"allOf":[{"/demo/visibleIfBinding2/status2d":["Fail"]}]}]}}}}}}}}');

/***/ }),

/***/ 3849:
/*!*****************************************************************************!*\
  !*** ./src/app/json-schema-example/visibility-binding-example-schema4.json ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"object","title":"Example of visibleIf inside of an array item","description":"This example shows how to use visibility options inside of items of an array","properties":{"arrayObject":{"type":"array","items":{"type":"object","title":"Object with visibleIf properties.","properties":{"showHiddenField":{"type":"integer","widget":"select","title":"Choose 1 to show the hidden field or 0 to hide it. By default the field is hidden.","oneOf":[{"enum":[0],"description":"Hide field."},{"enum":[1],"description":"Show hidden field."}]},"visibleTest":{"type":"string","title":"This is shown if previous field is 1.","visibleIf":{"showHiddenField":[1]}}}}}},"required":["arrayObject"]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map