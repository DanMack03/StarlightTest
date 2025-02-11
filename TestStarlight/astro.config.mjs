// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			logo: {
				src: './src/assets/logo-d.png',
			},
			title: 'Probando Starlight',
			customCss: [
            './src/styles/estilos.css',
            ],
			social: {
				github: 'https://github.com/DanMack03/StarlightTest',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Páginas',
					autogenerate: { directory: 'paginas' },
				},
			],
		}),
	],
});
