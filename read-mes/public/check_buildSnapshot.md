
## check_buildSnapshot() & check_mutatedSnapshot()
  -  [1 Mutation Check an Array](#mutation-check-an-array) 
  -  [2 Mutation Check an Object](#mutation-check-an-object) 

## 1 Mutation Check an Array<a name="mutation-check-an-array"></a>
  
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_anArray(an_array){
  return type_czech.check_buildSnapshot('PRE_check_anArray', 'an_array', an_array)
}

function POST_check_anArray(){
  return type_czech.check_mutatedSnapshot('PRE_check_anArray', 'an_array')
}

anArray = type_czech.linkUp(anArray, PRE_check_anArray, POST_check_anArray) 

function anArray(an_array){
  if (an_array.length ===4)
    an_array.push(5)
}

anArray([1,2,3])

anArray([1,2,3,4]) // POST error

```
   
## 1 Mutation Check an Object<a name="mutation-check-an-object"></a>
  
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_anObject(an_object){
  return type_czech.check_buildSnapshot('PRE_check_anObject', 'an_object', an_object)
}

function POST_check_anObject(){
  return type_czech.check_mutatedSnapshot('PRE_check_anObject', 'an_object')
}

anObject = type_czech.linkUp(anObject, PRE_check_anObject, POST_check_anObject) 

function anObject(an_object){
  if (typeof an_object.extra === 'undefined')
    an_object.extra = 'is mutated'

}

anObject({data:'data', extra:'extra'})

anObject({an_error:'oh yeah'}) // POST error

```

&copy; 2021 Steen Hansen 