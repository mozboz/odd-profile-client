function OddProfileClient(appUri) {

    throwIfUndefined(appUri, "appUri");
    throwIfNotT(appUri, "appUri", "string");

    this.appUri = appUri;
}

OddProfileClient.prototype.context = function(name, metadata) {

    throwIfUndefined(name, "name");
    throwIfNotT(name, "name", "string");

    if (typeof metadata != "undefined") {

    }
}

OddProfileClient.prototype.createContext = function(name, metadata) {

    throwIfUndefined(name, "name");
    throwIfNotT(name, "name", "string");

    if (typeof metadata != "undefined") {

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

    } else {
        throwIfNotT(key, "key", "string");
    }

    if (typeof value == "undefined") {

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

function throwIfUndefined(paramValue, paramName) {

    if (typeof paramValue == "undefined")
        throw "The " + paramName ?? "" + " parameter must be set!";
}

function throwIfNotT(paramValue, paramName, expectedType) {

    if (typeof paramValue != expectedType)
        throw "The " + paramName ?? "" + " parameter must be of type " + expectedType + "! Current type is: "
                    + typeof paramValue;
}