import { RegisterOptions } from 'react-hook-form'
import { FormValues } from './formConfigs'

export const THEMES = {
  LIGHT: 'light',
  DARK : 'dark',
} as const

export const FIELD_NAMES = {
  password: 'password',
  confirmPassword: 'confirmPassword',
  email: 'email',
} as const

export type FieldName = typeof FIELD_NAMES[keyof typeof FIELD_NAMES]

const ERROR_MESSAGES = {
  required: 'This field is required',
  passwordMismatch: 'Passwords do not match',
  invalidEmail: 'Please enter a valid email address',
} as const

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function getValidationRules<T extends FieldName>(
    name: T,
    required?: boolean,
    watchPassword?: string
): RegisterOptions<FormValues, T> {
  const rules: RegisterOptions<FormValues, T> = {}

  if (required) {
    rules.required = ERROR_MESSAGES.required
  }

  if (name === FIELD_NAMES.confirmPassword) {
    rules.validate = (value?: string) => value === watchPassword || ERROR_MESSAGES.passwordMismatch
  }

  if (name === FIELD_NAMES.email) {
    rules.pattern = {
      value  : EMAIL_REGEX,
      message: ERROR_MESSAGES.invalidEmail,
    }
  }

  return rules
}
