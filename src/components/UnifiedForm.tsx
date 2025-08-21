import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { FormField } from './FormField'
import { FIELD_NAMES } from '../helpers'
import { FormConfig, FieldConfig, FormValues } from '../formConfigs'

interface UnifiedFormProps extends FormConfig {
  onSubmit: SubmitHandler<FormValues>
}

export function UnifiedForm({ fields, submitText, onSubmit, title, submitButtonClass }: UnifiedFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>()

  const passwordValue = watch(FIELD_NAMES.password, '')

  return (
    <form
      onSubmit={ handleSubmit(onSubmit) }
      className="w-full sm:max-w-md space-y-4 border p-4 rounded-md dark:border-gray-800 transition-theme"
      noValidate>

      { title && (
        <h2 className="text-xl font-bold">{ title }</h2>
      ) }

      { fields.map((field: FieldConfig) => (
        <FormField
          key={ field.name }
          { ...field }
          register={ register }
          error={ errors[field.name] }
          watchPassword={ field.name === FIELD_NAMES.confirmPassword ? passwordValue : undefined }
        />
      )) }

      <button type="submit" className={ `${ submitButtonClass } w-full sm:w-auto text-white px-4 py-2 rounded` }>
        { submitText }
      </button>
    </form>
  )
}


