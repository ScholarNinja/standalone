// Shim Chrome's storage functionality
global.local = {};
global.chrome = {
    storage: {
        local: {
            get: function (key, callback) {
                var result = {
                }
                result[key] = local[key];
                callback(result);
            },
            set: function (data) {
                global.local = data;
            }
        }
    }
}

global.doc = require('./scholarninja/app/scripts/document');
