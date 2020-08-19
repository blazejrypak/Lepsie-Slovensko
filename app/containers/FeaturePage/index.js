/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Scanner from '../../components/Scanner';

export default function FeaturePage() {
  return (
    <div
      role="main"
      className="container-fluid"
    >
      <Helmet>
        <title>App</title>
        <meta
          name="description"
          content="Lepšie Slovensko, výdavkový pokladničný doklad, pokladničný doklad"
        />
      </Helmet>
      <Scanner />
    </div>
  );
}
