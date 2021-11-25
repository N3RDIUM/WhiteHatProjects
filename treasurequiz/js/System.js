class System{
    constructor(){

    }
    authenticate(actualCode,enterredCode){
        if(actualCode === enterredCode){
            return true
        }
        else{
            return false
        }
    }
}