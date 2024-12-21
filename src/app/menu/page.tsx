import Link from "next/link";
import Image from "next/image";


export default function Menu () {
    return(
        <div className="bg-white text-black">
            <br></br>
{/* // section 1 starter */}

       <section className="ml-44 mt-20 items-center">

        <div className="flex gap-12 mx-auto mr-6">
            <Link href="/shop">
            <Image className=" h-full" width={420} height={0} src="/starter.jpeg" alt=""/>
            </Link>
            

            <div className="  border-spacing-0 w-full">
            <Image className="mt-1 w-4 h-4" width={10} height={10} src="/start.png" alt="starter"/>
                <h2 className="font-bold text-3xl mt-3">Starter Menu</h2>
            

            <ul id="one" >
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Alder Grilled Chinook Salmon</h3>
                <h4 className="text-orange-500 text-right">32$</h4>
                </li>
                <h5 className="text-sm mt-1">Toasted French bread topped with romano, cheddar</h5>
                <h6 className="text-sm mt-1">560 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="two">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Berries and creme tart</h3>
                <h4 className="text-orange-500 text-right">43$</h4>
                </li>

                <h5 className="text-sm mt-1">Gorgonzola, riootta, mozzarella, taleggio</h5>
                <h6 className="text-sm mt-1">700 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="three">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Tormentose Bush Pizza Pintoage</h3>
                <h4 className="text-orange-500 text-right">14$</h4>
                </li> 
                <h5 className="text-sm mt-1">Ground Oumin, awooados, paaled and cubed</h5>
                <h6 className="text-sm mt-1">1000 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="four">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Spicy Vegan Potato Curry</h3>
                <h4 className="text-orange-500 text-right">32$</h4>
                </li>
                <h5 className="text-sm mt-1">Spreadable cream cheese, crumbled blue cheese</h5>
                <h6 className="text-sm mt-1">560 CAL</h6>
                </Link>
            <hr></hr>

            </ul>

            </div>
            
        </div>
<br></br>
       </section>







       {/* section 2 main course */}

       <section className="ml-44 mt-20 items-center">

        <div className="flex gap-12 mx-auto mr-6">
            
            <div className="  border-spacing-0 w-full">
            <Image className="mt-1 w-4 h-4" width={10} height={0} src="/maincourse.png" alt="main course"/>
                <h2 className="font-bold text-3xl mt-3">Main Course</h2>
            

            <ul id="one" >
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Optic Big Breakfast Combo Menu</h3>
                <h4 className="text-orange-500 text-right">32$</h4>
                </li>
                <h5 className="text-sm mt-1">Toasted French bread topped with romano, cheddar</h5>
                <h6 className="text-sm mt-1">560 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="two">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Cashew Chicken With Stir-Fry</h3>
                <h4 className="text-orange-500 text-right">43$</h4>
                </li>

                <h5 className="text-sm mt-1">Gorgonzola, riootta, mozzarella, taleggio</h5>
                <h6 className="text-sm mt-1">700 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="three">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Vegetables & Green Salad</h3>
                <h4 className="text-orange-500 text-right">14$</h4>
                </li> 
                <h5 className="text-sm mt-1">Ground Oumin, awooados, paaled and cubed</h5>
                <h6 className="text-sm mt-1">1000 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="four">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Spicy Vegan Potato Curry</h3>
                <h4 className="text-orange-500 text-right">32$</h4>
                </li>
                <h5 className="text-sm mt-1">Spreadable cream cheese, crumbled blue cheese</h5>
                <h6 className="text-sm mt-1">560 CAL</h6>

                </Link>
<hr></hr>       
            </ul>

            </div>
            
            <Link href="/shop">
            <Image className=" h-full" width={420} height={0} src="/burger2.jpg" alt=""/>
            </Link>
        </div>
<br></br>
       </section>

{/* section bg image */}




<section>
  <div className="relative h-80  bg-cover bg-center mt-20 bg-[url('/machlii.jpg')] w-screen brightness-200">
  <div className="absolute inset-0 bg-black bg-opacity-90 items-center justify-center">



    <ul className="flex justify-evenly mx-20 text-center items-center mt-20">
     
      <li id="one" className="text-orange-700 font-semibold">
      <Link id="id=one" href="">
      <Image className="w-28 rounded-md mt-3 invert" width={100} height={0} src="/chef-hat0.png" alt="chef-hat" />
      <h6 className=" mt-5 text-2xl ">420</h6>
      <h5 className="mt-2">Professional Chefs</h5>
      </Link>
      </li>

      <li id="two" className="text-orange-700 font-semibold">
      <Link id="id=image six" href="/menu">
      <Image className="w-24 rounded-md mt-3 invert" width={100} height={0} src="/burger&drink0.png" alt="chef-hat" />
      <h6 className="mt-5 text-2xl ">320</h6>

      <h5 className="mt-3 ">Items Of Food</h5>
      </Link>
      </li>

      <li id="three" className="text-orange-700 font-semibold ">
      <Link href="">
      <Image className="w-24 rounded-md mt-3 invert" width={100} height={0} src="/fork0.png" alt="chef-hat" />
      <h6 className="mt-5 text-2xl ">30+</h6>
      <h5 className="mt-3">Years Of Experienced</h5>
      </Link>
      </li>

      <li id="four" className="text-orange-700 font-semibold">
      <Link  href="">
      <Image className="w-24 rounded-md mt-3 invert" width={100} height={0} src="/pizza0.png" alt="chef-hat" />
      <h6 className=" mt-5 text-2xl ">220</h6>
      <h5 className="mt-3">Happy Costomers</h5>
      </Link>
      </li>
    </ul>

  </div>
  </div>
</section>


{/* section4 Dessert */}
<section className="ml-44 mt-20 items-center">

        <div className="flex gap-12 mx-auto mr-6">
            <Link href="/shop">
            <Image className=" h-full" width={420} height={0} src="/dessert1.jpeg" alt=""/>
            </Link>
            

            <div className="  border-spacing-0 w-full">
            <Image className="mt-1 w-4 h-4" width={10} height={0} src="/dessert.png" alt="dessert"/>
                <h2 className="font-bold text-3xl mt-3">Dessert</h2>
            

            <ul id="one" >
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Fig and lemon cake</h3>
                <h4 className="text-orange-500 text-right">32$</h4>
                </li>
                <h5 className="text-sm mt-1">Toasted French bread topped with romano, cheddar</h5>
                <h6 className="text-sm mt-1">560 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="two">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Berries and creme tart</h3>
                <h4 className="text-orange-500 text-right">43$</h4>
                </li>

                <h5 className="text-sm mt-1">Creamy mascarpone cake</h5>
                <h6 className="text-sm mt-1">700 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="three">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Pastry, blueberries, lemon juice</h3>
                <h4 className="text-orange-500 text-right">14$</h4>
                </li> 
                <h5 className="text-sm mt-1">Ground Oumin, awooados, paaled and cubed</h5>
                <h6 className="text-sm mt-1">1000 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="four">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Pain au chocolat</h3>
                <h4 className="text-orange-500 text-right">32$</h4>
                </li>
                <h5 className="text-sm mt-1">Spreadable cream cheese, crumbled blue cheese</h5>
                <h6 className="text-sm mt-1">560 CAL</h6>
                </Link>
            <hr></hr>

            </ul>

            </div>
            
        </div>
<br></br>
       </section>







       {/* section 5 Drinks */}

       <section className="ml-44 mt-20 items-center">

        <div className="flex gap-12 mx-auto mr-6">
            
            <div className="  border-spacing-0 w-full">
            <Image className="mt-1 w-4 h-4" width={10} height={0} src="/drink.png" alt="drink"/>
                <h2 className="font-bold text-3xl mt-3">Drinks</h2>
            

            <ul id="one" >
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Caffe masshiato</h3>
                <h4 className="text-orange-500 text-right">32$</h4>
                </li>
                <h5 className="text-sm mt-1">Toasted French bread topped with romano, cheddar</h5>
                <h6 className="text-sm mt-1">560 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="two">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Aperol Spritz Capacianno</h3>
                <h4 className="text-orange-500 text-right">43$</h4>
                </li>

                <h5 className="text-sm mt-1">Gorgonzola, riootta, mozzarella, taleggio</h5>
                <h6 className="text-sm mt-1">700 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="three">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Caffe latte Campuri</h3>
                <h4 className="text-orange-500 text-right">14$</h4>
                </li> 
                <h5 className="text-sm mt-1">Ground Oumin, awooados, paaled and cubed</h5>
                <h6 className="text-sm mt-1">1000 CAL</h6>
                </Link>
            <hr></hr>

            </ul>


            <ul id="four">
                <Link className="hover:text-orange-500" href="/detail">
                
                <li className="flex justify-between font-bold mt-4 text-lg">
                <h3>Tormentose BushTea Pintoage</h3>
                <h4 className="text-orange-500 text-right">32$</h4>
                </li>
                <h5 className="text-sm mt-1">Spreadable cream cheese, crumbled blue cheese</h5>
                <h6 className="text-sm mt-1">560 CAL</h6>

                </Link>
<hr></hr>       
            </ul>

            </div>
            
            <Link href="/shop">
            <Image className=" h-full" width={420} height={0} src="/drinks1.jpeg" alt=""/>
            </Link>
        </div>
<br></br>
       </section>




{/* section 6 partners people*/}

       <section className="ml-44 mt-20 items-center text-center">
<h5>Partners & Clients</h5>
<h2 className="mt-2 text-3xl font-semibold">We work with the best people</h2>

<ul className="flex justify-between mr-6 mt-7 items-center brightness-200">
<li id="one"><Image className="w-36 brightness-200" width={200} height={0} src="/restaurent.png" alt="restaurent"/></li>
<li id="two"><Image className="w-36 brightness-200" width={200} height={0} src="/bakery.png" alt="bakery"/></li>
<li id="three" className="brightness-200"><Image className="w-32 brightness-200" width={200} height={0} src="/fork and spoon.png" alt="bakery"/></li>
<li id="four"><Image className="w-36 brightness-200" width={200} height={0} src="/coffee.png" alt="coffee"/></li>
<li id="five"><Image className="w-36 brightness-75" width={200} height={0} src="/bistro.png" alt="bistro"/></li>
<li id="six"><Image className="w-36 brightness-200" width={200} height={0} src="/bakery1.png" alt="bakery"/></li>

</ul>
       </section>

</div>


    )
}