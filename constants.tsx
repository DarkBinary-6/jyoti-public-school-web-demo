import React from 'react';
import { NavItem } from './types';
import { BookOpen, Users, Lightbulb, Trophy, Palette, Mic, Music, Activity } from 'lucide-react';

/* 
  ===================================================================================
  CLIENT CONFIGURATION AREA
  ===================================================================================
  
  HOW TO UPDATE THIS WEBSITE:
  1. Change text inside quotes ("") to update content.
  2. To change images, replace the URL inside quotes with your image path (e.g., "/images/pic.jpg").
  3. To hide a document in Public Disclosure, leave the 'url' field empty ("").
*/

export const SCHOOL_INFO = {
  name: "Jyoti Public School",
  address: "Station Road, Bikapur (Faizabad) – Ayodhya, Uttar Pradesh, India – 224204",
  phone: ["05270-267051", "+91-99199-19588"],
  email: "jpsfzd0@gmail.com",
  founded: 2012,
  founder: "Mr. Vijay Narayan Pandey",
  tagline: "Discover your future with us"
};

// ===================================================================================
// IMAGE CONFIGURATION
// Place your actual images in the 'public/images' folder and update paths below.
// ===================================================================================

export const IMAGES = {
  // 1. LOGO: Replace "" with "/images/logo.png" (or your filename)
  logo: "", 
  
  // 2. MAIN HERO IMAGE (Home Page Banner)
  hero: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop", 
  
  // 3. INFRASTRUCTURE & SECTIONS
  classroom: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  lab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
  sports: "https://images.unsplash.com/photo-1531415074984-61809711695d?q=80&w=800&auto=format&fit=crop", 
  music: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop",
  campus: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
  
  // 4. PEOPLE
  founder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", 
};

// ===================================================================================
// PUBLIC DISCLOSURE DOCUMENTS
// Place PDF files in 'public/documents/' folder.
// If a file is not ready, leave url as "" (empty string).
// ===================================================================================

export const DISCLOSURE_DOCUMENTS = [
  { title: "General Information", url: "/documents/general_info.pdf" },
  { title: "Documents & Information", url: "/documents/docs_info.pdf" },
  { title: "Result & Academics", url: "/documents/results.pdf" },
  { title: "Staff (Teaching)", url: "/documents/staff.pdf" },
  { title: "School Infrastructure", url: "/documents/infrastructure.pdf" },
  { title: "Fee Structure", url: "/documents/fees.pdf" },
  { title: "Annual Academic Calendar", url: "/documents/calendar.pdf" },
  { title: "School Management Committee (SMC)", url: "/documents/smc.pdf" },
  { title: "Parent Teacher Association (PTA)", url: "/documents/pta.pdf" },
  { title: "Last Three Year Result (Class X)", url: "/documents/class_x_results.pdf" },
];

// ===================================================================================
// GALLERY IMAGES
// Add or remove items here to update the Gallery page.
// Categories: 'Classroom', 'Sports', 'Campus', 'Events'
// ===================================================================================

export const GALLERY_IMAGES = [
    { src: IMAGES.classroom, category: 'Classroom' },
    { src: IMAGES.sports, category: 'Sports' },
    { src: IMAGES.lab, category: 'Campus' },
    { src: IMAGES.music, category: 'Events' },
    { src: IMAGES.library, category: 'Campus' },
    { src: IMAGES.campus, category: 'Campus' },
    // Add more images below like this:
    { src: "https://images.unsplash.com/photo-1577896238808-92f9ef1461f4?q=80&w=800&auto=format&fit=crop", category: 'Classroom' },
    { src: "https://images.unsplash.com/photo-1511551203524-9a24350a5771?q=80&w=800&auto=format&fit=crop", category: 'Events' },
];


// ===================================================================================
// NAVIGATION & ICONS (Rarely needs changing)
// ===================================================================================

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Academics', path: '/academics' },
  { label: 'Infrastructure', path: '/infrastructure' },
  { label: 'Fees', path: '/fees' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'Public Disclosure', path: '/disclosure' },
];

export const CO_CURRICULAR = [
  { name: "Dramatics", icon: <Users className="w-6 h-6" /> },
  { name: "Elocution", icon: <Mic className="w-6 h-6" /> },
  { name: "Debates", icon: <Users className="w-6 h-6" /> },
  { name: "Recitation & Quizzes", icon: <BookOpen className="w-6 h-6" /> },
  { name: "Painting", icon: <Palette className="w-6 h-6" /> },
  { name: "Music", icon: <Music className="w-6 h-6" /> },
  { name: "Dance", icon: <Activity className="w-6 h-6" /> },
  { name: "Cricket", icon: <Activity className="w-6 h-6" /> },
];
