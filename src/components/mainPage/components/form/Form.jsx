import './Form_Styles.scss';
import { useState } from 'react';
import { getDecodingInfo } from '../../../../logic/logic';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.VIN.loading)
    const [inputData, setInputData] = useState('');

    const clickOnSearchButton = event => {
        event.preventDefault();
        if (inputData.length > 16) {
            getDecodingInfo(inputData, dispatch);
            setInputData('');
        } else {
            alert('The length of the VIN number is incorrect.')
        }
    }

    return (
        <div className='form'>
            <form className='form_container' onSubmit={clickOnSearchButton}>
                <input
                    name="vinCode"
                    value={inputData}
                    onChange={event => setInputData(event.target.value)}
                    maxLength={17}
                    className='form_input'
                    placeholder={"Enter vin-code"}
                />
                <button
                    type="submit"
                    className={`${inputData.length > 16 ? '' : 'disabled'} ${loading ? 'loading-font-animation' : ''} form_button`}
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Form;