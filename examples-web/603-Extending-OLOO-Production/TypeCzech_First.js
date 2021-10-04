/* eslint-disable */

function TypeCzech_First() {
  if (type_czech.is_active) {
    function PRE_First(f_name){
      log(NL2+'PRE -First') 
      type_issue = type_czech.check_type(f_name, 'String')
      if (type_issue) return type_issue;
      return type_czech.check_empty(arguments, 'EMPTY-ERROR');
    }
    function POST_First(First){ 
      log(NL1+'POST-First') 
      post_first_signature = { f_name: 'String',  firstMethod: 'Function' }
      return type_czech.check_type(First, post_first_signature)
    }
    function PRE_firstMethod(a_date){ 
      log(NL+'PRE -firstMethod')
      return type_czech.check_type(arguments, 'Date')
    }
    function POST_firstMethod(a_date){
      log('POST-firstMethod') 
      return type_czech.check_type(arguments, 'Date')
    }

    First_PREs = { First: PRE_First, firstMethod: PRE_firstMethod }
    First_POSTs = { First: POST_First, firstMethod: POST_firstMethod }

    First = type_czech.link(First, First_PREs, First_POSTs)
  }
}