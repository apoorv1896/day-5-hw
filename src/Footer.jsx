

export default function Footer(){
    return(
         <>
            <div className="flex flex-col items-center md:py-10   bg-slate-200">
                  <div className="flex mt-8">  <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" className="text-3xl"/> <h1 className="text-3xl font-semibold text-blue-700 ml-4">logoipsum</h1> </div>
                       <p className="text-lg md:w-[45%] w-full text-center text-gray-500 mt-8 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                  
                  <ul className="flex md:w-[60%] w-full mt-10 justify-between text-gray-600 " >
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                  </ul>

                  <ul className="flex w-[35%] mt-10 justify-between text-2xl text-gray-600" >
                    <li><i class="fa-brands fa-facebook"></i></li> 
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-solid fa-earth-oceania"></i></li>
                
                  </ul>

            </div>
         </>
    );
  }