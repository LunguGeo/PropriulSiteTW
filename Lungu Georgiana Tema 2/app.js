function addTokens(input, tokens){
    if( typeof input !== 'string'||!( input instanceof String)){
        throw new Error("Invalid input");
    }
   
    else if(input.length <6)
    {
        throw new Error("Input should have at least 6 characters at least");
        
    }
    
    for(var i =0;i<tokens.length;i++)
{
    if(typeof((tokens[i].tokenName))!=='string'||!(tokens[i].tokenName instanceof String))
    throw Error('Invalid array format')
}

 if(input.includes('...')!=true){
return input;}

    for(let i=0;i<tokens.length;i++){
        let a=tokens[i]["tokenName"]
        let b="${"+a+"}"
        let c="..."
        let position=input.indexOf('...')
        if(position!==-1){
            input=input.replace(c,b)
        }
    }
    return input
}




const app = {
    addTokens: addTokens
}

module.exports = app;