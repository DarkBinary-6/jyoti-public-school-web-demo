import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, BookOpen, Heart, ArrowRight, ShieldCheck, Monitor, FlaskConical, GraduationCap, Bell, Calendar, X, Clock } from 'lucide-react';
import { SCHOOL_INFO, IMAGES } from '../constants';

interface Notice {
  id: number;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  isNew: boolean;
}

const NoticeItem: React.FC<{ notice: Notice; idSuffix?: string; onSelect: (notice: Notice) => void }> = ({ notice, idSuffix = '', onSelect }) => (
    <div 
        onClick={() => onSelect(notice)}
        className="group flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all bg-sky-50/30 cursor-pointer mb-4 bg-white"
    >
        <div className="flex-shrink-0 flex flex-col items-center justify-center bg-white p-3 rounded-lg border border-gray-100 shadow-sm w-16 text-center group-hover:border-secondary transition-colors">
            <span className="text-xs font-bold text-gray-500 uppercase">{new Date(notice.startDate).toLocaleString('default', { month: 'short' })}</span>
            <span className="text-xl font-bold text-primary">{new Date(notice.startDate).getDate()}</span>
        </div>
        <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
                {notice.isNew && (
                    <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse">NEW</span>
                )}
                <h3 className="font-bold text-gray-800 group-hover:text-secondary transition-colors line-clamp-2">
                    {notice.title}
                </h3>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar size={12} /> Valid until: {new Date(notice.endDate).toLocaleDateString()}
            </p>
        </div>
        <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-primary">
                <ArrowRight size={16} />
            </div>
        </div>
    </div>
);

