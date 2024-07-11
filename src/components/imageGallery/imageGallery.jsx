import ImageCard from "../imageCard/imageCard";
import css from "./imageGallery.module.css"

export default function ImageGallery({images, onImageClick}) {
    return (
        <ul className={css.imageList}>
            {images.map(({ id, urls, alt_description }, index) => (
                
            <li key={`${id}-${index}`} onClick={() => onImageClick({ urls, alt_description })} className={css.imageListItem}>
                    <ImageCard
                        className={css.image}
                    src={urls.small}
                    alt={alt_description } />
                </li>
            ))}
        </ul>
    )
    
}