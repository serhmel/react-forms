import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeToggle } from './components/ThemeToggle'
import { UnifiedForm } from './components/UnifiedForm'
import { loginFormConfig, signupFormConfig, resetPasswordFormConfig, FormValues } from './formConfigs'


function handleSubmit(data: FormValues) {
  alert(JSON.stringify(data, null, 2))
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 space-y-6 transition-theme">
      <ThemeToggle />
      <UnifiedForm { ...loginFormConfig } onSubmit={ handleSubmit } />
      <UnifiedForm { ...signupFormConfig } onSubmit={ handleSubmit } />
      <UnifiedForm { ...resetPasswordFormConfig } onSubmit={ handleSubmit } />
    </div>
  </React.StrictMode>
)
