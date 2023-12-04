const createEmp = (name,age,cmp,sal,area)=>{
    return new Promise((res ,rej)=>{

        if(typeof name !== "string"|| name ==='' || name === undefined || name === null){
            console.log(`name  is not a valid value ${name}`);
            rej(`name  is not a valid value ${name}`);
        }
        if(typeof age !== "number"|| age === null || age === undefined || age <=0){
            console.log(`age  is not a valid value ${age}`);
            rej(`age  is not a valid value ${age}`);
        }
        if(typeof cmp !== "string"|| cmp === null  || cmp === undefined || cmp === ''){
            console.log(`cmp  is not a valid value ${cmp}`);
            rej(`cmp  is not a valid value ${cmp}`);
        }
        if(typeof sal !== "number"|| sal === null || sal === undefined || sal <=0){
            console.log(`sal  is not a valid value ${sal}`);
            rej(`sal  is not a valid value ${sal}`);
        }
        if(typeof area !== "string"|| area === null || area === undefined || area === ''){
            console.log(`area  is not a valid value ${area}`);
            rej(`area  is not a valid value ${area}`);
        }

        const empdata = res({name,age,cmp,sal,area});

    })
}

const trycatchex = async ( ) => {
    try{
        const op = await createEmp("name",23,"arc",845545,'8997')
        console.log('createEmp',op);
    }catch (error){
        console.log("error is ",error)
    }
    console.log('test after')
} 
trycatchex()