// store ,next , action;

export const loggerMiddleware=(store)=>{
    return function(next){
        return function(action){
            console.log("[LOG :"+action.type+" "+ new Date().toDateString());
            
            next(action)
            //log the state
            console.log(store.getState())

        }
    }  
 }
