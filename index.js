'use strict';
// secret one
let secret = '007';

function getSecret() {
    let secret = '008';

    function getValue() {
        return secret;
    }

    return getValue();
}
// environment of function getValue(): let secret = '008'
// environment of function getSecret(): empty
alert(getSecret()); // 008
