# fido2-pin-disable-extension
An extension to transparently disable the PIN requirement on FIDO2/Passkeys implementations.

## Compatibility
Depending on the specific sites, this extension may prevent Passkeys or FIDO2 working as expected. If this happens, you can disable the extension, though you should ensure that you don't accidently set a PIN on a device you don't wish to be PIN protected.

## Original implementation
This implementation is based on the code in https://git.sr.ht/~fincham/authinspect/