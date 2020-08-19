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
        <title>FApp</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <Scanner />
    </div>
  );
}
