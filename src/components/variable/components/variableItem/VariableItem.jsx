import './VariableItem.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentVariableDiscription } from '../../../../store/reducer';

const VariableItem = ({item}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            setCurrentVariableDiscription({
                value: item.Value,
                variable: item.Variable,
                variableId: item.VariableId,
            })
        ) 
    };

    return (
        <div className="variableItem_containerItem">
            <p className="variableItem_itemTitle">
                {item.Variable}:
                <Link className="variableItem_infoIcon" to="/variables/variableDescription" onClick={handleClick}/>
            </p>
            <p className="variableItem_itemInfo">{item.Value}</p>
        </div>
    );
};

export default VariableItem;
