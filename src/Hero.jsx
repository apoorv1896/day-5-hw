

export default function Hero(){
    return(
        <>
            <section className="bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] w-screen h-screen  bg-cover bg-center px-12 py-28">
                  
                  <div className=" w-[100%] md:w-[48%] flex flex-col items-center mt-10  md:mt-10">
                    <h1 className="md:text-5xl text-3xl font-extrabold">Let us find your</h1>
                    <h2 className="md:text-5xl text-3xl font-extrabold text-red-600">Forever Food.</h2>
                    <p className="md:text-xl text-lg md:mt-10 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className="md:text-xl text-lg mt-3 ">Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                   <div className="md:mt-10 mt-3 ">
                     <button className="px-10 rounded-md py-2 bg-red-600 text-white">Search Now</button>
                     <button className="px-10 rounded-md py-2 bg-white md:ml-5 text-red-600 mt-2  md:-mt-2">Know more</button>
                   </div>
                  </div>

            </section>
        </>
    )
}