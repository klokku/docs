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
            social: [
                {icon: 'github', label: 'GitHub', href: 'https://github.com/klokku/klokku'},
                {icon: 'discord', label: 'Discord', href: 'https://discord.gg/RXU78auck'},
            ],
            sidebar: [
                {
                    label: "Home",
                    slug: "",
                },
                {
                    label: 'Getting started',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {label: 'What is Klokku', slug: 'getting-started/what-is-klokku'},
                        {label: 'Documentation', slug: 'getting-started/documentation'},
                        {label: 'Installation', slug: 'getting-started/installation'},
                        {label: 'First steps', slug: 'getting-started/first-steps'},
                    ]
                },
                {
                    label: 'Automations',
                    items: [
                        {label: 'Overview', slug: 'automations/overview'},
                        {label: 'Automate (Android)', slug: 'automations/android-automate'},
                    ]
                },
                {
                    label: 'Integrations',
                    items: [
                        {label: 'Home Assistant', slug: 'integrations/home-assistant-integration'},
                        {label: 'Garmin Watch App', slug: 'integrations/garmin-watch-app'},
                        {label: 'MacOS Menubar App', slug: 'integrations/macos-menubar-app'},
                        {label: 'ClickUp', slug: 'integrations/clickup-integration'},
                        {label: 'Incoming Webhooks', slug: 'integrations/incoming-webhooks'},
                        {label: 'Google Calendar', slug: 'integrations/google-calendar'},
                    ]
                }
            ],
            customCss: [
                './src/styles/custom.css'
            ]
        }),
    ],
});
