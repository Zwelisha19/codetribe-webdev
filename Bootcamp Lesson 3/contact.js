

function formSubmision(event){

    const varForm=document.getElementById('myForm');

    let isMessageValid=varMessage.value.trim()!=='';


    event.preventDefault();
    const data = new FormData(event.target);
    
    console.log(data);


    fetch('https://formspree.io/f/xbjnqklp',
        {
            method: 'POST',
            body: data,
            headers: {
                'Accept':'application/json'
            }
        }
    )
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        if(data.ok){
            alert('Email successfully Sent')
        }
    })
   
}
varForm.addEventListener("submit", formSubmision)
