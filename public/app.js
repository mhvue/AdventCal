//get the date 
const date = new Date();
//get the year
const year = date.getFullYear();


//CALENDAR
$("h2").html("December " + year);
// $("#count").html("<p>Days til Dec: " + countMath + "</p>");

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
             
          $(".msgModal").modal();

          //no image, but have fact and link
          if(data.image.imagesInfo === null){
               $(".dinoFactHolder").html(
                    data.factsInfo + "<a href='" + data.link.linksInfo + "' target ='_blank'>Click here</a>").attr("data-Num", getID);
          }
           //no link but have fact and image 
          else if(data.link.linksInfo === null){
               $(".dinoFactHolder").html(
                    data.factsInfo + 
                    "<img src='"+ data.image.imagesInfo + "'"+ ">").attr("data-Num", getID);
          }
          //have no image and link, but only have facts 
          else if (data.image.imagesInfo === null && data.link.linksInfo === null){
               $(".dinoFactHolder").html(data.factsInfo).attr("data-Num", getID);
          }
            
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


//what happens we click Like Button 
//when click Like, it gets posted as TRUE dinofact db. 
$(".btn-primary").addClass("noLikes").on("click",function(){
     //get the fact by clicking on this button
     const getFact = $(this).parent().siblings(".modal-body").children().attr("data-Num");
     console.log(getFact)

     //toggle btwn Liked and added to Likes plus the ability to unlike and an option to add to Likes
    if($(this).hasClass("noLikes")){
          //change text to capture the Liked clicked, update class to liked
          //update the db via PUT 
          $.ajax({
               url: "/api/likedFact/" + getFact,
               type: "PUT",
               success: function(updateLike){
                    console.log(updateLike)
                    $(".btn-primary").removeClass("noLikes").addClass("likedInfo").text("Added to your likes!");
               }
          });
    }
    else{
     // UNlike by clicking it again
          $(this).removeClass("likedInfo").addClass("noLikes").text("Like this");
          //update db 
    }
});

//view likes
$("#viewLikes-btn").on("click", function(){
     $(".msgModal").modal();
     //have a get here to show all liked facts
     //if no likes yet, display msg of No Likes yet 
});
