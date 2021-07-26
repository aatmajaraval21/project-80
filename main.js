name_array=[];
  function searching(){
    var guestname=document.getElementsById("name1").value;

    name_of_the_people.push(guestname);
    console.log(name_array);
  document.getElementById("display_name").innerHTML=name_array;
  document.getElementsById("searching_button").style.display="none";
  
}