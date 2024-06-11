import Button from "shared/ui/Button/Button";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

interface BugButtonProps {
    className?: string;
}

//компонент для тестирования
export const BugButton = ({className} : BugButtonProps) => {
    const [error, setError] = useState(false);

    const {t} = useTranslation();
    const onnThrow = () => {
        setError(!error);
    }

    useEffect(() => {
        if(error === true)
            throw new Error();
    }, [error])

    return (
        <Button
            onClick={onnThrow}>
            {t('Throw Error')}
        </Button>
    );
};

export default BugButton;