import React from "react"

export default function HomeSection() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden text-slate-800">
      {/* Soft Teal Glow in Corner */}
      <div className="absolute bottom-30 -left-40 w-[32rem] h-[32rem] bg-teal-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Section */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4">
              <span className="px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium border border-sky-200">
                Enjoy your day here
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-600 leading-tight tracking-tight">
              <div className="px-4">
                <span className="block mb-2">Hello visitors, welcome to</span>
              </div>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-cyan-500 to-sky-500">
                <span className="bg-gradient-to-r from-green-500/15 via-cyan-500/10 to-sky-500/5 px-4 rounded-xl">
                  Rinafa Homestay
                </span>
              </span>
            </h1>

            <p className="font-light text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 px-4">
              Transform your ideas into reality with our powerful platform.
              Design, develop, and deploy stunning applications in record time.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 px-4">
              <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white text-sky-600 rounded-lg font-semibold border border-sky-200 hover:bg-sky-50 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-sky-100 px-4">
              {[
                { num: "10K+", label: "Active Users" },
                { num: "50K+", label: "Projects Built" },
                { num: "99.9%", label: "Uptime" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-slate-800">{item.num}</div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section — MacBook Mockup */}
          <div className="flex-1 flex justify-center lg:pl-8">
            <div className="relative w-[80%] max-w-[420px] aspect-[16/10] rounded-t-xl bg-gradient-to-b from-gray-200 to-gray-300 shadow-2xl border-4 border-gray-300">
              {/* MacBook top bar */}
              <div className="h-5 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center rounded-t-xl border-b border-gray-300 relative">
                <div className="flex gap-1 absolute left-2">
                  <span className="w-2 h-2 bg-red-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                </div>
                <div className="text-xs text-slate-400">Ripsynsss</div>
              </div>

              {/* Screen */}
              <div className="relative flex items-center justify-center bg-white w-full h-full overflow-hidden rounded-b-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-500" />
                <h1 className="text-4xl font-bold absolute bg-gradient-to-r from-white via-violet-300 to-fuchsia-100 bg-clip-text text-transparent">
                  Hello
                </h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
