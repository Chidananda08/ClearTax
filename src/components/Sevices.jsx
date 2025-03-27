import { ChevronRight } from "lucide-react"

function Sevices() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-100">
        <div className="max-w-4xl p-4 mb-20 flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Services</h1>
            <div className="flex gap-10">

            <h2>For individuals</h2>
            <h2>For business</h2>
            </div>
        </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* File Tax Returns Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="">
                <div className="w-10 h-10 mb-5 flex items-center justify-center bg-purple-100 rounded-lg">
                 <img src="https://assets1.cleartax-cdn.com/cleartax/images/1630010844_group17755.png" alt="" />
                </div>
                <h2 className="text-lg font-medium text-gray-800">File Tax Returns</h2>
              </div>
            </div>
            <div>
              <ServiceLink text="Salaried Individuals" />
              <ServiceLink text="Capital Gains" />
              <ServiceLink text="NRIs & Residents with Global Income or Sold..." />
            </div>
          </div>

          {/* Ask an Expert Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 ">
              <div className="">
                <div className="w-10 h-10 mb-6 flex items-center justify-center bg-green-100 rounded-lg">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1630010873_group18140874.png" alt="" />
                </div>
                <h2 className="text-lg font-medium text-gray-800">Ask an Expert</h2>
              </div>
            </div>
            <div>
              <ServiceLink text="Ask an expert" />
            </div>
          </div>

          {/* Expert Help Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6  text-center">
              <h2 className="text-lg font-medium text-blue-500 mb-6">Ask an expert</h2>
              <div className="flex justify-center mb-6">
                <img src="https://assets1.cleartax-cdn.com/cleartax/images/1630010887_group17181.jpg" alt="Expert bot" className="w-24 h-24" />
              </div>
              <p className="text-sm text-center text-blue-500">
                Get on a call with our experts to solve any queries on tax, finance or compliance
              </p>
            </div>
          </div>

          {/* GST Services Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 ">
              <div className="">
                <div className="w-10 h-10 mb-6 flex items-center justify-center bg-pink-100 rounded-lg">
                  <img src="https://assets1.cleartax-cdn.com/cleartax/images/1630010863_group17736.png" alt="" />
                </div>
                <h2 className="text-lg font-medium text-gray-800">GST Services</h2>
              </div>
            </div>
            <div>
              <ServiceLink text="GST Registration" />
              <ServiceLink text="GST Filing" />
              <ServiceLink text="GST Compliance Review" />
            </div>
          </div>

          {/* Trademark Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
            <div className="absolute right-0 top-0">
              <div className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-bl-lg">EXTRA DISCOUNTS</div>
            </div>
            <div className="p-6 ">
              <div className="">
                <div className="w-10 h-10 mb-6 flex items-center justify-center bg-purple-100 rounded-lg">
                 <img src="https://assets1.cleartax-cdn.com/cleartax/images/1630010844_group17755.png" alt="" />
                </div>
                <h2 className="text-lg font-medium text-gray-800">Trademark</h2>
              </div>
            </div>
            <div>
              <ServiceLink text="Trademark Registration" />
              <ServiceLink text="Trademark Objection Management" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceLink({ text }) {
  return (
    <div className="border-b border-b-blue-100">
      <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
        <span className="text-gray-600">{text}</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  )
}

export default Sevices

