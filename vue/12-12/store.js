const STORAGE_KEY = 'todos-vuejs'
export default{
    fetch(){
        return JSON.parse(window.localStorage.geyItem(STORAGE_KEY) || '[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}


// (function(global){
//     var STORAGE_KEY = 'todos-vuejs'
//     var Store = [
//         {
//             'fetch':function(){
//                 return JSON.parse(window.localStorage.geyItem(STORAGE_KEY) || '[]')
//             }
//         },
//         {
//             'save':function(items){
//                  window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
//             }
//         }
//     ]
//     global.Store = Store;

// })(this)