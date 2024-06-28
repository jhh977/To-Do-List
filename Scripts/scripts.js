
let side_bar = document.getElementsByClassName("side-bar")

let btn = document.querySelector('.open-side-bar')
btn.addEventListener('click', function(){
side_bar[0].classList.toggle("show-hide")
})



const now = new Date();

const currentDateTime = now.toLocaleString('en-gb');
document.getElementById('time').innerText = currentDateTime


// making tasks change styling by task status (done/pending/missed)

let tasks = document.querySelectorAll('.task')

for(let i=0; i<tasks.length; i++){
    let checkbox = tasks[i].querySelector('input');
    let date_time = new Date(tasks[0].dataset.time);
    if(checkbox.checked){
        tasks[i].classList.remove('missed','pending')
        tasks[i].classList.add('done')

    }else{
        if(now > date_time){
            tasks[i].classList.remove('done','pending')
            tasks[i].classList.add('missed')
        }
        else{
            tasks[i].classList.remove('missed','done')
            tasks[i].classList.add('pending')
        }
    }

}

const submitButton = document.getElementById("submit");


submitButton.addEventListener("click", function () {
    const title = titleInput.value;
    const date = dateInput.value;
    const details = detailsInput.value;
  
    if (title !== "" && title !== "") {
      const newTask = {
        title: title,
        data: date,
        details: details,
      };
  
      console.log(newTask);
  
      response.innerText = "Task added!";
      e.preventDefault();
    } else {
      response.innerText = "Please fill out the required fields.    ";
    }
  });