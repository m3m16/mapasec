export type Lang = 'es' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Hero
    'hero.tagline': 'Offensive Security · HTB <span class="text-green">#845</span> Global · <span class="text-green">5</span> certs · <span class="text-green">1</span> obsesión',
    'hero.subtitle': 'Pentester especializado en explotación real. Web, mobile, Active Directory, cloud. Aquí documento lo que aprendo y lo que rompo.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',
    // Nav
    'nav.knowledge': 'Notas',
    // About
    'about.heading': 'Sobre mí',
    'about.p1': 'De administrador de sistemas a pentester ofensivo en menos de un año. No fue un cambio de carrera, fue encontrar el lado correcto de la infraestructura.',
    'about.p2': 'Actualmente en <span class="text-text">Dekra Digital & Product Solutions</span>, donde realizo pruebas de intrusión en cloud, mobile y activos corporativos. Antes gestioné la infraestructura que ahora sé cómo comprometer.',
    'about.p3': 'Lo que me diferencia no es el número de certificaciones, sino que entiendo tanto el lado del atacante como el del equipo que tiene que arreglarlo.',
    // Stats
    'stats.flags': 'Flags resueltas',
    'stats.machines': 'Máquinas comprometidas',
    'stats.certs': 'Certificaciones activas',
    // Skills
    'skills.heading': 'Habilidades',
    // Experience
    'experience.heading': 'Experiencia',
    'experience.job0.period': 'Septiembre 2025 – Presente',
    'experience.job0.location': 'Málaga, España',
    'experience.job0.task0': 'Auditorías de seguridad en infraestructuras cloud y servicios desplegados',
    'experience.job0.task1': 'Pentesting de aplicaciones móviles Android e iOS: lógica de negocio, comunicaciones, almacenamiento',
    'experience.job0.task2': 'Programa de pentesting continuo sobre activos propios bajo metodología bug bounty',
    'experience.job0.task3': 'Desarrollo de scripts avanzados de reconocimiento y automatización de superficie de ataque',
    'experience.job0.task4': 'Documentación técnica con priorización de riesgos y recomendaciones orientadas a negocio',
    'experience.job1.period': 'Septiembre 2024 – Noviembre 2024',
    'experience.job1.location': 'Jaén, España',
    'experience.job1.task0': 'Administración de reglas de firewall y switching de red (Fortinet)',
    'experience.job1.task1': 'Gestión de usuarios y grupos en Active Directory',
    'experience.job2.period': 'Marzo 2024 – Junio 2024',
    'experience.job2.location': 'Jaén, España',
    'experience.job2.task0': 'Implementación de Proxmox con mejora de rendimiento del 75%',
    'experience.job2.task1': 'Despliegue de servidor en AWS con Amazon EKS',
    'experience.job2.task2': 'Desarrollo de scripts PowerShell y Bash para automatización de sistemas',
    // Certifications
    'certs.heading': 'Certificaciones',
    // Projects
    'projects.heading': 'Proyectos',
    'projects.0.desc': 'Write-ups técnicos de máquinas y challenges de Hack The Box.',
    'projects.1.desc': '#845 global · 195 flags · 94 máquinas comprometidas. Perfil público verificable en Hack The Box.',
    'projects.2.desc': 'Scripts propios en Python y Bash para automatizar fases de reconocimiento, enumeración y descubrimiento de superficie de ataque.',
    'projects.3.desc': 'Completado el path CPTS y CWEE contra la empresa ficticia Inlanefreight. Reconocimiento avanzado, explotación, escalada de privilegios y pivoting.',
    // Knowledge
    'knowledge.heading': 'Conocimiento público',
    'knowledge.subtitle': 'Lo que aprendo, lo documento. Aquí tienes acceso directo a mis recursos técnicos.',
    'knowledge.notes.badge': 'Actualizado recientemente',
    'knowledge.notes.desc': 'Base de conocimiento técnica en constante actualización. Notas detalladas sobre web pentesting, Active Directory, mobile y herramientas ofensivas. Cubre desde SSRF y SSTI hasta GraphQL attacks, API exploitation y LDAP injection.',
    'knowledge.notes.cta': 'Abrir GitBook →',
    'knowledge.writeups.desc': 'Resoluciones detalladas de máquinas Hack The Box con metodología paso a paso. Linux, Windows, técnicas de escalada, explotación web y más. +10 máquinas documentadas.',
    'knowledge.writeups.cta': 'Ver write-ups →',
    // Duration units
    'duration.year_one': 'año',
    'duration.year_other': 'años',
    'duration.month_one': 'mes',
    'duration.month_other': 'meses',
    'duration.less': 'menos de un mes',
    // Contact
    'contact.heading': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente o necesitas una auditoría? Escríbeme.',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': '¿En qué puedo ayudarte?',
    'contact.submit': 'Enviar mensaje',
  },
  en: {
    // Hero
    'hero.tagline': 'Offensive Security · HTB <span class="text-green">#845</span> Global · <span class="text-green">5</span> certs · <span class="text-green">1</span> obsession',
    'hero.subtitle': 'Pentester specialized in real-world exploitation. Web, mobile, Active Directory, cloud. Here I document what I learn and what I break.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Contact',
    // Nav
    'nav.knowledge': 'Notes',
    // About
    'about.heading': 'About me',
    'about.p1': "From systems administrator to offensive pentester in less than a year. It wasn't a career change — it was finding the right side of the infrastructure.",
    'about.p2': 'Currently at <span class="text-text">Dekra Digital & Product Solutions</span>, where I perform penetration testing on cloud, mobile, and corporate assets. Previously I managed the infrastructure I now know how to compromise.',
    'about.p3': "What sets me apart isn't the number of certifications, but that I understand both the attacker's perspective and the team that has to fix it.",
    // Stats
    'stats.flags': 'Flags solved',
    'stats.machines': 'Machines compromised',
    'stats.certs': 'Active certifications',
    // Skills
    'skills.heading': 'Skills',
    // Experience
    'experience.heading': 'Experience',
    'experience.job0.period': 'September 2025 – Present',
    'experience.job0.location': 'Málaga, Spain',
    'experience.job0.task0': 'Security audits on cloud infrastructures and deployed services',
    'experience.job0.task1': 'Penetration testing of Android and iOS mobile apps: business logic, communications, storage',
    'experience.job0.task2': 'Continuous pentesting program on own assets under bug bounty methodology',
    'experience.job0.task3': 'Development of advanced reconnaissance scripts and attack surface automation',
    'experience.job0.task4': 'Technical documentation with risk prioritization and business-oriented recommendations',
    'experience.job1.period': 'September 2024 – November 2024',
    'experience.job1.location': 'Jaén, Spain',
    'experience.job1.task0': 'Firewall rule administration and network switching (Fortinet)',
    'experience.job1.task1': 'User and group management in Active Directory',
    'experience.job2.period': 'March 2024 – June 2024',
    'experience.job2.location': 'Jaén, Spain',
    'experience.job2.task0': 'Proxmox implementation with 75% performance improvement',
    'experience.job2.task1': 'Server deployment on AWS with Amazon EKS',
    'experience.job2.task2': 'Development of PowerShell and Bash scripts for system automation',
    // Certifications
    'certs.heading': 'Certifications',
    // Projects
    'projects.heading': 'Projects',
    'projects.0.desc': 'Technical write-ups of Hack The Box machines and challenges.',
    'projects.1.desc': '#845 global · 195 flags · 94 machines compromised. Publicly verifiable profile on Hack The Box.',
    'projects.2.desc': 'Custom Python and Bash scripts to automate reconnaissance, enumeration, and attack surface discovery phases.',
    'projects.3.desc': 'Completed CPTS and CWEE paths against the fictional company Inlanefreight. Advanced reconnaissance, exploitation, privilege escalation and pivoting.',
    // Knowledge
    'knowledge.heading': 'Public Knowledge',
    'knowledge.subtitle': 'What I learn, I document. Here you have direct access to my technical resources.',
    'knowledge.notes.badge': 'Recently updated',
    'knowledge.notes.desc': 'Technical knowledge base in constant development. Detailed notes on web pentesting, Active Directory, mobile, and offensive tools. Covers everything from SSRF and SSTI to GraphQL attacks, API exploitation, and LDAP injection.',
    'knowledge.notes.cta': 'Open GitBook →',
    'knowledge.writeups.desc': 'Detailed Hack The Box machine write-ups with step-by-step methodology. Linux, Windows, escalation techniques, web exploitation, and more. 10+ machines documented.',
    'knowledge.writeups.cta': 'View write-ups →',
    // Duration units
    'duration.year_one': 'year',
    'duration.year_other': 'years',
    'duration.month_one': 'month',
    'duration.month_other': 'months',
    'duration.less': 'less than a month',
    // Contact
    'contact.heading': 'Contact',
    'contact.subtitle': 'Have a project in mind or need an audit? Write to me.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'How can I help you?',
    'contact.submit': 'Send message',
  },
};
