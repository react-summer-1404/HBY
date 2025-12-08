const mediaQuery=(maxWidth,matchCase,NotMatchingCase)=>{
    let x=window.matchMedia(`(min-width:${maxWidth})`);
    if(x.matches){
        return matchCase;
    }
    else{
        return NotMatchingCase;
    }
}
export default mediaQuery