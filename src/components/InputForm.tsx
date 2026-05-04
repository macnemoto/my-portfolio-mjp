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
                className="bg-primary-color w-full px-4 py-2 rounded-lg border border-[#75756D] focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 text-[#75756D] placeholder-[#75756D] disabled:opacity-50"
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