import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar/searchBar'
import ImageGallery from './components/imageGallery/imageGallery'
import { getImagesApi } from './components/unsplashAPI/unsplash'
import { DNA } from 'react-loader-spinner'
import LoadMoreBtn from './components/LoadmoreBtn/loadMoreBtn'
import ImageModal from './components/ImageModal/imageModal'
import ErrorMessage from './components/errorMessage/errorMessage'
import Modal from 'react-modal';
import Loader from './components/loader/loader'

Modal.setAppElement('#root');
 
interface Image{
 id: number,
index: number,
    alt_description: string,
    urls: {
      small: string,
      regular: string
}
}


type ApiResponse = {
  data: {
    results: Image[];
    total_pages: number;
    total_results: number;
  };
}


function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const [showBtn, setShowBtn] = useState(false);
  



  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true)
        setError(false)
        const response: ApiResponse = await getImagesApi(search, page)
        console.log(response)
        setImages((prev) => [...prev, ...response.data.results])
        setShowBtn(response.data.total_pages > 0 && response.data.total_pages !== page);
      }
      catch (error) {
        setError(true)
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }

    search && fetchImages()
  }, [ page, search])
  
  
  const handleSubmit = async (searchQuery:string) => {
    setSearch(searchQuery)
    setImages([])
      setPage(1)
    
  }

  const handleLoadMore = async () => {
    
    setPage((prevPage) => prevPage + 1);
   
  }

  //  setShowBtn(images.total_pages && images.total_pages !== page)

  function openModal(image: Image) {
    if (!modalIsOpen){
    setSelectedImage(image);
      setIsOpen(true);
    }
}
  
  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }
  
  return (
    <>
      
      <SearchBar
      submit={handleSubmit}/>
      
      {images.length > 0 &&(
      <ImageGallery
          images={images}
          onImageClick={openModal} 
        />
      )}
      {isLoading && (
        <Loader/>
      )}

      {error && (<ErrorMessage />)}

      {selectedImage && (
        <ImageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          urls={selectedImage.urls.regular}
          alt_description={selectedImage.alt_description}
          />
      )}

      { showBtn &&
        (<LoadMoreBtn handleLoadMore={handleLoadMore} />)}
      
    </>
  )
}

export default App


   // try {
    // setImages([])
    //   setIsLoading(true)
    //   setError(false)
    //     const response = await getImagesApi(search, page)
    //     setImages(response.data.results) 
    //   }
    //   catch (error) {
    //     setError(true)
    //   } finally {
    //     setIsLoading(false)
    //   }