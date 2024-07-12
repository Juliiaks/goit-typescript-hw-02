import ImageCard from "../imageCard/imageCard";
import css from "./imageGallery.module.css"


interface Image{
 id: number,
index: number,
    alt_description: string,
    urls: {
    small:string
}
}

type Props = {
    images: Image[],
    onImageClick: (image: { urls: { small: string }, alt_description: string }) => void;
   
}

export default function ImageGallery({images, onImageClick}: Props) {
    return (
        <ul className={css.imageList}>
            {images.map(({ id, urls, alt_description }, index) => (
                
            <li key={`${id}-${index}`} onClick={() => onImageClick({ urls, alt_description })} className={css.imageListItem}>
                    <ImageCard
                        // className={css.image}
                    src={urls.small}
                    alt={alt_description } />
                </li>
            ))}
        </ul>
    )
    
}