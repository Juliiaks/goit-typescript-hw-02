import css from "./errorMessage.module.css"
export default function ErrorMessage() {
    return (
        <>
           <p className={css.error}>Oooops... Something went wrong :( </p>
        </>
    )
}