import './MainePage_Styles.scss';
import Form from './components/form/Form';
import SearchHistory from './components/searchHistory/SearchHistory';

const MainPage = () => {
    return (
        <div className='mainPage'>
            <Form />
            <SearchHistory />
        </div>
    );
};

export default MainPage;