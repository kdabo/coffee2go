import * as React from "react";

export interface IValues {
    [key: string]: any;
}

interface IFieldProps {
    name: string;
    label: string;
    type?: "Text" | "Email" | "Select" | "Textarea" ;
    options?: string[]
}

export interface ISubmitResult {
    success: boolean;
    errors?: IErrors
}

interface IFormProps {
    defaultValues: IValues;
    validationRules: IValidationProp;
    onSubmit: (values: IValues) => Promise<ISubmitResult>;
}

interface IState {
    values: IValues,
    errors: IErrors,
    submitting: boolean,
    submitted: boolean
}

interface IFormContext {
    values: IValues;
    setValue?: (fieldName: string, value: any) => void;
    errors: IErrors;
    validate?: (fieldName: string, value: any) => void;
}

const FormContext = React.createContext<IFormContext>({
    values: {}, errors: {}
});

export type Validator = (
    fieldName: string,
    values: IValues,
    args?: any
) => string

interface IValidation {
    validator: Validator;
    arg?: any;
}

interface IValidationProp {
    [key: string]: IValidation | IValidation[];
}

interface IErrors {
    [key: string] : string[];
}

export const required: Validator = (fieldName: string, values: IValues, args?: any): string => {
    return values[fieldName] === undefined || values[fieldName] === null || values[fieldName] === "" ? "The field must be populated" : "";
};

export const minLength: Validator = (fieldName: string, values: IValues, length: number): string => {
    return values[fieldName]  && values[fieldName].length < length ? `This must be at lease ${length} long`: "";
};

export class Form extends React.Component<IFormProps, IState> {
    constructor(props: IFormProps) {
        super(props);
        const errors: IErrors = {};

        Object.keys(props.defaultValues).forEach(fieldName => {
            errors[fieldName] = [];
        });

        this.state = {
            values: props.defaultValues,
            errors,
            submitted: false,
            submitting: false
        }
    }

    private setValue = (fieldName: string, value: any) => {
        const newValues = { ...this.state.values, [fieldName]: value};
        this.setState({values: newValues})
    };

    private validate = (fieldName: string, value: any): string[] => {
        const rules = this.props.validationRules[fieldName];
        const errors: string[] = [];

        if (Array.isArray(rules)) {
            rules.forEach(rule => {
                const error = rule.validator(fieldName, this.state.values, rule.arg);
                if (error) {
                    errors.push(error);
                }
            });
        } else {
            if (rules) {
                const error = rules.validator(fieldName, this.state.values, rules.arg);
                if (error) {
                    errors.push(error);
                }
            }
        }
        const newErrors = { ...this.state.errors, [fieldName]: errors};
        this.setState({ errors: newErrors });
        return errors;
    };

    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(this.validateForm()) {
            this.setState({ submitting: true});
            const result = await this.props.onSubmit(this.state.values);
            this.setState({
                errors: result.errors || {},
                submitted: result.success,
                submitting: false
            })
        }
    };

    private validateForm(): boolean {
        const errors: IErrors = {};
        let haveError: boolean = false;

        Object.keys(this.props.defaultValues).map(fieldName => {
            errors[fieldName] = this.validate(fieldName, this.state.values[fieldName]);

            if (errors[fieldName].length > 0) {
                haveError = true
            }
        });
        this.setState({ errors });
        return !haveError;
    }

    public static Field: React.SFC<IFieldProps> = props => {
        const { name, label, type, options } = props;

        const handleChange = (
            e:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>
                | React.ChangeEvent<HTMLSelectElement>,
            context: IFormContext) => {
                if(context.setValue) {
                    context.setValue(props.name, e.currentTarget.value)
                }
        };

        const handleBlur = (
            e:
                | React.FocusEvent<HTMLInputElement>
                | React.FocusEvent<HTMLTextAreaElement>
                | React.FocusEvent<HTMLSelectElement>,
            context: IFormContext) => {
                if (context.validate) {
                    context.validate(props.name, e.currentTarget.value)
                }
        };

        return (
            <FormContext.Consumer>
                { context => (
                    <div className="form-group">
                        <label htmlFor={name}>{label}</label>
                        {
                            (type === "Text" || type === "Email") &&
                            <input type={type.toLowerCase()} id={name} value={context.values[name]} onChange={e => handleChange(e, context)} onBlur={e => handleBlur(e, context)}/>
                        }
                        {
                            type === "Textarea" &&
                            (<textarea id={name} value={context.values[name]} onChange={e => handleChange(e, context)} onBlur={e => handleBlur(e, context)} />)
                        }
                        {
                            type === "Select" &&
                            (<select value={context.values[name]} onChange={e => handleChange(e, context)} onBlur={e => handleBlur(e, context)}>
                                {options && options.map(option => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>)
                        }
                        {
                            context.errors[name] &&
                            context.errors[name].length > 0 &&
                            context.errors[name].map(error => (
                                <span key={error} className="form-error">
                                    {error}
                                    </span>))
                        }
                    </div>
                )}
            </FormContext.Consumer>
        );
    };

    public render() {
        const context: IFormContext = {
            values: this.state.values,
            setValue: this.setValue,
            errors: this.state.errors,
            validate: this.validate
        };

        return(
            <FormContext.Provider value={context}>
                <form className="form" noValidate={true} onSubmit={this.handleSubmit}>
                    {this.props.children}
                    <div className="form-group">
                        <button type="submit" disabled={this.state.submitting || this.state.submitted}>Submit</button>
                    </div>
                </form>
            </FormContext.Provider>
        )
    }
}

Form.Field.defaultProps = {
    type: "Text"
};
