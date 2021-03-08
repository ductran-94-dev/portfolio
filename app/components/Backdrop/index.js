/**
 *
 * Backdrop
 *
 */

import anime from 'animejs';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Inner from './Inner';
import Wrapper from './Wrapper';

function Backdrop({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);
  const animate = useCallback(() => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }, [finishLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);

    animate();

    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <Wrapper className="loader">
      <Inner isMounted={isMounted}>
        <FontAwesomeIcon icon={['fab', 'dochub']} size="4x" />
      </Inner>
    </Wrapper>
  );
}

Backdrop.propTypes = {
  finishLoading: PropTypes.func,
};

export default Backdrop;
