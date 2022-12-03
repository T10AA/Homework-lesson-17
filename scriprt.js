// Homework N1

let mainBox = document.querySelector('.N1');

function NameYear () {
    fetch('https://reqres.in/api/unknown', {
    method:'GET'
})
.then(function(getAsText) {
    if (getAsText.status !==200) {
        throw getAsText.status;        
    }
    return getAsText.json();
})
.then(function(getAsJsObject) {
    getAsJsObject.data.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.name} ${item.year}`;
        let ul = document.createElement('ul');
        ul.appendChild(li);
        mainBox.appendChild(ul);
    });
})
.catch(function (error) {
    if (error == 404) {
      let p = document.createElement("p");
      p.textContent = "Page Not FOund";
      mainBox.appendChild(p);
    } else if (error == 500) {
        let p = document.createElement("p");
        p.textContent = "Server Error";
        mainBox.appendChild(p);
    }      
});
}
NameYear();


// Homework N2

let currentPage = 1;
let totalPages;

function Users(page) {
    let request = new XMLHttpRequest();

request.addEventListener('load', function() {
    let gotInfoText = request.responseText;
    let gotIfoJs = JSON.parse(gotInfoText);

    const fragment = new DocumentFragment();
    gotIfoJs.data.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.first_name} ${item.last_name}`;
        li.classList = 'li-xml';
        fragment.appendChild(li);  
    });
    document.getElementById('userList').innerHTML = ' ';
    document.getElementById('userList').appendChild(fragment);

    totalPages = gotIfoJs.total_pages;
});

request.addEventListener('error', function () {
    let p = document.createElement('p');
    p.innerText = 'Server Error';
    document.getElementById('userList').appendChild(p);
});

request.open('GET', 'https://reqres.in/api/users?page=' + page);
request.send();
}

document.getElementById('Previous').addEventListener('click' , function() {
    if (currentPage == 1) {
        return;
    }
    currentPage --;
    Users(currentPage);
});
document.getElementById('Next').addEventListener('click' , function() {
    if (currentPage == totalPages) {
        return;
    }
    currentPage ++;
    Users(currentPage);
});
Users(currentPage);