var orig_create = navigator.credentials.create;

navigator.credentials.create = function () {
  // Disable PIN requirement
  if (arguments[0]['publicKey']['authenticatorSelection']['userVerification'] != "discouraged") {
    console.log("Overriding PIN creation");
    arguments[0]['publicKey']['authenticatorSelection']['userVerification'] = 'discouraged';
  }
  // Disable resident key requirement
  if (arguments[0]['publicKey']['authenticatorSelection']['residentKey'] != "discouraged") {
    console.log("Overriding resident key request");
    arguments[0]['publicKey']['authenticatorSelection']['residentKey'] = 'discouraged';
  }
  return orig_create.apply(navigator.credentials, arguments);
}

var orig_get = navigator.credentials.get;

navigator.credentials.get = function () {
  // Disable PIN requirement
  // Note this may cause some websites not to work if they are expecting userVerification to be set
  if (arguments[0]['publicKey']['userVerification'] != "discouraged") {
    console.log("Overriding PIN requirement");
    arguments[0]['publicKey']['userVerification'] = 'discouraged';
  }
  return orig_get.apply(navigator.credentials, arguments);
}
