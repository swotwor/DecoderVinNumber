import './Card_Styled.scss';
import { findVariableValue } from '../../../../../logic/logic';

const Card = ({ item }) => {
    return (
        <div className="card">
                <p className='card_title'>
                    Vehicle Descriptor: 
                        <span className='card_summary'>
                            {findVariableValue(item, 'Vehicle Descriptor')}
                        </span>
                </p>
                <p className='card_title'>
                    Manufacturer Name: 
                        <span className='card_summary'>
                            {findVariableValue(item, 'Manufacturer Name')}
                        </span>
                </p>
                <p className='card_title'>
                    Model Year: 
                        <span className='card_summary'>
                            {findVariableValue(item, 'Model Year')}
                        </span>
                </p>
        </div>
    );
};

export default Card;
