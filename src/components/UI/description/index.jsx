import './description.module.css';

export const Description = ({ children }) => {
    return (
        <p className="line-height: 2rem; ">
            {children}
        </p>
    )
}