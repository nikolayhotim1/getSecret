'use strict';
// secret two
let secret = '007';

function getSecret() {
    let secret = '008';

    function getValue() {
        return secret;
    }

    return getValue;
}
// environment of function getValue(): let secret = '008'
// environment of function getSecret(): empty
let getValueFun = getSecret();
alert(getValueFun()); // 008
