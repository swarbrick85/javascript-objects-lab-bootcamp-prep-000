<<<<<<< HEAD
var recipes = {}
var object
var key
var value
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
  
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  var temp = Object.assign({}, object)
  delete temp[key];
  return temp
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
=======
var recipes = {}
>>>>>>> 43ff410622f7b02d26e4747dd652cca0e9949a6b
