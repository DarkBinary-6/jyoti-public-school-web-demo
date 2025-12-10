import React from 'react';
import { FileText, Download, AlertCircle } from 'lucide-react';
import { DISCLOSURE_DOCUMENTS } from '../constants';

const Disclosure: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-primary py-12 text-center text-white">
        <h1 className="text-3xl font-bold mb-2">Mandatory Public Disclosure</h1>
        <p className="text-gray-300 text-sm">Appendix - X (As per CBSE guidelines)</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISCLOSURE_DOCUMENTS.map((doc, index) => (
                <DisclosureCard key={index} title={doc.title} url={doc.url} />
            ))}
        </div>
      </div>
    </div>
  );
};

const DisclosureCard: React.FC<{ title: string; url: string }> = ({ title, url }) => {
    const hasLink = url && url.trim() !== "";

    return (
        <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-40 group bg-gray-50 hover:bg-white hover:border-sky-100">
            <div className="flex items-start">
                <FileText className={`w-6 h-6 mr-3 flex-shrink-0 ${hasLink ? 'text-secondary' : 'text-gray-400'}`} />
                <h3 className={`font-semibold ${hasLink ? 'text-gray-800' : 'text-gray-500'}`}>{title}</h3>
            </div>
            
            {hasLink ? (
                <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="self-end text-sm text-primary font-bold flex items-center hover:underline mt-4 group-hover:text-secondary transition-colors"
                >
                    View Details <Download className="w-4 h-4 ml-1" />
                </a>
            ) : (
                <span className="self-end text-xs text-gray-400 font-semibold bg-gray-200 px-2 py-1 rounded flex items-center mt-4 cursor-not-allowed">
                    <AlertCircle className="w-3 h-3 mr-1" /> Coming Soon
                </span>
            )}
        </div>
    );
};

export default Disclosure;