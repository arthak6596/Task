import React from 'react';

const PopularProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Furniture Assembly',
      price: '$',
      image: 'images/assembly.jpg'
    },
    {
      id: 2,
      title: 'Mount Art or Shelves',
      price: '$',
      image: '/api/placeholder/240/180?text=Mount+Art'
    },
    {
      id: 3,
      title: 'Mount a TV',
      price: '$',
      image: '/api/placeholder/240/180?text=Mount+TV'
    },
    {
      id: 4,
      title: 'Help Moving',
      price: '$',
      image: '/api/placeholder/240/180?text=Moving'
    },
    {
      id: 5,
      title: 'Home & Apartment Cleaning',
      price: '$',
      image: '/api/placeholder/240/180?text=Cleaning'
    },
    {
      id: 6,
      title: 'Minor Plumbing Repairs',
      price: '$',
      image: '/api/placeholder/240/180?text=Plumbing'
    },
    {
      id: 7,
      title: 'Electrical Help',
      price: '$',
      image: '/api/placeholder/240/180?text=Electrical'
    },
    {
      id: 8,
      title: 'Heavy Lifting',
      price: '$',
      image: '/api/placeholder/240/180?text=Heavy+Lifting'
    }
  ];

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative">
        <h2 className="text-3xl font-bold text-green-800 mb-16">Popular Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <div className="h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Projects starting at {project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProjects;