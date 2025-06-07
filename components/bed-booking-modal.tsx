"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CalendarIcon, ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BedBookingModalProps {
  isOpen: boolean
  onClose: () => void
  bedType: "1x Bed" | "2x Bed"
  bedImage: string
}

export function BedBookingModal({ isOpen, onClose, bedType, bedImage }: BedBookingModalProps) {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)

  const handleSendOTP = () => {
    if (email) {
      setOtpSent(true)
      
    }
  }

  const handleVerifyOTP = () => {
    if (otp) {
      setOtpVerified(true)
     
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[1000px] p-0 bg-slate-600 text-white">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Bed Image */}
          <div className="w-full md:w-[40%] p-6 flex flex-col items-center justify-center">
            <div className="bg-slate-600 rounded-lg p-6 mb-4 border-2 border-white">
              <Image src={bedImage || "/placeholder.svg"} alt={bedType} width={300} height={200} className="mx-auto" />
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg w-full" disabled>
              {bedType}
            </Button>
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-[60%] bg-white text-black p-6 rounded-r-lg">
            <h2 className="text-3xl font-bold text-slate-600 mb-6">Hospital Bed Bookingk</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Row 1 */}
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  First Name<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Patient First Name" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">Middle Name</label>
                <Input placeholder="Enter Patient Middle Name" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Patient Last Name" className="border-gray-300" />
              </div>

              {/* Row 2 */}
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Date Of Birth<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input placeholder="DD/MM/YYYY" className="border-gray-300" />
                  <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Gender<span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select your Gender" />
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Aadhar Card Number<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Aadhar Number" className="border-gray-300" />
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Mobile Number" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Email Id<span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter Email Id"
                    className="border-gray-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    className="bg-slate-600 hover:bg-slate-700 text-white"
                    onClick={handleSendOTP}
                    disabled={!email || otpSent}
                  >
                    Send OTP
                  </Button>
                </div>
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Enter Email Id OTP<span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter OTP"
                    className="border-gray-300"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    disabled={!otpSent}
                  />
                  <Button
                    className="bg-slate-600 hover:bg-slate-700 text-white"
                    onClick={handleVerifyOTP}
                    disabled={!otpSent || !otp || otpVerified}
                  >
                    Verify OTP
                  </Button>
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Hospital Type<span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select Hospital Type" />
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="charity">Charity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Bed Category<span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select Bed Category" />
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="icu">ICU</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Advanced Search<span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select Hospitals" />
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nearby">Nearby Hospitals</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                    <SelectItem value="availability">Available Beds</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Row 5 */}
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Hospital Name<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Hospital Name" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  City<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter City Name" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-amber-600 font-medium mb-1">
                  Pin Code<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Area Pincode" className="border-gray-300" />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-lg text-lg">
                Confirm Bed Booking
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
