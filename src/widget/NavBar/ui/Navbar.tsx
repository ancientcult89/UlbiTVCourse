import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className} : NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    },[]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    },[]);

    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModal}/>
        </div>
    );
};