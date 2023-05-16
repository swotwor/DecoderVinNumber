import './App.css';
import MainPage from './components/mainPage/MainPage';
import Variable from './components/variable/Variable';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import VariableDescription from './components/variableDescription/VariableDescription';
import { getVehicleVariablesList } from './logic/logic';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getVehicleVariablesList(dispatch);
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/variables" element={<Variable />}/>
                    <Route path="/variables/variableDescription" element={<VariableDescription />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
