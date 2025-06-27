import View from './View.js';
import Router from './Router.js';

export default class GameDetailView extends View {
	experience;
	experiences = [
		{
			name: '💼 Développeur Web – Stage chez Kiss The Bride',
			slug: `stage-but-kissthebride`,
			background_image:
				'https://cdn.slidesharecdn.com/ss_thumbnails/kissthebride-presentation-commerciale2018vfrslideshare-181029080558-thumbnail.jpg?width=640&height=640&fit=bounds',
			date: 'Avril à Juin 2025',
			info: true,
			screens: [],
			technologies: [
				'PHP (Symfony)',
				'Twig',
				'JavaScript',
				'React',
				'TypeScript',
				'Docker',
				'Prometheus',
				'Grafana',
				'Jaeger',
			],
			description: `Durant ce stage, j’ai intégré l’équipe technique de Kiss The Bride, agence spécialisée dans la fidélisation client, en tant que développeur web fullstack. J’ai participé à plusieurs projets internes et clients, mêlant back-end, front-end, visualisation de données et monitoring d’infrastructure.
<br/><br/>
✅ Projets réalisés :
<br/>
1. Création de deux interfaces web de reporting (Symfony + JS)
<br/>
Page interne (pour l’équipe technique) :
<br/>
Filtrage des appels par enseigne et période.
<br/>
Exportation des données filtrées au format CSV.
<br/>
Statistiques : nombre d’appels, temps de réponse moyen et max, taux d’erreurs par méthode.
<br/>
Visualisation :
<br/>
Camembert : appels réussis vs erreurs.
<br/>
Bar chart : temps moyen par méthode.
<br/><br/>
Page client (avec gestion des droits) :
<br/>
Authentification avec recherche des droits et enseignes associées.
<br/>
Données filtrées par date au lieu de méthode.
<br/>
Mêmes visualisations adaptées à l’utilisateur : camembert + bar chart (temps par date).
<br/>
Sécurisation de l’accès : chaque utilisateur ne voit que ses propres données.
<br/><br/>
2. Application de monitoring d’infrastructure
<br/>
Récupération de métriques via Prometheus, et de traces via Jaeger.
<br/>
Affichage des indicateurs dans un dashboard Grafana.
<br/>
Conteneurisation complète via Docker.
<br/><br/>
Mise en place de :
<br/>
Vérifications automatiques des appels à chaque endpoint / route.
<br/>
Mesure des temps de réponse et couverture globale.
<br/>
Alertes automatisées par e-mail pour intervention rapide en cas de dépassement seuil ou d’erreur.
<br/><br/>
3. Découverte de React & tests unitaires
<br/>
En collaboration avec un développeur frontend, j’ai découvert React avec MUI et TypeScript.
<br/>
Développement d’une première application locale.
<br/>
Implémentation de tests unitaires sur certains composants pour valider leur fonctionnement.
<br/><br/>
🧠 Compétences développées :
<br/>
Développement fullstack dans un environnement professionnel structuré.
<br/>
Intégration à des projets clients réels avec enjeux métier.
<br/>
Data visualisation, monitoring et automatisation.
<br/>
Respect de la sécurité, de la qualité du code et des bonnes pratiques de déploiement.
<br/>
Autonomie, rigueur et travail en équipe avec des développeurs expérimentés.`,
		},
		{
			name: '👨‍🍳 Employé polyvalent – Quick',
			slug: `job-été-quick`,
			background_image:
				'https://ac-franchise.com/wp-content/uploads/2017/01/19/20170119145334-8bd959c563041f3dcbdfd339036eace5.jpg',
			date: 'Eté 2024',
			info: false,
			screens: [],
			description: `Durant cette expérience, j’ai travaillé dans un environnement à forte pression où la réactivité, la rigueur et le travail d’équipe étaient essentiels.
<br/><br/>
J’ai occupé plusieurs postes (cuisine, caisse, drive, service, nettoyage), ce qui m’a permis de développer des compétences humaines précieuses en entreprise : Adaptabilité, résistance au stress, communication, sens des responsabilités.
<br/><br/>
➡️ Une expérience formatrice qui m’a appris à gérer des contraintes réelles et à collaborer efficacement au sein d’une équipe.`,
		},
		{
			name: '🧑‍🍳 Agent polyvalent – Mairie (Restauration scolaire)',
			slug: `job-été-mairie-wattrelos`,
			background_image:
				'https://pro.solution-rendez-vous.com/ville-wattrelos/rendez-vous/ressources/upload/images/wattrelos.jpg',
			date: 'Juillet 2023',
			info: false,
			screens: [],
			description: `J’ai travaillé dans le cadre de la restauration pour les écoles primaires et maternelles de la commune. Mes missions couvraient :
<br/><br/>
Service des repas : distribution d’assiettes pour les primaires, service progressif pour les maternels (entrées, plats, desserts).
<br/>
Plonge, nettoyage des ustensiles, entretien des tables et chaises.
<br/>
Travail en équipe avec le personnel municipal dans un contexte rythmé.
<br/><br/>
➡️ Une expérience qui m’a appris la rigueur, le respect des consignes, et l’importance de l’organisation collective.`,
		},
		{
			name: '🧑‍🎨 Stage de découverte – Sarbacane Software',
			slug: `stage-lycée-sarbacane`,
			background_image:
				'https://salesdorado.com/wp-content/uploads/2022/11/sarbacane-cover.jpg',
			date: 'Février 2021',
			info: true,
			screens: [],
			technologies: ['Photoshop', 'Illustrator', 'HTML', 'CSS'],
			description: `Durant ce stage d’observation, j’ai eu l’opportunité de découvrir le fonctionnement d’une entreprise logicielle et d’explorer deux aspects complémentaires de la création web :
<br/><br/>
Aux côtés d’un webdesigner, j’ai appris à manipuler plusieurs outils de la suite Adobe (Photoshop, Illustrator) pour créer des visuels destinés à des interfaces web.
<br/><br/>
J’ai aussi échangé avec des développeurs qui m’ont initié à la création de pages web en HTML/CSS.
<br/><br/>
Cette expérience m’a permis de confirmer mon intérêt pour le développement web et a marqué le début de mon orientation vers l’informatique.`,
		},
	];

