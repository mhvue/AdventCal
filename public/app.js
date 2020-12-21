const date = new Date();
//get year
const year = date.getFullYear();

let getDays = "";
let tdData= "";

//CALENDAR
//displaying month and year 
$("h2").html("December " + year) 
//generating dates
for(let i = -1; i <= 33; i++){
    getDays = i;
    tdData = $("<td>").html(getDays).attr("data-date",`12/${i}/${year}`).attr("id","td"+i)

    //1st week
    if(i == -1 || i == 0){
     $("#numberDays").append("<td>"+ "" + "</td>");
    }
    else if(i >=1 && i <= 5){
     $("#numberDays").append(tdData);
    }
    //2nd week
    else if(i >= 6 && i <= 12){
     $("#numberDays2").append(tdData);
    }
    //3rd week
    else if(i >= 13 && i <= 19){
     $("#numberDays3").append(tdData);
    }
    //4th week
    else if(i >= 20 && i <= 26){
     $("#numberDays4").append(tdData);
     }
     //5th week
    else{
         if(i > 31 && i <= 33){
            $("#numberDays5").append("<td>"+ "" + "</td>");
         }
         else{
            $("#numberDays5").append(tdData);
        }
     }

}

//trying to get the green background to persist
// const numbers =[];
// const compareDays = moment().format("MM/D/YYYY") > moment().subtract(30,"days").format("MM/D/YYYY")
// for(let j = 0; j < numbers.length; j++){
//     numbers[i]
//     if(compareDays == true){
//         $("#td"+numbers[i]).addClass("clicked")
//     }
    
// }

// console.log(numbers)

//highlight today's date
function getToday(){
    const getToday = moment().format("MM/D/YYYY");
    if(getToday == $("#td"+moment().format("D")).attr("data-date")){
        $("#td"+moment().format("D")).addClass("clickMe")
    }
    

}
getToday();


//Display Facts 12/20/20: Right now, not working b/c I have not adjusted js due to incoporating db with the facts now
$("td").on("click",function(){
    //$this is grabbing the id per day 
    const selectDate = $(this).attr("data-date");
    const getNum= $(this).html();
    const currentDate = moment();
    const getD = currentDate.format("D");
    const getID= $(this).attr("id")
 

    //check if what is clicked matched today's date
    //current date 
    if(selectDate == currentDate.format("MM/D/YYYY")){
        $(".msgModal").modal();
        $("#"+getID).removeClass("clickMe").addClass("clicked")
        //show match getNum to match index-1
        $(".modal-title").html("Fact For the Day for " + selectDate)
        $(".dinoFactHolder").html(dinosaurFacts[getNum-1])
    }
     //previous date
    //whatever is clicked on, have to check to see if less than current num
    else if(parseInt(getNum) < parseInt(getD)){
        $(".msgModal").modal();
        $("#"+getID).addClass("clicked")
        $(".modal-title").html("Fact For the Day for " + selectDate)
        $(".dinoFactHolder").html(dinosaurFacts[getNum-1]);
    }

    //for areas with no dates/num on it  
    else if(getNum == ""){
        $(".msgModal").modal();
        $(".dinoFactHolder").html("No date here");
        $(".modal-title").html("")

    }
    //future dates = cannot show 
    else{
        $(".msgModal").modal();
        $(".modal-title").html("")
        $(".dinoFactHolder").html("Not time to see this fact yet");
    }

});