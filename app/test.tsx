"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BedBookingModal } from "@/components/bed-booking-modal"

export default function HomePage() {






    for dark green - text-white px-8 py-3 rounded-lg" style={{ backgroundColor: "#63806f" }}

   for green -   bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg
  


   🎨 Color Name	💡 HEX Code	✅ Button JSX
Dark Green	#63806f	class="text-white px-8 py-3 rounded-lg"
style={{ backgroundColor: "#63806f" }}
Green	#22c55e	class="text-white px-8 py-3 rounded-lg"
style={{ backgroundColor: "#22c55e" }}
Red	#ef4444	style={{ backgroundColor: "#ef4444" }}
Blue	#3b82f6	style={{ backgroundColor: "#3b82f6" }}
Orange	#f97316	style={{ backgroundColor: "#f97316" }}
Yellow	#eab308	style={{ backgroundColor: "#eab308" }}
Purple	#8b5cf6	style={{ backgroundColor: "#8b5cf6" }}
Dark Gray / Black	#111827	style={{ backgroundColor: "#111827" }}






 {/* dropdowns */}

 const dropdownItems = {
    "Expert Doctors": ["kapil", "kapil", "kapil", "kapil kapil"],
    Hospitals: ["kapil", "kapil", "kapil", "kapil kapil"],
    "Diagnostic Center": ["kapil", "kapil", "kapil", "kapil kapil"],
    "Surgery Packages": ["kapil", "kapil", "kapil", "kapil kapil"],
    "Home Healthcare": ["kapil", "kapil", "kapil", "kapil kapil"],
    Pathology: ["kapil", "kapil", "kapil", "kapil kapil"],
    "Health Insurance": ["kapil", "kapil", "kapil", "kapil kapil"],
    "Corporate Health": ["kapil", "kapil", "kapil", "kapil kapil"],
    Pharmacy: ["kapil", "kapil", "kapil", "kapil kapil"],
  }





//  {/* Search  final final ddsdsad */}
//             <div className="flex-1 max-w-md mx-8 relative">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <Input
//                   type="text"
//                   placeholder="Search Healthcare Services"
//                   value={searchQuery}
//                   onChange={(e) => handleSearch(e.target.value)}
//                   className="pl-10 pr-20 py-2 rounded-full border-2 border-blue-200 focus:border-blue-400"
//                 />
//                 <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm">
//                   Search
//                 </Button>
//               </div>





  {/* Dropdowns */}  - category


          <div className="flex items-center space-x-4 py-3 border-t border-gray-100">
            {Object.entries(dropdownItems).map(([category, items]) => (
              <DropdownMenu key={category}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-sm text-gray-600 border-gray-300 rounded-full px-4 py-1 hover:bg-gray-50"
                  >
                    {category}
                    <ChevronDown className="ml-1 w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {items.map((item) => (
                    <DropdownMenuItem key={item} className="text-sm">
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </header>
              





      isOpen={bookingModalOpen}

       onClose={() => setBookingModalOpen(false)}


















}