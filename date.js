

module.exports.getDate = getDate;

function getDate(){
    const today = new Date();
    // var currentDay = today.getDay();
    // var day = "";
    
    // // if(currentDay === 6 || currentDay === 0 )
    // // {
    // //     day = "Weekend";
    // //     // res.render("list",{kindOfday:day});   // You must have views folder and list.ejs in that folder
    // // }  
    // // else{
    // //     day = "WeekDay";
    // // }
    // if(currentDay === 0)
    // {
    //     day = "Sunday";
    // }
    // else if(currentDay === 1)
    // {
    //     day = "Monday";
    // }
    // else if(currentDay === 2)
    // {
    //     day = "Tuesday";
    // }
    // else if(currentDay === 3)
    // {
    //     day = "Wednesday";
    // }
    // else if(currentDay === 4)
    // {
    //     day = "Thursay";
    // }
    // else if(currentDay === 5)
    // {
    //     day = "Friday";
    // }
    // else
    // {
    //     day = "Saturday";
    // }
    const options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    return today.toLocaleDateString("en-US",options);;
}
exports.getDay = function (){
    const today = new Date();
    
    const options = {
        weekday : "long",
    };
    return today.toLocaleDateString("en-US",options);;
}
