var form = document.getElementById('ratingForm')

form.addEventListener('submit', rateFunction);
//Step2: Create a async function rateFunction

function checkrating(rate){
    return new Promise((resolve,restore
        if( rate>=3
        resolve('thank you Very Much');
        else
        {
            restore('Thank You!!');
        }
    });
}
async function rateFunction(ev){
    ev.preventDefault();
    try{
         let response = await checkrating(document.getElementById('ratingId').value);

         //document.getElementById('rateMessage').innerHTML=response;

         alert(response);
    }
    catch(value){

        // document.getElementById('rateMessage').innerHTML=value;

        alert(value);
    }
};



//Step2.a: Get the rating value from select id 'ratingId'.
//Step2.b: Create a promise to get the succes message "Thank You!" if rating is greater then 3.
//Step2.c: Use 'await' to make sure async function is executed and diaplay the message of promise in 'p' id of 'rateMessage'.


