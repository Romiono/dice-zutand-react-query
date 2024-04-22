import './App.css';
import {useUserStore} from "./store/userStore.ts";
import {IUser} from "./types/IUser.ts";

function App() {
    const {username, login, mail} = useUserStore();

    const oleg: IUser = {
        username: 'oleg',
        mail: 'oleg@gmail.com',
        role: 'mega Admin',
        token: 'gsgdfsgsdfgsdfgsdfgsd',
    };

    const userlogin = () => {
        login(oleg);
    };
    return (
        <div>
            <div>
                user: {username},
                {mail}
            </div>

            <button onClick={userlogin}>login</button>
        </div>
    );
}

export default App;
