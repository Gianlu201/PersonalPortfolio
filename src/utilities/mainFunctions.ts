import angular from '/illustrations/technologies/angular.svg';
import api from '/illustrations/technologies/api.svg';
import aspnet from '/illustrations/technologies/aspnet.svg';
import aws from '/illustrations/technologies/aws.svg';
import bootstrap from '/illustrations/technologies/bootstrap.svg';
import csharp from '/illustrations/technologies/csharp.svg';
import css from '/illustrations/technologies/css.svg';
import dotnet from '/illustrations/technologies/dotnet.svg';
import flutter from '/illustrations/technologies/flutter.svg';
import git from '/illustrations/technologies/git.svg';
import github from '/illustrations/technologies/github.svg';
import gitlab from '/illustrations/technologies/gitlab.svg';
import html from '/illustrations/technologies/html.svg';
import java from '/illustrations/technologies/java.svg';
import javascript from '/illustrations/technologies/javascript.svg';
import linux from '/illustrations/technologies/linux.svg';
import microsoftSQLserver from '/illustrations/technologies/microsoftSQLserver.svg';
import npm from '/illustrations/technologies/npm.svg';
import php from '/illustrations/technologies/php.svg';
import python from '/illustrations/technologies/python.svg';
import react from '/illustrations/technologies/react.svg';
import reactTesting from '/illustrations/technologies/reactTesting.svg';
import redux from '/illustrations/technologies/redux.svg';
import sass from '/illustrations/technologies/sass.svg';
import sendgrid from '/illustrations/technologies/sendgrid.svg';
import stripe from '/illustrations/technologies/stripe.svg';
import swagger from '/illustrations/technologies/swagger.svg';
import tailwind from '/illustrations/technologies/tailwind.svg';
import typescript from '/illustrations/technologies/typescript.svg';
import vite from '/illustrations/technologies/vite.svg';
import vue from '/illustrations/technologies/vue.svg';

// Funzione che da una lista di nomi restituisce le icone svg delle varie tecnologie passate
export const getTechnologiesIcons = (technologies: string[]) => {
  const icons = technologies.sort().map((technology) => {
    switch (technology) {
      case 'angular':
        return angular;

      case 'api':
        return api;

      case 'aspnet':
        return aspnet;

      case 'aws':
        return aws;

      case 'bootstrap':
        return bootstrap;

      case 'csharp':
        return csharp;

      case 'css':
        return css;

      case 'dotnet':
        return dotnet;

      case 'flutter':
        return flutter;

      case 'git':
        return git;

      case 'github':
        return github;

      case 'gitlab':
        return gitlab;

      case 'html':
        return html;

      case 'java':
        return java;

      case 'javascript':
        return javascript;

      case 'linux':
        return linux;

      case 'microsoftSQLserver':
        return microsoftSQLserver;

      case 'npm':
        return npm;

      case 'php':
        return php;

      case 'python':
        return python;

      case 'react':
        return react;

      case 'reactTesting':
        return reactTesting;

      case 'redux':
        return redux;

      case 'sass':
        return sass;

      case 'sendgrid':
        return sendgrid;

      case 'stripe':
        return stripe;

      case 'swagger':
        return swagger;

      case 'tailwind':
        return tailwind;

      case 'typescript':
        return typescript;

      case 'vite':
        return vite;

      case 'vue':
        return vue;

      default:
        return '';
    }
  });

  return icons;
};

// Funzione che restituisce l'icona corrispondente al nome della tecnologia passata
export const getTechnology = (technology: string, output: string) => {
  switch (technology) {
    case 'angular':
      if (output === 'icon') return angular;
      else return 'Angular';

    case 'api':
      if (output === 'icon') return api;
      else return 'API';

    case 'aspnet':
      if (output === 'icon') return aspnet;
      else return 'Asp.Net';

    case 'aws':
      if (output === 'icon') return aws;
      else return 'AWS';

    case 'bootstrap':
      if (output === 'icon') return bootstrap;
      else return 'Bootstrap';

    case 'csharp':
      if (output === 'icon') return csharp;
      else return 'C#';

    case 'css':
      if (output === 'icon') return css;
      else return 'CSS';

    case 'dotnet':
      if (output === 'icon') return dotnet;
      else return '.net';

    case 'flutter':
      if (output === 'icon') return flutter;
      else return 'Flutter';

    case 'git':
      if (output === 'icon') return git;
      else return 'Git';

    case 'github':
      if (output === 'icon') return github;
      else return 'Github';

    case 'gitlab':
      if (output === 'icon') return gitlab;
      else return 'Gitlab';

    case 'html':
      if (output === 'icon') return html;
      else return 'HTML';

    case 'java':
      if (output === 'icon') return java;
      else return 'Java';

    case 'javascript':
      if (output === 'icon') return javascript;
      else return 'JavaScript';

    case 'linux':
      if (output === 'icon') return linux;
      else return 'Linux';

    case 'microsoftSQLserver':
      if (output === 'icon') return microsoftSQLserver;
      else return 'Mirosoft SQL Server';

    case 'npm':
      if (output === 'icon') return npm;
      else return 'Npm';

    case 'php':
      if (output === 'icon') return php;
      else return 'PHP';

    case 'python':
      if (output === 'icon') return python;
      else return 'Python';

    case 'react':
      if (output === 'icon') return react;
      else return 'React';

    case 'reactTesting':
      if (output === 'icon') return reactTesting;
      else return 'React Testing Library';

    case 'redux':
      if (output === 'icon') return redux;
      else return 'Redux';

    case 'sass':
      if (output === 'icon') return sass;
      else return 'SASS';

    case 'sendgrid':
      if (output === 'icon') return sendgrid;
      else return 'SendGrid';

    case 'stripe':
      if (output === 'icon') return stripe;
      else return 'Stripe';

    case 'swagger':
      if (output === 'icon') return swagger;
      else return 'Swagger';

    case 'tailwind':
      if (output === 'icon') return tailwind;
      else return 'TailwindCSS';

    case 'typescript':
      if (output === 'icon') return typescript;
      else return 'TypeScript';

    case 'vite':
      if (output === 'icon') return vite;
      else return 'Vite';

    case 'vue':
      if (output === 'icon') return vue;
      else return 'Vue';

    default:
      return '';
  }
};
