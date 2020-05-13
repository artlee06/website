import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';

ScrollSpy.propTypes = {
    ids: PropTypes.array.isRequired,
};

const isInView = (element) => {
    const rect = element.getBoundingClientRect(); // gets the element's bounding area including padding
    const bool = rect.top >= 0 && rect.bottom <= window.innerHeight;
    console.log(bool);
    return bool;
}

function ScrollSpy(props) {
    const {ids, activeClassName} = props;

    return (
        <div>
            
        </div>
    );
}

export default ScrollSpy;