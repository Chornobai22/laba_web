const register_url = 'http://127.0.0.1:5000/register';

async function register(id) {
    const inputs = document.getElementById(id).elements;
    var id = inputs['Id'].value;
    var surname = inputs['Surname'].value;
    var name = inputs['Name'].value;
    var username = inputs['Username'].value;
    var password = inputs['Password'].value;
    var accessusers = inputs['Accessusers'].value;
    if (password != password) {
        alert("Error password");
        return 0;
    }
    var data = {
        "id": id,
        "name": name,
        "surname": surname,
        "username": username,
        "password": password,
        "accessusers": accessusers
    }
    var url = register_url;
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {
        var res = await response.json();
        if (response.status == 200) {
            var token = res.access_token
            localStorage.setItem('token', token);
            //window.location.replace("./account.html");
        }
        else {
            alert(res.info);
            if (!result) {
                Location.reload() 
            }
        }
    });
}