import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (

    // hero section 



    <div className="mx-24 mt-24 place-items-center">
    <section className="lg:grid-cols-2 sm:grid grid-col-1 lg:gap-8 ">
        <ul>
         <li><h3 className="font-black text-xl sm:text-lg md:text-xl lg:text-2xl">Its Quick & Amusing!</h3></li>
         <li className="flex sm:text-3xl lg:text-5xl font-bold mt-4">
           <h2 className="text-orange-500">Th</h2>
         <h2>e Art of speed </h2>
          </li>
         
         <li><h3 className="sm:text-3xl lg:text-5xl mt-2 font-bold lg:mt-4 sm:mt-1"> food Quality</h3></li>

         <li>
         <p className="sm:mt-8 md:mt-5 lg:mt-10 mt-5 sm:text-sm md:text-lg lg:text-xl leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Varius sed pharetra dictum neque massa congue</p>
        
         
         <Link href="/">
         <button className="text-white bg-orange-500 hover:text-orange-500 hover:font-semibold hover:bg-white hover:border-2 hover: border-orange-500 rounded-full px-4 py-2  sm:px-6 sm:py-3 sm:text-sm md:text-bese lg:text-lg mt-7">See Menu</button>

                  </Link>
         </li>
         <br></br>
         </ul>

        <ul className="">

        <li className="relative w-full h-64 lg:h-80">
          <Image
           className="object-contain lg:object-cover sm:w-64 sm:h-60 sm:object-cover lg:w-96 lg:h-auto md:w-96 md:h-80 w-96 mx-auto" width={800} height={0} src="/12345.jpg" alt="Egg"/>
        </li>
        <br></br>
        </ul>



       
        <br></br>

    </section>


    {/* second 2 about  */}


    <section className="grid lg:grid-cols-2 gap-24 mt-24 items-center">

  <ul className="space-y-2">
    <li className="font-black text-orange-500 sm:text-xs md:text-base lg:text-2xl">
      About us
    </li>

    <li className="flex items-center space-x-2 text-gray-950 md:text-xl sm:text-lg lg:text-4xl font-bold">
      <h2 className="text-orange-500">We</h2>
      <h2 className="text-white" >Create the best</h2>
    </li>

    <h3 className=" md:text-xl sm:text-lg lg:text-4xl font-bold">
      foody product
    </h3>

    <li>
      <p className="lg:text-lg md:text-base sm:text-sm text-justify mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ex sunt
        numquam quam consequatur nostrum unde maxime, earum at totam expedita.
        Molestiae in ab, nihil cumque blanditiis eos sit natus.
      </p>
    </li>

    <li id="one" className="flex justify-start items-start gap-3  lg:text-base md:text-sm sm:text-xs mt-6">
      <Image
        width={30}
        height={30}
        className="lg:w-6 w-5 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 mt-1"
        src="/checkh.png"
        alt="checkmark symbol"
      />
      <h5>Lacus nisi, et ac dapibus sit eu velit in consequat.</h5>
    </li>

    <li id="two" className="flex justify-start items-start gap-3 lg:text-base md:text-sm sm:text-xs mt-6">
      <Image
        width={30}
        height={30}
        className="lg:w-6 w-5 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 mt-1"
        src="/checkh.png"
        alt="checkmark symbol"
      />
      <h5>
        Quisque diam pellentesque bibendum non dui volutpat fringilla.
      </h5>
    </li>

    <li id="three" className="flex justify-start items-start gap-3 lg:text-base md:text-sm sm:text-xs mt-6">
      <Image
        width={30}
        height={30}
        className="lg:w-6 w-5 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 mt-1"
        src="/checkh.png"
        alt="checkmark symbol"
      />
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h5>
    </li>

    <li>
      <button className="text-white bg-orange-500 hover:text-orange-500 hover:font-semibold hover:bg-white hover:border-2 hover:border-orange-500 rounded-full w-28 h-11 mt-6">
        <Link href="/about">Read more</Link>
      </button>
    </li>
  </ul>

  <ul className="flex flex-col space-y-2">
    <li>
      <Image
        width={500}
        height={300}
        className="rounded-md object-cover w-full h-auto"
        src="/anda222.jpg"
        alt="Egg Dish"
      />
    </li>

    <li className="flex gap-2">
      <div className="w-1/2">
        <Image
          width={245}
          height={150}
          className="rounded-md object-cover w-full h-auto"
          src="/dish333.jpg"
          alt="Egg Yummy Dish"
        />
      </div>
      <div className="w-1/2">
        <Image
          width={250}
          height={150}
          className="rounded-md object-cover w-full h-auto"
          src="/dish113.jpg"
          alt="Sandwich Dish"
        />
      </div>
    </li>
  </ul>
</section>
    


    {/* section 3  food item  */}




    <section className="mt-32 items-center">
      
      <h2 className="font-black text-orange-500 sm:text-sm lg:text-2xl text-center">Food Category</h2>
      <ul>
      <li className="flex justify-center items-start md:items-center space-x-0 md:space-x-2  sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-4 ">
      <h2 className="text-orange-500">Ch</h2>
      <h2>oose Food Iteam</h2></li>
      </ul>
      
      
      
      <ul className="flex flex-col  md:flex-row items-center mt-10 gap-4 justify-center">
        
        
      <li id="dish one">
          <Link  href="/"> 
          <div className="relative bg-[url('/dish210.jpg')] bg-cover w-52 h-52 rounded-md">
         
          <div className="opacity-0 hover:opacity-100">
          <h4 className="bg-white text-orange-500 font-semibold text-center absolute bottom-20 rounded-md w-24 right-20">Save 30% </h4>
          <h6 className="bg-orange-500 text-white font-semibold text-center absolute bottom-10 py-1 rounded-md w-36 h-8" >Fast Food Dish</h6>
          </div>
           
          </div>
      </Link> 
        </li>


        <li id="dish two">
          <Link  href="/"> 
          <div className="relative bg-[url('/burger10.jpg')] bg-cover w-52 h-52 rounded-md">
         
          <div className="opacity-0 hover:opacity-100">
          <h4 className="bg-white text-orange-500 font-semibold text-center absolute bottom-20 rounded-md w-24 right-20">Save 30% </h4>
          <h6 className="bg-orange-500 text-white font-semibold text-center absolute bottom-10 py-1 rounded-md w-36 h-8" >Fast Food Dish</h6>
          </div>
           
          </div>
      </Link> 
        </li>

        <li id="dish three">
          <Link  href="/"> 
          <div className="relative bg-[url('/dish333.jpg')] bg-cover w-52 h-52 rounded-md">
         
          <div className="opacity-0 hover:opacity-100">
          <h4 className="bg-white text-orange-500 font-semibold text-center absolute bottom-20 rounded-md w-24 right-20">Save 30% </h4>
          <h6 className="bg-orange-500 text-white font-semibold text-center absolute bottom-10 py-1 rounded-md w-36 h-8" >Fast Food Dish</h6>
          </div>
           
          </div>
      </Link> 
        </li>

        <li id="dish four">
          <Link  href="/"> 
          <div className="relative bg-[url('/doonat0.jpg')] bg-cover bg-right w-52 h-52 rounded-md ">
         <div className="opacity-0 hover:opacity-100">
          <h4 className="bg-white text-orange-500 font-semibold text-center absolute bottom-20 rounded-md w-24 right-20">Save 30% </h4>
          <h6 className="bg-orange-500 text-white font-semibold text-center absolute bottom-10 py-1 rounded-md w-36 h-8" >Fast Food Dish</h6>
          </div>
          </div>
      </Link> 
        </li>
        
        </ul>
    </section>




    {/* section 4 experience */}

    <section className="mt-28 items-center mx-28">

      <h3 className="font-black text-orange-500 lg:hidden md:block md:text-xl sm:text-lg text-hidden">Why Chose us</h3>
      <div className="mt-5 lg:grid grid-cols-2 md:grid-col-1 gap-24">
        <ul>
        <ul className="flex lg:gap-2 md:gap-2 sm:gap-2 gap-2 items-end object-cover">
        <li id="image one">
           <Link href="/"> 
           <Image className="hover:w-80 w-72 h-auto rounded-md" width={280} height={0} src="/dish777.jpg" alt="Yummy dish"/></Link>
           </li>
        <li id="image two">
          <Link href="/">
          <Image className="hover:w-64 rounded-md w-56  h-auto" width={230} height={0} src="/burger01.jpg" alt="burger dish"/></Link>
          </li>
        </ul>

        <ul className="flex lg:gap-2 md:gap-2 sm:gap-2 gap-2  lg:mt-2 md:mt-2 sm:mt-2 mt-2  items-start object-cover">
          <li id="id=image three">
            <Link href=""><Image className="hover:w-52 rounded-md" width={200} height={0} src="/dish999.jpg" alt="Dish"/></Link>
             </li>

             <li id="image four">
             <Link href=""><Image className="hover:w-44 rounded-md" width={170} height={0} src="/burger222.jpg" alt="burger dish"/></Link>
             </li>

             <li id="image five">
             <Link href=""><Image className="hover:w-36 rounded-md" width={130} height={0} src="/dish444.jpg" alt="dish "/></Link>

             <Link id="id=image six" href="/"><Image className="hover:w-36 rounded-md lg:mt-2 md:mt-2 mt-2 sm:mt-2" width={130} height={0} src="/dish202.jpg" alt=" dish"/></Link>
             </li>
        </ul>
        </ul>



        <ul>
          <li className="font-black text-orange-500 sm:text-sm lg:text-2xl md:hidden sm:hidden hidden lg:block mt-6">Why Chose us</li>
          <li className=" lg:text-4xl md:text-2xl text-xl sm:text-lg font-bold mt-4 flex ">
          <h2 className="text-orange-500">Ex</h2>
            <h2>ta ordinary taste</h2>
          </li>
          <li>
            <h2 className="text-xl lg:text-4xl md:text-2xl sm:text-lg font-bold mt-1">And Experienced</h2>
            </li>
            <li>
              <p className="mt-7 lg:text-lg md:text-base sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus omnis libero illo soluta quae ut necessitatibus ipsum fugiat vitae corporis voluptatum, error aperiam fugit quas atque dolorum veniam dicta.</p>
            </li>

            <div className="flex lg:gap-10 md:gap-6 sm:gap-4 gap-3 mt-14 ">
            <li className="place-items-center">
            <Link id="image one" href="/menu">
            <Image className="hover:w-16 w-14 bg-sky-500 rounded-md px-1 py-1 mt-3 invert  " width={50} height={0} src="/burgericon0.png" alt=" icon" /></Link>
            <h5 className="lg:text-sm md:text-xs sm:text-xs text-center mt-1">Fast Food</h5>
            </li>

            <li className="place-items-center">
            <Link id="id=image two" href="/menu">
            <Image className="hover:w-16  w-14 rounded-md mt-3 bg-sky-500 px-1 py-1 invert" width={50} height={0} src="/lunch0.png" alt="icon" /></Link>
            <h5 className="lg:text-sm md:text-xs sm:text-xs text-center mt-1">Lunch</h5>
            </li>

            <li className="place-items-center">
            <Link id="id=image three" href="/menu">
            <Image className="hover:w-16 w-14 rounded-md mt-3 bg-sky-500 px-1 py-1 invert" width={50} height={0} src="/dinnerr0.png" alt="icon" /></Link>
            <h5 className="lg:text-sm md:text-xs sm:text-xs text-center mt-1">Dinner</h5>
            </li>
            </div>
            
            <div  className="border-s-8 mt-8 items-center bg-white rounded-md flex  md:flex-row text-black border-orange-500 justify-around w-64 h-14">
            <li>
              <h6 className="text-orange-500 lg:text-4xl md:text-3xl sm:text:2xl font-semibold mt-2">30+</h6></li>
             <li> <h6>Years of </h6>
              <h6 className="lg:text-base md:text-sm sm:text:xs font-bold">Experenced</h6>
            </li>
            </div>
        </ul>
      </div>

    </section>


{/* section5 bg image */}




<section className="items-center">
  <div className="relative h-80  bg-cover bg-center mt-24 bg-[url('/machlii.jpg')] w-screen brightness-200">
  <div className="absolute inset-0 bg-black bg-opacity-90 items-center justify-center">



    <ul className="flex justify-between gap-4 lg:gap-6 md:gap-3 sm:gap-2 mx-16 text-center mt-20">
      
      <li id="one" className="flex flex-col items-center justify-center text-orange-700 font-semibold">
      <Link  href="">
      <Image className="lg:w-24 md:w-16 sm:w-12 w-8 rounded-md mt-3 invert" width={50} height={0} src="/chef-hat0.png" alt="chef-hat" />
      <h5 className="mt-5 text-[10px] lg:text-base md:text-sm sm:text-xs ">Professional Chefs</h5>
      <h6 className="font-semibold text-base mt-1 lg:text-2xl md:text-xl sm:text-lg ">420</h6>
      </Link>
      </li>

      <li id="two" className="flex flex-col items-center justify-center text-orange-700 font-semibold">
      <Link  href="/menu"><Image className="lg:w-24 md:w-16 sm:w-12 w-8 rounded-md mt-3 invert" width={50} height={0} src="/burger&drink0.png" alt="chef-hat" />
      <h5 className="mt-5 text-[10px] lg:text-base md:text-sm sm:text-xs ">Items Of Food</h5>
      <h6 className="mt-1 lg:text-2xl md:text-xl sm:text-lg text-base">320</h6></Link>
      </li>

      <li id="three" className="flex flex-col items-center justify-center text-orange-700 font-semibold">
      <Link href="/">
      <Image className="lg:w-24 md:w-16 sm:w-12 w-8 rounded-md mt-3 invert" width={50} height={0} src="/fork0.png" alt="chef-hat" />
      <h5 className="mt-5 text-[10px] lg:text-base md:text-sm sm:text-xs">Years Of Experienced</h5>
      <h6 className="font-semibold mt-1 text-base lg:text-2xl md:text-xl sm:text-lg ">30+</h6>
      </Link>
      </li>

      <li id="four" className="flex flex-col items-center justify-center text-orange-700 font-semibold">
      <Link href=""><Image className="lg:w-24 md:w-16 sm:w-12 w-8 rounded-md mt-3 invert" width={50} height={0} src="/pizza0.png" alt="chef-hat" />
      <h5 className="mt-5 text-[10px] lg:text-base md:text-sm sm:text-xs">Happy Costomers</h5>
      <h6 className=" mt-1 lg:text-2xl md:text-xl sm:text-lg text-base">220</h6>
      </Link>
      </li>
    </ul>

  </div>
  </div>
</section>


{/* section 6 menu */}




<section className="mt-24 items-center">


  <h3 className="font-black text-orange-500 sm:text-sm lg:text-2xl text-center">Choose & pick</h3>
  <ul className="text-2xl lg:text-4xl md:text-2xl sm:text-xl font-bold mt-3 flex  justify-center">
  <h2 className="text-orange-500">Fr</h2>
  <h2>om Our Menu</h2>
  </ul>

  <ul className=" flex flex-col md:flex-row gap-24 mt-7 ">

  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/breakfast">Breakfast</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/lunch">Lunch</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/dinner">Dinner</Link></li>
  <li className="hover:text-npmorange-500 hover:font-semibold hover:text-lg"><Link href="/dessert">Dessert</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/drink">Drink</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/snak">Snak</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/suops">Suops</Link></li>
  </ul>




  <div className="flex flex-col md:flex-row gap-10 mt-12 items-center">

    <Link href="/menu"><Image className="rounded-md mt-3" width={360} height={0} src="/6789.jpg" alt="chef-hat" /></Link>

    <div className="flex gap-10">
      <ul>
    <Link id="one"  href="/">
      <ul className="flex flex-col md:flex-row gap-2 items-start mt-4">
      <li><Image className="w-14 h-14 rounded-md " width={100} height={0}  src="/dish150.jpg" alt="dish" />
      </li>
      <li>
        <h3 className="font-semibold text-sm">Lettuce Leaf</h3>
        <p className="text-xs">Lacus nisi, et as dapibus velit in consequat.</p>
        <h3 className="text-orange-500 font-bold text-sm">12.5$</h3>
      </li>
      </ul>
      </Link>


      <Link id="two"  href="/">
      <ul className="flex flex-col md:flex-row gap-2 items-start mt-4">
      <li>
        <Image className="w-14 h-14 rounded-md " width={100} height={0}  src="/burger222.jpg" alt="dish" />
      </li>
      <li>
        <h3 className="font-semibold text-sm">Fresh Breakfast</h3>
        <p className="text-xs">Lacus nisi, et as dapibus velit in consequat.</p>
        <h3 className="text-orange-500 font-bold text-sm">12.5$</h3>
      </li>
      </ul>
      </Link>

      <Link id="three"  href="">
      <ul className="flex flex-col md:flex-row gap-2 items-start mt-4">
      <li><Image className="w-14 h-14 rounded-md " width={100} height={0}  src="/machli0.jpg" alt="dish" />
      </li>
      <li>
        <h3 className="font-semibold text-sm">Mild Butter</h3>
        <p className="text-xs">Lacus nisi, et as dapibus velit in consequat.</p>
        <h3 className="text-orange-500 font-bold text-sm">12.5$</h3>
      </li>
      </ul>
      </Link>


      <Link id="four"  href="">
      <ul className="flex flex-col md:flex-row gap-2 items-start mt-4">
      <li><Image className="w-14 h-14 rounded-md " width={100} height={0}  src="/dish8.jpg" alt="dish" />
      </li>
      <li>
        <h3 className="font-semibold text-sm">Fresh Bread</h3>
        <p className="text-xs">Lacus nisi, et as dapibus velit in consequat.</p>
        <h3 className="text-orange-500 font-bold text-sm">12.5$</h3>
      </li>
      </ul>
      </Link>
      </ul>

      <ul>

      <Link id="five"  href="">
      <ul className="flex flex-col md:flex-row gap-2 items-start mt-4">
      <li><Image className="w-14 h-14 rounded-md " width={50} height={0}  src="/dish2222.jpg" alt="dish" />
      </li>
      <li>
        <h3 className="font-semibold text-sm">Glow Cheese</h3>
        <p className="text-xs">Lacus nisi, et as dapibus velit in consequat.</p>
        <h3 className="text-orange-500 font-bold text-sm">12.5$</h3>
      </li>
      </ul>
      </Link>


      <Link id="six"  href="">
      <ul className="flex flex-col md:flex-row gap-2 items-start mt-4">
      <li><Image className="w-14 h-14 rounded-md " width={100} height={0}  src="/icecream01.jpg" alt="dish" />
      </li>
      <li>
        <h3 className="font-semibold text-sm">Italian Pizza</h3>
        <p className="text-xs">Lacus nisi, et as dapibus velit in consequat.</p>
        <h3 className="text-orange-500 font-bold text-sm">12.5$</h3>
      </li>
      </ul>
      </Link>



      <Link id="seven"  href="">
      <ul className="flex flex-col md:flex-row gap-2 items-start mt-4">
      <li><Image className="w-14 h-14 rounded-md " width={100} height={0}  src="/dish120.jpg" alt="dish" />
      </li>
      <li>
        <h3 className="font-semibold text-sm">Sllice Beef</h3>
        <p className="text-xs">Lacus nisi, et as dapibus velit in consequat.</p>
        <h3 className="text-orange-500 font-bold text-sm">12.5$</h3>
      </li>
      </ul>
      </Link>

      <Link id="eight"  href="">
      <ul className="flex flex-col md:flex-row gap-2 items-start mt-4">
      <li><Image className="w-14 h-14 rounded-md " width={100} height={0}  src="/burger10.jpg" alt="dish" />
      </li>
      <li>
        <h3 className="font-semibold text-sm">Mushaom Pizza</h3>
        <p className="text-xs">Lacus nisi, et as dapibus velit in consequat.</p>
        <h3 className="text-orange-500 font-bold text-sm">12.5$</h3>
      </li>
      </ul>
      </Link>
      </ul>


    </div>

  </div>
</section>



{/* section7 chefs */}


<section className="mt-32 items-center ">
      
      <h2 className="font-black text-orange-500 sm:text-sm lg:text-2xl text-center"> Chefs</h2>
      <ul>
      <li className=" text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mt-4 flex  justify-center">
      <h2 className="text-orange-500">Me</h2>
      <h2>et Our Chef</h2></li>
      </ul>


      <ul className="flex flex-col md:flex-row mt-10 gap-4 justify-center">


        <li id="chef one">
          <Link  href="/"> 
          <div className="relative bg-[url('/chef1.jpg')] bg-cover w-56 h-48 rounded-md">
         
          <div className="bg-gray-500 py-1 rounded-bl-md w-28 absolute bottom-0 ">
          <h4 className="text-sm font-semibold ml-2">D.Estwood </h4>
          <h6 className="ml-2 text-xs" >Chief Chef</h6>
          </div>
           
          </div>
      </Link> 
        </li>

        <li id="chef two">
          <Link  href="/"> 
          <div className="relative bg-[url('/chef2.jpeg')] bg-cover w-56 h-48 rounded-md">
         
          <div className="bg-white rounded-bl-md py-1 text-gray-950 w-28 absolute bottom-0 ">
          <h4 className="text-sm font-semibold ml-2">D.Scoriesh </h4>
          <h6 className="ml-2 text-xs" >Assistant Chef</h6>
          </div>
           
          </div>
      </Link> 
        </li>

        <li id="chef three">
          <Link  href="/"> 
          <div className="relative bg-[url('/chef3.jpeg')] bg-cover w-56 h-48 rounded-md">
         
          <div className="bg-white rounded-bl-md py-1 text-gray-950 w-28 absolute bottom-0 ">
          <h4 className="text-sm font-semibold ml-2">M. William </h4>
          <h6 className="ml-2 text-xs" >Advertising Chef</h6>
          </div>
           
          </div>
      </Link> 
        </li>

        <li id="chef four">
          <Link  href="/"> 
          <div className="relative bg-[url('/chef4.jpeg')] bg-cover w-56 h-48 rounded-md">
         
          <div className="bg-white py-1 rounded-bl-md text-gray-950 w-28 absolute bottom-0 ">
          <h4 className="font-semibold ml-2 text-sm">W.Readfoad </h4>
          <h6 className="ml-2 text-xs" > Chef</h6>
          </div>
           
          </div>
      </Link> 
        </li>
        </ul>
        
        <div className="flex flex-col md:flex-row justify-center items-center mt-7">
        <Link className="" href="/">
        <button className="text-white hover:bg-orange-500 hover:font-semibold border border-orange-500 rounded-full w-28 h-10 mt-7 ">See More </button>
        </Link> 
        </div>  
    </section>



    {/* section 8 clinet */}


    <section className="mt-24 mx-28">
      <h5 className="font-black sm:text-sm lg:text-2xl  text-base text-orange-500">Jestimonials</h5>
      <h4 className=" text-xl sm:text-lg md:text-2xl lg:text-4xl font-bold mt-2">What our client are saying</h4>
      <div className="bg-white text-black place-items-center mt-20 relative">

        <br></br>
        <br></br>
        
  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
    <Image className="rounded-full w-24"width={100} height={100}   src="/client0.jpg"alt="Client"/>
    
  </div>

  
    <Image className="mx-auto mt-7" width={50}  height={50} src="/comment01.png" alt="Comment"/>
    
  
            <p className="text-center text-base sm:text-xs md:text-sm lg:text-base mx-28 mt-7 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit perferendis esse deserunt itaque? Quo voluptatum vero iste quas necessitatibus, dolorem libero similique maiores non mollitia ex excepturi ullam debitis. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis nihil unde deleniti? Aut error sed, necessitatibus, placeat illum voluptate quod similique laudantium numquam officia sunt ducimus minima magnam labore.
      </p>

      <ul className="flex mt-8 gap-1">
      <li><Image width={20} height={0} src="/starorange0.png" alt="starorange"/></li>
      <li><Image width={20} height={0} src="/starorange0.png" alt="starorange"/></li>
      <li><Image width={20} height={0} src="/starorange0.png" alt="starorange"/></li>
      <li><Image width={20} height={0} src="/starorange0.png" alt="starorange"/></li>
      <li><Image width={20} height={0} src="/star0.png" alt="star"/></li>
      </ul>

      <h3 className="font-semibold text-xl mt-5">Alamin Hasan</h3>
      <h5 className=" mt-2">Food Specialist</h5>
      <br></br>
      <br></br>
      </div>


      <ul className="flex justify-center mt-2 place-items-center ">
      <li><Image className="w-7 mt-1" width={50} height={0} src="/dot0.png" alt="dot"/></li>
      <li><Image className="w-16" width={100} height={0} src="/33dot01.png" alt="3dot"/></li>

      </ul>


    </section>




    {/* section 9  */}

    <section className="flex flex-col md:flex-row gap-4 bg-[url('/back.jpg')] bg-cover w-screen brightness-150 ">
    <div>
    <Image className=" mt-1 h-full brightness-200 " width={1000} height={0} src="/dish001.jpg" alt="dot"/>
    </div>

    <div className="sm:w-full md:w-full">
    <ul className="text-right items-end mt-10 mr-16">
        <li className="font-black text-orange-500 sm:text-sm lg:text-2xl">Restaurent Allow Process</li>

        <li className="flex justify-end  text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mt-4">
          <h2 className="text-orange-500">We</h2>
          <h6 className="text-gray-950 md:hidden">-</h6>
        <h2>Document Every Food</h2></li>
        <li><h3 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mt-4">Bean Process untile it is saved</h3></li>
        <li><p className="mt-7 text-base sm:text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ex sunt numquam quam consequatur nostrum unde maxime, earum at totam expedita.</p></li>

        <ul className="flex  justify-end items-center gap-8 mt-10">
        <li>
        <Link href="/"><button className="text-white hover:bg-orange-500 hover:font-semibold text-base sm:text-sm md:text-base lg:text-lg border border-orange-500 rounded-full w-28 h-10 ">Read More</button></Link>
        </li>

        <li>
          <Link  className="flex items-center gap-3" href="/">
      <Image className="rounded-full w-12" width={40} height={0} src="/video0.png" alt="3dot"/>
      <h5 className="text-white text-base sm:text-sm md:text-base lg:text-lg">Play Video</h5>
      </Link>
      </li>
        </ul>
      
      </ul>
      <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
   

    

    </section>

    {/* section10 News & Blogs*/}


<section className="mt-24">

  <div>
  <h2 className="font-black text-orange-500 sm:text-sm lg:text-2xl text-center">Blog past</h2>
      <ul>
      <li className=" text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mt-4 flex justify-center">
      <h2 className="text-orange-500">La</h2>
      <h2>test News & Blog</h2></li>
      </ul>

<div className="flex flex-col md:flex-row justify-center gap-5 mt-8 ">
      <div id="one" className="border-white border w-80">
      <Link href="/blog">
      <Image className="w-80 h-80" width={300} height={0} src="/burger10.jpg" alt="burger"/>
      <div className="mx-7">
      <h6 className="text-xs mt-4 text-orange-500">10 February 2022</h6>
      <h4 className="text-sm font-semibold mt-4">Pallentesque Non Efficitur Mi Aliquam Conballis Mi Quis</h4>

      <ul className="flex  justify-between mt-7 py-4">
      <li className="text-xs">Learn More</li>
      <li className="flex  gap-2">
      <Image className="w-5 h-5" width={20} height={0} src="/like00.png" alt="like"/>
      <Image className="w-5 h-5" width={20} height={0} src="/comment111.png" alt="comment"/>
      <Image className="w-5 h-5" width={20} height={0} src="/share11.png" alt="share"/>
      </li>
      </ul>

      </div>

      </Link>


      </div>

      <div id="two" className="border-white border w-80">
      <Link href="/blog">
      <Image className="w-80 h-80" width={300} height={0} src="/pizza01.jpeg" alt="pizza"/>
      <div className="mx-7">
      <h6 className="text-xs mt-4 text-orange-500">10 February 2022</h6>
      <h4 className="text-sm font-semibold mt-4">Pallentesque Non Efficitur Mi Aliquam Conballis Mi Quis</h4>

      <ul className="flex  justify-between mt-7 py-3">
      <li className="text-xs">Learn More</li>
      <li className="flex gap-2">
      <Image className="w-5 h-5" width={20} height={0} src="/like00.png" alt="like"/>
      <Image className="w-5 h-5" width={20} height={0} src="/comment111.png" alt="comment"/>
      <Image className="w-5 h-5" width={20} height={0} src="/share11.png" alt="share"/>
      </li>

      </ul>

      </div>

      </Link>


      </div>


      <div id="three" className="border-white border w-80">
      <Link href="/blog">
      <Image className="w-80 h-80" width={300} height={0} src="/dish777.jpg" alt="sandwich"/>
      <div className="mx-7">
      <h6 className="text-xs mt-4 text-orange-500">10 February 2022</h6>
      <h4 className="text-sm font-semibold mt-4">Pallentesque Non Efficitur Mi Aliquam Conballis Mi Quis</h4>

      <ul className="flex  justify-between mt-7 py-3">
      <li className="text-xs">Learn More</li>
      <li className="flex  gap-2">
      <Image className="w-5 h-5" width={20} height={0} src="/like00.png" alt="like"/>
      <Image className="w-5 h-5" width={20} height={0} src="/comment111.png" alt="comment"/>
      <Image className="w-5 h-5" width={20} height={0} src="/share11.png" alt="share"/>
      </li>

      </ul>

      </div>

      </Link>


      </div>

      </div>
        
  </div>

</section>


    </div>

    );
}
