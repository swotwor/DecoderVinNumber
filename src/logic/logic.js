import ky from 'ky';
import { addToHistoryList, setCurrentVin, setLoading, setVehicleVariablesList } from '../store/reducer';
import striptags from 'striptags';

export const getDecodingInfo = async (vinNum, dispatch) => {
    dispatch(setLoading());
    try{
        const response = await ky
            .get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinNum}?format=json`)
            .json();
            dispatch(addToHistoryList(filteredDecodingInfo(response.Results)));
            dispatch(setLoading());
    }
    catch (error) {
        alert(error)
    }
}

export const getVehicleVariablesList = async (dispatch) => {
    try {
        const response = await ky
            .get('https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json')
            .json();
            dispatch(setVehicleVariablesList(filteredVariablesList(response.Results)))
    } catch (error) {
        alert(error)
    }
}

const filteredDecodingInfo = (array) => {
    return array.filter(obj => obj.Value);
}

const filteredVariablesList = (array) => {
    const result = {};
    for (let i = 0; i < array.length; i++) {
      const { ID, Description } = array[i];
      result[ID] = striptags(Description);
    }
    return result;
}

export const findVariableValue = (array, variable) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].Variable === variable) {
        return array[i].Value;
      }
    }
    return null;
};

export const handleSetCurrentVin = (index, dispatch) => {
    dispatch(setCurrentVin(index))
}