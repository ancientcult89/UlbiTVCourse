import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className} : NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    },[]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    },[]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    },[dispatch]);

    if(authData) {
        return (
            <div className={classNames(cls.navbar, {}, [])}>
                <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal onClose={onCloseModal} isOpen={isAuthModal}/>}
        </div>
    );
};