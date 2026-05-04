import type { InputFormProps } from "../types/resume.types"

function InputForm({ placeholder, name, register, errors }: InputFormProps) {

    const error = errors[name]

    return (
        <div className="">
            <input className="bg-primary-color w-full px-4 py-2 rounded-lg border border-[#75756D] focus:border-yellow-400 focus:outline-none text-[#75756D] placeholder-[#75756D]" {...register(name)}placeholder={placeholder}/>
            {error?.message && (<span>{String(error.message)}</span> )}
        </div>
    )
}

export default InputForm