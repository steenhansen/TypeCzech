/* eslint-disable */

//  node type-czech-off.js

// 100,000 loops
//   Type-Czech all calls == 4351ms
//   Turn off Type-Czech == 49ms
//     Remove Type-Czech == 50ms

// 1,000,000 loops
//   Type-Czech all calls == 42848ms
//   Turn off Type-Czech == 447ms
//     Remove Type-Czech == 447ms

// 10,000,000 loops
//   Type-Czech all calls == 424s
//   Turn off Type-Czech == 4432ms
//     Remove Type-Czech == 4427ms

// 100,000,000 loops
//   Turn off Type-Czech == 44717ms
//     Remove Type-Czech == 44422ms

const use_type_czech = false;

let type_czech;
if (use_type_czech) {
  const { TypeCzech } = require('../TypeCzech.js');
  type_czech = TypeCzech('LOG-ERRORS');
} else {
  type_czech = { link: (_) => _, is_active: false };
}

const LOTTERY_SIGNATURE = ['String', ['Number'], 'Date'];
function PRE_aLottery(lottery_name, lucky_numbers, draw_date) {
  type_issue = type_czech.check_type(arguments, LOTTERY_SIGNATURE);
  if (type_issue) return type_issue;
  return type_czech.check_variadicEmpty(arguments, ['EMPTY-ERROR']);
}

aLottery = type_czech.link(aLottery, PRE_aLottery);

///////////////////////////////////////////////////

function aLottery(lottery_name, lucky_numbers, draw_date) {}

var start = new Date();

for (let i = 0; i < 100000000; i++) {
  var a_lottery = aLottery('the-lottery', [1,2,3,4,5,6,7], new Date('jun 14 1999'));
}

var end = new Date() - start;

console.log(`Run took ${end} ms`);

