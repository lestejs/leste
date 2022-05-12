export default function clone(obj){
  let result
  const cls = isClass(obj)
  if (cls==="Object"){
    result={}
  } else if (cls==="Array"){
    result=[]
  } else {
    return obj
  }
  for(let key in obj) {
    const copy=obj[key]
    if (isClass(copy) === "Object"){
      result[key] = arguments.callee(copy) // Рекурсивный вызов
    }else if(isClass(copy) === "Array"){
      result[key] = arguments.callee(copy)
    }else{
      result[key]=obj[key]
    }
  }
  return result
}

function isClass(obj) {
  if (obj === null) return "Null"
  if (obj === undefined) return "Undefined"
  return Object.prototype.toString.call(obj).slice(8, -1)
}