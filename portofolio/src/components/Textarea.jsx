import React from 'react'

const Textarea = ({ AdditionalClasses, required, label, cols, rows, name }) => {
    return (
        <div className={AdditionalClasses}>
            <label
                className=" uppercase text-base py-2"
                htmlFor="message">{label}</label>
            <textarea
                className=" border-b-2 border-black rounded-lg border--100/50  bg-slate-200/50"
                cols={cols}
                rows={rows}
                name={name}
                required={required}
            />
        </div>
    )
}

export default Textarea