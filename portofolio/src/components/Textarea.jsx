import React from 'react'

const Textarea = ({ AdditionalClasses, required, label, cols, rows, name }) => {
    return (
        <div className={AdditionalClasses}>
            <label
                className=" uppercase text-base py-2 "
                htmlFor="message">{label}</label>
            <textarea
                className=" rounded-lg"
                cols={cols}
                rows={rows}
                name={name}
                required={required}
            />
        </div>
    )
}

export default Textarea