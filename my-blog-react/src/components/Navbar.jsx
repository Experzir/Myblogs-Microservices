import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative sticky top-0'>
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                
                <div className='flex items-center'>
                    {/* <img src="/src/assets/Myblog.png" alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 w-full h-[40px]' /> */}
                    <Link to="/pdf-viewer">
                        <button className="flex items-center hover:opacity-[70%] rounded-md">
                            <img className='p-4 w-20 h-20 rounded-full' src={"https://i.ibb.co/8shVjrk/krebs.jpg"} />
                            <h1 className='font-bold text-1xl text-center text-myblogbg pt-0'>{"Ittipat lusuk"}</h1>
                        </button>
                    </Link>
                </div>


                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    {/* <button className='border-none bg-transparent text-myblogbg mr-4'>Login</button>
                    <button className='px-6 py-1.5'>Sign Up</button> */}
                    {/* <img className='p-2 w-10 h-32 rounded-full mx-auto object-cover' src={"https://i.ibb.co/8shVjrk/krebs.jpg"} /> */}
                    {/* <img className='p-4 w-20 h-20 rounded-full ' src={"https://i.ibb.co/8shVjrk/krebs.jpg"} />
                    <h1 className='font-bold text-1xl text-center text-myblogbg pt-7'>{"Ittipat lusuk"}</h1> */}
                    <Link to="/">
                        <button className="flex items-center hover:opacity-[70%] rounded-md">
                        <h1 className='pr-5 font-bold text-1xl text-center text-myblogbg pt-0'>{"Home"}</h1>
                        </button>
                    </Link>
                    <Link to="/pdf-viewer">
                        <button className="flex items-center hover:opacity-[70%] rounded-md">
                            <h1 className='pr-5 font-bold text-1xl text-center text-myblogbg pt-0'>{"About us"}</h1>
                        </button>
                    </Link>
                    <a href="https://github.com/Experzir" className="hover:opacity-[70%] rounded-md font-bold text-1xl text-center text-myblogbg pt-0">{"Github 📤"}</a>
                </div>

            </div>
        </div>
        
    )
}



