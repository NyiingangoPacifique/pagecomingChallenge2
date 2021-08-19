

        document.addEventListener("submit",(evt)=>{

            evt.preventDefault();

            let value = document.querySelector('#email').value;

            if(value){

                 function validateEmail(email) 
                {
                    var re = /\S+@\S+\.\S+/;
                    return re.test(email);
                }

            

            let email = validateEmail(value);

            if(!email){
                document.querySelector('#error').innerHTML = "Please provide a valid email address";
                
                document.querySelector('#email').value = '';
            }

            }
            else{
                document.querySelector('#error').innerHTML = "Whoops! It looks like you forgot to add your email";
            }



            return false;
        })