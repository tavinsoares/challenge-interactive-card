import classnames from 'classnames';

const Input = ({ 
    label, 
    value, 
    onChange, 
    placeholder,
    containerClassName,
    hasError,
    msgError
    }) => {
    const containerClasses = classnames(
        "sm:flex sm:flex-col",
        containerClassName
    );

    const inputClasses = classnames(
        'border-grayish-violet focus:outline-purple-dark border-2 rounded-md h-12 pl-4 text-xl',
        {'focus:outline-red border-red': hasError}
    )
    return(
        <div className={containerClasses}>
            {label && <label className="text-purple-dark font-bold text-sm mb-2">{label}</label>}
            <input 
                className={inputClasses}
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
            />
            {msgError && <span className="text-red font-semibold text-xs mt-2 ">{msgError}</span>}
        </div>
    )
}

export default Input;