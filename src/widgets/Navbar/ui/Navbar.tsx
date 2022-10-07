import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={'/'}>Главная</AppLink>
            <AppLink to={'/about'}>О сайте</AppLink>
        </div>
    );
};

export default Navbar;
