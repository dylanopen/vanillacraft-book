import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'

export default defineConfig({
	integrations: [
		starlight({
			title: 'The little handbook for Vanillacraft',
			social: [
				{ icon: 'external', label: 'Vanillacraft website', href: 'https://vanillacraft.org' },
				{ icon: 'discord', label: 'Join our discord!', href: 'https://discord.gg/EFygPtvrvn' },
				{ icon: 'email', label: 'Send us an email', href: 'mailto:info@vanillacraft.org' },
			],
			plugins: [
				starlightCatppuccin(),
			],
			sidebar: [
				'',
				{
					label: 'Rules',
					collapsed: true,
					items: [
						'rules',
						'rules/respect',
						'rules/griefing',
						'rules/stealing',
						'rules/pvp',
						'rules/mods',
						'rules/chat',
						'rules/advertising',
						'rules/inviting',
					],
				},
				{
					label: 'Joining Vanillacraft',
					collapsed: true,
					items: [
						'join',
						'join/discord',
						'join/link',
						'join/minecraft',
						'join/tour',
					],
				},
				{
					label: 'Writing a great application',
					collapsed: true,
					items: [
						'application/guidelines',
						'application/ideas',
					],
				},
				{
					label: 'Tickets',
					collapsed: true,
					items: [

					],
				},
				{
					label: 'Market',
					collapsed: true,
					items: [

					]
				},
			],
		}),
	],
});
