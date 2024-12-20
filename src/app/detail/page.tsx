import Image from "next/image"
import Link from "next/link"

export default function ShopDetails () {
    return(
        <div className="bg-white text-black">
            <br></br>
<section className="ml-44 mt-20 grid grid-cols-2 ">

    <div id="for images" className="flex justify-items-center gap-5">
        <ul>
            <li id="image 1">
                <Link href="/" >
                <Image className="w-24 h-24 rounded-md hover:border-2 hover:border-orange-500 " width={200} height={0} src="/stick.jpeg" alt=""/>
                </Link>
                 </li>

                 <li id="image 2">
                <Link href="/" >
                <Image className="mt-3 w-24 h-24 rounded-md hover:border-2 hover:border-orange-500 " width={200} height={0} src="/saled.jpeg" alt=""/>
                </Link>
                 </li>

                 <li id="image 3">
                <Link href="/" >
                <Image className="mt-3 w-24 h-24 rounded-md hover:border-2 hover:border-orange-500 " width={200} height={0} src="/fish.jpeg" alt=""/>
                </Link>
                 </li>

                 <li id="image 4">
                <Link href="/" >
                <Image className="mt-3 w-24 h-24 rounded-md hover:border-2 hover:border-orange-500 " width={200} height={0} src="/fruite.jpeg" alt=""/>
                </Link>
                 </li>
        </ul>

        <ul>
        <li id="image 4">
                <Link href="/" >
                <Image className="h-full rounded-md " width={500} height={0} src="/chickenandegg.jpeg" alt=""/>
                </Link>
                 </li>
        </ul>
    </div>

    <div id="for detail about dish" className="mx-8">
        
        <div id="first line" className="flex justify-between">
            <ul>
                <li className="bg-orange-500 w-20 h-7 text-white text-center rounded-md">In stock</li>
            </ul>
            <ul className="flex gap-3">
                <li  className="flex gap-2 text-gray-600 hover:text-orange-500 items-center">
                    <Image className="w-6 h-6" width={20} height={0} src="/left.png" alt=""/>
                    <h4>Prev</h4> 
                </li>

                <li className="flex gap-2 text-gray-600 hover:text-orange-500 items-center">
                <h4>Next</h4> 

                    <Image className="w-4 h-4" width={20} height={0} src="/right.png" alt=""/>
                </li>
            </ul>
        </div>

        <div>
            <h1>Yummy Chicken Chup</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consectetur quod sunt, aliquam quos tenetur facere minus ipsam fugit sed fugiat blanditiis eligendi asperiores ullam iste optio necessitatibus nihil impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <hr></hr>
            <h2>54.00$</h2>

            <ul className="flex gap-2 items-center text-gray-600">
               <li><Image width={20} height={0} src="/starorange0.png" alt="starorange"/></li>
                                                             <li><Image width={20} height={0} src="/starorange0.png" alt="starorange"/></li>
                                                             <li><Image width={20} height={0} src="/starorange0.png" alt="starorange"/></li>
                                                             <li><Image width={20} height={0} src="/starorange0.png" alt="starorange"/></li>
                                                             <li><Image width={20} height={0} src="/starorange0.png" alt="star"/></li>

                                                             <li>|</li>
                                                             <li>5.0 Rating</li>
                                                             <li>|</li>
                                                             <li>22 Review</li>

            </ul>

            <h5>Dictum/cursus/Risus</h5>

            <ul className="flex gap-3 items-center">
               <li> <button>-</button>
                <button>1</button>
                <button>+</button></li>
<li>
    <Link href="/cart">Add to cart
    </Link>
</li>
            </ul>
            <hr></hr>

        </div>
    </div>

</section>
        </div>
    )
}