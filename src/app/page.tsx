import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (

    // hero section 



    <div className="mx-24 mt-24">
    <section className="grid grid-cols-2 ">
        <ul>
         <li><h3 className="font-black text-2xl">Its Quick & Amusing!</h3></li>
         <li className="flex text-5xl font-bold mt-4"> <h2 className="text-orange-500">Th</h2>
         <h2>e Art of speed </h2> </li>
         <li><h3 className="text-5xl font-bold mt-4"> food Quality</h3></li>
         <li><p className="mt-7 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Varius sed pharetra dictum neque massa congue</p></li>
        
         <li>
         <Link href="/">
         <button className="text-white bg-orange-500 hover:text-orange-500 hover:font-semibold hover:bg-white hover:border-2 hover: border-orange-500 rounded-full w-28 h-11 mt-7">See Menu</button>
         </Link>
         </li>
        </ul>

        <ul>
        <li>
          <Image width={500} height={0} src="/12345.jpg" alt="Egg"/>
        </li>
        </ul>
        <br></br>

    </section>


    {/* second 2 about  */}


    <section className="grid grid-cols-2 gap-24 mt-24 items-center">
    
      <ul>
        <li className="font-black text-orange-500 text-2xl">About us</li>

        <li className="flex  text-4xl font-bold mt-4">
          <h2 className="text-orange-500">We</h2>
          <h6 className="text-gray-950">-</h6>
        <h2> Create the best</h2></li>
        <li><h3 className="text-4xl font-bold mt-4">foody product</h3></li>
        <li><p className="mt-7 text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ex sunt numquam quam consequatur nostrum unde maxime, earum at totam expedita. Molestiae in ab, nihil cumque blanditiis eos sit natus.</p></li>
        <li id="one" className="flex mt-7 items-center">
          <Image width={30} height={0} className="  w-6 h-6" src="/checkh.png" alt="checkmark symbol"/>
          <h5 className="ml-2"> Lacus nisi, et ac dapibus sit eu velit in consequat.</h5> 
        </li>
        <li id="two"  className="flex mt-7 items-center">
          <Image width={30} height={0} className=" w-6 h-6" src="/checkh.png" alt="checkmark symbol"/>
          <h5 className="ml-2"> Quisque diam pellentesque bibendun non dui volutpat firingilla.</h5> 
        </li>
        <li id="three"  className="flex mt-7 items-center">
          <Image width={30} height={0} className=" w-6 h-6 " src="/checkh.png" alt="checkmark symbol"/>
          <h5 className="ml-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5> 
        </li>
        <li><button className="text-white bg-orange-500 hover:text-orange-500 hover:font-semibold hover:bg-white hover:border-2 hover: border-orange-500 rounded-full w-28 h-11 mt-7"><Link href="/about">Read more</Link></button></li>
      </ul>
      

      <ul>
        <li><Image width={440} height={0} className="rounded-md" src="/anda222.jpg" alt="Egg Dish"/></li>
        <li className="flex mt-3 w-full">
        <Image width={212} height={0} className="rounded-md" src="/dish333.jpg" alt="Egg Yummy dish"/>
        <Image width={212} height={0} className="ml-3 rounded-md" src="/dish113.jpg" alt="Sandwich Dish"/>
        </li>
      </ul>
    </section>


    {/* section3  food item  */}




    <section className="mt-32">
      
      <h2 className="font-black text-orange-500 text-2xl text-center">Food Category</h2>
      <ul>
      <li className=" text-4xl font-bold mt-4 flex justify-center">
      <h2 className="text-orange-500">Ch</h2>
      <h2>oose Food Iteam</h2></li>
      </ul>
      <ul className="flex mt-10 gap-4 justify-center">
        <li id="1">
          <Link href="/menu"> <Image className="w-52 h-52 hover:w-52 rounded-md" width={200} height={0} src="/dish210.jpg" alt="Yummy dish"/></Link> 
        </li>

        <li id="2"> 
          <Link href="/menu"><Image className="hover:w-56 rounded-md w-52 h-52" width={200} height={0} src="/burger10.jpg" alt="burger "/></Link>
        </li>

        <li id="3">
           <Link href="/menu"> <Image className="hover:w-52 rounded-md w-52 h-52" width={200} height={0} src="/dish3333.jpg" alt="Yummy dish"/></Link>
        </li>

        <li id="4">
          <Link href="/menu"> <Image className="hover:w-52 rounded-md w-52 h-52" width={100} height={10} src="/doonat0.jpg" alt="donat"/></Link>
        </li>
        
        </ul>
    </section>




    {/* section experience */}

    <section className="mt-24 ">
      <div className="grid grid-cols-2 gap-24">
        <ul>
        <ul className="flex gap-3 items-end">
        <li id="image one">
           <Link href=""> <Image className="hover:w-72 rounded-md" width={280} height={0} src="/dish777.jpg" alt="Yummy dish"/></Link>
           </li>
        <li id="image two">
          <Link href=""><Image className="hover:w-60 rounded-md" width={230} height={0} src="/burger01.jpg" alt="burger dish"/></Link>
          </li>
        </ul>

        <ul className="flex gap-3 mt-3 items-start">
          <li id="id=image three">
            <Link href=""><Image className="hover:w-52 rounded-md" width={200} height={0} src="/dish999.jpg" alt="Dish"/></Link>
             </li>

             <li id="image four">
             <Link href=""><Image className="hover:w-44 rounded-md" width={170} height={0} src="/burger222.jpg" alt="burger dish"/></Link>
             </li>

             <li id="image five">
             <Link href=""><Image className="hover:w-36 rounded-md" width={130} height={0} src="/dish444.jpg" alt="dish "/></Link>

             <Link id="id=image six" href="/"><Image className="hover:w-36 rounded-md mt-3" width={130} height={0} src="/dish202.jpg" alt=" dish"/></Link>
             </li>
        </ul>
        </ul>



        <ul>
          <li className="font-black text-orange-500 text-2xl">Why Chose us</li>
          <li className=" text-4xl font-bold mt-4 flex">
          <h2 className="text-orange-500">Ex</h2>
            <h2>ta ordinary taste</h2>
          </li>
          <li>
            <h2 className=" text-4xl font-bold mt-1">And Experienced</h2>
            </li>
            <li>
              <p className="mt-7 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus omnis libero illo soluta quae ut necessitatibus ipsum fugiat vitae corporis voluptatum, error aperiam fugit quas atque dolorum veniam dicta.</p>
            </li>

            <div className="flex gap-10 mt-14 ">
            <li className="items-center">
            <Link id="id=image six" href=""><Image className="hover:w-16 w-14 bg-sky-500 rounded-md mt-3 invert  " width={50} height={0} src="/burgericon0.png" alt=" icon" /></Link>
            <h5 className="text-sm text-center mt-1">Fast Food</h5>
            </li>

            <li>
            <Link id="id=image six" href=""><Image className="hover:w-16  w-14 rounded-md mt-3 bg-sky-500 invert" width={50} height={0} src="/lunch0.png" alt="icon" /></Link>
            <h5 className="text-sm text-center mt-1">Lunch</h5>
            </li>

            <li>
            <Link id="id=image six" href=""><Image className="hover:w-16 w-14 rounded-md mt-3 bg-sky-500 invert" width={50} height={0} src="/dinnerr0.png" alt="icon" /></Link>
            <h5 className="text-sm text-center mt-1">Dinner</h5>
            </li>
            </div>
            
            <div  className="border-s-8 mt-8 items-center bg-white rounded-md flex text-black border-orange-500 justify-around w-64 h-14">
            <li>
              <h6 className="text-orange-500 text-3xl font-semibold mt-2">30+</h6></li>
             <li> <h6>Years of </h6>
              <h6 className="text-base font-bold">Experenced</h6>
            </li>
            </div>
        </ul>
      </div>

    </section>


{/* section5 bg image */}




<section>
  <div className="relative h-80  bg-cover bg-center mt-24 bg-[url('/machlii.jpg')] w-screen brightness-200">
  <div className="absolute inset-0 bg-black bg-opacity-90 items-center justify-center">



    <ul className="flex justify-around mx-20 text-center items-center mt-20">
      
      <li id="one" className="text-orange-700 font-semibold">
      <Link id="id=one" href="">
      <Image className="w-24 rounded-md mt-3 invert" width={100} height={0} src="/chef-hat0.png" alt="chef-hat" />
      <h5 className="mt-5">Professional Chefs</h5>
      <h6 className="font-semibold mt-1 text-2xl ">420</h6>
      </Link>
      </li>

      <li id="two" className="text-orange-700 font-semibold">
      <Link id="id=image six" href="/menu"><Image className="w-20 rounded-md mt-3 invert" width={100} height={0} src="/burger&drink0.png" alt="chef-hat" />
      <h5 className="mt-5 ">Items Of Food</h5>
      <h6 className="mt-1 text-2xl ">320</h6></Link>
      </li>

      <li id="three" className="text-orange-700 font-semibold ">
      <Link href=""><Image className="w-20 rounded-md mt-3 invert" width={100} height={0} src="/fork0.png" alt="chef-hat" />
      <h5 className="mt-5">Years Of Experienced</h5>
      <h6 className="font-semibold mt-1 text-2xl ">30+</h6>
      </Link>
      </li>

      <li id="four" className="text-orange-700 font-semibold">
      <Link href=""><Image className="w-20 rounded-md mt-3 invert" width={100} height={0} src="/pizza0.png" alt="chef-hat" />
      <h5 className="mt-5">Happy Costomers</h5>
      <h6 className=" mt-1 text-2xl ">220</h6>
      </Link>
      </li>
    </ul>

  </div>
  </div>
</section>


{/* section6 menu */}




<section>


  <h3 className="font-black text-orange-500 text-2xl text-center">Choose & pick</h3>
  <ul className="text-4xl font-bold mt-3 flex justify-center">
  <h2 className="text-orange-500">Fr</h2>
  <h2>om Our Menu</h2>
  </ul>

  <ul className=" flex gap-24 mt-7 ">

  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/breakfast">Breakfast</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/lunch">Lunch</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/dinner">Dinner</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/dessert">Dessert</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/drink">Drink</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/snak">Snak</Link></li>
  <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/suops">Suops</Link></li>
  </ul>




  <div className="flex gap-10 mt-12 items-center">

    <Link href="/menu"><Image className="rounded-md mt-3" width={360} height={0} src="/6789.jpg" alt="chef-hat" /></Link>

    <div className="flex gap-10">
      <ul>
    <Link id="one"  href="/">
      <ul className="flex gap-2 items-center mt-3">
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
      <ul className="flex gap-2 items-center mt-3">
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
      <ul className="flex gap-2 items-center  mt-3">
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
      <ul className="flex gap-2 items-center mt-3">
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
      <ul className="flex gap-2 items-center mt-3">
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
      <ul className="flex gap-2 items-center mt-3">
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
      <ul className="flex gap-2 items-center mt-3">
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
      <ul className="flex gap-2 items-center mt-3">
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


<section className="mt-32 ">
      
      <h2 className="font-black text-orange-500 text-2xl text-center"> Chefs</h2>
      <ul>
      <li className=" text-4xl font-bold mt-4 flex justify-center">
      <h2 className="text-orange-500">Me</h2>
      <h2>et Our Chef</h2></li>
      </ul>


      <ul className="flex mt-10 gap-4 justify-center">


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
        
        <div className="flex justify-center items-center mt-7">
        <Link className="" href="/">
        <button className="text-white hover:bg-orange-500 hover:font-semibold border border-orange-500 rounded-full w-28 h-10 mt-7 ">See More </button>
        </Link> 
        </div>  
    </section>



    {/* section8 clinet */}


    <section className="mt-24 mx-28">
      <h5 className="font-black text-2xl text-orange-500">Jestimonials</h5>
      <h4 className=" text-4xl font-bold mt-2">What our client are saying</h4>
      <div className="bg-white text-black place-items-center mt-20 relative">

        <br></br>
        <br></br>
        
  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
    <Image className="rounded-full w-24"width={100} height={100}   src="/client0.jpg"alt="Client"/>
    
  </div>

  
    <Image className="mx-auto mt-7" width={50}  height={50} src="/comment0.png" alt="Comment"/>
    
  
            <p className="text-center mx-28 mt-7">
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
      <li><Image className="w-16" width={100} height={0} src="/33dot0.png" alt="3dot"/></li>

      </ul>


    </section>




    {/* section9  */}

    <section className="flex gap-4 bg-[url('/back.jpg')] bg-cover w-screen brightness-150 ">
    <div>
    <Image className=" mt-1 h-full brightness-200 " width={1000} height={0} src="/dish001.jpg" alt="dot"/>
    </div>

    <div>
    <ul className="text-right items-end mt-10 mr-16">
        <li className="font-black text-orange-500 text-2xl">Restaurent Allow Process</li>

        <li className="flex justify-end  text-4xl font-bold mt-4">
          <h2 className="text-orange-500">We</h2>
          <h6 className="text-gray-950">-</h6>
        <h2>Document Every Food</h2></li>
        <li><h3 className="text-4xl font-bold mt-4">Bean Process untile it is saved</h3></li>
        <li><p className="mt-7 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ex sunt numquam quam consequatur nostrum unde maxime, earum at totam expedita.</p></li>

        <ul className="flex justify-end items-center gap-8 mt-10">
        <li>
        <Link href="/"><button className="text-white hover:bg-orange-500 hover:font-semibold border border-orange-500 rounded-full w-28 h-10 ">Read More</button></Link>
        </li>

        <li>
          <Link  className="flex items-center gap-3" href="/">
      <Image className="rounded-full w-12" width={40} height={0} src="/video0.png" alt="3dot"/>
      <h5 className="text-white text-lg">Play Video</h5>
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
  <h2 className="font-black text-orange-500 text-2xl text-center">Blog past</h2>
      <ul>
      <li className=" text-4xl font-bold mt-4 flex justify-center">
      <h2 className="text-orange-500">La</h2>
      <h2>test News & Blog</h2></li>
      </ul>

<div className="flex justify-center gap-5 mt-8 ">
      <div id="one" className="border-white border w-80">
      <Link href="/blog">
      <Image className="w-80 h-80" width={300} height={0} src="/burger10.jpg" alt="burger"/>
      <div className="mx-7">
      <h6 className="text-xs mt-4 text-orange-500">10 February 2022</h6>
      <h4 className="text-sm font-semibold mt-4">Pallentesque Non Efficitur Mi Aliquam Conballis Mi Quis</h4>

      <ul className="flex justify-between mt-7 py-4">
      <li className="text-xs">Learn More</li>
      <li className="flex gap-2">
      <Image className="w-5 h-5" width={20} height={0} src="/like.png" alt="like"/>
      <Image className="w-5 h-5" width={20} height={0} src="/comment11.png" alt="comment"/>
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

      <ul className="flex justify-between mt-7 py-3">
      <li className="text-xs">Learn More</li>
      <li className="flex gap-2">
      <Image className="w-5 h-5" width={20} height={0} src="/like.png" alt="like"/>
      <Image className="w-5 h-5" width={20} height={0} src="/comment11.png" alt="comment"/>
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

      <ul className="flex justify-between mt-7 py-3">
      <li className="text-xs">Learn More</li>
      <li className="flex gap-2">
      <Image className="w-5 h-5" width={20} height={0} src="/like.png" alt="like"/>
      <Image className="w-5 h-5" width={20} height={0} src="/comment11.png" alt="comment"/>
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
