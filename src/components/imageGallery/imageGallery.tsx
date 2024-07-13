import ImageCard from "../imageCard/imageCard";
import css from "./imageGallery.module.css"


interface Image{
 id: number,
index: number,
    alt_description: string,
    urls: {
        small: string,
        regular:string
}
}

type Props = {
    images: Image[],
    onImageClick: (image: Image) => void;
   
}

export default function ImageGallery({images, onImageClick}: Props) {
    return (
        <ul className={css.imageList}>
            {images.map((image, index) => (
                
            <li key={`${image.id}-${index}`} onClick={() => onImageClick(image)} className={css.imageListItem}>
                    <ImageCard
                        // className={css.image}
                    src={image.urls.small}
                    alt={image.alt_description } />
                </li>
            ))}
        </ul>
    )
    
}