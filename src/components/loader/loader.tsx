import { DNA } from "react-loader-spinner";
import css from "./loader.module.css"
export default function Loader() {
    return (
        <div className={css.loader}>
            <DNA
            />
        </div>
    )
}