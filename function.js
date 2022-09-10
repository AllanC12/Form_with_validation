window.onload = function(){
  const form = document.getElementById('form');
   form.addEventListener('submit',(e)=>{
         e.preventDefault();
         const input = document.querySelectorAll('.inputs input');
         const value_name = input[0].value;
         const validation_name = value_name.split(' ');
         const value_email = input[1].value;
         const validation_email = value_email.includes('@' && '.');
         const value_telefone = input[2].value;
         const regex_telefone = /(\(?[1-9]{2}\)?\s)?([0-9]{4,5}\-?[0-9]{4})/;
         const validation_telefone = regex_telefone.test(value_telefone);

             if(value_name == "" || validation_name.length < 2){
                  input[0].style.border = "1px solid red";
                  input[0].value = "insira seu nome completo";
             }else if(value_email == "" || validation_email == false){
                  input[1].style.border = "1px solid red";
                  input[1].value = "Insira um Email válido";
             }else if(value_telefone == "" || validation_telefone == false){
                  input[2].style.border = "1px solid red";
                  input[2].value = "Insira um telefone válido..."
                }
            else{
                  alert("form enviado!!!");
             }

             
    function resetCamp(){
      //input.length - 1 pra não resetar o input[type=submit]
      for(i = 0; i < input.length - 1;i++){
                         input[i].addEventListener('click',function(){
                          this.style.borderStyle = "none";
                          this.style.borderBottom = "1px solid white"
                          this.value = "";
                    })
               }
     }resetCamp();

         

    })



 





}