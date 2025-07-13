(function(){
    const form = document.querySelector('form');
    const message = document.querySelector('message');
      const content= document.querySelector('.cont');

    form.addEventListener('submit',function(e) {
        e.preventDefault();
     cont.textContent=`"${message.value}" you texted the message`; 
      message.value = "";
    })
    
})();