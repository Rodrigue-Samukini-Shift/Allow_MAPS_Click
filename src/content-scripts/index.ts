const url = window.location.href

if (url.startsWith('https://www.google.com/search')) {
	const allImages = Array.from(document.querySelectorAll('img'))
	allImages
		.filter((img) => img.src.includes('/maps/'))
		.forEach((img) => {
			img.style.cursor = 'pointer'
			console.log(img)
			const address = img.closest('.lu_map_section')?.closest('.dirs')
				?.parentElement?.textContent
			img.addEventListener('click', (e) => {
				window.open(
					`https://www.google.fr/maps/place/${encodeURIComponent(
						address ?? ''
					)}`,
					'_blank'
				)
			})
		})
}

export {}