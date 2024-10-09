
export default async function PostDetail({params }){
   let postDetail = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
     postDetail = await postDetail.json();
    // console.log(postDetail);

    let comment = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`
      );
      comment = await comment.json();
      console.log(comment)
   return(
    <div className=" border border-blue-100">
        {
            <div className="p-4">
                <h1 className="text-center">Post {postDetail.id}</h1>
                <h1>Post Tittle{postDetail.title}</h1> 
                <h1>{postDetail.body}</h1>
            </div>
        }

        <div> 
            <h2 className="text-pink-400 p-4">Comments</h2>
            {
                comment.map((data)=>(
                    <div className="p-4">
                <h1 className="text-center">Post {data.id}</h1>
                <h1>Post Tittle{data.name}</h1> 
                <h1>Post Tittle{data.email}</h1> 
                <h1>{data.body}</h1>
            </div>
                )
                )
            }

        </div>
       
    </div>
   );
}