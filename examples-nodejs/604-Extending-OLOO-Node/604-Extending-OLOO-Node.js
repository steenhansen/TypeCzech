/* eslint-disable */

//  node --trace-uncaught 604-Extending-OLOO-Node.js

const use_type_czech = true;

/**/  let type_czech;
/**/  if (use_type_czech) {
/**/    const { TypeCzech } = require('../../TypeCzech.js');
/**/    type_czech = TypeCzech('LOG-ERRORS');
/**/  } else {
/**/    type_czech = { link: (_) => _, isActive: (x) => false };
/**/  }

const First = require('./First.js')(type_czech);
 const Last = require('./Last.js')(type_czech, First);
 const Full = require('./Full.js')(type_czech, Last);

const ted_chiang = Full('Mr', 'Ted', 'Chiang');

ted_chiang.firstMethod(new Date(2008, 10, 15));
ted_chiang.lastMethod(2009);
ted_chiang.fullMethod('Exhalation');
ted_chiang.showName();