	projets = [
		{
			name: `📊 Projet de classification supervisée en Java & JavaFX`,
			slug: `iut-classifiacation`,
			background_image: 'img/cours/classification.png',
			date: `Semestre 3`,
			perso: false,
			screens: [
				`img/cours/bdd.png`,
				'img/cours/classification.png',
				'img/cours/intelliMessage.png',
			],
			technologies: [
				'Java',
				'JavaFX',
				'manipulation de fichiers CSV',
				'algorithmes de distance (Manhattan, Euclidienne)',
			],
			description: `Dans le cadre d’un projet scolaire, j’ai développé une application de classification supervisée en Java, avec une interface graphique en JavaFX. L'objectif était de lire un fichier CSV, en extraire les données et les représenter graphiquement sous forme de nuage de points selon deux axes (X et Y) choisis dynamiquement par l’utilisateur.
<br/><br/>
✅ Fonctionnalités réalisées :
<br/>
Lecture et traitement de données CSV : extraction des informations, création de classes Java pour modéliser les objets (ex. : des fleurs avec taille de tige, largeur des pétales, etc.).
<br/>
Visualisation interactive : affichage d’un nuage de points avec des axes configurables, permettant de visualiser les différentes données dans l’espace.
<br/>
Ajout d’un nouveau point : l’utilisateur peut créer un nouvel élément en saisissant ses caractéristiques, qui sera alors affiché sur le graphique.
<br/>
Classification dynamique : calcul du type probable de l’élément saisi via les distances de Manhattan ou Euclidienne. 
<br/>
L'utilisateur peut choisir : le type de distance à utiliser, le nombre de voisins pris en compte (1, 5, etc.), les caractéristiques à comparer (tige, pétales, etc.).
<br/><br/>
🔍 Ce que j’ai appris :
<br/>
Manipulation de fichiers CSV et structuration de données en Java.
<br/>
Utilisation avancée de JavaFX pour créer une interface utilisateur interactive et ergonomique.
<br/>
Mise en œuvre d’algorithmes de classification (type KNN) et de calculs mathématiques associés.
<br/>
Gestion de la modularité du code pour rendre le système évolutif et réutilisable.
<br/><br/>
Ce projet m’a permis de combiner traitement de données, algorithmie et interface graphique tout en laissant une grande liberté de configuration à l’utilisateur, ce qui rend l'application à la fois pédagogique et interactive.`,
		},
		{
			name: `🗄️ Projet d’analyse de données Parcoursup avec PostgreSQL`,
			slug: `iut-bdd`,
			background_image: 'img/cours/bdd.png',
			date: `Semestre 2`,
			perso: false,
			screens: [],
			technologies: [
				'SQL',
				'PostgreSQL',
				'traitement de fichiers CSV',
				'modélisation de base de données',
			],
			description: `Dans ce projet universitaire, nous avons travaillé sur l’exploitation des données issues de Parcoursup pour mener une analyse statistique sur les admissions dans les formations post-bac. Les données étaient fournies sous forme de fichier CSV massif contenant plusieurs milliers d’enregistrements.
<br/><br/>
✅ Étapes réalisées :
<br/>
Importation des données : création d'une table principale à partir d’un fichier CSV brut contenant des informations détaillées sur les vœux d’orientation des candidats.
<br/>
Ventilation de la base : normalisation du modèle relationnel en répartissant les données dans plusieurs tables cohérentes, en supprimant les redondances et en isolant les entités pertinentes (formations, régions, candidats, genre, etc.).
<br/>
Analyse statistique via requêtes SQL : rédaction de requêtes complexes pour répondre à des questions précises attribuées à chacun. Pour ma part, j’ai analysé : "Quel est le pourcentage de filles acceptées en BUT dans la région des Hauts-de-France ?"
<br/><br/>
🔍 Résultats et apprentissages :
<br/>
Grâce à mes requêtes, j’ai mis en évidence une faible représentation des filles dans les candidatures au BUT, mais un taux d’admission élevé : par exemple, sur 20 filles candidates, 18 étaient acceptées, soit 90 %.
<br/>
Présentation orale de l’analyse devant un professeur de base de données et un professeur de mathématiques, en justifiant les résultats obtenus par les données et en expliquant la logique statistique sous-jacente.

<br/><br/>
🧠 Ce que j’ai appris :
<br/>
Maîtrise de l’import et de la gestion de données massives avec PostgreSQL.
<br/>
Réflexion sur la structure des données (modèle relationnel, ventilation).
<br/>
Formulation de requêtes SQL complexes (agrégation, filtrage, jointures).
<br/>
Interprétation et restitution claire de résultats chiffrés en public, avec un discours à la fois technique et accessible.
<br/><br/>
Ce projet m’a permis de mieux comprendre le lien entre la modélisation de données, la recherche d’information pertinente et la prise de décision basée sur des faits.`,
		},
		{
			name: `💬 Messagerie en ligne sécurisée`,
			slug: `iut-messagerie`,
			background_image: 'img/cours/intelliMessage.png',
			date: `Semestre 4`,
			perso: false,
			screens: [],
			technologies: [
				'Java (Servlets, JSP)',
				'MVC',
				'PostgreSQL',
				'API REST',
				'sécurité (SQL/XML injection)',
				'gestion de fichiers',
				'chiffrement',
			],
			description: `Ce projet académique consistait à développer une plateforme de messagerie en ligne fonctionnelle et sécurisée, en suivant l’architecture MVC. Le site offrait à ses utilisateurs une expérience complète de communication, avec une interface personnalisable et une gestion centralisée des données via une base PostgreSQL.
<br/><br/>
✅ Fonctionnalités principales :
<br/>
Gestion des utilisateurs :
<br/>
Création de compte avec photo de profil, nom, identifiant, et mot de passe chiffré.
<br/>
Ajout et suppression d’amis.
<br/><br/>
Messagerie en temps réel :
<br/>
Échange de messages entre deux personnes ou en groupe.
<br/>
Possibilité de créer des groupes, renommer, gérer les membres.
<br/>
Envoi de messages texte et d’images.
<br/><br/>
Pages complémentaires :
<br/>
Accès à des contenus dynamiques : infos du jour, résultats sportifs (ex. : matchs de foot).
<br/><br/>
Base de données PostgreSQL :
<br/>
Connexion sécurisée à la base via fichiers de configuration.
<br/>
Gestion des utilisateurs, des messages, des groupes et de l’historique de communication.
<br/>
API REST pour certaines interactions (extraction ou envoi de données).
<br/><br/>
Sécurité avancée :
<br/>
Protection contre les injections SQL et XML.
<br/>
Vérification et contrôle des entrées utilisateur.
<br/>
Architecture MVC rigoureuse pour une séparation claire des responsabilités.
<br/><br/>
🧠 Ce que j’ai appris :<br/>
Conception d’une application web robuste avec Java et Servlets, en respectant le modèle MVC.
<br/>
Gestion complète d’un système de messagerie avec stockage en base de données.
<br/>
Création d’interfaces dynamiques en JSP et développement de fonctions RESTful.
<br/>
Implémentation de bonnes pratiques de sécurité : validation des données, chiffrement, prévention des injections.
<br/>
Travail d’équipe et déploiement progressif d’un projet structuré et modulaire.
<br/><br/>
Ce projet m’a permis de mettre en pratique l’ensemble des compétences web back-end et front-end acquises, dans un contexte réaliste, sécurisé et orienté utilisateur.`,
		},
		{
			name: `🕹️ Jeu multijoueur inspiré d’Agar.io`,
			slug: `iut-agario`,
			background_image: 'img/cours/agario.png',
			date: `Semestre 4`,
			perso: false,
			screens: [],
			technologies: [
				'JavaScript',
				'Node.js',
				'WebSocket',
				'canvas HTML5',
				'logique IA',
				'gestion temps réel',
			],
			description: `Dans ce projet scolaire, nous avons développé une version personnalisée d’un jeu type Agar.io, jouable en ligne via un simple navigateur. L’objectif était de créer un environnement multijoueur fluide, avec des mécanismes de jeu équilibrés, une interface dynamique et une IA maison pour les bots.
<br/><br/>
✅ Fonctionnalités clés :
<br/>
Connexion rapide :
<br/>
Page de connexion simplifiée avec seulement un surnom à entrer.
<br/>
Gestion du nombre de joueurs pour éviter la surcharge de la carte.
<br/><br/>
Mécanique de jeu :
<br/>
Carte fermée avec rebords infranchissables.
<br/>
Mouvements fluides des joueurs sur le canvas HTML5.
<br/>
Système d'invincibilité temporaire au spawn pour éviter le "spawn kill".
<br/><br/>
Intelligence Artificielle (bots) :
<br/>
Déplacement autonome vers la nourriture.
<br/>
Détection des menaces : les bots fuient les joueurs plus gros.
<br/>
IA codée par nos soins, équilibrée et stratégique.
<br/><br/>
Classements dynamiques :
<br/>
Leaderboard en temps réel dans le jeu :
<br/>
Joueur en rouge.
<br/>
Premier joueur en or.
<br/>
Leaderboard global (records toutes parties confondues).
<br/><br/>
Système de bonus :
<br/>
Apparition aléatoire de bonus spéciaux sur la map.
<br/>
Effets variés pour dynamiser les parties.
<br/><br/>
🧠 Ce que j’ai appris :
<br/>
Utilisation de Node.js et WebSocket pour gérer des communications en temps réel entre les clients et le serveur.
<br/>
Gestion efficace de la logique de jeu côté serveur (position, collision, états).
<br/>
Développement d’une IA basique mais fonctionnelle pour simuler un comportement réaliste des bots.
<br/>
Maîtrise du canvas HTML5 pour l'affichage graphique du jeu.
<br/>
Optimisation du gameplay pour garantir une expérience fluide et équilibrée.
<br/><br/>
Ce projet m’a permis d’explorer à la fois la programmation orientée jeu, le temps réel, et les algorithmes d’intelligence de base, tout en mettant en place une structure serveur-client robuste.`,
		},
		{
			name: `🤝 Plateforme d’entraide`,
			slug: `perso-entraide`,
			background_image: 'img/perso/entraide.png',
			date: `mai 2025 - en cours`,
			perso: true,
			screens: [],
			technologies: [
				'React',
				'TypeScript',
				'Material UI (MUI)',
				'jsonServer (mock backend)',
			],
			description: `Dans ce projet personnel, j’ai imaginé et développé une plateforme d’entraide entre particuliers, permettant aux utilisateurs de proposer ou de demander de l’aide dans différents domaines (plomberie, jardinage, etc.). Ce projet m’a permis de découvrir React et d’approfondir TypeScript ainsi que l’architecture frontend-backend via un serveur simulé.
<br/><br/>
✅ Fonctionnalités principales :
<br/>
Authentification simple :
<br/>
Page de connexion pour identifier les utilisateurs.
<br/><br/>
Création et gestion de demandes d’aide :
<br/>
Formulaire complet : tâche, durée, titre, description.
<br/>
Affichage des demandes créées, avec possibilité de suppression.
<br/><br/>
Interaction entre utilisateurs :
<br/>
Affichage des demandes publiques.
<br/>
Possibilité de proposer son aide : cela génère automatiquement un groupe entre les deux utilisateurs.
<br/><br/>
Messagerie intégrée :
<br/>
Tchat direct dans chaque groupe créé.
<br/>
Modification du titre du groupe possible pour personnaliser la discussion.
<br/><br/>
Interface utilisateur moderne :
<br/>
Utilisation de Material UI pour une UX propre, fluide et responsive.
<br/><br/>
Simulation du backend :
<br/>
Stockage, récupération et mise à jour des données via jsonServer, pour simuler un serveur RESTful local.
<br/><br/>
🧠 Ce que j’ai appris :
<br/>
Découverte et mise en œuvre de React avec TypeScript dans un projet complet.
<br/>
Utilisation de MUI pour créer une interface professionnelle et agréable à utiliser.
<br/>
Mise en place d’une architecture composants + services côté client.
<br/>
Simulation d’un backend REST pour tester les interactions en conditions proches de la réalité.
<br/>
Réflexion UX : comment guider l’utilisateur dans un parcours fluide et simple d'entraide.
<br/><br/>
Ce projet m’a permis d’avoir une première expérience concrète en développement frontend moderne, en concevant une application utile de A à Z avec une logique utilisateur claire et fonctionnelle.`,
		},
		{
			name: `🎲 Jeu multijoueur inspiré de Monopoly`,
			slug: `perso-monopoly`,
			background_image: 'img/perso/monopoly.png',
			date: `juin 2025 - en cours`,
			perso: true,
			screens: [],
			technologies: ['React', 'MUI', 'TypeScript', 'JavaScript', 'Node.js'],
			description: `Ce projet personnel consistait à recréer un jeu de société en ligne type Monopoly, jouable entre amis ou spectateurs via un navigateur. L’objectif était de gérer l’ensemble des mécaniques de jeu, la configuration de partie, les interactions joueur-plateau, et l’aspect multijoueur dans une interface moderne.
<br/><br/>
✅ Fonctionnalités principales :
<br/>
Connexion rapide :
<br/>
Page d’entrée avec simple choix d’un nom d’utilisateur.
<br/><br/>
Configuration de la partie :
<br/>
Sélection de la couleur du joueur.
<br/>
Définition des règles personnalisées : nombre de joueurs max, montant d'argent de départ, etc.
<br/><br/>
Gestion des joueurs et spectateurs :
<br/>
Système de file d’attente : si la partie est pleine ou déjà en cours, les nouveaux arrivants deviennent spectateurs.
<br/><br/>
Plateau de jeu interactif :
<br/>
Affichage du tableau de jeu avec les positions actualisées en temps réel.
<br/>
Lancer de dés, déplacements, gestion des tours.
<br/>
Logique de jeu fidèle à l’esprit Monopoly (déplacements, achats à venir, interactions).
<br/><br/>
Interface utilisateur moderne :
<br/>
Développée avec React + MUI pour une expérience fluide et responsive.
<br/>
Back-end Node.js :
<br/>
Gestion des connexions, des parties, des règles, et de l’état du jeu.
<br/>
Communication client-serveur en temps réel (via WebSocket ou autre).
<br/><br/>
🧠 Ce que j’ai appris :
<br/>
Construction d’un jeu multijoueur structuré avec une gestion complète du cycle de jeu.
<br/>
Utilisation avancée de React avec TypeScript et Material UI pour une UI claire et interactive.
<br/>
Développement côté serveur avec Node.js pour gérer les sessions, les utilisateurs, et la logique métier.
<br/>
Conception d’un système fluide de gestion de rôles (joueur/spectateur).
<br/>
Coordination entre front-end et back-end dans un environnement dynamique.
<br/><br/>
Ce projet m’a permis de mettre en pratique des notions complexes de temps réel, logique de jeu, configuration dynamique et de proposer une interface conviviale pour un jeu de société en ligne.`,
		},
	];

