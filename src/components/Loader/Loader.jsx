import { SyncLoader} from "react-spinners";
import css from './Loader.module.css'; 

export default function Loader() {
    return <div className={css.container}>
        <SyncLoader
            color={'#5e74f6'}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>;
}