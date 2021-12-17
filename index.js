// Add your code here
function submitData(userName, userEmail){
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //"Content-Type": "application/json",
      //Accept: "application/json",
    },
    body: JSON.stringify({name: `${userName}`, email: `${userEmail}`})
  })
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    //console.log(data.id);
    const body = document.querySelector('body');
    //const div = document.createElement('div');
    const newItemId = data.id
    const p = document.createElement('p');
    p.textContent = newItemId;
    body.append(p);
    //div.appendChild(p);
    //body.appendChild(div);
    //console.log(body);
  })
  .catch(errorObj => {
    //alert('SOMETHING WENT WRONG!')
    //alert(`${errorObj.message}`)
   //console.log(errorObj.message)
   const body = document.querySelector('body');
   const errorMessage = errorObj.message
   const p = document.createElement('p');
    p.textContent = errorMessage;
    body.append(p);
  })
}







/*
const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  });
*/
