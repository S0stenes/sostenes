// ─────────────────────────────────────────────────────────────
//  Conteúdo do portfólio. Edite aqui — os componentes leem daqui.
//
//  As imagens são importadas de src/assets/ para o Astro otimizá-las
//  no build (converte para WebP, gera as dimensões certas e evita
//  layout shift). Imagens em public/ não passam por esse tratamento.
// ─────────────────────────────────────────────────────────────

import heroMountains from '../assets/hero-mountains.png';
import profilePhoto from '../assets/profile.png';
import ifesLogo from '../assets/ifes-logo.png';
import shotMavie from '../assets/projects/mavie.jpg';
import shotYerus from '../assets/projects/yerus.jpg';
import shotCdr from '../assets/projects/cdr-retiro.jpg';
import shotCasaNoronha from '../assets/projects/casa-noronha.jpg';

import type { ImageMetadata } from 'astro';

export const site = {
	url: 'https://sosteness.netlify.app',
	name: 'Sóstenes Santana Santos',
	shortName: 'Sóstenes',
	title: 'Sóstenes Santana Santos — Full-Stack Developer',
	description:
		'Portfolio of Sóstenes Santana Santos, Full-Stack Developer trained at the Federal Institute of Espírito Santo (IFES).',
} as const;

export const nav = [
	{ label: 'Home', href: '#home' },
	{ label: 'Portfolio', href: '#portfolio' },
	{ label: 'Contact', href: '#contact' },
] as const;

export const hero = {
	greeting: 'Hi there!!',
	intro: 'My name is Sóstenes Santana Santos',
	photo: profilePhoto,
	photoAlt: 'Sóstenes Santana Santos',
	background: heroMountains,
} as const;

export const about = {
	text: "I'm a Full-Stack Developer (Front-End & Back-End) trained at the Federal Institute of Espírito Santo (IFES) - Cachoeiro de Itapemirim Campus, and certification in Computer Support and Maintenance from IFES - Colatina Campus.",
	logo: ifesLogo,
	logoAlt: 'Instituto Federal do Espírito Santo',
} as const;

export const skills = {
	title: 'Languages & Frameworks',
	groups: [
		{
			label: 'Front-End Development:',
			items: [
				'Core: HTML5, CSS3, JavaScript',
				'CSS Frameworks: Tailwind CSS',
				'Static Site Generators: Astro.js',
				'CMS: WordPress',
			],
		},
		{
			label: 'Back-End Development:',
			items: ['Server-Side: PHP, Node.js'],
		},
	],
} as const;

export type Project = {
	name: string;
	image: ImageMetadata;
	url: string;
	/** descreve o projeto — vira o texto alternativo da imagem e a legenda */
	summary: string;
	/** lado da imagem: 'left' | 'right' — alterna o layout, como no design */
	side: 'left' | 'right';
};

export const projects: readonly Project[] = [
	{
		name: 'Mavie Acessórios',
		url: 'https://maviecolatina.netlify.app/',
		summary: 'Loja de moda feminina em Colatina (ES) — bolsas, semijoias e perfumes.',
		image: shotMavie,
		side: 'left',
	},
	{
		name: 'Yerus',
		url: 'https://yerus.com.br/',
		summary: 'Agência de marketing digital — audiovisual, tráfego pago e desenvolvimento web.',
		image: shotYerus,
		side: 'right',
	},
	{
		name: 'Retiro Unidos — CDR',
		url: 'https://cdr-retiro.netlify.app/',
		summary: 'Cronograma de retiro com contagem regressiva, checklist e exportação em PDF.',
		image: shotCdr,
		side: 'left',
	},
	{
		name: 'Casa Noronha',
		url: 'https://casa-noronha.netlify.app/',
		summary: 'Indústria de saneantes em Colatina (ES) — venda exclusiva no atacado.',
		image: shotCasaNoronha,
		side: 'right',
	},
];

export type Social = { label: string; href: string; icon: 'github' | 'x' | 'instagram' | 'linkedin' };

export const socials: readonly Social[] = [
	{ label: 'GitHub', href: 'https://github.com/S0stenes', icon: 'github' },
	{ label: 'X', href: 'https://x.com/S0stenesSan', icon: 'x' },
	{ label: 'Instagram', href: 'https://www.instagram.com/sostenes03/', icon: 'instagram' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/s0stenes/', icon: 'linkedin' },
];

export const footer = {
	text: 'Copyright© 2026 Sóstenes Santana',
} as const;
