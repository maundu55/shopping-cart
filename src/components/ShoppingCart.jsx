import { ShoppingCartIcon, XIcon } from "lucide-react"
import { useState } from "react"

const ShoppingCart = () => {
    const[isOpen, setIsOpen] = useState(false);
  return (
  <>
    <div className={`w-[300px] h-screen bg-gray-200 fixed top-0 z-30 border-l-4 border-red-200 rounded-tl-lg ${isOpen ? 'right-0' : 'right-[-300px]'}`}>
        <div className="w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center border rounded-lg">
            <h1 className="text-xl text-gray-600">Shopping Cart</h1>
            <button className="w-9 h-9 bg-yellow-400 absolute right-3 z-20 grid place-items-center border-2 rounded-full hover:bg-yellow-500 transition-colors"
            onClick={()=>setIsOpen(!isOpen)}
            >
                <XIcon className="text-white" />
            </button>
        </div>
        <button className="w-9 h-9 bg-yellow-400 absolute -left-14 top-3 z-20 grid place-items-center border-2 rounded-full"
        onClick={()=>setIsOpen(!isOpen)}
        >
            <ShoppingCartIcon className="text-xs text-white" />
            <span className="w-6 h-6 bg-pink-400 absolute -bottom-4 -left-2 grid place-items-center border border-gray-300 rounded-full text-sm text-white">
                1
            </span>
        </button>
        <div className="h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20"> </div>
        <div className="w-full h-20 bg-white absolute bottom-0 left-0 z-10 grid place-items-center border rounded-lg">
            <h1 className="text-xl text-gray-600">Total: $155</h1>
            <button className="rounde-md bg-blue-300 px-2 text-white hover:bg-blue-400 transition-colors">Buy Now</button>
        </div>
    </div>
  </>
  )
}

export default ShoppingCart