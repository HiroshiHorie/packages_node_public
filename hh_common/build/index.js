"use strict";
//
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatColors = exports.UUIDWithPrefix = exports.IDHash = exports.MemoryCache = exports.FacebookAPI = void 0;
var facebookAPI_1 = require("./facebookAPI");
Object.defineProperty(exports, "FacebookAPI", { enumerable: true, get: function () { return facebookAPI_1.FacebookAPI; } });
var memoryCache_1 = require("./memoryCache");
Object.defineProperty(exports, "MemoryCache", { enumerable: true, get: function () { return memoryCache_1.MemoryCache; } });
var random_1 = require("./random");
Object.defineProperty(exports, "IDHash", { enumerable: true, get: function () { return random_1.IDHash; } });
Object.defineProperty(exports, "UUIDWithPrefix", { enumerable: true, get: function () { return random_1.UUIDWithPrefix; } });
var flatColors_1 = require("./flatColors");
Object.defineProperty(exports, "FlatColors", { enumerable: true, get: function () { return flatColors_1.FlatColors; } });
// module.exports = {
//   FacebookAPI,
//   MemoryCache,
//   UUIDWithPrefix,
//   IDHash,
//   FlatColors,
// }
