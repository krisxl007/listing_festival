/**
 * Retrieving token from session storage. 
 * @param {*} tokenName 
 * @param {*} history 
 * @param {*} forwardingUrl 
 */
const tokenValidator = (tokenName, history, forwardingUrl) => {
  let token = sessionStorage.getItem(tokenName);
  if(token == null) {
    history.push(forwardingUrl);
  }

  return token;
};

export default tokenValidator;
