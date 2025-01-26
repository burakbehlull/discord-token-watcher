
export default function Button({ text, styles, handleClick }) {
    return (
        <button class={`btn ${styles}`} onClick={handleClick}>
            {text}
        </button>
    )
}