
const Input = ({ AdditionalClasses, required, label, type, name, placeholder}) => {
    return (
        <div className={AdditionalClasses}>
            <label
                className=" uppercase text-sm py-2 "
                htmlFor="name">{label}</label>
            <input
                className=" rounded-lg flex text-center "
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                required={required}
                />
        </div>
    )
}

export default Input;