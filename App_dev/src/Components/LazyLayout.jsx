import { Suspense } from "react";
import PropTypes from 'prop-types';
import loadingGif from '../GIF/load.gif'; 

const LazyLayout = ({ component: Component, ...rest }) => {
    return (
        <Suspense fallback={<img src={loadingGif} alt="Loading..." />}>
            <Component {...rest} />
        </Suspense>
    );
};

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
};

export default LazyLayout;