	constructor(element, xp) {
		super(element);
		this.experience = xp;
	}

	show(slug) {
		const tous = this.experience === 'experiences' ? 'Toutes' : 'Tous';
		const detail =
			this.experiences.find(xp => xp.slug === slug) ||
			this.projets.find(xp => xp.slug === slug);
		super.show();
		let html = '';
		let screenshots = '';
		html += `<div class="backgroundImage">
					<img src=${detail.background_image} />
				</div>
				<header>
					<div class="breadcrumb">
						<a href="/${this.experience}">${tous} les ${this.experience}</a>
						&gt;
						<a href="#" class="currentGameLink">${detail.name}</a>
					</div>
					<h2>
						<span class="name">${detail.name}</span>
					</h2>
				</header>
				<section class="content">
					<div class="infos">
						<p class="label">Date :</p>
						<time datetime="${detail.date}">${detail.date}</time>
						<div class="technologies"></div>
						<p class="label">Lien Git :</p>
						<a class="website" href="${detail.git}">${detail.git}</a>
					</div>
		</section>
		<section class="description">
			<p class="justify">${detail.description}</p>
		</section>
		<div class="screenshots"></div>`;
		this.element.innerHTML = html;
		if (detail.technologies) {
			let techno = '<p class="label">Technologies utilisées:</p><ul>';
			detail.technologies.forEach(tech => (techno += `<li>${tech}</li>`));
			techno += '</ul>';
			this.element.querySelector('.technologies').innerHTML = techno;
		}
		this.element
			.querySelector('.breadcrumb a')
			.addEventListener('click', event => {
				event.preventDefault();
				Router.navigate(`/${this.experience}`);
			});
		detail.screens.forEach(
			screen => (screenshots += `<a href="${screen}"><img src="${screen}"></a>`)
		);
		this.element.querySelector('.screenshots').innerHTML = screenshots;
	}
}
