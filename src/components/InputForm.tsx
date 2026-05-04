import type { InputFormProps } from "../types/resume.types"

function InputForm({ placeholder, name, register, errors }: InputFormProps) {
    const error = errors[name]
    const errorId = `${name}-error`
    const inputId = name

    return (
        <div className="">
            <label htmlFor={inputId} className="sr-only">{placeholder}</label>
            <input
                id={inputId}
                className="bg-input w-full px-4 py-2.5 rounded-lg border border-input focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-primary placeholder:text-tertiary disabled:opacity-50 transition-all duration-200"
                {...register(name)}
                placeholder={placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
                disabled={false}
            />
            {error?.message && (
                <span id={errorId} role="alert" className="text-red-500 text-sm mt-1 block">{String(error.message)}</span>
            )}
        </div>
    )
}

export default InputForm