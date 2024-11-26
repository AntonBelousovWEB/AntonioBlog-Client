
export const Figure = ({ children, className }) => {
    return (
        <section 
            className={
                `bg-gradient-to-t 
                from-transparent 
                to-gray-100 
                rounded-xl 
                w-auto 
                inline-block 
                ${className ? className : ""}
            `}>
                {children}
        </section>
    );
};