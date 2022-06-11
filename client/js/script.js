// let urlAPI = 'https://fakestoreapi.com/users';
// let productsAll = fetch(urlAPI).then(response => response.json());
// fetch('https://fakestoreapi.com/users').then(response => response.json()); 


// function getUsers() {
//     allusers.then(json => console(json))
// }



// fetch('users.json').then(response => response.json())
//   .then(data => {
//     document.getElementById("demo").innerHTML = data;
//     console.log(data);
//   }

// fetch('users.json').then(response => response.json()).then(data => console.log(data))

// document.addEventListener('DOMContentLoaded', function() {
//     // let btnAdd = document.querySelector('#btnAddProduct');
//     // btnAdd.addEventListener('click', () => addProduct(newObj))
//     userlist();
// })


fetch('users.json').then(response => response.json()).then(data => userlist(data))

function userlist(users) {

    
    console.log(users);
    let list = document.querySelector('.container');
        users.forEach(element => {
            let card = document.createElement('div');
            card.innerHTML = 
                            // `
                            // <img src='img/person.png'>
                            // <h2>${element.firstName} ${element.lastName}</h2>
                            // <p>${element.email}</p>
                            
                            // <td><button type="button" onclick="details(${element.id})" class="btn btn-outline-danger btn-sm">More Details</button></td>
                            // <div class="container${element.username}"><div>
                            // `
                            `
                            <div class="col">
                                <div class="card">
                                    <img src="img/person.png" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${element.firstName} ${element.lastName}</h5>
                                        <p class="card-text">${element.email}</p>
                                        <button type="button" onclick="details(${element.id})" class="btn btn-sm">More Details</button>
                                    </div>
                                </div>
                            </div>
                            `

            list.appendChild(card);
            console.log(element.username);
        });
        
}


// function details(id) {
//     let user_id = id;
//     fetch('users.json').then(response => response.json()).then(data => {
                        
//                         moredetails(data,user_id);
//                     })
// }
 
//  function moredetails(users, id) {
    
//     let list = document.querySelector('.container2');
//         users.forEach(element => {
//                 newEL_id = parseInt(element.id);
                
//                 if (id === newEL_id) {
//                     let card = document.createElement('div');
//                     card.innerHTML = `
//                             <p>${element.gender}</p>
//                             <p>${element.username}</p>
//                             <td><button type="button" onclick="removeUser(${element.id})" class="btn btn-outline-danger btn-sm">X</button></td>
//                             `
//                     list.appendChild(card);
//                 }
            
            
//     });

// }


function details(id) {
    
    fetch('users.json').then(response => response.json()).then(data => {
                        
            let list = document.querySelector('.container2');
                data.forEach(element => {
                        newEL_id = parseInt(element.id);
                        
                        if (id === newEL_id) {
                            // let card = document.createElement('div'+id);
                             list.innerHTML = //`
                            //         <h2>${element.firstName} ${element.lastName} Details</h2>
                            //         <p>Gender: ${element.gender}</p>
                            //         <p>Username: ${element.username}</p>
                            //         <td><button type="button" onclick="removeUser(${element.id})" class="btn btn-outline-danger btn-sm">Clear</button></td>
                            //         `
                                    `<div class="row row-cols-1 row-cols-lg-3 g-4">
                                    <div class="col">
                                        <div class="card">
                                            <img src="${element.profileURL}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${element.firstName} ${element.lastName}</h5>
                                                <p class="card-text">Gender: ${element.gender}</p>
                                                <p class="card-text">$Email: ${element.email}</p>
                                                <p class="card-text">Username: ${element.username}</p>
                                                <button type="button" onclick="removeUser(${element.id})" class="btn  btn-sm">Clear</button>
                                            </div>
                                        </div>
                                    </div>
                                    `
                            // list.appendChild(card);
                        }
                    
            });
        
        
                    })
}
 

function removeUser(id) {
    
        let list = document.querySelector('.container2');
            while (list.hasChildNodes()) {  
                list.removeChild(list.firstChild);
            
            }
            
    

}



// function otherdetails(users) {
    
//     console.log(users);
//     let list = document.querySelector('.container2');
//         users.forEach(element => {
//             let card = document.createElement('div');
//             card.innerHTML = `
                            
//                             <p>${element.gender}</p>
//                             <p>${element.username}</p>
//                             <td><button type="button" onclick="removeProduct(${element.username})" class="btn btn-outline-danger btn-sm">X</button></td>
//                             `
//             list.appendChild(card);
//         });
// }


// function getAllProducts() {
//     productsAll.then(json => productsTable(json))
// }

// function productsTable(products) {
//     let table = document.querySelector('#tableProducts');
//     products.forEach(element => {
//         let tr = document.createElement('tr');
//         tr.innerHTML = `
//                         <td>${element.id}</td>
//                         <td>${element.title}</td>
//                         <td>${element.category}</td>
//                         <td>${element.price}</td>
//                         <td><button type="button" onclick="removeProduct(${element.id})" class="btn btn-outline-danger btn-sm">X</button></td>
//                         `
//         table.appendChild(tr);
//     });
// }

// function removeProduct(id) {
//     fetch(urlAPI+id , { method:"DELETE" })
//             .then(res=>res.json())
//             .then(json => {
//                 alert('Prodotto cancellato!!!')
//                 getAllProducts();
//             })
// }

// function addProduct(obj) {
//     fetch(urlAPI,{
//             method:"POST",
//             body:JSON.stringify(obj)
//         })
//             .then(res=>res.json())
//             .then(json=> {
//                 alert('Prodotto Aggiunto!!!')
//                 getAllProducts();
//             })
// }

// document.addEventListener('DOMContentLoaded', function() {
//     let btnAdd = document.querySelector('#btnAddProduct');
//     btnAdd.addEventListener('click', () => addProduct(newObj))
//     getAllProducts();
// })