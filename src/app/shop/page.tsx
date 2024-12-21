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
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/drinks1.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
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
                            <ul className="mt-8 relative flex justify-center items-end  bg-[url('/drinks1.jpeg')] bg-cover h-60 w-60 bg-left ">
                           
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
                    <li className="flex items-center border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white">
                    <Image className="w-4 h-4" width={10} height={0} src="/left.png" alt=""/>
                    <Image className="w-4 h-4" width={10} height={0} src="/left.png" alt=""/>
                    </li>
                    <li className="border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white">1</li>
                    <li className="border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white">2</li>
                    <li className="border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white">3</li>
                    <li className="flex items-center px-1 border w-8 h-7 text-orange-500 hover:bg-orange-500 hover:text-white">
                        <Image className="w-3 h-3 " width={20} height={0} src="/right.png" alt=""/>
                        <Image className="w-3 h-3  " width={20} height={0} src="/right.png" alt=""/>
                   
                    </li>

                </ul>

                </div>
                






{/* side menu */}
                <div className="border h-full w-64 py-10 px-5">
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
                        <li id="one" className="flex gap-2 mt-4 items-center">
                            <input className="w-4 h-4" type="checkbox"></input>
                            <h4>Sandwiches</h4>
                        </li>

                        <li id="two" className="flex gap-2 mt-4 items-center">
                            <input className="w-4 h-4" type="checkbox"></input>
                            <h4>Burger</h4>
                        </li>

                        <li id="three" className="flex gap-2 mt-4 items-center">
                            <input className="w-4 h-4" type="checkbox"></input>
                            <h4>Chicken Chup</h4>
                        </li>

                        <li id="four" className="flex gap-2 mt-4 items-center">
                            <input className="w-4 h-4" type="checkbox"></input>
                            <h4>Drink</h4>
                        </li>

                        <li id="five" className="flex gap-2 mt-4 items-center">
                            <input className="w-4 h-4" type="checkbox"></input>
                            <h4>Pizza</h4>
                        </li>

                        <li id="six" className="flex gap-2 mt-4 items-center">
                            <input className="w-4 h-4" type="checkbox"></input>
                            <h4>Thi</h4>
                        </li>

                        <li id="seven" className="flex gap-2 mt-4 items-center">
                            <input className="w-4 h-4" type="checkbox"></input>
                            <h4>Non Veg</h4>
                        </li>

                        <li id="eight" className="flex gap-2 mt-4 items-center">
                            <input className="w-4 h-4" type="checkbox"></input>
                            <h4>Uncategorized</h4>
                        </li>

                    </ul>


                        <div id="ad pic" className="py-3 px-4 mt-5 relative bg-[url('/namak.jpeg')] bg-cover bg-left h-60 text-white rounded-sm">
                        <h5 className="font-semibold text-sm">Perfext Taste</h5>
                        <h3 className="font-semibold mt-1">Classic Restaurent</h3>
                        <h5 className="text-orange-500 font-semibold mt-2 text-sm">45.00$</h5>
                        <Link href="/detail">
                        <ul className=" text-white flex gap-2 items-center absolute bottom-6 ">
                        <li>Shop Now</li>
                        <li><Image width={20} height={0} src="/rightgol.png" alt="" /></li>
                        </ul>
                        </Link>
                        </div>

                        <div>

                            <h3 className="font-semibold mt-7">Filter By Price</h3>

                            <ul className="flex items-center">
                          
                          <li><Image className="w-3 h-3 " width={20} height={0} src="/dot.png" alt=""/>
                          </li>

                          
                          <li><Image className="w-44 h-12 " width={80} height={0} src="/line1.png" alt=""/></li>

                          
                          <li><Image className="w-3 h-3 " width={20} height={0} src="/dot.png" alt=""/></li>


                            </ul>

                            <ul className="flex justify-between text-sm px-2">
                                <li>
                                    From $0 to $8000
                                </li>

                                <li>
                                    Filter
                                </li>
                            </ul>

                        </div>

                        <div id="latest product">
                            <h3 className="font-semibold mt-7">
                                Latest Products
                            </h3>


                            <Link href="/detail">
                            <div id="one pizza" className="flex items-center mt-5 gap-3">
                                <Image className=" w-14 h-14 rounded-sm" width={100} height={0} src="/dish14.jpg" alt=""/>


                                <div>
                                    <h3>Pizza</h3>
                                    <ul className="flex">
                                        <li><Image width={10} height={0} src="/starorange0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/starorange0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="star"/></li>
                                    </ul>
                                    <h4 className="text-sm">$35.00</h4>
                                    </div>


                                </div>
                                </Link>



                            <Link href="/detail">
                            <div id="two cupchake" className="flex items-center mt-5 gap-3">
                                <Image className=" w-14 h-14 rounded-sm" width={100} height={0} src="/dessert1.jpeg" alt=""/>
                                <div>
                                    <h3>Cupchake</h3>
                                    <ul className="flex">
                                        <li><Image width={10} height={0} src="/starorange0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/starorange0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="star"/></li>
                                    </ul>
                                    <h4 className="text-sm">$35.00</h4>
                                    </div>

                                </div>
                            </Link>
                                
                            <Link href="/detail">
                            <div id="three cookies" className="flex items-center mt-5 gap-3">
                                <Image className=" w-14 h-14 rounded-sm" width={100} height={0} src="/cookies.jpeg" alt=""/>
                                <div>
                                    <h3>Cookies</h3>
                                    <ul className="flex">
                                        <li><Image width={10} height={0} src="/starorange0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/starorange0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="star"/></li>
                                    </ul>
                                    <h4 className="text-sm">$35.00</h4>
                                    </div>



                                </div>
                            </Link>

                            

                            <Link href="/detail">
                                <div id="four burger" className="flex items-center mt-5 gap-3">
                                <Image className=" w-14 h-14 rounded-sm" width={100} height={0} src="/burger01.jpg" alt=""/>
                                <div>
                                    <h3>Burger</h3>
                                    <ul className="flex">
                                        <li><Image width={10} height={0} src="/starorange0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/starorange0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="starorange"/></li>
                                              <li><Image width={10} height={0} src="/star0.png" alt="star"/></li>
                                    </ul>
                                    <h4 className="text-sm">$35.00</h4>
                                    </div>

                                </div>
                                </Link>

                                <div>
                                    <h3 className="font-semibold mt-7">Product Tags</h3>
                                    

                                    <ul id="line 1" className="flex gap-5 mt-4">
                                        <li id="one" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Services</Link>
                                        </li>

                                        <li id="two" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Our Menu</Link>
                                        </li>

                                        <li id="three" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Pizza</Link>
                                        </li>

                                    </ul>


                                    <ul id="line 1" className="flex gap-5 mt-4">
                                        <li id="one" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Cupcake</Link>
                                        </li>

                                        <li id="two" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Burger</Link>
                                        </li>

                                        <li id="three" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Cookies</Link>
                                        </li>

                                    </ul>


                                    <ul id="line 3" className="flex gap-3 mt-4">
                                        <li id="one" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Our Shop</Link>
                                        </li>

                                        <li id="two" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Tandoori</Link>
                                        </li>

                                        <li id="three" className=" hover:text-orange-500">
                                            <Link className="mt-6 border-b  hover:border-orange-500" href="/detail">Chicken</Link>
                                        </li>

                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}