export default class Users{
    static index(){
        return JSON.parse(localStorage.getItem("users"));
    }
    constructor(){
        let registered_users = Users.index();
        const default_users = [
            {
                id: 0,
                username: "admin",
                name:"Administrator",
                email:"admin.admin@admin.istrator",
                token: "",
                password:"admin"
            }
        ]
        if(!registered_users){
            localStorage.setItem("users", JSON.stringify(default_users));
        }
    }
    static show(id){
        let registered_users = Users.index();    
        const searched_user = registered_users.filter(element =>{
            if(element.id === id){
                return element;
            }
            return null
        })
        return searched_user[0];
    }
    static update(user){
        let registered_users = Users.index();    
        registered_users = registered_users.map(element =>{
            if(element.id === user.id){
                element = user;
            }
            return element;
        })
        localStorage.setItem("users", JSON.stringify(registered_users));
    }
    static delete(user){
        let registered_users = Users.index();
        registered_users = registered_users.map(element =>{
            if(element.id === user.id){
                return null;
            }
            return element;
        })
        localStorage.setItem("users", JSON.stringify(registered_users));
    }
    static store(user){
        let registered_users = Users.index();
        registered_users.push({id: registered_users.length, ...user});
        localStorage.setItem("users", JSON.stringify(registered_users));
    }
}
new Users();