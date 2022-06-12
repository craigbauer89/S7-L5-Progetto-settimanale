

fetch('users.json').then(response => response.json()).then(data => userlist(data))

function userlist(users) {

    
    console.log(users);
    let list = document.querySelector('.container');
        users.forEach(element => {
            let card = document.createElement('div');
            card.innerHTML = 
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
                                                <p class="card-text">Email: ${element.email}</p>
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

