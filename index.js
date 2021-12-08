var form = document.getElementById("submit-btn")
form.onclick = function myFunction(){
    var ending_range = document.getElementById("ending_range").value;
    var num = Math.floor(Math.random() * ending_range + 1);
    document.getElementById("num").innerHTML = num
    document.getElementById("form-div").style.display = "none"
    var guess = prompt("Your Guess:");
    

    if (guess === ""){
        alert("Please input a number.")
        var guess = prompt("Your Guess:");
    }
    else{
        var i = 1
        while (i !== 3){
            if (guess == num){
                document.getElementById("result").innerHTML = `Congratulations , you got it right! <br><a class="btn btn-dark mx-auto" href="index.html">Play Again</a>`
                break
            }
            else if (guess !== num){
                var guess = prompt("Looks like you got it wrong :( Try Again.");
                i++
                
            }
        }
        if (i == 3){
            document.getElementById("result").innerHTML = `Looks like you are out of chances! <br><a class="btn btn-dark mx-auto" href="index.html">Try Again</a>`
        }
    }
}