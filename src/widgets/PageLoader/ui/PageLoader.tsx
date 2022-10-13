import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';

import './PageLoader.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames('page__loader', {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;