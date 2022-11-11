const editIcon = document.querySelectorAll(".edit_icon");
const editInput = document.getElementsByClassName("number");
editIcon.forEach((item, i) => {
editIcon[i].addEventListener('click',function(){
  if(editInput[i].hasAttribute('disabled')){
       editInput[i].removeAttribute('disabled')  
         editIcon[i].style.color='black'
  }else{
      editInput[i].setAttribute("disabled", "")  
         editIcon[i].style.color='gray'
  }


})
})