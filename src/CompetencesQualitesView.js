import View from './View.js';

export default class CompetencesQualitesView extends View {
	competence;
	competences = [
		{
			img: `img/competences/java.png`,
			title: `Java/J2EE`,
			texte: `Expérience solide acquise à travers plusieurs projets scolaires : traitement de données, interface graphique interactive avec JavaFX, structuration MVC, calculs algorithmiques, et mise en place de fonctionnalités orientées utilisateur. Utilisation de J2EE pour la création de servlets, JSP et interactions avec des bases de données.`,
		},
		{
			img: `img/competences/php.png`,
			title: `PHP`,
			texte: `Découvert et utilisé directement en environnement professionnel lors d’un stage. Participation à des projets concrets avec création de pages web dynamiques, gestion des droits utilisateurs, génération de graphiques, et export de données. Utilisation de Symfony, Twig et intégration avec des bases PostgreSQL dans des conditions réelles de production.`,
		},
		{
			img: `img/competences/sql.png`,
			title: `SQL (postgreSQL)`,
			texte: `Utilisé à la fois en cours, dans plusieurs projets, et en environnement professionnel. Expérience dans l’import de données via CSV, ventilation dans différentes tables, conception de schémas relationnels, gestion des jointures et requêtes complexes. Utilisé pour stocker et manipuler des données liées à la messagerie, aux connexions, aux groupes, ou encore aux statistiques métiers.`,
		},
		{
			img: `img/competences/js.png`,
			title: `JS/TS`,
			texte: `Utilisé dans plusieurs projets scolaires et personnels pour créer des interfaces interactives et des jeux dynamiques. Expérience approfondie en React avec TypeScript, et découverte de bonnes pratiques lors d’un stage professionnel. Utilisé pour manipuler le DOM, gérer des événements temps réel, interagir avec des APIs et assurer une meilleure fiabilité du code grâce au typage fort.`,
		},
		{
			img: `img/competences/html.png`,
			title: `HTML/CSS`,
			texte: `Base de toutes mes interfaces, utilisées dans tous mes projets, qu’ils soient personnels, scolaires ou en entreprise. Maîtrise de la structuration sémantique des pages, du responsive design, et des animations simples. Intégration fluide avec des frameworks comme Bootstrap ou des composants React pour un rendu propre et moderne.`,
		},
	];

	frameworks = [
		{
			img: `img/competences/bootstrap.png`,
			title: `Bootstrap`,
			texte: `Utilisé pour accélérer le développement d’interfaces responsives et harmonieuses. Intégré dans plusieurs projets web pour structurer rapidement des pages, gérer les grilles, les composants interactifs et assurer une bonne compatibilité multi-supports. Souvent combiné avec HTML/CSS et React pour gagner en efficacité.`,
		},
		{
			img: `img/competences/react.png`,
			title: `React/MUI`,
			texte: `Découvert en stage puis approfondi à travers des projets personnels. Utilisé pour créer des interfaces modernes, dynamiques et modulaires. MUI m’a permis de gagner du temps sur le design tout en gardant une cohérence visuelle. Mise en place de composants réutilisables, gestion des états, et interactions fluides avec le backend via des appels API.`,
		},
		{
			img: `img/competences/docker.png`,
			title: `Docker/Podman`,
			texte: `Utilisé en stage pour la mise en place d’un environnement de monitoring complet. Conteneurisation d’applications (Prometheus, Grafana, Jaeger...), configuration des services et orchestration de leur interaction. Docker m’a permis de comprendre l’importance de l’isolement, de la portabilité des environnements et de la reproductibilité des déploiements.`,
		},
		{
			img: `img/competences/symfony.png`,
			title: `Symfony`,
			texte: `Découvert en entreprise, utilisé dans un contexte professionnel pour créer des pages dynamiques, sécurisées et bien structurées. Intégration avec Twig, gestion des routes, contrôleurs, formulaires et accès aux données via Doctrine. Symfony m’a permis de développer des outils fiables, performants et conformes aux standards du web moderne.`,
		},
		{
			img: `img/competences/node.png`,
			title: `Node.js`,
			texte: `Utilisé dans plusieurs projets web et jeux en temps réel. Mise en place de serveurs backend simples, gestion des connexions utilisateurs, échanges en direct, logique de jeu et synchronisation des données. Node.js m’a permis de mieux comprendre le fonctionnement d’un backend JavaScript, notamment en lien avec WebSocket, Express et la gestion des événements.`,
		},
		{
			img: `img/competences/git.png`,
			title: `Git/Gitlab`,
			texte: `Outil de gestion de versions décentralisé, utilisé pour suivre les modifications du code et collaborer efficacement en équipe. J’ai principalement travaillé avec GitLab, que ce soit en contexte académique ou professionnel, pour gérer les branches, les merges, et assurer un suivi clair des projets.`,
		},
	];

