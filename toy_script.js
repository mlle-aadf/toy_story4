// console.log("To infinity and beyond.");

document.getElementById("rate").onclick = function (){submitComment()};

function submitComment(){
    var comment = document.getElementById("comment");
    var printed = document.getElementById("printed");

    printed.innerHTML = "You said it was " + comment.value + " !";
    comment.value = "";
    }
