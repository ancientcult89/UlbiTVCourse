import {classNames} from "shared/lib/classNames";
import cls from './LoginForm.module.scss';
import {useTranslation} from "react-i18next";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUserName} from "../../model/services/loginByUserName/loginByUserName";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className} : LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {username, password, isLoading, error} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({username, password}))
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            {error && <div>
                {error}
            </div>}
            <Input
                type='text'
                autofocus
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type='text'
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
                className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;