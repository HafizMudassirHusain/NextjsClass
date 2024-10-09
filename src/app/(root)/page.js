import PostCard from "../../../componets/PostCard"

 
export default async function Home(){

  let post = await fetch('https://jsonplaceholder.typicode.com/posts')
  post = await post.json()
  console.log(post)
  return(
    <div>
      {
        post.map((data)=><PostCard data={data} key={data.id} />)
      }
    </div>
  )
 }