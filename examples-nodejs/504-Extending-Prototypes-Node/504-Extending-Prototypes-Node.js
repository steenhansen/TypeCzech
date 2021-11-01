/* eslint-disable indent */
/* eslint-disable no-multi-spaces */
/* eslint-disable global-require */

//  node --trace-uncaught 504-Extending-Prototypes-Node.js

const use_type_czech = true;

/**/  let type_czech;
/**/  if (use_type_czech) {
/**/    const { TypeCzech } = require('../../TypeCzech.js');
/**/    type_czech = TypeCzech('LOG-ERRORS');
/**/  } else {
/**/    type_czech = { linkUp: (_) => _, isActive: (x) => false };
/**/  }

const First = require('./First.js')(type_czech);

const Last = require('./Last.js')(type_czech, First);

const Full = require('./Full.js')(type_czech, Last);

const Person = require('./Person.js')(type_czech, First, Last, Full);

const ted_chiang = Person('Mr', 'Ted', 'Chiang');

ted_chiang.firstMethod(new Date(2008, 10, 15));
ted_chiang.lastMethod(2009);
ted_chiang.fullMethod('Exhalation');
ted_chiang.showName();
