import css from "./loadMore.module.css"
export default function LoadMoreBtn({ handleLoadMore }) {
    return (
        <>
            <button className={css.loadMore} type="button" onClick={handleLoadMore}>Load More</button>
        </>
    )
}