const Home: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  useEffect(() => {
    // Fetch notices from local storage or use defaults
    const storedNotices = JSON.parse(localStorage.getItem('school_notices') || 'null');
    if (storedNotices) {
      setNotices(storedNotices);
    } else {
      const today = new Date();
      const nextMonth = new Date();
      nextMonth.setMonth(today.getMonth() + 1);
      const pastDate = new Date();
      pastDate.setMonth(today.getMonth() - 1);

      const defaults: Notice[] = [
        { 
            id: 1, 
            title: "Admission Open for Session 2025-26 - Apply Now", 
            description: "Admissions are now open for all classes from Nursery to Class IX. Parents can visit the school office between 9 AM and 2 PM to collect the admission form. The last date for submission is March 31st, 2025. Please bring the child's birth certificate and 2 passport-size photographs.",
            startDate: pastDate.toISOString().split('T')[0],
            endDate: nextMonth.toISOString().split('T')[0],
            isNew: true 
        },
        { 
            id: 2, 
            title: "Annual Sports Day scheduled for December 15th", 
            description: "The Annual Sports Day will be held on December 15th at the school playground. Students are requested to report by 8:00 AM in their respective house uniforms. Parents are cordially invited to witness the event.",
            startDate: "2024-11-20", 
            endDate: "2024-12-16",
            isNew: false 
        },
        { 
            id: 3, 
            title: "Half-yearly examination datesheet released", 
            description: "The datesheet for the upcoming half-yearly examinations has been released. Exams will commence from October 15th. Students can collect the printed schedule from their class teachers.",
            startDate: "2024-10-01", 
            endDate: "2024-10-30",
            isNew: false 
        },
        { 
            id: 4, 
            title: "Winter Vacation Announcement", 
            description: "The school will remain closed for winter vacation from December 30th to January 10th. Classes will resume on January 11th.",
            startDate: "2024-12-25", 
            endDate: "2025-01-10",
            isNew: false 
        }
      ];
      setNotices(defaults);
      localStorage.setItem('school_notices', JSON.stringify(defaults));
    }
  }, []);

  // Filter notices based on date range
  const activeNotices = notices.filter(notice => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time for accurate date comparison
      
      const start = new Date(notice.startDate);
      const end = new Date(notice.endDate);
      
      // Fallback if dates are invalid, show them
      if (isNaN(start.getTime()) || isNaN(end.getTime())) return true;

      return today >= start && today <= end;
  });

  const shouldScroll = activeNotices.length > 3;

  return (
    <main className="bg-sky-50 overflow-x-hidden relative">
      
      {/* Notice Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative">
                <div className="bg-gradient-to-r from-primary to-primaryDark p-6 flex justify-between items-start">
                    <h3 className="text-xl md:text-2xl font-bold text-white pr-8 leading-snug">
                        {selectedNotice.title}
                    </h3>
                    <button 
                        onClick={() => setSelectedNotice(null)}
                        className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors absolute top-4 right-4"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="p-8 max-h-[70vh] overflow-y-auto">
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 border-b border-gray-100 pb-4">
                        <div className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-full text-primary font-medium">
                            <Calendar size={16} />
                            <span>Posted: {new Date(selectedNotice.startDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-red-600 font-medium">
                            <Clock size={16} />
                            <span>Valid until: {new Date(selectedNotice.endDate).toLocaleDateString()}</span>
                        </div>
                    </div>
                    
                    <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                        {selectedNotice.description || "No additional details available for this notice."}
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                        <button 
                            onClick={() => setSelectedNotice(null)}
                            className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden perspective">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: `url('${IMAGES.hero}')` }}
        >
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-primaryDark/80 via-primary/60 to-primaryDark/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white perspective">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-6 shadow-lg animate-fade-in-up">
            <span className="text-sky-100 font-bold tracking-wider uppercase text-sm">Welcome to Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-shadow animate-float-3d drop-shadow-2xl transform-style-3d">
            {SCHOOL_INFO.tagline}
          </h1>
          <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-sky-100 font-light leading-relaxed text-shadow-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Empowering students in Ayodhya with <span className="text-white font-semibold">value-based</span>, future-ready education. Join us in shaping the leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/admissions" 
              className="bg-gradient-to-r from-secondary to-secondaryDark text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_6px_0_rgb(12,74,110)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgb(12,74,110)] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center group"
            >
              Admission Enquiry
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-[0_6px_0_rgb(209,213,219)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgb(209,213,219)] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Decorative Curve */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sky-50"></path>
          </svg>
        </div>
      </section>

      {/* Key Highlights Strip (3D Flip Cards) */}
      <section className="relative z-20 -mt-24 container mx-auto px-4 perspective">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HighlightCard 
            icon={<Lightbulb className="w-12 h-12 text-secondary" />}
            title="Idea Generation"
            description="Curriculum designed to encourage creativity, critical thinking, and new innovative ideas."
            delay="0s"
          />
          <HighlightCard 
            icon={<BookOpen className="w-12 h-12 text-secondary" />}
            title="Best Curriculum"
            description="Well-researched, best-in-class curriculum fostering academic excellence and deep understanding."
            delay="0.2s"
          />
          <HighlightCard 
            icon={<Heart className="w-12 h-12 text-secondary" />}
            title="Value-Based"
            description="Focus on moral values, empathy, life skills, and holistic development of every child."
            delay="0.4s"
          />
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="container mx-auto px-4 mt-16 mb-8">
        <div className="bg-white rounded-2xl shadow-xl border border-sky-100 overflow-hidden flex flex-col md:flex-row animate-fade-in-up">
            <div className="bg-gradient-to-br from-primary to-primaryDark text-white p-6 md:w-1/4 flex flex-col justify-center items-center md:items-start relative overflow-hidden z-20">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                    <Bell size={120} />
                </div>
                <div className="flex items-center gap-3 mb-2 relative z-10">
                    <Bell className="w-6 h-6 animate-bounce" />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Notice Board</h2>
                </div>
                <p className="text-sky-200 text-sm relative z-10 text-center md:text-left">
                    Stay updated with the latest announcements.
                    <br/><span className="text-xs opacity-75 mt-2 block">(Click on a notice to view details)</span>
                </p>
            </div>
            <div className="p-6 md:w-3/4 bg-white relative h-[350px] overflow-hidden">
                {activeNotices.length > 0 ? (
                    <div 
                        className={`space-y-0 ${shouldScroll ? 'animate-scroll-up hover:[animation-play-state:paused]' : 'h-full overflow-y-auto pr-2 custom-scrollbar'}`}
                    >
                         {/* Original List */}
                         {activeNotices.map((notice) => (
                             <NoticeItem key={notice.id} notice={notice} onSelect={setSelectedNotice} />
                         ))}

                         {/* Duplicate List for Loop (Only if scrolling) */}
                         {shouldScroll && activeNotices.map((notice) => (
                             <NoticeItem key={`dup-${notice.id}`} notice={notice} idSuffix="-dup" onSelect={setSelectedNotice} />
                         ))}
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                        <Bell className="w-12 h-12 mb-4 opacity-20" />
                        No active notices at the moment.
                    </div>
                )}
                {shouldScroll && (
                     <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
                )}
                 {shouldScroll && (
                     <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
                )}
            </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-sky-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative group perspective">
            {/* Image Frame Effect */}
            <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 ease-out shadow-xl"></div>
            <img 
              src={IMAGES.campus} 
              alt="School Campus" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-white transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-1"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-secondary font-extrabold uppercase tracking-widest text-sm mb-2 block animate-pulse-slow">About Us</span>
            <h2 className="text-4xl font-extrabold text-primary mb-6 drop-shadow-sm">A Legacy of Excellence Since 2012</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Established by Founder Manager & Director Mr. Vijay Narayan Pandey, {SCHOOL_INFO.name} started with a humble beginning in five rooms and has grown into one of the town's leading educational institutes.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We believe in the idea that "One small step today is a giant leap tomorrow." Our students are groomed to be aesthetically rich, intellectually aware, and integrated young individuals.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary font-bold text-lg hover:text-secondary transition-colors group">
              Read our full story 
              <span className="ml-2 bg-primary text-white rounded-full p-1 group-hover:bg-secondary transition-colors shadow-md group-hover:shadow-glow group-hover:rotate-45 duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 perspective">
            <div className="bg-gradient-to-br from-sky-50 to-white p-10 rounded-2xl shadow-card border-l-8 border-primary transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:rotate-x-2">
              <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl shadow-lg">V</span>
                Our Vision
              </h3>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "To deliver overall excellence through a professional approach, in turn empowering the better to do best."
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-card border-l-8 border-secondary transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:rotate-x-2">
              <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
                <span className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl shadow-lg">M</span>
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a learning environment where students, staff, and parents work together to enable students to be innovative, value-driven, leadership-oriented, and lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-24 bg-gradient-to-br from-primaryDark to-primary text-white relative overflow-hidden perspective">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-shadow animate-float-3d">World-Class Facilities</h2>
            <p className="text-sky-200 text-lg">Designed to stimulate learning and growth</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureIcon 
              icon={<ShieldCheck className="w-10 h-10" />} 
              title="Safe Campus" 
              desc="Secure environment with CCTV and trained staff"
            />
             <FeatureIcon 
              icon={<Monitor className="w-10 h-10" />} 
              title="Smart Classes" 
              desc="Digital learning with projectors & smart boards"
            />
             <FeatureIcon 
              icon={<FlaskConical className="w-10 h-10" />} 
              title="Science Labs" 
              desc="Well-equipped labs for learning by doing"
            />
             <FeatureIcon 
              icon={<GraduationCap className="w-10 h-10" />} 
              title="No Homework" 
              desc="Stress-free policy for Classes I & II"
            />
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/infrastructure" className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-sky-50 transition-colors shadow-lg hover:scale-105 transform duration-200">
               View All Facilities
             </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-8">Ready to start the journey?</h2>
           <Link 
              to="/contact" 
              className="bg-secondary text-white px-10 py-5 rounded-xl font-bold text-xl shadow-[0_6px_0_rgb(12,74,110)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgb(12,74,110)] active:translate-y-[4px] active:shadow-none transition-all inline-flex items-center"
            >
              Contact Us Today
           </Link>
        </div>
      </section>
    </main>
  );
};

// 3D Flip Card Component
const HighlightCard: React.FC<{ icon: React.ReactNode, title: string, description: string, delay: string }> = ({ icon, title, description, delay }) => (
  <div 
    className="group h-[320px] w-full perspective cursor-pointer animate-fade-in-up" 
    style={{animationDelay: delay}}
  >
    <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180 transition-transform">
      {/* Front Side */}
      <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center backface-hidden border-b-4 border-secondary">
        <div className="mb-6 bg-sky-50 p-6 rounded-full shadow-inner transform group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-extrabold text-primary mb-4">{title}</h3>
        <p className="text-gray-500 text-center text-sm font-semibold uppercase tracking-wider">Hover for details</p>
      </div>

      {/* Back Side */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-primaryDark rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white border-b-4 border-sky-400">
        <h3 className="text-2xl font-extrabold mb-4 text-sky-300">{title}</h3>
        <p className="text-center text-sky-50 leading-relaxed font-medium text-lg">
          {description}
        </p>
        <div className="mt-6 bg-white/10 p-2 rounded-full">
            <ArrowRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  </div>
);

// Feature Icon Component
const FeatureIcon: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group">
    <div className="mb-4 text-sky-300 group-hover:text-white transition-colors">{icon}</div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-sky-100 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Home;
