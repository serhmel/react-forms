import React, { useMemo } from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'

import { getValidationRules, FieldName } from '../helpers'
import { FormValues } from "../formConfigs"

interface FormFieldProps<T extends FieldName> {
    name: T,
    label: string,
    type: string,
    required?: boolean,
    register: UseFormRegister<FormValues>,
    error?: FieldError,
    watchPassword?: string,
}

export function FormField<T extends FieldName>({
   name,
   label,
   type,
   required,
   register,
   error,
   watchPassword
}: FormFieldProps<T>) {
  const validationRules = useMemo(() => (
    getValidationRules(name, required, watchPassword)
  ), [name, required, watchPassword])

  const registerProps = register(name, validationRules)

  return (
    <div>
      <input
        { ...registerProps }
        className={ `w-full border rounded p-2 ${ error ? 'border-danger' : '' } dark:bg-gray-900 transition-theme` }
        placeholder={ label }
        type={ type }
      />

      { error && (
        <p className="text-danger text-sm mt-1">{ error.message }</p>
      ) }
    </div>
  )
}