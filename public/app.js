//get the date 
const date = new Date();
//get the year
const year = date.getFullYear();

//below not working
// let count = 34; //number of days passed since Dec. 2020 as of 1/4/21

// if(moment()){
//     count = count++ //goes up as we can track how many days since 12/1/20
//     console.log(moment().subtract(count, "days").format("MM/DD/YYYY"))
//     console.log(count)
// }
// const countMath = 365-count;
// console.log(365-count)//days until dec. 2021

//CALENDAR
$("h2").html("December " + year);
// $("#count").html("<p>Days til Dec: " + countMath + "</p>");

//generate dates 
for(let i = -2; i <= 32; i++){
    let getDays = i;
    let tdData = $("<td>").html(getDays).attr("data-date",`12/${i}/${year}`).attr("id",i) //updated this to i instead of td+i as the id for testing purposes 

    // //1st week
    if(i == -2|| i == -1 || i == 0){
     $("#numberDays").append("<td>"+ "" + "</td>");
    }
    else if(i >=1 && i <= 4){
     $("#numberDays").append(tdData);
    }
    // //2nd week
    else if(i >= 5 && i <= 11){
     $("#numberDays2").append(tdData);
    }
    // //3rd week
    else if(i >= 12 && i <= 18){
     $("#numberDays3").append(tdData);
    }
    // //4th week
    else if(i >= 19 && i <= 25){
     $("#numberDays4").append(tdData);
     }
    //  //5th week
    else{
         if(i >= 32 && i == 32){
            $("#numberDays5").append("<td>"+ "" + "</td>");
         }
         else{
            $("#numberDays5").append(tdData);
        }
     }

}

//highlight today's date
// function getToday(){
//     const getToday = moment().format("MM/D/YYYY");
//     if(getToday == $("#td"+moment().format("D")).attr("data-date")){
//         $("#td"+moment().format("D")).addClass("clickMe")
//     }
    

// }
// getToday();

//display facts 
//as of 1/3/2021 this is NOT working b/c we are not no longer Dec. 2020
$("td").on("click",function(){
    //$this is grabbing the id per day 
    const selectDate = $(this).attr("data-date");
    const getNum= $(this).html();
    const currentDate = moment();
    //commented out below as are not getting the current day anymore to show the specific fact for testing purposes 
    // const getD = currentDate.format("D"); //get the current no. day 
    // console.log(getD)
    const getID= $(this).attr("id");
    console.log(getID)
    
   //I'm not passing getID ara parameter to below b/c I want to show each fact per td click for testing purposes 
   if(getID){
        $.get("/api/fact/"+ parseInt(getID), function(data){
             console.log(data.factsInfo)
            $(".msgModal").modal();
            $(".dinoFactHolder").html(data.factsInfo)
        });
   }
   else{
        $(".msgModal").modal();
        $(".dinoFactHolder").html("nothing here")
   }
    

    //as of 1/3/21: below will not work as it is for Dec. 2020 
    //check if what is clicked matched today's date
    //current date 
    // if(selectDate == currentDate.format("MM/D/YYYY")){
    //     $(".msgModal").modal();
    //     $("#"+getID).removeClass("clickMe").addClass("clicked")
    //     //show match getNum to match index-1
    //     $(".modal-title").html("Fact For the Day for " + selectDate)
    //     console.log(getD)

    //     $.get("/api/dinosaurFact/"+ parseInt(getD), function(data){
    //        // console.log(data.facts)
           
    //        $(".dinoFactHolder").html(data.facts)
    //     });
    
    // }
    //  //previous date
    // //whatever is clicked on, have to check to see if less than current num
    // else if(parseInt(getNum) < parseInt(getD)){
    //     const prevDay = parseInt(getNum);
    //     $(".msgModal").modal();
    //     $("#"+getID).addClass("clicked")
    //     $(".modal-title").html("Fact For the Day for " + selectDate)

    //     $.get("/api/dinosaurFact/"+ prevDay, function(data){
    //         console.log(data,  data.dinoLink.links)
    //         const infoFact = data.facts;
    //         const infoLink = data.dinoLink.links;

    //         if(infoLink === null){
    //             $(".dinoFactHolder").html(infoFact)
    //         }
    //         else{
    //             $(".dinoFactHolder").html(infoFact + " "+ 
    //             "<a href=" + infoLink + " target='_blank'>Click Here</a>")
    //         }
          
    //      });
        
    // }

    //for areas with no dates/num on it  
    // else if(getNum == ""){
    //     $(".msgModal").modal();
    //     $(".dinoFactHolder").html("No date here");
    //     $(".modal-title").html("")

    // }
    // //future dates = cannot show 
    // else{
    //     $(".msgModal").modal();
    //     $(".modal-title").html("")
    //     $(".dinoFactHolder").html("Not time to see this fact yet");
    // }
 
});