import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import Modal from "shared/ui/Modal/Modal";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;

}

export const Navbar = ({className} : NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onTogleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    },[]);

    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onTogleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onTogleModal}>
                Lorem imsum sdlkmsad;lask ;lkdasas; dkasq;dl kas;dl askd;
            </Modal>
        </div>
    );
};