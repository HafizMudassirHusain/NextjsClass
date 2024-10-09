export const revalidate = 10

export default async function products(){
    let res = await fetch('https://dummyjson.com/quotes/random',{cache:"no-cache"}) ;
    res = await res.json();
    console.log(res)
    
   
    return(
        <div>
            <h1 className="text-center text-black">Quotes</h1>
            <h1 className="text-center text-black">{res.quote}</h1>
        </div>
    )
}


