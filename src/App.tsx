import './App.css';
import {Outlet} from "react-router-dom";
import NavBar from "./components /NavBar.tsx";
function App() {
    return (
        <div className={'flex flex-col items-center'}>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

export default App;
