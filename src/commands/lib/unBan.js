
const banServer = require("../../core/banServer.js");
module.exports = msg => {
    for(var i=0; i<banServer.getBanList().length; i++){
        if(msg[1] !== banServer.getBanList()[i].ip) return;
        var banList = banServer.getBanList();
        banList.splice(i, 1);
        banServer.setBanList(banList);
        console.log("[Console] Unbanned IP "+msg[1]);
    }
};
