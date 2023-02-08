import React from "react";
import { Helmet } from "react-helmet";

export default function MetaData() {
  return (
    <>
      <Helmet>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Axel Pointud - Développeur web</title>
        <meta name='title' content='Axel Pointud - Développeur web' />
        <meta
          name='description'
          content="Bonjour, je m'appelle Axel Pointud et je suis un développeur web spécialisé en React JS. Bienvenue sur mon portfolio."
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.axel-pointud.fr/' />
        <meta property='og:title' content='Axel Pointud - Développeur web' />
        <meta
          property='og:description'
          content="Bonjour, je m'appelle Axel Pointud et je suis un développeur web spécialisé en React JS. Bienvenue sur mon portfolio."
        />
        <meta property='og:image' content='' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.axel-pointud.fr/' />
        <meta
          property='twitter:title'
          content='Axel Pointud - Développeur web'
        />
        <meta
          property='twitter:description'
          content="Bonjour, je m'appelle Axel Pointud et je suis un développeur web spécialisé en React JS. Bienvenue sur mon portfolio."
        />
        <meta property='twitter:image' content=''></meta>
        <title>Axel Pointud - Développeur web</title>
      </Helmet>
    </>
  );
}
