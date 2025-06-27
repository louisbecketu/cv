import View from './View.js';

export default class contactView extends View {
	constructor(element) {
		super(element);
	}

	show() {
		super.show();
		fetch('./contact.html')
			.then(response => response.text())
			.then(responseText => {
				this.showFileContent(responseText);
			});
	}

	showFileContent(html) {
		this.element.innerHTML = html;
	}
}
