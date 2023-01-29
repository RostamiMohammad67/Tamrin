function User_Mark(prop)
{
    
    let result =Math.round(Math.random()*prop.number)
     return result

}


export function Examp_Result()
{
    let mark=<User_Mark number='20'></User_Mark>
    
    

    
     if(mark>=10)
    {
        return <p>Mark is {mark} and result is : Pass</p>
    }
    else
    {
        return <p>Mark is {mark} and result is : Fail</p>
    }
    
}