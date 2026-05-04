import { render, screen } from '@testing-library/react'
import FormCard from '../src/features/form/FormCard'
import { ToastProvider } from '../src/context/ToastContext'
import { describe, it, expect } from 'vitest'

describe('FormCard', () => {
  it('renders the form with all fields', () => {
    render(
      <ToastProvider>
        <FormCard />
      </ToastProvider>
    )
    
    expect(screen.getByRole('heading', { name: /formulario de contacto/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/nombre de usuario/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/asunto/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/introduce tu mensaje/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument()
  })
})