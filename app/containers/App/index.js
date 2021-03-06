/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ArchivePage from 'containers/ArchivePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import fa from 'utils/fontAwesome';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

fa.init();

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Duc Tran" defaultTitle="Duc Tran">
        <meta name="description" content="A portfolio application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/archive" component={ArchivePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
