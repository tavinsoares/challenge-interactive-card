import classnames from 'classnames';

const Button = ({ children, onClick, className, disabled, ...props }) => {
    const buttonClasses = classnames(
        "text-lg font-bold  w-full h-full text-center rounded-xl",
        { 'bg-grayish-violet text-purple-dark': disabled  },
        { 'bg-purple-dark text-white': !disabled },
        className
    );

    return (
        <button disabled={disabled} onClick={onClick} className={buttonClasses} {...props}>
            {children}
        </button>
    )

}

export default Button;