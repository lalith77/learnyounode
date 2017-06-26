var http = require("http");
var concatStream = require("concat-stream");
http.get(process.argv[2], function callback(response) {

    response.pipe(concatStream(function (data) {


        console.log(data.toString());
        http.get(process.argv[3], function (response) {

            response.pipe(concatStream(function (data) {


                console.log(data.toString());
                http.get(process.argv[4], function (response) {

                    response.pipe(concatStream(function (data) {


                        console.log(data.toString());
                    }))

                }
                )
            })


            )
        })

    }))
})