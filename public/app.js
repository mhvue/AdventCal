//this is app.js is for testing purposes.

//get the date 
const date = new Date();
//get the year
const year = date.getFullYear();

//CALENDAR
$("h2").html("December " + year);
$(".removeAll").hide();
//generate dates for the calendar
for(let i = -2; i <= 32; i++){
    let getDays = i;
    let tdData = $("<td>").html(getDays).attr("data-date",`12/${i}/${year}`).attr("id",i) //updated this to i instead of td+i as the id for testing purposes 

     //1st week - appending nothing into td as there's no such numbered days. doing it this way to get 1 listed in calendar as per Dec. 2021 
     if(i <= 0){
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
          if(i >= 32){ //appending nothing into td as there's no such numbered days
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
     $(".likeBtn").show();
     $(".btn-primary").attr("id",`btn-${getID}`);
     $(".removeAll").hide();
          
     
     //this is for Likes status, if likes is True, then show msg on btn to user that fact is liked
     if(likes === true){
          $(`#btn-${getID}`).addClass("likedInfo").text("Added to your likes!");
     }else{
          $(`#btn-${getID}`).removeClass("likedInfo").text("Like this");
     }

     //facts -there will always be a fact to display.. but sometimes we will not have a image and/or link. need ifs to check for not null on image or link
     let factHolder = "<p>"+ facts + "</p>";

     //image
     if(images !== null){
          factHolder += "<img src='"+ images + "'"+ ">";
     }

     //link
     if(links !== null){
          factHolder += "<a href='" + links + "' target ='_blank'>Click here</a>";
     }

     //insert the factHolder with or without link or image 
     $(".dinoFactHolder").html(factHolder).attr("data-Num", `${getID}day`)
   
     });
   }
   else{
        //below is for when user clicks on td that is not numbered 
        $(".msgModal").modal();
        $(".modal-title").html("Not a numbered day");
        $(".btn-primary").hide();
        $(".removeAll").hide();
        $(".dinoFactHolder").html("Please click on numbered day to display a fact.")
   }
    
  
});


//adding to Likes 
$(".likeBtn").on("click", function(){
     //get the data attribute (in this case is number)
     const getFact = $(this).parent().siblings(".modal-body").children().attr("data-Num");
     const btnId = $(this).attr("id");

     //toggle btwn classes for ability of like and unlike
          //update via PUT on our db -UNlike by clicking same btn again and updating db back to False 
          if($(this).hasClass("likedInfo")){
               $.ajax({
                    url: "/api/unlikedFact/" + getFact,
                    type: "PUT",
                    success: function(updateLike){
                         //change text on btn back to Like this to let user know he/she can like info again 
                         $("#"+btnId).removeClass("likedInfo").text("Like this");
                    }
               });
          }
          else{
               //update our db - change Like to True for a specific fact. Change text of btn to let user know this fact is liked.
               $.ajax({
                    url: "/api/likedFact/" + getFact,
                    type: "PUT",
                    success: function(updateLike){
                         $("#"+btnId).addClass("likedInfo").text("Added to your likes!");
                    }
               });
            
          }

     });


//view likes
$("#viewLikes-btn").on("click", function(){
     $(".likeBtn").hide();
     $.get("/api/getLikes/", function(data){
          $(".msgModal").modal();
          $(".modal-footer").addClass("removeBorder");
          $(".modal-title").html("Your Likes");

          //append data in the modal to dinoFactHolder as unordered list
           let ul =$("<ul>");
          for(let i = 0 ; i < data.length; i++){
               const id = data[i].id;
               const images = data[i].image.imagesInfo;
               const links = data[i].link.linksInfo;
               const facts= data[i].factsInfo;
          
               const imageHolder = "<img src='"+ images + "'"+ ">";
               const linkHolder =  "<a href='" + links + "' target ='_blank'>Click here</a>";

               //fact only 
               if(images === null && links === null){
                    ul.append("<li class ='likedFact' id=" + id +"likedDay" + ">" + "Day " + id + ": " + facts 
                    + "<br>" + `<button class='btn btn-outline-success deleteOne'>Delete</button>`).addClass("myLikes")
               }

               //images and fact
               else if(links === null){
                    ul.append("<li class ='likedFact' id=" + id +"likedDay" + ">" + "Day " + id + ": " + facts + imageHolder 
                    + "<br>" +  `<button class='btn btn-outline-success deleteOne'>Delete</button>`).addClass("myLikes")
               }
                
               // fact and link
               else if (images === null){
                    ul.append("<li class ='likedFact' id=" + id +"likedDay" +  ">" + "Day "+ id + ": " + facts + linkHolder 
                    + "<br>" + `<button class='btn btn-outline-success deleteOne'>Delete</button>`).addClass("myLikes")
                }
            }
           
            $(".dinoFactHolder").html(ul)       
            
            $(".deleteOne").on("click",function(){
               console.log("clikkkkkk")
               const getAllIds = $(this).parent().attr("id")

               //api route to change like back to false  
               $.ajax({
                    url: "/api/removeLikes/"+parseInt(getAllIds),
                    type: "PUT",
                    success: function(updateLike){
                         $(`#${getAllIds}`).remove(); 
                    },error: function(req, status, error){
                         console.log(req, status, error)
                    }
                });
     
               
     });
         
    });
});
