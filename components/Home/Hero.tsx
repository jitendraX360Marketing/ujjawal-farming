import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-green-600">Ujjawal Farming</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sustainable agriculture solutions for modern farmers. We provide innovative 
              farming techniques and organic products to help you grow better crops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Started
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-green-100 rounded-full p-8">
              <Image
                src="/globe.svg"
                alt="Farming illustration"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
