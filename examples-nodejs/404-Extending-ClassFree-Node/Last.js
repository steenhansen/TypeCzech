/* eslint-disable wrap-iife */
/* eslint-disable no-func-assign */
/* eslint-disable object-property-newline */
/* eslint-disable object-curly-newline */
/* eslint-disable no-class-assign */
/* eslint-disable indent */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-inner-declarations */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

module.exports = function create_Last(type_czech, First) {
  function Last(spec) {
    const { f_name, l_name } = spec;
    console.log(`CONS-Last :${f_name} ${l_name}`);
    const { firstMethod } = First(spec);
    function lastMethod(a_year) {
      console.log(`RUN -lastMethod :${a_year} ${f_name} ${l_name}`);
      return a_year;
    }
    const last_object = { firstMethod, lastMethod };
    return Object.freeze(last_object);
  }

/**/  if (type_czech.is_active) {
/**/    function PRE_Last(spec) {
/**/      console.log('PRE -Last');
/**/      const pre_last_sig = { f_name: 'String', l_name: 'String' };
/**/      const type_issue = type_czech.check_typeExtra(arguments, pre_last_sig);
/**/      if (type_issue) return type_issue;
/**/      return type_czech.check_emptyExtra(arguments, { l_name: 'EMPTY-ERROR' });
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_Last(Last) {
/**/      console.log('POST-Last');
/**/      return type_czech.check_interface(Last, { firstMethod: 'Function', lastMethod: 'Function' });
/**/    }
/**/
/**/    function PRE_lastMethod(a_year) {
/**/      console.log('PRE -lastMethod');
/**/      return type_czech.check_type(arguments, 'Number');
/**/    }
/**/
/**/    function POST_lastMethod(a_year) {
/**/      console.log('POST-lastMethod');
/**/      return type_czech.check_type(arguments, 'Number');
/**/    }
/**/
/**/    const Last_PREs = { Last: PRE_Last, lastMethod: PRE_lastMethod };
/**/    const Last_POSTs = { Last: POST_Last, lastMethod: POST_lastMethod };
/**/    Last = type_czech.link(Last, Last_PREs, Last_POSTs);
/**/  }

  return Last;
};
