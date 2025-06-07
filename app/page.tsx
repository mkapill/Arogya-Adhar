"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BedBookingModal } from "@/components/bed-booking-modal"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [selectedBedType, setSelectedBedType] = useState<"1x Bed" | "2x Bed">("1x Bed")
  const [selectedBedImage, setSelectedBedImage] = useState("/images/single-bed.jpg")

  const services = ["1 bed", "2 bed", "ambulance"]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const filtered = services.filter((service) => service.toLowerCase().includes(query.toLowerCase()))
      setSearchResults(filtered)
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  const handleBookBed = (bedType: "1x Bed" | "2x Bed", imagePath: string) => {
    setSelectedBedType(bedType)
    setSelectedBedImage(imagePath)
    setBookingModalOpen(true)
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Navigation */}
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="Arogya Adhar Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-gray-800">Arogya Adhar</span>
            </div>

            {/* Search Bar
            
                  type="text"


                  placeholder="Search Healthcare Services"

                  value={searchQuery}

                  onChange={(e) => handleSearch(e.target.value)}

                  className="pl-10 pr-20 py-2 rounded-full border-2 border-blue-200 focus:border-blue-400"

                for button - 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm">
                  Search
            
              </div> */}

              {/* Search final */}
            <div className="flex-1 max-w-md mx-8 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search Healthcare Services"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-20 py-2 rounded-full border-2 border-blue-200 focus:border-blue-400"
                />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm">
                  Search
                </Button>
              </div>

              {/* Search testing
              {showResults && (
                <div className="absolute top-full shadow-lg z-50">
                  {searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                      <div key={index} className="px-4 py-2 ">
                        {result}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">No services found</div>
                  )}
                </div>
              )} */}


              {/* Search final */}
              {showResults && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-50">
                  {searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                      <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {result}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">No services found</div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-700 font-medium tracking-wider">HOME</span>
              <span className="text-gray-700 font-medium tracking-wider">SERVICE</span>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">Contact us</Button>
            </div>
          </div>

          {/* Dropdowns */}
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

      {/* main */}
      <section className="bg-slate-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Image
                src="/images/profile.png"
                alt="Healthcare Professional"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-6xl font-bold mb-8" style={{ fontFamily: "'Mukta', sans-serif" }}>
  आरोग्य आधार
</h1>
              <Button className="bg-gray-400 hover:bg-gray-500 text-black px-8 py-3 rounded-lg font-medium">
                अधिक माहिती →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Let's Explore The
                <br />
                Founder & CAO
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Aarogya Aadhar portal, we respect your time and efforts. We know you deserve the best, so we strive to give you the best.
              </p>
             <Button
  className="text-white px-8 py-3 rounded-lg"
  style={{ backgroundColor: "#63806f" }}
>
  More About Us
</Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Image
                  src="/images/dr-shubham.jpg"
                  alt="Dr. Shubham R Gadge"
                  width={200}
                  height={250}
                  className="rounded-lg mb-2 w-full"
                />
                <p className="text-sm font-medium text-white bg-slate-600 py-1 rounded">Founder</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/dr-sanjay.jpg"
                  alt="Dr Sanjay Pandhare"
                  width={200}
                  height={250}
                  className="rounded-lg mb-2 w-full"
                />
                <p className="text-sm font-medium text-white bg-slate-600 py-1 rounded">Co-Founder</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/mr-abhi.jpg"
                  alt="Dr. Kapil Mahajan"
                  width={200}
                  height={250}
                  className="rounded-lg mb-2 w-full"
                />
                <p className="text-sm font-medium text-white bg-slate-600 py-1 rounded">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-slate-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">FACALITIES AVAILABLE</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure saepe natus commodi fugit necessitatibus fuga ullam ad? Mollitia sapiente id animi doloribus impedit dolores, eum excepturi nulla soluta amet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1xBed */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-slate-600 rounded-lg p-8 mb-4">
                <Image src="/images/single-bed.jpg" alt="Single Bed" width={200} height={150} className="mx-auto" />
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg w-full"
                onClick={() => handleBookBed("1x Bed", "/images/single-bed.jpg")}
              >
                Book Now
              </Button>
            </div>

            {/* 2xBed */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-slate-600 rounded-lg p-8 mb-4">
                <Image src="/images/double-bed.jpg" alt="Double Bed" width={200} height={150} className="mx-auto" />
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg w-full"
                onClick={() => handleBookBed("2x Bed", "/images/double-bed.jpg")}
              >
                Book Now
              </Button>
            </div>

            {/* Ambulance */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-slate-600 rounded-lg p-8 mb-4">
                <Image src="/images/ambulance.jpg" alt="Ambulance" width={200} height={150} className="mx-auto" />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg w-full">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-16 bg-slate-600">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Image
              src="/images/app-download.jpg"
              alt="Download App"
              width={1200}
              height={300}
              className="w-full rounded-lg"
            />
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg w-full">
                Download Now
              </Button>
          </div>
        </div>
      </section>

      {/* Foot */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">AROGYA ADHAR</h3>
              <p className="text-gray-400 text-sm">© 2023 Livo AarogyaAadhar Pvt.Ltd.</p>
                <p className="text-gray-400 text-sm">All rights reserved.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Policies</h4>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            </div>
          </div>
        </div>
      </footer>

      {/* Bed Booking Modal */}
      <BedBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        bedType={selectedBedType}
        bedImage={selectedBedImage}
      />
    </div>
  )
}
