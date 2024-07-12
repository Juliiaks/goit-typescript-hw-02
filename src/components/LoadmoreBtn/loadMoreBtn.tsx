import css from "./loadMore.module.css"

type Props = {
  handleLoadMore: () => void;
};

export default function LoadMoreBtn({ handleLoadMore }:Props) {
    return (
        <>
            <button className={css.loadMore} type="button" onClick={handleLoadMore}>Load More</button>
        </>
    )
}