export default function renderGameThumbnail(
	{ name, slug, background_image, date, info, perso },
	xp
) {
	return `<a href="/${xp}-${slug}">
				<img src="${background_image}" />
				<footer>
					<h3>${name}</h3>
					<div class="infos">
						<time datetime="${date}">${date}</time>
						${xp === 'experience' ? `<span class="info">${info === true ? '<i class="bi bi-pc-display"></i>' : ''}</span>` : `<span class="perso">${perso === true ? '<i class="bi bi-pc-display"></i>' : '<i class="bi bi-backpack"></i>'}</span>`}
					</div>
				</footer>
			</a>`;
}
