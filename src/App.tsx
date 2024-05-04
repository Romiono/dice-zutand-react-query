import './App.css';
import {Outlet} from "react-router-dom";
import mockLogo from './assets/react.svg';
import logo from './assets/logo/logo.png';
import {useUserStore} from "./store/userStore.ts";
function App() {
    const isAuth = useUserStore(state => state.isAuth);
    const setAuth = useUserStore(state => state.mockLogin);
    return (
        <div>
            <div className="navbar bg-neutral-300 justify-center items-center">
                <div className={'container'}>
                    <div className="flex-1">
                        <img className={'h-14'} src={logo} alt='logo'/>
                    </div>
                    <div className="flex-none gap-2">
                        {isAuth ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component"
                                             src={mockLogo}/>
                                    </div>
                                </div>
                                <ul tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-neutral-300 text-neutral-800 font-bold text-center">
                                    <li>
                                        <button onClick={setAuth}>Logout</button>
                                    </li>
                                </ul>
                            </div> :
                                <button onClick={setAuth} className={'btn btn-outline btn-accent bg-transparent'}>Login</button>
                        }
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default App;
