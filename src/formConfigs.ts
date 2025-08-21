import { FieldName } from './helpers'

export type FormValues = Partial<Record<FieldName, string>>

type InputType = 'text' | 'email' | 'password'

export interface FieldConfig {
  name: keyof FormValues
  label: string,
  type: InputType,
  required?: boolean,
}

export interface FormConfig {
  title: string,
  submitText: string,
  submitButtonClass: string,
  fields: FieldConfig[],
}

export const loginFormConfig: FormConfig  = {
  title: 'Login',
  submitText: 'Login',
  submitButtonClass: 'bg-primary',
  fields: [
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ],
}

export const signupFormConfig: FormConfig = {
  title: 'Sign Up',
  submitText: 'Sign Up',
  submitButtonClass: 'bg-success',
  fields: [
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true },
  ],
}

export const resetPasswordFormConfig: FormConfig = {
  title: 'Reset Password',
  submitText: 'Reset',
  submitButtonClass: 'bg-danger',
  fields: [
    { name: 'email', label: 'Email', type: 'email', required: true },
  ],
}