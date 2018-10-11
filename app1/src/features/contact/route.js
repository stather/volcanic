// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  AddContactPanel,
} from './';

export default {
  path: 'contact',
  name: 'Contact',
  childRoutes: [
    { path: 'add-contact-panel', name: 'Add contact panel', component: AddContactPanel, isIndex: true },
  ],
};
