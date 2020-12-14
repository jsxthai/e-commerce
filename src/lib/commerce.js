import Commerce from '@chec/commerce.js';

// second argument: true -> enable the debugger
// ref: commerce.js, document - installation
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);