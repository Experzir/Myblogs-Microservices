import { useParams } from 'react-router-dom';
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function BlogsContent({blogs}) {
    console.log("Blog Content")

    const {id}=useParams()


    let blog={}
    if(blog){
            let arr = blogs.data.filter(blog=> blog.blogId == id)
            blog=arr[0]

    }else{
        blog={}
    }

    return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-2 '>
                    <img className='h-56 w-full object-cover' src={blog.coverImage} />
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
                    <div className='pt-5 line-break'>{blog.content}</div>

                </div>

                <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                    <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.userImage} />
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.userName}</h1>
                        <p className='text-center text-gray-900 font-medium'>{blog.userDesc}</p>
                    </div>

                </div>


            </div>

        </div>
    </div>
        
    )
}