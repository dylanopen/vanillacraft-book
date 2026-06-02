// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'

export default defineConfig({
	integrations: [
		starlight({
			title: 'The Vanillacraft Handbook',
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
					label: 'Joining Vanillacraft',
					badge: 'new players',
					items: [
						'join/how',
						'join/discord',
					],
				}
			],
		}),
	],
});
