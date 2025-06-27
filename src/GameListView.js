import renderGameThumbnail from './renderGameThumbnail.js';
import Router from './Router.js';
import View from './View.js';

export default class GameListView extends View {
	info = true;
	non_info = true;
	perso = true;
	scolaire = true;
	experience;
	experiences = [
		{
			name: 'Développeur web stagiaire',
			slug: `stage-but-kissthebride`,
			background_image:
				'https://cdn.slidesharecdn.com/ss_thumbnails/kissthebride-presentation-commerciale2018vfrslideshare-181029080558-thumbnail.jpg?width=640&height=640&fit=bounds',
			date: 'Avril à Juin 2025',
			info: true,
		},
		{
			name: 'Employé polyvalent Quick',
			slug: `job-été-quick`,
			background_image:
				'https://ac-franchise.com/wp-content/uploads/2017/01/19/20170119145334-8bd959c563041f3dcbdfd339036eace5.jpg',
			date: 'Eté 2024',
			info: false,
		},
		{
			name: 'Restauration avec la Mairie de Wattrelos',
			slug: `job-été-mairie-wattrelos`,
			background_image:
				'https://pro.solution-rendez-vous.com/ville-wattrelos/rendez-vous/ressources/upload/images/wattrelos.jpg',
			date: 'Juillet 2023',
			info: false,
		},
		{
			name: 'Stage chez Sarbacane Software',
			slug: `stage-lycée-sarbacane`,
			background_image:
				'https://salesdorado.com/wp-content/uploads/2022/11/sarbacane-cover.jpg',
			date: 'Février 2021',
			info: true,
		},
	];

	projets = [
		{
			name: `Classifiaction`,
			slug: `iut-classifiacation`,
			background_image: 'img/cours/classification.png',
			date: `Semestre 3`,
			perso: false,
		},
		{
			name: `Exploitation d'une BDD`,
			slug: `iut-bdd`,
			background_image: 'img/cours/bdd.png',
			date: `Semestre 2`,
			perso: false,
		},
		{
			name: `Création d'une messagerie en ligne`,
			slug: `iut-messagerie`,
			background_image: 'img/cours/intelliMessage.png',
			date: `Semestre 4`,
			perso: false,
		},
		{
			name: `Jeu type Agario`,
			slug: `iut-agario`,
			background_image: 'img/cours/agario.png',
			date: `Semestre 4`,
			perso: false,
		},
		{
			name: `Site d'entraide`,
			slug: `perso-entraide`,
			background_image: 'img/perso/entraide.png',
			date: `mai 2025 - en cours`,
			perso: true,
		},
		{
			name: `Jeu type Monopoly`,
			slug: `perso-monopoly`,
			background_image: 'img/perso/monopoly.png',
			date: `juin 2025 - en cours`,
			perso: true,
		},
	];
	constructor(element, xp) {
		super(element);
		this.experience = xp;
	}

	show() {
		super.show();
		// affichage initial de la liste des jeux
		this.renderGameList();
	}

	handleDetail(event) {
		event.preventDefault();
		console.log('Navigating to:', event.currentTarget.getAttribute('href'));
		Router.navigate(event.currentTarget.getAttribute('href'));
	}

	handleFilter(event) {
		event.preventDefault();
		const btn = event.target.getAttribute('class');
		if (btn.startsWith('perso')) {
			if (this.perso === true && this.scolaire === true) {
				this.scolaire = false;
			} else if (this.perso === true) {
				this.scolaire = true;
			} else {
				this.perso = true;
				this.scolaire = false;
			}
		} else if (btn.startsWith('scolaire')) {
			if (this.perso === true && this.scolaire === true) {
				this.perso = false;
			} else if (this.scolaire === true) {
				this.perso = true;
			} else {
				this.scolaire = true;
				this.perso = false;
			}
		} else if (btn.startsWith('info')) {
			if (this.info === true && this.non_info === true) {
				this.non_info = false;
			} else if (this.info === true) {
				this.non_info = true;
			} else {
				this.info = true;
				this.non_info = false;
			}
		} else if (btn.startsWith('non-info')) {
			if (this.info === true && this.non_info === true) {
				this.info = false;
			} else if (this.non_info === true) {
				this.info = true;
			} else {
				this.non_info = true;
				this.info = false;
			}
		} else if (btn === 'reset') {
			this.info = true;
			this.non_info = true;
			this.perso = true;
			this.scolaire = true;
		}
		this.show();
	}

	/**
	 * Méthode d'affichage de la liste des jeux.
	 * Utilisée :
	 * - au chargement de la page pour l'affichage initial
	 * - et à chaque fois qu'on soumet le formulaire de recherche
	 * @param {string} search chaîne de caractère recherchée dans le nom des jeux
	 * @param {string} ordering ordre d'affichage des résultats
	 */
	renderGameList() {
		let html = ``;
		if (this.experience === 'experience') {
			html += `<button class="info ${this.info && !this.non_info ? 'active' : ''}">Informatique</button>
					<button class="non-info ${this.non_info && !this.info ? 'active' : ''}">Non-informatique</button>
					<button class="reset" ${this.info === true && this.non_info === true ? "style = 'display: none'" : ''}>X</button>`;
			this.experiences.forEach(xp =>
				(xp.info === true && this.info === true) ||
				(xp.info === false && this.non_info === true)
					? (html += renderGameThumbnail(xp, this.experience))
					: (html += '')
			);
		} else if (this.experience === 'projet') {
			html += `<button class="perso ${this.perso && !this.scolaire ? 'active' : ''}">Perso</button>
					<button class="scolaire ${this.scolaire && !this.perso ? 'active' : ''}">Scolaire</button>
					<button class="reset" ${this.perso === true && this.scolaire === true ? "style = 'display: none'" : ''}>X</button>`;
			this.projets.forEach(projet =>
				(projet.perso === true && this.perso === true) ||
				(projet.perso === false && this.scolaire === true)
					? (html += renderGameThumbnail(projet, this.experience))
					: (html += '')
			);
		}
		this.element.querySelector('.results').innerHTML = html;
		this.element.querySelectorAll('.results a').forEach(link => {
			link.addEventListener('click', event => this.handleDetail(event));
		});
		this.element.querySelectorAll('button').forEach(btn => {
			btn.addEventListener('click', event => this.handleFilter(event));
		});
	}
}
