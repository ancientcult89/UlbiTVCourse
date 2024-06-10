import {classNames} from "shared/lib/classNames";
import cls from './NotFoundPage.module.scss'
import {useTranslation} from "react-i18next";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className} : NotFoundPageProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            {t('Not found')}
        </div>
    );
};

export default NotFoundPage;