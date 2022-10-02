import classnames from 'classnames';

const Section = ({ 
    children, 
    classContainer, 
    classInnerContainer = "sm:pt-20 sm:mt-20 lg:pt-0 lg:mt-0"
}) => {
    const containerClasses = classnames(
        "container sm:h-full lg:h-screen w-full sm:block lg:flex lg:items-center",
        classContainer
    );

    const innerContainerClasses = classnames(
        "inner-container sm:flex sm:flex-col sm:items-center",
        classInnerContainer
    )

    return (
        <section className={containerClasses}>
            <div className={innerContainerClasses}>
                {children}
            </div>
        </section>
    );
}

export default Section;