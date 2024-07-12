import css from "./searchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';
import { FcSearch } from "react-icons/fc"

type Props = {
  submit: (search:string) => void;
};

// type Func = {
//   event: () => void;
// }

export default function SearchBar({ submit }:Props) {


const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const search = form.elements.namedItem('search') as HTMLInputElement;
    if (search.value.trim() === "") {
        toast('Please, enter a word!');
        return
    }
    submit(search.value);
    form.reset();
    }

   
    return (
      <header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
            placeholder="Search images and photos"
            name='search'
    />
                <button type="submit" className={css.searchBtn}><FcSearch className={css.searchIcon} /></button>
          <Toaster 
            toastOptions={{
    className: '',
    style: {
      border: '1px solid #F5B1EC',
      // position: "top",
      padding: '16px',
      color: '#F5B1EC',
      backgroundColor:"#7C2A70"
    },
  }}
   
                />
  </form>
</header>)
}