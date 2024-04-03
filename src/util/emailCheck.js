export function emailCheck(email) {
  var res = /\S+@\S+\.\S+/;;
  return res.test(email);
}