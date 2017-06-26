var fs= require("fs");
var path= require("path");

module.exports = function (diry, ext, callback) {

    fs.readdir(diry, function (err, list) {

        if (err)
            callback(err, null);
        else {
            var result = [];
            for (var i = 0; i < list.length; i++) {
                if (path.extname(list[i]) == "." + ext) {
                    result.push( list[i]);
                }
            }
            callback(null, result);
        }
    })
}  