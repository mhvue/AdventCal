//this is app.js is for testing purposes.

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

//display facts for any day that is clicked on 
$("td").on("click",function(){
    const getID= $(this).attr("id");
    
   if(getID){
     $.get("/api/fact/"+ parseInt(getID), function(data){
          console.log(data)
     $(".msgModal").modal();
     $(".btn-primary").show();
     $(".btn-primary").attr("id","btn-"+getID)
     
     //this is for Likes status, if likes is True, then show msg to user that fact is already liked 
     if(data.likes === true){
          $("#btn-"+getID).addClass("likedInfo").text("Added to your likes!");
     }else{
          $("#btn-"+getID).removeClass("likedInfo").text("Like this");
     }

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
     });
   }
   else{
        $(".msgModal").modal();
        $(".dinoFactHolder").html("nothing here")
   }
    
  
});


//adding to Likes 
$(".btn-primary").on("click", function(){
     //get the data attribute (in this case is number)
     const getFact = $(this).parent().siblings(".modal-body").children().attr("data-Num");
     const btnId = $(this).attr("id");

          if($(this).hasClass("likedInfo")){
               $.ajax({
                    url: "/api/unlikedFact/" + getFact,
                    type: "PUT",
                    success: function(updateLike){
                         console.log(updateLike)
                         $("#"+btnId).removeClass("likedInfo").text("Like this");
                    }
               });
          }
          //UNlike by clicking same btn again and updating db back to False 
          else{
               $.ajax({
                    url: "/api/likedFact/" + getFact,
                    type: "PUT",
                    success: function(updateLike){
                         console.log(updateLike)
                         $("#"+btnId).addClass("likedInfo").text("Added to your likes!");
                    }
               });
            
          }

     });


//view likes
$("#viewLikes-btn").on("click", function(){

     $.get("/api/getLikes", function(data){

          $(".msgModal").modal();
          $(".btn-primary").hide();
          $(".modal-title").html("Your Likes!");
         // console.log(data)
          //append data in the modal
          for(let i = 0 ; i < data.length; i ++){
               if(data[i].image.imagesInfo === null){
                    $(".dinoFactHolder").append("<ul><li>Day "+data[i].id + " " +
                         data[i].factsInfo + "<a href='" + data[i].link.linksInfo + "' target ='_blank'>Click here</a>"+ "<br>");
               }
               //no link but have fact and image 
               else if(data[i].link.linksInfo === null){
                    $(".dinoFactHolder").append("<ul><li>Day "+data[i].id + " " +
                         data[i].factsInfo + 
                         "<img src='"+ data[i].image.imagesInfo + "'"+ ">"+"<br>");
               }
               //have no image and link, but only have facts 
               else if (data[i].image.imagesInfo === null && data[i].link.linksInfo === null){
                    $(".dinoFactHolder").append("<ul><li>Day "+data[i].id + " " + data[i].factsInfo + "<br>");
               }
          }
        
     });

     //remove all likes 
     const removeBtn = $("<button>").html("Remove all likes").addClass("btn btn-secondary");
     $(".msgModal").modal();
     $(".modal-footer").append(removeBtn)


});
