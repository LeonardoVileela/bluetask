
class AuthService{

    login(username, password){
        alert(`Login: username = ${username}, Password = ${password}`)
    }
}

export default new AuthService();