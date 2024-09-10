 const str ="welcome the stripe vs code";
  const genratehash = (str)=>{
    if(str.length>200 || str.trim().length === 0){
        return false;
    }

    str = str.split(" ");
    console.log(str[1].touppercase());
  }