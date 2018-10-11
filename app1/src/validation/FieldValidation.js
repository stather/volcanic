
export function cellNumber(value){
  return value && !/^((?:\+27|27)|0)(\d{2})-?(\d{3})-?(\d{4})$/.test(value) ?
  'Invalid cell number' : undefined
}


export function email(value){
  return value && !/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value) ?
  'Invalid email address' : undefined
}


