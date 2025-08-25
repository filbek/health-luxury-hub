import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreviewSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Things to Know Before Getting Limb Lengthening Surgery',
      excerpt: 'Important considerations and preparation tips for patients considering limb lengthening procedures in Turkey.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'November 15, 2023',
      category: 'Orthopedics'
    },
    {
      id: 2,
      title: 'Exploring Istanbul: Must-Visit Places During Your Medical Stay',
      excerpt: 'Discover the best cultural and historical sites to visit during your recovery period in Istanbul.',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'November 8, 2023',
      category: 'Tourism'
    },
    {
      id: 3,
      title: 'The Rise of Medical Tourism: Why Turkey is Leading the Way',
      excerpt: 'An in-depth look at why Turkey has become a global leader in medical tourism and what sets it apart.',
      image: 'https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'October 30, 2023',
      category: 'Medical Tourism'
    }
  ];

  return (
    <section className="py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-serif text-neutral-darkest">Latest from Our Blog</h2>
        <p className="section-subtitle">
          Expert insights, patient stories, and guides to medical treatments and Istanbul experiences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Link to={`/blog/${post.id}`} className="block relative overflow-hidden h-48">
                <img 
                  src={post.image || "https://placehold.co/800x400/4fc3f7/ffffff?text=Blog+Post"} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                  {post.category}
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
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Read More
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
