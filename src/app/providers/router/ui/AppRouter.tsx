import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import PageLoader from "widget/PageLoader/ui/PageLoader";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        element={(
                            <Suspense fallback={<PageLoader/>}>
                                <div className='page-wrapper'>
                                    {element}
                                </div>
                            </Suspense>
                        )}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;