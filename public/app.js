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
    
     const likes = data.likes;
     const images = data.image.imagesInfo;
     const links = data.link.linksInfo;
     const facts = data.factsInfo;

     $(".msgModal").modal();
     $(".modal-title").html(`Fact for Day ${getID}`);
     $(".btn-primary").show();
     $(".btn-primary").attr("id",`btn-${getID}`)
          
     
     //this is for Likes status, if likes is True, then show msg on btn to user that fact is  liked
      if(likes === true){
          $(`#btn-${getID}`).addClass("likedInfo").text("Added to your likes!");
     }else{
          $(`#btn-${getID}`).removeClass("likedInfo").text("Like this");
     }

     //facts 
     let factHolder = "<p>"+ facts + "</p>";
     //no image, but have fact and link
     if(images !== null){
               factHolder += "<img src='"+ images + "'"+ ">";
               //factHolder +="<a href='" + links + "' target ='_blank'>Click here</a>").attr("data-Num", `${getID}day`);
     }

     //no link but have fact and image 
     if(links !== null){
               factHolder += "<a href='" + links + "' target ='_blank'>Click here</a>";
     }

     $(".dinoFactHolder").html(factHolder).attr("data-Num", `${getID}day`)
   
     });
   }
   else{
        $(".msgModal").modal();
        $(".dinoFactHolder").html("nothing here")
   }
    
  
});


//adding to Likes 
$(".likeBtn").on("click", function(){
     //get the data attribute (in this case is number)
     const getFact = $(this).parent().siblings(".modal-body").children().attr("data-Num");
     const btnId = $(this).attr("id");
     console.log(getFact, btnId)

     //toggle btwn classes for ability of like and unlike
             //update via PUT on our db 
          if($(this).hasClass("likedInfo")){
               $.ajax({
                    url: "/api/unlikedFact/" + getFact,
                    type: "PUT",
                    success: function(updateLike){
                         console.log('success unlike!'+updateLike)
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
     $(".btn-primary").hide();
     $.get("/api/getLikes", function(data){
          $(".msgModal").modal();
          //$(".btn-primary").hide();
          $(".modal-title").html("Your Likes!");
         console.log(data)
          //append data in the modal  
          
           let ul =$("<ul>");
          for(let i = 0 ; i < data.length; i++){
               const id = data[i].id;
               const images = data[i].image.imagesInfo;
               const links = data[i].link.linksInfo;
               const facts = data[i].factsInfo;
          
               const imageHolder = "<img src='"+ images + "'"+ ">";
               const linkHolder =  "<a href='" + links + "' target ='_blank'>Click here</a>";
       
               if(images === null){
                    ul.append("<li>Day "+ id + " " + facts + linkHolder+ "<br>");

               }
               // fact and image 
               if(links === null){
                    ul.append("<li>Day "+ id + " " + facts + imageHolder +"<br>");
               }
               // // only have facts 
               if (images === null && links === null){
                    ul.append("<li>Day "+ id + " " + facts + "<br>");
                    
                }
           }

           $(".dinoFactHolder").html(ul)

         
     });

     //remove all likes -STILL IN THE PROCESS
     // $(".msgModal").modal();
     // $(".modal-footer").html(removeBtn)
     // $("#removeBtn").on("click",function(){
     //      console.log("clikkkkkk")
     //      //api route to change all likes back to False . 
     //      //still thinking if i can delete all at once. I would need to find a way to get the day num from each to update 
     // })
     //remove all facts from front end 
});
