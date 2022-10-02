import classnames from 'classnames';

const Button = ({ children, onClick, className, ...props }) => {
    const buttonClasses = classnames(
        "bg-purple-dark text-lg font-bold text-white w-full h-full text-center rounded-xl",
        className
    );

    return (
        <button onClick={onClick} className={buttonClasses} {...props}>
            {children}
        </button>
    )

}

export default Button;