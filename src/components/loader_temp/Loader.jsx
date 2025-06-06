import { SyncLoader} from "react-spinners";
import css from './Loader.module.css'; 

export default function Loader() {
    return <div className={css.container}>
        <SyncLoader
            color={'#3399ff'}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>;
}