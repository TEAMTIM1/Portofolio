
const Input = ({ AdditionalClasses, required, label, type, name}) => {
    return (
        <div className={AdditionalClasses}>
            <label
                className=" uppercase text-sm py-2"
                htmlFor="name">{label}</label>
            <input
                className=" rounded-lg flex  text-center border-b-2 border-black bg-slate-300/30"
                type={type}
                name={name}
                id={name}
                required={required}
                />
        </div>
    )
}

export default Input;