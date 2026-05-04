import type { TextAreaProps } from "../types/resume.types"

function TextArea({ placeholder, name, register, errors, size }: TextAreaProps) {

    const error = errors[name]

    return (
        <div >
            <textarea className={`h-40 bg-primary-color w-full px-4 py-2 rounded-lg border border-[#75756D] focus:border-yellow-400 focus:outline-none text-[#75756D] placeholder-[#75756D] ${size}`} {...register(name)}placeholder={placeholder}/>
            {error?.message && (<span>{String(error.message)}</span> )}
        </div>
    )
}

export default TextArea