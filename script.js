const eye = document.querySelectorAll('fieldset form .display .eye');
const inp = document.querySelectorAll('fieldset form .block .row input:not([type="submit"])')
const showhide = document.querySelector('fieldset form .block .row button')
const showhideEye = document.querySelector('fieldset form .block .row button i')




function all() {


    


for(let i = 0; i < inp.length; i++){
    inp[i].oninput = () => {
        if(inp[i].type == 'password'){    
                showhideEye.className = 'fa-solid fa-eye-slash'
            for(let j = 0; j < eye.length; j++){
                eye[j].style.transform = `rotate(${ (inp[i].value.length + 2) + 110}deg)`
            }
        }else{
            showhideEye.className = 'fa-solid fa-eye'
            for(let j = 0; j < eye.length; j++){
                eye[j].style.transform = `rotate(-${inp[i].value.length + 2}deg)`
            }         
        }

        if(inp[i].value.length > 30){
            inp[i].style.color = 'red'
            setTimeout(() => {

                alert('the Sympols can not be more than 30')
            },1000)
            inp[i].value.length = 0
        }else{
            inp[i].style = null
        }
    }
}


showhide.onclick = () => {
   if(inp[1].type != 'text'){
    inp[1].type = 'text'
    showhideEye.className = 'fa-solid fa-eye'
    for(let j = 0; j < eye.length; j++){
        eye[j].style.transform = `rotate(-${inp[1].value.length + 2}deg)`
    }
   }else{
    inp[1].type = 'password'
    for(let j = 0; j < eye.length; j++){
        eye[j].style.transform = `rotate(${ (inp[1].value.length) + 110 }deg)`
    }
    showhideEye.className = 'fa-solid fa-eye-slash'
   }
}

}
all()


















