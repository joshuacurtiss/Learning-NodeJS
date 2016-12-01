const queryString = require('query-string');
window.onload=function(){
    const parsed = queryString.parse(location.search);
    document.getElementById("msg").innerHTML=parsed.msg;
};
