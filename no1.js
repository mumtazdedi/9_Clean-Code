class user { // salah, karena penamaan class harus diawali dengan huruf kapital (Pascal Case). Yang benar adalah 'User'
    var id;
var username;
var password;
}

class userService { // salah, karena class harus diawali dengan huruf kapital (Pascal Case). Yang benar adalah 'UserService'
    user[] users = [];
    
    user[] getallusers() { // salah, karena penamaan function menggunakan camelCase, Yang benar adalah 'getAllUsers'
        return users;
    }

    user getuserbyid(userid) { // salah, karena penamaan function menggunakan camelCase. Yang benar adalah 'getUserById'
        return users.filter(userid);
    }
}

