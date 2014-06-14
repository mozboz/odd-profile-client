

function OddProfileClient(appUri) {

    throwIfUndefined(appUri, "appUri");
    throwIfNotT(appUri, "appUri", "string");

    this.appUri = appUri;
}

OddProfileClient.prototype.context = function(name, metadata) {

    throwIfUndefined(name, "name");
    throwIfNotT(name, "name", "string");

    this.contentExists(name).then(function (result) {
        // create context
        return new Promise(function (resolve, reject) {

        })
    }, function (error) {

    }) ;


    if (!this.contextExists(name))
        return createContext(name, metadata);

    return this.getContext(name);
}

OddProfileClient.prototype.createContext = function(name, metadata) {

    throwIfUndefined(name, "name");
    throwIfNotT(name, "name", "string");

    if (typeof metadata != "undefined") {
        throwIfNotObject(metadata, "metadata");


    }


}

OddProfileClient.prototype.getContext = function(name) {

    throwIfUndefined(name, "name");
    throwIfNotT(name, "name", "string");

}

OddProfileClient.prototype.contextExists = function(name) {

    throwIfUndefined(name, "name");
    throwIfNotT(name, "name", "string");

}


function OddProfileContext(metadata) {

    this.metadata = null;

    if (typeof metadata != "undefined") {
        this.metadata = metadata;
    }
}

OddProfileContext.prototype.content = function(key, value) {

    if (typeof key == "undefined") {
        // Return all content in the context

    } else {
        throwIfNotT(key, "key", "string");

        if (typeof value == "undefined") {
            // Return only the value for the specified key
        } else {
            // Create new key/value pair or update the value of the specified key
            if (!(typeof value == "string" || typeof value == "object"))
                throw "The value must be either a string or a object!";
        }
    }


}

OddProfileContext.prototype.getContent = function(key) {

    if (typeof key == "undefined") {

    } else {
        throwIfNotT(key, "key", "string");
    }

}

OddProfileContext.prototype.putContent = function(key, data) {

    throwIfUndefined(key, "key");
    throwIfNotT(key, "key", "string");

    throwIfUndefined(data, "data");


}

/**
 *
 * @param url       Profile root URL
 * @param method
 * @param data      Object of key:value pairs that will be appended to URL
 * @return {Promise}
 */
function promiseXhrRequest(url, method, data) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {

        var queryItemsString;
        var params;

        if (typeof data != 'undefined') {
            var queryItems = [];
            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    if (data[key] == null) {
                        queryItems.push(key);
                    } else {
                        queryItems.push(key + '=' + value);
                    }
                }
            }
            queryItemsString = queryItems.join('&');
        }

        var req = new XMLHttpRequest();
        req.setRequestHeader("Accept", getApiVersionString());

        switch (method) {
            case "POST", "PUT":
                params = queryItemsString;
                req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                req.setRequestHeader("Content-length", params.length);
                break;

            case "GET", "HEAD":
                url = url + '?' + queryItemsString;
                break;
        }

        req.open(method, url, true);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req));
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send(params);
    });
}

function throwIfUndefined(paramValue, paramName) {

    if (typeof paramValue == "undefined")
        throw "The " + paramName + " parameter must be set!";
}

function throwIfNotT(paramValue, paramName, expectedType) {

    if (typeof paramValue != expectedType)
        throw "The " + paramName + " parameter must be of type " + expectedType + "! Current type is: "
                    + typeof paramValue;
}

function throwIfNotObject(paramValue, paramName) {
    if (typeof yourVariable != 'object')
        throw "The " + paramName + " parameter must be a object!";
}