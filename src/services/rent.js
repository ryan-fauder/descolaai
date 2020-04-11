import Tool from './tool'
export default class Rents{
    static index(){
        return JSON.parse(localStorage.getItem("rents"));
    }
    constructor(){
        let registered_rents = Rents.index();
        if(!registered_rents){
            localStorage.setItem("rents", JSON.stringify([]));
        }
    }
    static indexByIdUser(id_user){
        let registered_rents = Rents.index();    
        const searched_rents = registered_rents.filter(element =>{
            if(element.id_user-id_user === 0){
                return element;
            }
            return null
        })
        return searched_rents;
    }
    static show(id){
        let registered_rents = Rents.index();    
        const searched_rent = registered_rents.filter(element =>{
            if(element.id-id === 0){
                return element;
            }
            return null
        })
        return searched_rent[0];
    }
    static update(rent){
        let registered_rents = Rents.index();    
        registered_rents = registered_rents.map(element =>{
            if(element.id === rent.id){
                element = rent;
            }
            return element;
        })
        localStorage.setItem("rents", JSON.stringify(registered_rents));
    }
    static delete(rent){
        let registered_rents = Rents.index();
        registered_rents = registered_rents.map(element =>{
            if(element.id === rent.id){
                return null;
            }
            return element;
        })
        localStorage.setItem("rents", JSON.stringify(registered_rents));
    }
    static store(tool, user){
        if(tool.amount>0){
            let registered_rents = Rents.index();
            const rent = {id_user:user.id, id_tool:tool.id}
            registered_rents.push({id: registered_rents.length, ...rent});
            localStorage.setItem("rents", JSON.stringify(registered_rents));
            tool.amount -= 1;;
            Tool.update(tool);
        }
        return tool;
    }
}
new Rents();