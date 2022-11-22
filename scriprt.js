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
function users () {
    let request = XMLHttpRequest();
    request.addEventListener('load', function() {
        
    })
}
