import './SearchHistory_Styles.scss';
import Card from './card/Card';
import { Link } from 'react-router-dom';
import { handleSetCurrentVin } from '../../../../logic/logic';
import { useDispatch, useSelector } from 'react-redux';

const SearchHistory = () => {
    const dispatch = useDispatch();
    const historyList = useSelector(state => state.VIN.historyList);

    return (
        <div className='searchHistory'>
            {historyList.map((item, index) => (
                <Link to="/variables" key={index} onClick={() => handleSetCurrentVin(index, dispatch)}>
                    <Card item={item}/>
                </Link>
            ))}
        </div>
    );
};

export default SearchHistory;