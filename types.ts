import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FacilityProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface FacultyMember {
  name: string;
  designation: string;
  image: string;
}