	methodologies = [
		{
			img: ``,
			title: `Agilité/Scrum`,
			texte: `Appliqué dans mes projets scolaires, en travaillant en sprints avec une organisation régulière des réunions d’équipe (stand-ups, rétrospectives) pour améliorer la collaboration et adapter rapidement le travail aux besoins.`,
		},
		{
			img: ``,
			title: `REST`,
			texte: `Réalisation de projets utilisant des API RESTful, notamment la création d’API renvoyant des données au format JSON ou XML, permettant une communication claire et standardisée entre client et serveur.`,
		},
	];

	qualites = [
		{
			img: `https://www.preparationphysiquefootball.com/images/blog/Peut-on-ameliorer-la-cohesion-de-groupe-par-le-travail-physique.jpg`,
			title: `Esprit d'equipe`,
			texte: `J'ai fait du foot pendant 10 ans, réalisé des projets en equipe et travailler dans quelques entreprises où le collectif est primordial`,
		},
		{
			img: `img/qualites/image.png`,
			title: `Gestion du stress`,
			texte: `Le fait d'avoir travailler en restauration m'a permis de gérer le stress notament avec les rush du midi et du soir, gérer les clients...`,
		},
		{
			img: ``,
			title: `Adaptabilité`,
			texte: `Toutes les experiences que ce soit professionnelles ou personnelles m'ont permis d'apprendre à m'adapter aux différentes situations, environements de travail`,
		},
		{
			img: ``,
			title: `Autonome`,
			texte: `Oe frr jsuis autonome`,
		},
		{
			img: ``,
			title: `Ponctuel`,
			texte: `Ponctuel si jme reveille`,
		},
	];
	constructor(element, competences) {
		super(element);
		this.competence = competences === 1 ? true : false;
	}

	show() {
		super.show();
		let html = '';
		html += `<div class="row ${this.competence ? 'competences' : 'qualites'} text-center">`;
		if (this.competence) {
			this.competences.forEach(competence => {
				html += `
				<div class="col-lg-6">
					<a href="${competence.img}" target="_blank" class="card border-0 text-dark">
						<img class="card-img-top" src="${competence.img}" height="100%" width="90%">
						<span class="card-body">
							<h4 class="title mt-4">${competence.title}</h4>
							<p class="xs-font">${competence.texte}</p>
						</span>
					</a>
				</div>
			`;
			});
			html += `</div>
			<h2>Frameworks & Outils</h2>
			<div class="row frameworks text-center">`;
			this.frameworks.forEach(framework => {
				html += `
				<div class="col-lg-6">
					<a href="${framework.img}" target="_blank" class="card border-0 text-dark">
						<img class="card-img-top" src="${framework.img}" height="100%" width="90%">
						<span class="card-body">
							<h4 class="title mt-4">${framework.title}</h4>
							<p class="xs-font">${framework.texte}</p>
						</span>
					</a>
				</div>
			`;
			});
			html += `</div>
			<h2>Méthodologies</h2>
			<div class="row methodologies text-center">`;
			this.methodologies.forEach(methodologie => {
				html += `
				<div class="col-lg-6">
					<a href="${methodologie.img}" target="_blank" class="card border-0 text-dark">
						<img class="card-img-top" src="${methodologie.img}" height="100%" width="90%">
						<span class="card-body">
							<h4 class="title mt-4">${methodologie.title}</h4>
							<p class="xs-font">${methodologie.texte}</p>
						</span>
					</a>
				</div>
			`;
			});
			html += `</div>`;
		} else {
			this.qualites.forEach(qualite => {
				html += `
				<div class="col-lg-6">
					<a href="${qualite.img}" target="_blank" class="card border-0 text-dark">
						<img class="card-img-top" src="${qualite.img}" height="100%" width="90%">
						<span class="card-body">
							<h4 class="title mt-4">${qualite.title}</h4>
							<p class="xs-font">${qualite.texte}</p>
						</span>
					</a>
				</div>
			`;
			});
		}
		html += `</div>
		<style>
			.competencesQualites .row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.competencesQualites .row .col-lg-6 {
  flex: 0 1 calc(33.333% - 2rem);
  max-width: calc(33.333% - 2rem);
  box-sizing: border-box;
  margin-bottom: 2rem;
}
.competencesQualites .row .col-lg-6:nth-child(1):nth-last-child(2),
.competencesQualites .row .col-lg-6:nth-child(2):nth-last-child(1) {
  flex: 0 1 calc(50% - 2rem);
  max-width: calc(50% - 2rem);
}
.competencesQualites .row .col-lg-6:nth-child(4):nth-last-child(2),
.competencesQualites .row .col-lg-6:nth-child(5):nth-last-child(1) {
  flex: 0 1 calc(50% - 2rem);
  max-width: calc(50% - 2rem);
}
		</style>`;

		this.element.innerHTML = html;
	}
}
