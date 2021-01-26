import styled from 'styled-components';

export default styled.div`
  ${({ theme }) => theme.mixins.flexCenter };
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
`;
