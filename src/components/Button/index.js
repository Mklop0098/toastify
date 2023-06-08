export const Button = (props) => {

    const {className, text, onClick} = props;

    return (
        <button className={`btn__container ${className}`}
            onClick={onClick}
        >
            <span>{text}</span>
        </button>
    )
}