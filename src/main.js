import GameListView from './GameListView.js';
import HelpView from './HelpView.js';
import AboutView from './AboutView.js';
import Router from './Router.js';
import GameDetailView from './GameDetailView.js';
import CompetencesQualitesView from './CompetencesQualitesView.js';
import ContactView from './ContactView.js';

// création des vues de notre application
const helpView = new HelpView(document.querySelector('.viewContent .help'));
const experienceView = new GameListView(
	document.querySelector('.viewContent > .gameList'),
	'experience'
);
const projetView = new GameListView(
	document.querySelector('.viewContent > .gameList'),
	'projet'
);
const aboutView = new AboutView(
	document.querySelector('.viewContent > .about')
);
const projetDetailView = new GameDetailView(
	document.querySelector('.gameDetail'),
	'projets'
);
const experienceDetailView = new GameDetailView(
	document.querySelector('.gameDetail'),
	'experiences'
);
const competencesView = new CompetencesQualitesView(
	document.querySelector('.viewContent > .competencesQualites'),
	1
);

const qualitesView = new CompetencesQualitesView(
	document.querySelector('.viewContent > .competencesQualites'),
	2
);

const contactView = new ContactView(
	document.querySelector('.viewContent > .contact')
);

// mise en place du Router
const routes = [
	{ path: '/', view: aboutView, title: 'Présentation' },
	{ path: '/competences', view: competencesView, title: 'Compétences' },
	{ path: '/qualites', view: qualitesView, title: 'Qualités' },
	{ path: '/projets', view: projetView, title: 'Mes projets' },
	{ path: '/experiences', view: experienceView, title: 'Experiences' },
	{ path: '/projet-*', view: projetDetailView, title: 'Détail projet' },
	{
		path: '/experience-*',
		view: experienceDetailView,
		title: 'Détail expérience',
	},
	{ path: '/contact', view: contactView, title: 'Contactez moi' },
];
Router.routes = routes;
// élément dans lequel afficher le <h1> de la vue
Router.titleElement = document.querySelector('.viewTitle');
// gestion des liens du menu (détection du clic et activation/désactivation)
Router.setMenuElement(document.querySelector('.mainMenu'));

// chargement de la vue initiale selon l'URL demandée par l'utilisateur.rice (Deep linking)
Router.navigate(window.location.pathname, true);
// gestion des boutons précédent/suivant du navigateur (History API)
window.onpopstate = () => Router.navigate(document.location.pathname, true);
