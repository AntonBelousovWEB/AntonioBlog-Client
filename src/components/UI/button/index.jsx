import './button.module.css';

export const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`button px-14 py-2 ${className ? className : ""}`}>
            {children}
        </button>
    )
}