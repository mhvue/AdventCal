const imgs = {
    dino1: "<img src='./images/triceratops.jpg'>",
    dino2: "<img src='./images/Hesperonychus.jpg'>",
    dino3: "<img src='./images/Allosaurus.jpg'>",
    dino4: "<img src='./images/Brachiosaurus.jpg'>",
    dino5: "<img src='./images/skeleton-ceratosaurus.jpg'>",
    dino6: "<img src='./images/skeleton-triceratops.jpg'>",
    dino7: "<img src='./images/fossils-heterodontosaurus.jpg'>",
    dino8: "<img src='./images/Heterodontosaurus.jpg'>",
    dino9: "<img src='./images/Stego.jpg'>",
    dino10: "<img src='./images/Saltopus.jpg'>",
    dino11: "<img src='./images/Dreadnoughtus.jpg'>",
    dino12: "<img src='./images/Sauropods.jpg'>",
    dino13:"<img src='./images/dinosaur-footprints.jpg'>",
}

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
 

    //GET request  HERE
    //check if what is clicked matched today's date
    //current date 
    if(selectDate == currentDate.format("MM/D/YYYY")){
        $(".msgModal").modal();
        $("#"+getID).removeClass("clickMe").addClass("clicked")
        //show match getNum to match index-1
        $(".modal-title").html("Fact For the Day for " + selectDate)
        console.log(getD)

        $.get("/api/dinosaurFact/"+ parseInt(getD), function(data){
           // console.log(data.facts)
           $(".dinoFactHolder").html(data.facts)
        });
    
    }
     //previous date
    //whatever is clicked on, have to check to see if less than current num
    else if(parseInt(getNum) < parseInt(getD)){
        const prevDay = parseInt(getNum);
        $(".msgModal").modal();
        $("#"+getID).addClass("clicked")
        $(".modal-title").html("Fact For the Day for " + selectDate)

        $.get("/api/dinosaurFact/"+ prevDay, function(data){
            $(".dinoFactHolder").html(data.facts)
         });
        
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