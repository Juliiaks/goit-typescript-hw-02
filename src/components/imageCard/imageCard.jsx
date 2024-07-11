import css from "./imageCard.module.css"
export default function ImageCard({ src, alt }) {
    return (
        <img className={css.image} src={src} alt={alt} />
    )
}