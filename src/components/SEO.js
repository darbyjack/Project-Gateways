import React from 'react';
import Helmet from 'react-helmet';

import { url, defaultDescription, defaultTitle, legalName, logo } from '../data/config';

const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
    const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
  	}`;

    return (
        <Helmet>
            <meta name="description" content={description} />

            <meta property="og:url" content={`${url}${location}/`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <script type="application/ld+json">{structuredDataOrganization}</script>
            <title>{title}</title>
            <html lang="en" dir="ltr" />
        </Helmet>
    );
};

export default SEO
