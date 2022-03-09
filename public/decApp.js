//NEED TO UPDATE TO MATCH DECEMBER 2022
//COPY OF APP.JS for use when it is December. to have the advent day by day functionally
// so app.js is cleaner without all the commented out functionality 

//get the date 
const date = new Date();
//get the year
const year = date.getFullYear();

//CALENDAR
$("h2").html("December " + year);

//generate dates 
for(let i = -2; i <= 32; i++){
    let getDays = i;
    let tdData = $("<td>").html(getDays).attr("data-date",`12/${i}/${year}`).attr("id",i) //updated this to i instead of td+i as the id for testing purposes 

     //1st week
    if(i == -2|| i == -1 || i == 0){
     $("#numberDays").append("<td>"+ "" + "</td>");
    }
    else if(i >=1 && i <= 4){
     $("#numberDays").append(tdData);
    }
     //2nd week
    else if(i >= 5 && i <= 11){
     $("#numberDays2").append(tdData);
    }
     //3rd week
    else if(i >= 12 && i <= 18){
     $("#numberDays3").append(tdData);
    }
     //4th week
    else if(i >= 19 && i <= 25){
     $("#numberDays4").append(tdData);
     }
      //5th week
    else{
         if(i >= 32 && i == 32){
            $("#numberDays5").append("<td>"+ "" + "</td>");
         }
         else{
            $("#numberDays5").append(tdData);
        }
     }

}

//highlight today's date..this is only for when it is December. *Comment out then.
// function getToday(){
//     const getToday = moment().format("MM/D/YYYY");
//     if(getToday == $("#td"+moment().format("D")).attr("data-date")){
//         $("#td"+moment().format("D")).addClass("clickMe")
//     }
    

// }
// getToday();

//display facts for any day that is clicked on 
$("td").on("click",function(){
    //$this is grabbing the id per day 
//these below are only for when it is December 
//     const selectDate = $(this).attr("data-date");
//     const getNum= $(this).html();
//     const currentDate = moment();

//commented out below as are not getting the current day anymore to show the specific fact for testing purposes 
// const getD = currentDate.format("D"); //get the current no. day 
// console.log(getD)
    const getID= $(this).attr("id");
    console.log(getID)
    
   if(getID){
     $.get("/api/fact/"+ parseInt(getID), function(data){
         // console.log(data)
     $(".msgModal").modal();

     //no image, but have fact and link
     if(data.image.imagesInfo === null){
          $(".dinoFactHolder").html(
               data.factsInfo + "<a href='" + data.link.linksInfo + "' target ='_blank'>Click here</a>").attr("data-Num", getID + "day");
     }
     //no link but have fact and image 
     else if(data.link.linksInfo === null){
          $(".dinoFactHolder").html(
               data.factsInfo + 
               "<img src='"+ data.image.imagesInfo + "'"+ ">").attr("data-Num", getID + "day");
     }
     //have no image and link, but only have facts 
     else if (data.image.imagesInfo === null && data.link.linksInfo === null){
          $(".dinoFactHolder").html(data.factsInfo).attr("data-Num", getID + "day");
     }
          

     //adding to Likes 
     $(".btn-primary").on("click",function(){
          //get the data attribute (in this case is number)
          const getFact = $(this).parent().siblings(".modal-body").children().attr("data-Num");
          console.log(getFact)

          //toggle btwn Added to Likes and Like this via adding or removing class of likedInfo
          if(data.likes === false){
               //update db to true for Like 
               $.ajax({
                    url: "/api/likedFact/" + getFact,
                    type: "PUT",
                    success: function(updateLike){
                         console.log(updateLike)
                         $(".btn-primary").addClass("likedInfo").text("Added to your likes!");
                    }
               });
          }
          else{
               //UNlike by clicking same btn again and updating db back to False 
               $.ajax({
                    url: "/api/unlikedFact/" + getFact,
                    type: "PUT",
                    success: function(updateLike){
                         console.log(updateLike)
                         $(".btn-primary").removeClass("likedInfo").text("Like this");
                    }
               });
          }
     });
     });
   }
   else{
        $(".msgModal").modal();
        $(".dinoFactHolder").html("nothing here")
   }
    
 
//as of 1/3/21: below will not work as it is for Dec. 2020. NEED TO UPDATE WITH NEW CODE WITH DB
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



//view likes
$("#viewLikes-btn").on("click", function(){
     $(".msgModal").modal();
     //have a get here to show all liked facts
     //if no likes yet, display msg of No Likes yet 
});
