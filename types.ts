
export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  jobPosition: string;
  message: string;
}
