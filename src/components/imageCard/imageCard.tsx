import css from "./imageCard.module.css"
type Props = {
    src: string,
    alt: string,
}

export default function ImageCard({ src, alt }: Props) {
    return (
        <img className={css.image} src={src} alt={alt} />
    )
}