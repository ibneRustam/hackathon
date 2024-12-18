import Link from "next/link"
import Image from "next/image"


export default function Shop () {
    return (
        <div className="bg-white text-black">
<br></br>
            <section className="ml-44 mt-20 items-center">
                <div className="flex gap-8 ">

                <ul id="one" className="flex gap-3 items-center">
                    <li>
                        <h3>Sort by:</h3>
                    </li>
                    <li>
                        <select className="border w-48 h-9 text-gray-600">
                            <option value="newlest"> Newest</option>
                            <option value="starter">Starter</option>
                            <option value="fastfood">Fast Food</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drink</option>

                        </select>
                    </li>
                </ul>

                <ul id="two" className="flex gap-3 items-center">
                    <li>
                        <h3>Show:</h3>
                    </li>
                    <li>
                        <select className="border w-48 h-9 text-gray-600">
                            <option value="Dafault">Dafault</option>
                            <option value="Low to High">Low to High</option>
                            <option value="High to Law">High to Law </option>
                        </select>
                    </li>
                </ul>
                </div>


                <div id="item and side menu div" className="flex gap-8 ">
                    <div id="shop div">
                    {/* line1 */}
                    <ul id="line1" className="flex gap-6">
                        <li id="one">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/fresh.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Fresh Lime</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$38.00</li>
                                <li className="line-through text-gray-600">$45.00</li>
                            </ul>

                            </Link>
                        </li>

                        <li id="two">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/muffin.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Chocolate Muffin</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$28.00</li>
                            </ul>

                            </Link>
                        </li>


                        <li id="three">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/burger2.jpg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Burger</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$21.00</li>
                                <li className="line-through text-gray-600">$45.00</li>
                            </ul>
                            </Link>
                        </li>
                    </ul>




{/* line 2 */}

                    <ul id="line2" className="flex gap-6">
                        <li id="one">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/country.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Country Burger</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$45.00</li>
                            </ul>

                            </Link>
                        </li>

                        <li id="two">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/drinks.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Drinks</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$23.00</li>
                            </ul>

                            </Link>
                        </li>


                        <li id="three">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/piza.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Pizza</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$43.00</li>
                            </ul>
                            </Link>
                        </li>
                    </ul>




                    {/* line3 */}

                    <ul id="line3" className="flex gap-6">
                        <li id="one">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/cheese.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Cheese Butter</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$10.00</li>
                            </ul>

                            </Link>
                        </li>

                        <li id="two">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/sandwiches.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Sandwiches</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$25.00</li>
                            </ul>

                            </Link>
                        </li>


                        <li id="three">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/chicken.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Chicken Chup</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$43.00</li>
                            </ul>
                            </Link>
                        </li>
                    </ul>



{/* line 4 */}

<ul id="line4" className="flex gap-6">
                        <li id="one">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/country.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Country Burger</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$45.00</li>
                            </ul>

                            </Link>
                        </li>

                        <li id="two">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/drinks.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Drinks</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$23.00</li>
                            </ul>

                            </Link>
                        </li>


                        <li id="three">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/piza.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Pizza</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$43.00</li>
                            </ul>
                            </Link>
                        </li>
                    </ul>




                    {/* line5 */}

                    <ul id="line5" className="flex gap-6">
                        <li id="one">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/cheese.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Cheese Butter</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$10.00</li>
                            </ul>

                            </Link>
                        </li>

                        <li id="two">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/sandwiches.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Sandwiches</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$25.00</li>
                            </ul>

                            </Link>
                        </li>


                        <li id="three">
                            <Link  href="/detail" className="group">
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/chicken.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
                            <li id="one" className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/shareother.png" alt=""/>
                                </li>

                                <li id="two" className="absolute bottom-16  opacity-0 group-hover:opacity-100 bg-white p-1 ">
                                <Image width={20} height={0} src="/cartbag.png" alt=""/>
                                </li>

                                <li id="three" className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 bg-white p-1">
                                <Image width={20} height={0} src="/hart.png" alt=""/>
                                </li>
                            </ul>
                            <h3 className="mt-2 text-lg font-semibold">Chicken Chup</h3>
                            <ul className="flex gap-3 mt-1">
                                <li className=" font-semibold text-orange-500">$43.00</li>
                            </ul>
                            </Link>
                        </li>
                    </ul>


                <ul className="flex justify-center bottom text-center gap-2 py-20">
                    <li className="border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white"></li>
                    <li className="border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white">1</li>
                    <li className="border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white">2</li>
                    <li className="border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white">3</li>
                    <li className="border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white"></li>

                </ul>

                </div>
                






{/* side menu */}
                <div className="border w-64 py-10 px-5">
                    <ul id="search bar" className="flex">
                        <li >
                            <input className="bg-orange-200 h-8 w-44 text-center" type="search" placeholder="Search Product" ></input>
                        </li>
                        <li >
                        <Image className="bg-orange-500 h-8 w-8 py-1 px-1 " width={20} height={0} src="/search.png" alt=""/>
                        </li>
                    </ul>

                    <h2 className="font-semibold text-lg mt-4">Category</h2>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>

                    </div>
                </div>

            </section>


        </div>
    )
}