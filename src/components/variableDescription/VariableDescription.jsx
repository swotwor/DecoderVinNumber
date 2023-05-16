import './VariableDescription.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentVariableDiscription } from '../../store/reducer';

const VariableDescription = () => {
    const dispatch = useDispatch();
    const {
        vehicleVariablesList,
        currentVariableDiscription,
    } = useSelector(state => state.VIN);
    
    const handleClickOnButton = () => {
        dispatch(setCurrentVariableDiscription({}))
    };
    
    return (
        <div className='variableDescription'>
            <Link to='/variables' className='variableDescription_prevPageButton' onClick={handleClickOnButton}/>
            <p className='variableDescription_title'>
                {currentVariableDiscription.title}:
                <span>{currentVariableDiscription.value}</span>
            </p>
            <p className='variableDescription_description'>
                {vehicleVariablesList[currentVariableDiscription.variableId]}
            </p>
        </div>
    );
};

export default VariableDescription;