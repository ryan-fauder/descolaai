
import User from "./core";
/*Corrigir o isAuth */
export const isAuth = () =>
    localStorage.getItem("token") !== '';
export const getToken = () => 
    localStorage.getItem("token");

/* Login e logout*/
export const logout = () => {
    localStorage.removeItem("token");
};


export const login = user => {
  const generated_token = `faketoken${user.id}`
  user.token = generated_token;
  User.update(user);
  localStorage.setItem("token", generated_token);
  localStorage.setItem("user", JSON.stringify(user));
};
/* Validação das informações do login */
export const validate = data => {
    let msgs = [
        '',
        'Nome de usuário já está em uso!',
        'E-mail já está em uso!',
        'Nome de usuário e E-mail já estão em uso!'],
        indice = 0;
    const {username, name, email, password} = data;
    if(!username || !name || !email || !password){
        return "Não foi possível cadastrar, verifique os campos";
    }
    User.index().forEach(element => {
        if(element.username.toUpperCase() === username.toUpperCase()){
           indice+=1;
        }
        if (element.email.toUpperCase() === email.toUpperCase()){
            indice+=2;
        }
    });
    return msgs[indice];
}
export const validateLogin = data => {
    const {email, password} = data;
    if(!email || !password ){
        return 'Preencha todos os campos!';
    }
    const users = User.index();
    const user = users.filter(element => {
        return(
        element.email.toUpperCase() === email.toUpperCase() && element.password === password?
        element:null
        );
    });
    if(user.length === 0 ){
        return 'Senha ou e-mail inválido';
    }
    else{
        login(user[0]);
        return '';
    }
}