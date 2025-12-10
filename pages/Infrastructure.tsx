import React from 'react';
import { IMAGES } from '../constants';

const Infrastructure: React.FC = () => {
  return (
    <div className="bg-sky-50">
      <div className="bg-gradient-to-r from-primaryDark to-primary py-20 text-center text-white shadow-lg overflow-hidden">
        <h1 className="text-5xl font-extrabold mb-3 text-shadow animate-fade-in-up">Infrastructure</h1>
        <p className="text-blue-100 text-xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>Modern Facilities for Modern Learning</p>
      </div>

      <div className="container mx-auto px-4 py-20 space-y-32 perspective">
        
        {/* Classrooms */}
        <InfraSection 
            title="Smart Classrooms" 
            image={IMAGES.classroom}
            direction="ltr"
            delay="0.2s"
        >
            <p className="mb-6 text-lg">Our classrooms are bright, airy, and designed to foster an engaging learning environment. We ensure:</p>
            <ul className="list-none space-y-4 text-gray-700 mb-6">
                <li className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:translate-x-2 transition-transform">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-3"></span>
                    <span><strong>Low Student-Teacher Ratio:</strong> No section has more than 30 students.</span>
                </li>
                <li className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:translate-x-2 transition-transform">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-3"></span>
                    <span><strong>Individual Lockers:</strong> Provided for children to keep books and stationery securely.</span>
                </li>
                <li className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:translate-x-2 transition-transform">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-3"></span>
                    <span><strong>Modern Aids:</strong> Equipped with computers, projectors, and smart boards.</span>
                </li>
            </ul>
            <p className="text-lg">Furniture and decor are specifically designed for different age groups to improve the teaching and learning experience.</p>
        </InfraSection>

        {/* Labs */}
        <InfraSection 
            title="Science & Computer Labs" 
            image={IMAGES.lab}
            direction="rtl"
            delay="0.3s"
        >
            <p className="mb-6 text-lg">We believe in <span className="font-bold text-primary text-xl">"Learning by Doing."</span> Our infrastructure includes:</p>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover-3d-card">
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                    <li>Well-equipped and decorated <strong>Science Lab</strong>.</li>
                    <li>Primary and middle section students are regularly sent to the lab for practical experiments.</li>
                    <li>Modern Computer Lab with high-speed internet access.</li>
                </ul>
            </div>
        </InfraSection>

        {/* Library */}
        <InfraSection 
            title="Library" 
            image={IMAGES.library}
            direction="ltr"
            delay="0.4s"
        >
            <p className="text-lg leading-loose">Our library is the heart of the school's intellectual life. It features a quiet reading area, age-appropriate books, reference materials, and journals to encourage the habit of reading and self-study among students.</p>
        </InfraSection>

        {/* Health & Hygiene */}
        <section className="bg-gradient-to-br from-white to-sky-100 p-12 rounded-3xl text-center shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-sky-200 transform hover:scale-[1.01] transition-transform animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <h2 className="text-4xl font-extrabold text-primary mb-8 drop-shadow-sm">Health & Hygiene</h2>
            <p className="max-w-4xl mx-auto text-gray-800 leading-relaxed text-xl font-medium">
                "A clean mind resides in a clean environment."
            </p>
            <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg mt-4">
                 We maintain a hygienic campus with routine cleanliness of classrooms, washrooms, and common areas. Basic health and hygiene practices are actively promoted among students to ensure their well-being.
            </p>
        </section>

      </div>
    </div>
  );
};

const InfraSection: React.FC<{ title: string, image: string, children: React.ReactNode, direction: 'ltr' | 'rtl', delay: string }> = ({ title, image, children, direction, delay }) => (
    <div className={`flex flex-col md:flex-row gap-16 items-center ${direction === 'rtl' ? 'md:flex-row-reverse' : ''} animate-fade-in-up`} style={{animationDelay: delay}}>
        <div className="md:w-1/2 relative group perspective">
            <div className={`absolute top-4 ${direction === 'ltr' ? 'left-4' : 'right-4'} w-full h-full border-4 border-secondary rounded-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
            <img 
                src={image} 
                alt={title} 
                className="relative z-10 rounded-2xl shadow-2xl w-full h-72 md:h-96 object-cover transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-x-2 bg-white border-8 border-white" 
            />
        </div>
        <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-primary mb-6 relative inline-block">
                {title}
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-secondary"></span>
            </h2>
            <div className="text-gray-700 leading-relaxed">
                {children}
            </div>
        </div>
    </div>
);

export default Infrastructure;