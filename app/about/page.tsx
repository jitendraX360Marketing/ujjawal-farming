export default function About() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Ujjawal Farming</h1>
          
          <section className="prose lg:prose-lg">
            <p className="text-lg text-gray-600 mb-6">
              Welcome to Ujjawal Farming, where we combine traditional agricultural wisdom 
              with modern sustainable practices to create a better future for farming.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to promote sustainable farming practices that benefit both 
              farmers and the environment. We believe in creating a harmonious balance 
              between agricultural productivity and environmental conservation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Do</h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-6">
              <li>Provide sustainable farming solutions</li>
              <li>Offer organic farming consultation</li>
              <li>Develop innovative agricultural techniques</li>
              <li>Support local farming communities</li>
              <li>Promote environmental conservation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are committed to sustainability, innovation, and community support. 
              Our approach combines traditional wisdom with modern technology to create 
              effective and environmentally friendly farming solutions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
