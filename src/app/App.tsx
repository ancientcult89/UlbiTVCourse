import './styles/index.scss'
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widget/NavBar";
import {Sidebar} from "widget/Sidebar";
import {Suspense, useEffect, useState} from "react";
import Modal from "shared/ui/Modal/Modal";

const App = () => {

    const {theme} = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar/>
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem imsum sdlkmsad;lask ;lkdasas; dkasq;dl kas;dl askd;
                </Modal>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;