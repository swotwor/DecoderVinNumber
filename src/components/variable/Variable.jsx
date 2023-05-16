import './Variable.scss';
import { Link } from 'react-router-dom';
import VariableItem from './components/variableItem/VariableItem';
import { useSelector } from 'react-redux';

const Variable = () => {
    const currentVin = useSelector(state => state.VIN.currentVin);

    return (
        <div className='variable'>
            <Link to='/' className='variable_prevPageButton'/>
            {currentVin.map((item, index) => (
                <VariableItem key={index} item={item}/>
            ))}
        </div>
    );
};

export default Variable;