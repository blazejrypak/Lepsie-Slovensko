/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../HomePage';
import FeaturePage from '../FeaturePage';
import NotFoundPage from '../NotFoundPage';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import './index.css';
import AboutPage from '../AboutPage';
import TutorialPage from '../TutorialPage';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="Lepšie Slovensko"
        defaultTitle="Lepšie Slovensko"
      >
        <meta name="description" content="Lepšie Slovensko, pokladničný doklad, výdavkový pokladničný doklad" />
      </Helmet>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/app" component={FeaturePage} />
        <Route path="/contact" component={AboutPage} />
        <Route path="/tutorial" component={TutorialPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
