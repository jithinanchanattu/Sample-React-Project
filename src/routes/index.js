import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicSection from './PublicSection';

function Routes() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isUserLoggedIn = (localStorage.getItem('isUserLoggedIn') === "true"?true:false);
    return isUserLoggedIn ? <PrivateSection /> : <PublicSection />;    // return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
