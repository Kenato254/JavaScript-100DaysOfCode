var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// global.XMLHttpRequest = require('xhr2');
function getFile() {
    let req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:5500/codedamn/todoapp/main.html")
    req.onload = function () {
        if (req.status == 200) {
            console.log(req.responseText);
        } else {
            console.log(`ERROR: ${req.status}`)
        }
    }
    req.send();
}
getFile();