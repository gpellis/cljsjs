/**
 * @fileoverview Closure Compiler externs for Stanford Javascript Crypto Library
 * @see http://bitwiseshiftleft.github.io/sjcl/
 * @externs
 */


var sjcl = {
    cipher: {},
    codec: {},
    exception: {
        corrupt: function(a) {},
        invalid: function(a) {},
        bug: function(a) {},
        notReady: function(a) {}
    }
    hash: {},
    keyexchange: {},
    misc: {},
    mode: {},
};

sjcl.bitArray = {
    bitSlice: function(a, b, c) {},
    extract: function(a, b, c) {},
    concat: function(a, b) {},
    bitLength: function(a) {},
    clamp: function(a, b) {},
    partial: function(a, b, c) {},
    getPartial: function(a) {},
    equal: function(a, b) {},
    byteswapM: function(a) {}
};

sjcl.cipher.aes = function(a) {};
sjcl.cipher.aes.prototype = {
    encrypt: function(a) {},
    decrypt: function(a) {}
};

sjcl.codec.base32 = {
    fromBits: function(a, b, c) {},
    toBits: function(a, b) {}
};

sjcl.codec.base32hex = {
    fromBits: function(a, b) {},
    toBits: function(a) {}
};

sjcl.codec.base64 = {
    fromBits: function(a, b, c) {},
    toBits: function(a, b) {}
};

sjcl.codec.base64url = {
    fromBits: function(a) {},
    toBits: function(a) {}
};

sjcl.codec.hex = {
    fromBits: function(a) {},
    toBits: function(a) {}
};

sjcl.codec.utf8String = {
    fromBits: function(a) {},
    toBits: function(a) {}
};

sjcl.decrypt;

sjcl.encrypt;

sjcl.hash.sha256 = function(a) {};

sjcl.hash.sha256.hash = function(a) {};

sjcl.hash.sha256.prototype = {
    finalize: function() {}
    reset: function() {},
    update: function(a) {},
};

sjcl.misc.cachedPbkdf2 = function(a, b) {};

sjcl.misc.hmac = function(a, b) {};

sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function(a) {};

sjcl.misc.hmac.prototype.reset = function() {};

sjcl.misc.hmac.prototype.update = function(a) {};

sjcl.misc.hmac.prototype.digest = function() {};

sjcl.misc.pa;

sjcl.misc.pbkdf2 = function(a, b, c, d, e) {};

sjcl.mode.ccm = {
    decrypt: function(a, b, c, d, e) {}
    encrypt: function(a, b, c, d, e) {},
    listenProgress: function(a) {},
    unListenProgress: function(a) {},
};

sjcl.mode.gcm = {
    decrypt: function(a, b, c, d, e) {}
    encrypt: function(a, b, c, d, e) {},
};

sjcl.mode.ocb2 = {
    decrypt: function(a, b, c, d, e, f) {},
    encrypt: function(a, b, c, d, e, f) {},
    pmac: function(a, b) {}
};

sjcl.prng = function(a) {};

sjcl.prng.prototype = {
    addEntropy: function(a, b, c) {},
    addEventListener: function(a, b) {},
    getProgress: function(a) {},
    isReady: function(a) {},
    randomWords: function(a, b) {},
    removeEventListener: function(a, b) {}
    setDefaultParanoia: function(a, b) {},
    startCollectors: function() {},
    stopCollectors: function() {},
};

sjcl.random;
