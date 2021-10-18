//create a callback function for setInterval to call every 1000 ms
function callBack() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
};
//call setInterval with callBack function and time interval as parameters. 
setInterval(callBack, 1000);