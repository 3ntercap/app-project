import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {

    const [t] = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={'/'}>{t('Main')}</AppLink>
            <AppLink to={'/about'}>{t('About')}</AppLink>
        </div>
    );
};

export default Navbar;
