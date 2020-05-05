import React from 'react';
import PropTypes from 'prop-types';

LandingGraphic.propTypes = {
    cvUrl: PropTypes.string.isRequired,
    githubURL: PropTypes.string.isRequired,
    behanceURL: PropTypes.string.isRequired
};

function LandingGraphic(props) {
    [ cvUrl, githubURL, behanceURL ] = props;
    return (
        <div>
            <a href={behanceURL}> Designer </a>
            |
            <a href={githubURL}> Developer</a>
            <h1> Arthur Lee. </h1>
            <Button>
                View my CV
            </Button>
            <Button>
                Contact Me
            </Button>
        </div>
    );
}

export default LandingGraphic;