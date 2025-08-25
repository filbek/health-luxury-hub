import React from 'react';

const IstanbulExperienceSection = () => {
  const experiences = [
    {
      title: 'Bosphorus Dinner Cruise',
      image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      description: 'Enjoy a luxurious dinner while cruising between Europe and Asia on the iconic Bosphorus strait.'
    },
    {
      title: 'Hagia Sophia & Blue Mosque',
      image: 'https://images.unsplash.com/photo-1545424436-1be2e3c0959e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      description: 'Visit these architectural masterpieces that showcase Istanbul\'s rich Byzantine and Ottoman heritage.'
    },
    {
      title: 'Grand Bazaar Shopping',
      image: 'https://images.unsplash.com/photo-1624798911782-d5d6a0347a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      description: 'Explore one of the world\'s oldest and largest covered markets with over 4,000 shops.'
    },
    {
      title: 'Topkapi Palace Museum',
      image: 'https://images.unsplash.com/photo-1636811893736-1eb9e8bae05f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      description: 'Discover the opulent residence of Ottoman sultans with stunning views of the Bosphorus.'
    }
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-serif text-neutral-darkest">Experience Istanbul</h2>
        <p className="section-subtitle">
          All our medical packages include exclusive cultural experiences in the magnificent city of Istanbul
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg h-80"
            >
              <img 
                src={experience.image || "https://placehold.co/600x800/4fc3f7/ffffff?text=Istanbul"} 
                alt={experience.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn btn-primary">
            <i className="bi bi-airplane-engines mr-2"></i>
            Explore All Cultural Experiences
          </a>
        </div>
      </div>
    </section>
  );
};

export default IstanbulExperienceSection;
