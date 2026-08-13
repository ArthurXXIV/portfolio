/* ------------------------------------------------------------------------
   Table of contents for site content.

   Nothing is written here any more. Each section of the page owns its own
   file, listed below, and this module just re-exports them so components can
   keep importing from one place.

   To change copy, open the file for that section:

     opening.ts     the "Hi, I'm" block: name, role, availability, links
     navigation.ts  which sections exist and what order they appear in
     experience.ts  jobs and internships
     projects.ts    projects and publications
     education.ts   degrees, coursework, clubs
     skills.ts      the skill chip groups
     about.ts       the ten-card deck, plus the hero stat tiles
     contact.ts     the contact section
   ------------------------------------------------------------------------ */

export { profile } from './opening';
export { sections } from './navigation';
export { experience } from './experience';
export { projects } from './projects';
export { education } from './education';
export { skills } from './skills';
export { about } from './about';
export { contact } from './contact';
