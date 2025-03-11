/**
 * Cancel-Button
 */
class CancelButtonComponent extends Formio.Components._components.button {
  // Standard schema 
  static schema(...extend) {
    return Formio.Components._components.button.schema({
      label: 'Cancel',
      key: 'Cancel',
      type: 'kwsoft-cancel',
      action: 'custom',
      custom: "// disable validators of all components...\r\n//debugger;\r\n\r\nfunction requiredOff( compsObj, offset ) {\r\n\tfor (let compName in compsObj) {\r\n\r\n\t\tlet comp = compsObj[compName];\r\n\t\t//console.log(offset + \"componentName=>\" + compName + \"<\");\r\n    \r\n\t\tif (comp.components) {\r\n\t\t\trequiredOff( comp.components, offset+\"\\t\" );\r\n\t\t}\r\n\t\tif (comp.validators) {\r\n\t\t  comp.validators = [];\r\n\t\t}\r\n\t}\r\n}\r\nrequiredOff( components, \"\\t\" );\r\n//debugger;\r\n\r\n// close the form...\r\nform.emit('submitButton', {\r\n  state: \"cancel\",\r\n  component: component\r\n});",
      validate: {
        cancel: true
      }
    }, ...extend)
  }

  // Info for the builder
  static get builderInfo() {
    return {
      title: 'Cancel button',
      icon: 'stop',
      group: 'basic',
      weight: 0,
      schema: CancelButtonComponent.schema()
    }
  }

  constructor(...args) {
	debugger;
    super(...args)

    this.action = 'Custom'

    	
    this.validators = this.validators.concat(['cancel'])
    this.validator.validators.cancel = {
      key: 'validate.cancel',
      hasLabel: true,
      message(component, setting) {
        return component.t(component.errorMessage('cancel'), {
          field: component.errorLabel,
          data: component.data
        })
      },
      check(component, setting, value) {
        if (!Formio.Utils.boolValue(setting) || component.isValueHidden()) {
          return true
        }

        // The iscancelNumber() function is from cancel.js library
        // this is just to show that multiple script files can be injected
        // the scripts are injected in the alphabetical order 
        return true //!value || iscancelNumber(value);
      }
    }

    // Register error messages for the cancel validator
    // this.i18next.addResource('en', 'translation', 'cancel', 'Please enter a valid even whole number.')
    // this.i18next.addResource('de', 'translation', 'cancel', 'Bitte geben Sie eine gültige gerade Zahl an.')
  }

  get defaultSchema() {
    return CancelButtonComponent.schema()
  }
}

const CancelButtonModule = {
  components: {
    'kwsoft-cancel': CancelButtonComponent
  }
}

Formio.use(CancelButtonModule)

//        "label": "Cancel",
//        "action": "custom",
//        "showValidations": false,
//        "tableView": false,
//        "key": "cancel",
//        "type": "button",
//        "input": true,
//        "hideOnChildrenHidden": false,
//        "custom": "// disable validators of all components...\r\n//debugger;\r\n\r\nfunction requiredOff( compsObj, offset ) {\r\n\tfor (let compName in compsObj) {\r\n\r\n\t\tlet comp = compsObj[compName];\r\n\t\t//console.log(offset + \"componentName=>\" + compName + \"<\");\r\n    \r\n\t\tif (comp.components) {\r\n\t\t\trequiredOff( comp.components, offset+\"\\t\" );\r\n\t\t}\r\n\t\tif (comp.validators) {\r\n\t\t  comp.validators = [];\r\n\t\t}\r\n\t}\r\n}\r\nrequiredOff( components, \"\\t\" );\r\n//debugger;\r\n\r\n// close the form...\r\nform.emit('submitButton', {\r\n  state: \"cancel\",\r\n  component: component\r\n});"
