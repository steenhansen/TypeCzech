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

module.exports = function create_Full(type_czech, Last) {
  class Full extends Last {
    constructor(salu, f_name, l_name) {
      super(f_name, l_name);
      this.salu = salu;
      console.log(`CONS-Full :${salu} ${f_name} ${l_name}`);
    }

    fullMethod(a_book) {
      const full_mess = `RUN -fullMethod :${a_book} ${this.salu} ${this.l_name}`;
      console.log(full_mess);
      return a_book;
    }

    showName() {
      console.log('Name: ', this.salu, this.f_name, this.l_name);
    }
  }

/**/  if (type_czech.is_active) {
/**/    function PRE_Full(salu, f_name, l_name) {
/**/      console.log('PRE -Full');
/**/      const type_issue = type_czech.check_type(arguments, ['String', 'String', 'String']);
/**/      if (type_issue) return type_issue;
/**/      const valid_salu = ['Ms', 'Mx', 'Mr'].includes(salu);
/**/      if (!valid_salu) return 'Error, not one of Ms/Mx/Mr';
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_Full(Full) {
/**/      console.log('POST-Full');
/**/      const full_return_signature = { salu: 'String', f_name: 'String', l_name: 'String',
/**/                                firstMethod: 'Function', lastMethod: 'Function', fullMethod: 'Function' };
/**/      return type_czech.check_objectType(Full, full_return_signature);
/**/     }
/**/
/**/    function PRE_fullMethod(a_book) {
/**/      console.log('PRE -fullMethod');
/**/      return type_czech.check_type(arguments, 'String');
/**/      }
/**/
/**/    function POST_fullMethod(a_book) {
/**/      console.log('POST-fullMethod');
/**/      return type_czech.check_type(arguments, 'String');
/**/    }
/**/
/**/    const Full_PREs = { Full: PRE_Full, fullMethod: PRE_fullMethod };
/**/    const Full_POSTs = { Full: POST_Full, fullMethod: POST_fullMethod };
/**/    Full = type_czech.link(Full, Full_PREs, Full_POSTs);
/**/    }

  return Full;
};
