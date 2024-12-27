import "./globals.css";
import Link from "next/link"
import Image from "next/image";


import {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (



    <html className="max-auto items-center"  lang="en">
      <body className="bg-gray-950 text-white">
        <div className="flex font-bold justify-center mx-24 text-4xl mt-10">
          <h1 className="text-orange-500"> Food   </h1>
          <h2 >tuck </h2>
          </div>


<ul className="lg:hidden">
          <div id="humburger icon" >
          <Sheet>
        <SheetTrigger>
          <Image className="ml-5" width={30} height={0} src="/menuicon.png" alt="Menu Icon"/>
        </SheetTrigger>
        
        
        <SheetContent>
          <SheetHeader>
            <SheetTitle>

            </SheetTitle>
          </SheetHeader>
          <SheetDescription>

<div className="flex justify-between">
          <ul className="text-center mt-3 ">

              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/">Home</Link> </li>

              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/menu">Menu</Link> </li>

              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/blog">Blog</Link> </li>

              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/pages">Pages</Link> </li>

              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/about">About</Link> </li>

              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/shop">Shop</Link> </li>

              
              
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/contact">Contact</Link> </li>

            </ul>

            <ul>

            </ul>

            </div>

          </SheetDescription>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <main>{children}</main>

          </div>
          </ul>

          <nav className=" flex justify-between items-center mx-24 mt-7 ">
            <ul className="flex gap-4 ">
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/">Home</Link> </li>
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/menu">Menu</Link> </li>
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/blog">Blog</Link> </li>
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/pages">Pages</Link> </li>
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/about">About</Link> </li>
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/shop">Shop</Link> </li>
              
              
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg"><Link href="/contact">Contact</Link> </li>
            </ul>


            <ul className="flex gap-2 items-center">
              <li><input className="border-orange-500 bg-gray-950 border rounded-full h-11 w-56 bg-[url('/search.png')] bg-no-repeat bg-[length:25px_25px] bg-[position:calc(100%-15px)_center]" type="search" placeholder="     Search..."></input></li>
              <li className="hover:text-orange-500 hover:font-semibold hover:text-lg "><Link href="/cart"> <Image className="w-7 h-7" width={30} height={0} src="/cart.png" alt="Bag"/> </Link></li>
            </ul>
          </nav>

        {children}



        {/* <footer> */}

        <footer className="mx-4  md:mx-24 mt-24">
          <div className="items-center">
          <div className="flex flex-col md:flex-row justify-between  gap-8">       
                <ul className="items-center">
            <li className="flex text-3xl font-bold">
              <h3 className="text-orange-500"> St</h3>
              <h3>ill You Need Our Support ?</h3>
            </li>
            <li className="mt-3">Don&apost wait make a smart & logical quote here. Its pretty easy.</li>
            </ul>

            <ul className="flex  items-center">
           <li> <input className="w-60 h-12 bg-orange-500 hover:font-semibold hover:text-white rounded-s-md" type="email" placeholder=" Enter Your Email"></input></li>
           <li><button className="bg-white text-orange-500 w-36 h-12 hover:font-semibold rounded-r-md">
              Subscribe Now
            </button></li>
            </ul>
          </div>

            <hr className="text-orange-500 mt-12"></hr>



            <div className="mt-14 grid grid-cols-4">
              <div>   
                 <h3 className="font-semibold text-xl">About Us</h3>
                <p className="mt-3 font-thin">orpprate clients and leisure travelers has been relying on Groundlink for dependab safe, and professional chauffeured car service in major cities across World</p> 
                <div className="flex mt-10 gap-4 items-center">
                <ul>
                <li className="bg-orange-500 rounded-md py-3 px-3 w-16 h-16"><Image className="invert " width={65} height={0} src="/time0.png" alt="opening time"/></li>
                 </ul>
                <ul>
                <li><h3>Opening Hourse</h3></li>
                <li><h5>Mon - Sat(8.00 - 6.00)</h5></li>
                <li><h5>Sunday - Closed</h5></li>
                </ul>
                </div>
                </div>

                <div className="px-9">
                  <h3 className="font-semibold text-xl">Useful Links</h3>

                  <ul className="mt-3 text-lg">
                  <li className="mt-3 hover:text-xl"><Link href="/about">About</Link></li>
                  <li className="mt-3 hover:text-xl"> <Link href="/news">News</Link></li>
                  <li className="mt-3 hover:text-xl"><Link href="/partner">Partners</Link></li>
                  <li className="mt-3 hover:text-xl"><Link href="/team">Team</Link></li>
                  <li className="mt-3 hover:text-xl"><Link href="/menu">Menu</Link></li>
                  <li className="mt-3 hover:text-xl"><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-semibold text-xl">Help?</h2>
                  
                  <ul className="mt-3 text-lg">
                 <li className="mt-3 hover:text-xl"> <Link href="/faq">FAQ</Link></li>
                 <li className="mt-3 hover:text-xl"><Link href="/term">Term & conditions</Link></li>
                 <li className="mt-3 hover:text-xl"><Link href="/reporting">Reporting</Link></li>
                 <li className="mt-3 hover:text-xl"><Link href="/documentation">Documentation</Link></li>
                 <li className="mt-3 hover:text-xl"><Link href="/support">Support Policy</Link></li>
                 <li className="mt-3 hover:text-xl"><Link href="/privacy">Privacy</Link></li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-semibold text-xl">Recent Post</h2>
                  <ul>
                    <ul className="flex mt-5 gap-4 font-thin text-lg">
                      <li><Image width={100} height={0} className="w-16 h-16 rounded-md" src="/dish999.jpg" alt="Dish"></Image></li>
                      <li><h5 className="text-gray-400">20 Feb 2022</h5>
                      <h4>Keep Your Businesss</h4></li>
                    </ul>
                    <ul className="flex mt-5 gap-4 font-thin text-lg">
                     <li> <Image width={100} height={0} className="w-16 h-16 rounded-md"src="/dish2220.jpg" alt="Dish"></Image></li>
                     <li> <h5 className="text-gray-400">20 Feb 2022</h5>
                      <h4>Keep Your Businesss</h4></li>
                    </ul>
                    <ul className="flex mt-5 gap-4 font-thin text-lg">
                      <li><Image width={100} height={0} className="w-16 h-16 rounded-md" src="/roll0.jpg" alt="Dish"></Image></li>
                     <li> <h5 className="text-gray-400">20 Feb 2022</h5>
                      <h4>Keep Your Businesss</h4></li>
                    </ul>
                    </ul>                 
                </div>
            </div>


            </div>

            
            <div className="bg-gray-700 mt-12">
            <ul className="flex flex-col md:flex-row justify-center md:justify-around items-center text-center">
              <li className="text-lg mt-9"><h4>Copyright &copy ; 2022 by Ayeman. All Rights Reserved</h4></li>
              <li className="flex gap-5 mt-9">
                <Link href="https://www.facebook.com/" target="new window">
              <Image className="bg-white rounded-md py-2 px-2 w-10 h-10" width={40} height={0} src="/facebook0.png" alt="Facebook"/>
              </Link>

              <Link href="https://www.twitter.com/" target="new window">
              <Image className="bg-white rounded-md py-2 px-2 w-10 h-10"  width={40} height={0} src="/twitter0.png" alt="Twitter"/>
              </Link>

              <Link href="https://www.instagram.com/" target="new window">
              <Image className="bg-white rounded-md py-2 px-2 w-10 h-10" width={40} height={0} src="/instagram0.png" alt="Instagram"/>
              </Link>

              <Link href="https://www.youtube.com/" target="new window">
              <Image className="bg-white rounded-md py-2 px-2 w-10 h-10" width={40} height={0} src="/youtube0.png" alt="Youtube"/>
              </Link>

              <Link href="https://www.pinterest.com/" target="new window">
              <Image className="bg-white rounded-md py-2 px-2 w-10 h-10" width={40} height={0} src="/pinterest0.png" alt="Pinterest"/>
              </Link>

              </li>
            </ul>
            <br></br>
            </div>
        </footer>

      </body>
    </html>
  );
}
