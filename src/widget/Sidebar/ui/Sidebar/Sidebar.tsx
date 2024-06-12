import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widget/ThemeSwitcher";
import {LanguageSwitcher} from "widget/LanguageSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className} : SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            data-testid = "sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>

            <button
                data-testid="sidebar-toggle"
                onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;