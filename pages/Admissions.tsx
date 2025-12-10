import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    classApplied: 'Select',
    mobile: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.mobile === '' || formData.parentName === '') {
        alert("Please fill required fields");
        return;
    }

    const enquiry = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        type: 'Admission',
        ...formData
    };

    // Save to local storage mock database
    const existingData = JSON.parse(localStorage.getItem('school_enquiries') || '[]');
    localStorage.setItem('school_enquiries', JSON.stringify([enquiry, ...existingData]));
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
        parentName: '',
        childName: '',
        classApplied: 'Select',
        mobile: '',
        email: '',
        message: ''
    });
  };

  return (
    <div className="bg-sky-50 min-h-screen">
      <div className="bg-gradient-to-r from-primaryDark to-primary py-20 text-center text-white shadow-lg relative overflow-hidden">
        <h1 className="text-5xl font-extrabold mb-4 text-shadow-sm relative z-10 animate-fade-in-up">Admissions</h1>
        <p className="text-white/90 text-xl font-medium relative z-10 animate-fade-in-up" style={{animationDelay: '0.1s'}}>Join the Jyoti Public School Family</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 perspective">
          
          {/* Information Section */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl font-bold text-primary border-b-4 border-secondary inline-block pb-2">Admission Process</h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-card border-l-8 border-primary hover-3d-card">
                <h3 className="font-bold text-xl mb-3 text-primary">Classes Accepted</h3>
                <p className="text-gray-700 font-medium text-lg">Nursery to Class X</p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Timing</h4>
                        <p className="text-gray-600">Admissions are accepted from <span className="font-bold text-primary">January to March</span>.</p>
                    </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                     <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Transfer Cases</h4>
                        <p className="text-gray-600">Mid-term admissions are possible for transfer cases, subject to seat availability.</p>
                    </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                     <div className="bg-sky-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Special Policy</h4>
                        <p className="text-gray-600">The school strictly implements a <span className="font-bold text-secondaryDark">"No Homework Policy"</span> for Classes I and II.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 hover-3d-card">
                <h3 className="font-bold text-2xl mb-6 text-primary">Visit Campus</h3>
                <div className="space-y-4 text-gray-700">
                    <div className="flex items-center group">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                            <MapPin className="w-5 h-5 text-secondary group-hover:text-white" />
                        </div>
                        <span className="font-medium">{SCHOOL_INFO.address}</span>
                    </div>
                    <div className="flex items-center group">
                         <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                            <Phone className="w-5 h-5 text-secondary group-hover:text-white" />
                        </div>
                        <span className="font-medium">{SCHOOL_INFO.phone.join(', ')}</span>
                    </div>
                    <div className="flex items-center group">
                         <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                            <Mail className="w-5 h-5 text-secondary group-hover:text-white" />
                        </div>
                        <span className="font-medium">{SCHOOL_INFO.email}</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Enquiry Form or Success Message */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden animate-fade-in-up hover-3d-card" style={{animationDelay: '0.4s'}}>
            
            {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pop-in">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Thank You!</h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-md">
                        Thanks for submitting your enquiry. We have received your details and will contact you soon.
                    </p>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondaryDark transition-colors shadow-lg"
                    >
                        Submit Another Enquiry
                    </button>
                </div>
            ) : (
                <>
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                    <h2 className="text-3xl font-extrabold text-primary mb-8">Admission Enquiry</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Parent Name</label>
                            <input 
                                type="text" 
                                name="parentName"
                                value={formData.parentName}
                                onChange={handleChange}
                                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-gray-900 placeholder-gray-500 hover:shadow-inner" 
                                placeholder="Enter your name" 
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Child's Name</label>
                            <input 
                                type="text" 
                                name="childName"
                                value={formData.childName}
                                onChange={handleChange}
                                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-gray-900 placeholder-gray-500 hover:shadow-inner" 
                                placeholder="Enter child's name" 
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Class</label>
                                <select 
                                    name="classApplied"
                                    value={formData.classApplied}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary outline-none appearance-none cursor-pointer text-gray-900 hover:shadow-inner"
                                >
                                    <option>Select</option>
                                    <option>Nursery</option>
                                    <option>KG</option>
                                    <option>Class I</option>
                                    <option>Class II</option>
                                    <option>Class III-X</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary mb-4">Mobile</label>
                                <input 
                                    type="tel" 
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-gray-900 placeholder-gray-500 hover:shadow-inner" 
                                    placeholder="10-digit no" 
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-primary mb-4">Email (Optional)</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-gray-900 placeholder-gray-500 hover:shadow-inner" 
                                placeholder="your@email.com" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-primary mb-4">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary outline-none transition-all h-32 resize-none text-gray-900 placeholder-gray-500 hover:shadow-inner" 
                                placeholder="Any specific queries?"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-primary to-primaryDark text-white font-bold py-4 rounded-xl shadow-[0_4px_0_rgb(12,74,110)] hover:-translate-y-1 hover:shadow-[0_6px_0_rgb(12,74,110)] active:translate-y-[2px] active:shadow-none transition-all text-lg flex items-center justify-center transform active:scale-[0.98]">
                            <Send className="w-5 h-5 mr-2" /> Submit Enquiry
                        </button>
                    </form>
                </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admissions;
