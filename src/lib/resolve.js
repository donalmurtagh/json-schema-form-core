import * as JsonRefs from './../../lib/json-refs-standalone-min';

export function jsonref(schema, callBack) {
  let promise = new Promise(
    function(resolve, reject) {
      JsonRefs.resolveRefs(schema, {
        "filter": [ 'relative', 'local' ]
      })
        .then(function(res) { resolve(res.resolved); })
        .catch(function(err) { reject(new Error(err)); });
    }
  );

  if(typeof(callBack) === 'function') {
    promise
      .then((resolved) => { callBack(null, resolved); })
      .catch((error) => { callBack(error); });
  }
  else {
    return promise;
  }
};
