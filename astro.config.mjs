import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'

export default defineConfig({
	integrations: [
		starlight({
			title: 'Vanillacraft\'s little book',
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
					label: 'Staff team',
					collapsed: true,
					items: [
						'staff',
						'staff/apply',
						'staff/report',
						{
							label: 'Meet the staff team',
							collapsed: true,
							items: [
								'staff/dylancode',
								'staff/bozbozza',
								'staff/bluemitted',
								'staff/potatoesrcool1',
								'staff/firebeagle',
								'staff/ravexmc',
								'staff/pwotonic',
								'staff/syndreaaa',
								'staff/whosnoir',
								'staff/noway101',
							],
						},
					],
				},
				{
					label: 'Tickets',
					collapsed: true,
					items: [
						'ticket/create',
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
