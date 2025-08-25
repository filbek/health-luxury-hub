import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'medical', name: 'Medical Insights' },
    { id: 'tourism', name: 'Istanbul Tourism' },
    { id: 'patient-stories', name: 'Patient Stories' },
    { id: 'health-tips', name: 'Health Tips' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: '5 Things to Know Before Getting Limb Lengthening Surgery',
      excerpt: 'Important considerations and preparation tips for patients considering limb lengthening procedures in Turkey.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'November 15, 2023',
      category: 'medical',
      categoryLabel: 'Medical Insights',
      author: 'Dr. Ahmet Yilmaz'
    },
    {
      id: 2,
      title: 'Exploring Istanbul: Must-Visit Places During Your Medical Stay',
      excerpt: 'Discover the best cultural and historical sites to visit during your recovery period in Istanbul.',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'November 8, 2023',
      category: 'tourism',
      categoryLabel: 'Istanbul Tourism',
      author: 'Mehmet Kaya'
    },
    {
      id: 3,
      title: 'The Rise of Medical Tourism: Why Turkey is Leading the Way',
      excerpt: 'An in-depth look at why Turkey has become a global leader in medical tourism and what sets it apart.',
      image: 'https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'October 30, 2023',
      category: 'medical',
      categoryLabel: 'Medical Insights',
      author: 'Dr. Sarah Johnson'
    },
    {
      id: 4,
      title: 'My Hair Transplant Journey in Istanbul: A Patient Story',
      excerpt: 'Carlos from Spain shares his experience getting a hair transplant and exploring Istanbul during recovery.',
      image: 'https://images.unsplash.com/photo-1626954079979-ec4f7b05e032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'October 22, 2023',
      category: 'patient-stories',
      categoryLabel: 'Patient Stories',
      author: 'Carlos Rodriguez'
    },
    {
      id: 5,
      title: 'Nutrition Tips for Faster Recovery After Surgery',
      excerpt: 'Expert advice on the best foods and supplements to support healing after medical procedures.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'October 15, 2023',
      category: 'health-tips',
      categoryLabel: 'Health Tips',
      author: 'Dr. Ayşe Demir'
    },
    {
      id: 6,
      title: 'The Bosphorus Experience: Healing Between Two Continents',
      excerpt: 'How Istanbul\'s unique geography creates a special environment for recovery and rejuvenation.',
      image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'October 8, 2023',
      category: 'tourism',
      categoryLabel: 'Istanbul Tourism',
      author: 'Mehmet Kaya'
    },
    {
      id: 7,
      title: 'Advancements in Gastric Sleeve Surgery: What to Expect in 2024',
      excerpt: 'The latest techniques and technologies improving outcomes for obesity surgery patients.',
      image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'September 30, 2023',
      category: 'medical',
      categoryLabel: 'Medical Insights',
      author: 'Dr. Ahmet Yilmaz'
    },
    {
      id: 8,
      title: 'From Russia with Gratitude: Elena\'s Dental Transformation',
      excerpt: 'Elena shares her journey from Moscow to Istanbul for her Hollywood Smile procedure.',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'September 22, 2023',
      category: 'patient-stories',
      categoryLabel: 'Patient Stories',
      author: 'Elena Petrova'
    },
    {
      id: 9,
      title: 'Mindfulness and Meditation: Supporting Your Healing Journey',
      excerpt: 'How mental wellness practices can enhance recovery and overall treatment outcomes.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'September 15, 2023',
      category: 'health-tips',
      categoryLabel: 'Health Tips',
      author: 'Dr. Sarah Johnson'
    }
  ];
  
  // Filter blog posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center font-serif">Health Luxury Hub Blog</h1>
          <p className="text-xl text-neutral-dark text-center max-w-3xl mx-auto">
            Expert insights, patient stories, and guides to medical treatments and Istanbul experiences
          </p>
        </div>
      </div>
      
      {/* Category Filters */}
      <div className="bg-white py-6 shadow-md sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral-light text-neutral-darkest hover:bg-neutral'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Link to={`/blog/${post.id}`} className="block relative overflow-hidden h-56">
                  <img 
                    src={post.image || "https://placehold.co/800x400/4fc3f7/ffffff?text=Blog+Post"} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                    {post.categoryLabel}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-neutral-dark mb-2">
                    <i className="bi bi-calendar3 mr-2"></i>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-dark mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-neutral-dark">
                      <i className="bi bi-person mr-1"></i>
                      <span>{post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                    >
                      Read More
                      <i className="bi bi-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-neutral-dark">Please try a different category or check back later for new content.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4 font-serif">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8">
              Stay updated with the latest medical insights, patient stories, and special offers from Health Luxury Hub
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                required
              />
              <button type="submit" className="btn bg-secondary hover:bg-secondary-dark text-white whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
