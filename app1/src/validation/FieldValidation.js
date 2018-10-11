
export function cellNumber(value){
  return value && !/^((?:\+27|27)|0)(\d{2})-?(\d{3})-?(\d{4})$/.test(value) ?
  'Invalid cell number' : undefined
}




