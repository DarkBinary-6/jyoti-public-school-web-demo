import React from 'react';
import { SCHOOL_INFO, IMAGES } from '../constants';
import { UserCheck, Award, Book, Globe, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-sky-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primaryDark to-primary py-20 text-center text-white relative shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-float-3d"></div>
        <h1 className="text-5xl font-extrabold mb-3 text-shadow animate-fade-in-up">About Us</h1>
        <p className="text-sky-100 text-xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>Our Journey, Vision, and Values</p>
      </div>

      {/* Main Story */}
      <section className="py-20 container mx-auto px-4 perspective">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-2/3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl font-extrabold text-primary mb-8 border-l-8 border-secondary pl-6">History & Legacy</h2>
            <div className="bg-white p-8 rounded-2xl shadow-card mb-8 hover-3d-card border border-gray-100">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                The society was established in 2012 by Founder Manager & Director <strong>{SCHOOL_INFO.founder}</strong> in just five rooms. The core idea was simple yet profound: <span className="italic font-medium text-primary">"One small step today is a giant leap tomorrow."</span>
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Today, <span className="font-bold text-secondary">{SCHOOL_INFO.name}</span> stands as one of the leading educational institutes in the town. We are a school where children can avail value-based education enriched with innovative ideas.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                Our goal is to nurture aesthetically rich, intellectually aware, and integrated young individuals who are ready to pursue their dreams and become world leaders.
                </p>
            </div>

            <div className="bg-gradient-to-r from-primary to-blue-900 p-8 rounded-2xl text-white shadow-xl hover-3d-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center"><Star className="mr-2 text-sky-400 fill-current animate-pulse-slow" /> Leadership</h3>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white p-1 rounded-full shadow-lg flex-shrink-0 overflow-hidden transform hover:scale-110 transition-transform duration-300">
                   <img src={IMAGES.founder} alt="Founder" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-white mb-1">{SCHOOL_INFO.founder}</p>
                  <p className="text-sky-200 font-medium">Founder Manager & Director</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3 w-full sticky top-24 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-t-8 border-secondary hover-3d-card">
              <h3 className="text-2xl font-bold mb-6 text-primary border-b border-gray-100 pb-4">At a Glance</h3>
              <ul className="space-y-5">
                <li className="flex items-center justify-between group">
                   <span className="font-bold text-gray-500">Est.</span> 
                   <span className="font-bold text-primary bg-sky-50 px-3 py-1 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors">2012</span>
                </li>
                <li className="flex flex-col">
                   <span className="font-bold text-gray-500 mb-1">Status</span> 
                   <span className="font-semibold text-primary">Co-Ed, English Medium, CBSE</span>
                </li>
                <li className="flex items-center justify-between">
                   <span className="font-bold text-gray-500">Classes</span> 
                   <span className="font-semibold text-primary">Nursery - X</span>
                </li>
                <li className="flex flex-col">
                   <span className="font-bold text-gray-500 mb-1">Location</span> 
                   <span className="font-semibold text-primary">Bikapur, Ayodhya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl font-extrabold text-primary">Our Core Philosophy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group bg-sky-50 p-10 rounded-3xl border border-sky-100 shadow-lg hover-3d-card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-white/10 group-hover:text-white transition-colors">
                        <Globe className="w-8 h-8 text-secondary group-hover:text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-primary group-hover:text-primary">Vision</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        "To deliver overall excellence through a professional approach, in turn empowering the better to do best." 
                        We are committed to the success of all students, working with the community to create a learning environment where knowledge and skills for tomorrow are gained today.
                    </p>
                </div>
                <div className="group bg-sky-50 p-10 rounded-3xl border border-sky-100 shadow-lg hover-3d-card animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-white/10 group-hover:text-white transition-colors">
                        <Award className="w-8 h-8 text-secondary group-hover:text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-primary group-hover:text-primary">Mission</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        The school joins with parents and the community to enable students to be:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 font-medium">
                        <li>Innovative</li>
                        <li>Value-driven</li>
                        <li>Leadership-oriented</li>
                        <li>Lifelong learners</li>
                        <li>Responsible global citizens</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Code of Ethics */}
      <section className="py-20 container mx-auto px-4 perspective">
        <h2 className="text-3xl font-extrabold text-primary mb-12 text-center animate-fade-in-up">Code of Ethics</h2>
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative hover-3d-card animate-fade-in-up">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary to-secondary rounded-t-3xl"></div>
            <p className="text-gray-700 mb-10 text-center italic text-xl font-light">
                Our educators affirm the worth and dignity of every human being and commit to the highest ethical standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EthicItem icon={<UserCheck />} text="Worth & Dignity of every human being" />
                <EthicItem icon={<Book />} text="Pursuit of Truth & Scholarship" />
                <EthicItem icon={<Globe />} text="Democratic Citizenship" />
                <EthicItem icon={<Award />} text="Protection of Freedom to Learn & Teach" />
                <EthicItem icon={<UserCheck />} text="Equal Educational Opportunity for All" />
            </div>
        </div>
      </section>
    </div>
  );
};

const EthicItem: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
    <div className="flex items-center space-x-4 p-5 bg-sky-50 rounded-xl hover:bg-sky-100 hover:shadow-md transition-all transform hover:scale-105">
        <div className="text-secondary bg-white p-2 rounded-full shadow-sm">{icon}</div>
        <span className="text-gray-800 font-bold">{text}</span>
    </div>
);

export default About;