import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Experiencia',
      href: getPermalink('/homes/personal#experience'),
    },
    {
      text: 'Educación',
      href: getPermalink('/homes/personal#education'),
    },
    {
      text: 'Certificaciones',
      href: getPermalink('/homes/personal#certifications'),
    },
    {
      text: 'Proyectos',
      href: getPermalink('/homes/personal#projects'),
    },
    {
      text: 'Referencias',
      href: getPermalink('/homes/personal#references'),
    },
    {
      text: 'GitHub',
      href: 'https://github.com/KevinFalcones',
      target: '_blank',
    },
  ],
  actions: [
    {
      text: 'Contrátame',
      href: 'mailto:johvin73@gmail.com',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/KevinFalcones' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/kevinfalcones/' },
    { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:johvin73@gmail.com' },
  ],
  footNote: `
    © 2026 Kevin Falcones · Todos los derechos reservados.
  `,
};