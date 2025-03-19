// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://klokku.com',
    base: "/docs",
    integrations: [
        starlight({
            logo: {
                light: '/public/logo.svg',
                dark: '/public/logo-dark.svg',
                alt: 'Klokku Logo',
            },
            title: 'Docs',
            social: {
                github: 'https://github.com/klokku/klokku',
                discord: 'https://discord.gg/RXU78auck',
            },
            sidebar: [
                {
                    label: "Home",
                    slug: ""
                },
                {
                    label: 'Getting started',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {label: 'What is Klokku', slug: 'getting-started/what-is-klokku'},
                        {label: 'Installation', slug: 'getting-started/installation'},
                    ]
                },
            ],
            customCss: [
                './src/styles/custom.css'
            ]
        }),
    ],
});
