export default class Tools{
    static index(){
        return JSON.parse(localStorage.getItem("tools"));
    }
    constructor(){
        let registered_tools = Tools.index();
        const default_tools = [
            {
                id: 0,
                name:"Chave de fenda",
                amount: 1,
                description: "Uma ferramenta com pouco tempo de uso.",
                id_user: 0,
                diary_cost: 10
            },
            {
                id: 1,
                name:"Chave de fenda",
                amount: 1,
                description: "Uma ferramenta com pouco tempo de uso.",
                id_user: 0,
                diary_cost: 10
            },
            {
                id: 2,
                name:"Chave de fenda",
                amount: 1,
                description: "Uma ferramenta com pouco tempo de uso.",
                id_user: 0,
                diary_cost: 10
            },
            {
                id: 3,
                name:"Chave de fenda",
                amount: 1,
                description: "Uma ferramenta com pouco tempo de uso.",
                id_user: 0,
                diary_cost: 10
            },
            {
                id: 4,
                name:"Chave de fenda",
                amount: 1,
                description: "Uma ferramenta com pouco tempo de uso.",
                id_user: 0,
                diary_cost: 10
            },
            {
                id: 5,
                name:"Chave de fenda",
                amount: 1,
                description: "Uma ferramenta com pouco tempo de uso.",
                id_user: 0,
                diary_cost: 10
            },
            {
                id:6,
                name:"Chave de fenda",
                amount: 1,
                description: "Uma ferramenta com pouco tempo de uso.",
                id_user: 0,
                diary_cost: 10
            }, {
                id: 7,
                name:"Chave de fenda",
                amount: 1,
                description: "Uma ferramenta com pouco tempo de uso.",
                id_user: 0,
                diary_cost: 10
            }
        ]
        if(!registered_tools){
            localStorage.setItem("tools", JSON.stringify(default_tools));
        }
    }
    static show(id){
        let registered_tools = Tools.index();    
        const searched_tool = registered_tools.filter(element =>{
            if(element.id-id === 0){
                return element;
            }
            return null
        })
        return searched_tool[0];
    }
    static indexByIdUser(id_user){
        let registered_tools = Tools.index();    
        const searched_tools = registered_tools.filter(element =>{
            if(element.id_user-id_user === 0){
                return element;
            }
            return null
        })
        return searched_tools;
    }
    static update(tool){
        let registered_tools = Tools.index();    
        registered_tools = registered_tools.map(element =>{
            if(element.id-tool.id === 0){
                element = tool;
            }
            return element;
        })
        localStorage.setItem("tools", JSON.stringify(registered_tools));
    }
    static delete(tool){
        let registered_tools = Tools.index();
        registered_tools = registered_tools.filter(element =>{
            return element.id - tool.id  !== 0 ? element : null;
        })
        localStorage.setItem("tools", JSON.stringify(registered_tools));
    }
    static store(tool){
        let registered_tools = Tools.index();
        registered_tools.push({id: registered_tools[registered_tools.length - 1].id + 1 || 0, ...tool});
        localStorage.setItem("tools", JSON.stringify(registered_tools));
    }
    static verifyDataTool(data){
        const {name, description, amount, diary_cost} = data;
        if(!name || !description || !amount || !diary_cost){
            return 'Preencha todos os campos!'
        }
        else if(amount<1){
            return 'Quantidade inválida'
        }
        else if(diary_cost<0){
            return 'Custo diário inválido'
        }
        return ''
    }
}
new Tools();