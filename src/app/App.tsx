import './styles/index.scss'
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widget/NavBar";
import {Sidebar} from "widget/Sidebar";
import {Suspense} from "react";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

            <Navbar/>
        </div>
    );
};

export default App;