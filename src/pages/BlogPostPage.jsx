import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPostPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  
  // In a real app, you would fetch the blog post data from an API
  // For this example, we'll simulate a blog post
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPost({
        id: parseInt(id),
        title: '5 Things to Know Before Getting Limb Lengthening Surgery',
        content: `
          <p>Limb lengthening surgery has become increasingly popular for individuals looking to increase their height for various reasons, from addressing limb length discrepancies to cosmetic height enhancement. As a leading provider of limb lengthening procedures in Istanbul, Health Luxury Hub has helped hundreds of patients achieve their height goals safely and effectively.</p>
          
          <p>Before you decide to undergo this life-changing procedure, here are five essential things you should know:</p>
          
          <h3>1. Understanding the Different Surgical Techniques</h3>
          
          <p>Modern limb lengthening has evolved significantly from earlier methods. Today, there are several advanced techniques available:</p>
          
          <ul>
            <li><strong>LON (Lengthening Over Nail):</strong> This hybrid technique combines external fixation with an internal nail, reducing the time needed with an external fixator and decreasing complication rates.</li>
            <li><strong>PRECICE Nail System:</strong> This fully internal lengthening device is controlled by an external remote control, eliminating the need for external fixators entirely. It offers a more comfortable experience with less visible scarring.</li>
            <li><strong>Cosmetic Height Increase:</strong> Specialized procedures focusing on aesthetic proportions for those seeking moderate height increases.</li>
          </ul>
          
          <p>At Health Luxury Hub, our orthopedic surgeons will recommend the most appropriate technique based on your specific anatomy, goals, and medical history.</p>
          
          <h3>2. The Lengthening Process Takes Time</h3>
          
          <p>Limb lengthening is not an immediate transformation but rather a gradual process that occurs in phases:</p>
          
          <ul>
            <li><strong>Surgery Phase:</strong> The initial procedure to implant the lengthening device.</li>
            <li><strong>Distraction Phase:</strong> The gradual lengthening period (typically 1mm per day) lasting 2-3 months depending on your height goals.</li>
            <li><strong>Consolidation Phase:</strong> The healing period where new bone solidifies, lasting approximately 2-3 months.</li>
            <li><strong>Rehabilitation Phase:</strong> Physical therapy to restore strength and function, which can continue for several months.</li>
          </ul>
          
          <p>The entire process from surgery to full recovery typically takes 6-9 months. Patients should be prepared for this timeline and understand that patience is essential for optimal results.</p>
          
          <h3>3. Physical Therapy is Crucial for Success</h3>
          
          <p>Perhaps the most underestimated aspect of limb lengthening is the importance of physical therapy and rehabilitation. Regular, dedicated physical therapy is not optional—it's absolutely essential for:</p>
          
          <ul>
            <li>Maintaining joint mobility during lengthening</li>
            <li>Preventing muscle contractures</li>
            <li>Strengthening muscles that are stretched during the process</li>
            <li>Ensuring proper gait and function after lengthening</li>
          </ul>
          
          <p>At Health Luxury Hub, our packages include specialized physical therapy sessions during your stay in Istanbul, and we provide comprehensive guidance for continuing rehabilitation after returning home.</p>
          
          <h3>4. Realistic Expectations About Height Gain</h3>
          
          <p>While limb lengthening can significantly increase your height, there are biological and safety limitations to consider:</p>
          
          <ul>
            <li>Most patients can safely gain 6-8 cm (2.4-3.1 inches) in one segment (tibias or femurs).</li>
            <li>Some patients opt for sequential lengthening of both segments for a total gain of 12-15 cm (4.7-5.9 inches), but this requires multiple surgeries and a longer overall process.</li>
            <li>The amount of lengthening possible depends on your individual anatomy, muscle elasticity, and overall health.</li>
          </ul>
          
          <p>Our surgeons will provide a realistic assessment of your potential height gain during your consultation, ensuring you have appropriate expectations.</p>
          
          <h3>5. Combining Treatment with Cultural Experience</h3>
          
          <p>One unique aspect of undergoing limb lengthening in Istanbul is the opportunity to combine medical treatment with a rich cultural experience. At Health Luxury Hub, we believe that mental well-being contributes significantly to physical recovery.</p>
          
          <p>Our limb lengthening packages include:</p>
          
          <ul>
            <li>Luxury accommodation in 5-star hotels with views of the Bosphorus</li>
            <li>Cultural tours of Istanbul's historical sites during recovery periods</li>
            <li>Bosphorus dinner cruises and other cultural experiences</li>
            <li>Personal assistants to help navigate the city and provide support</li>
          </ul>
          
          <p>Many patients report that experiencing Istanbul's beauty and rich heritage provided a positive psychological boost during their recovery journey.</p>
          
          <h3>Conclusion</h3>
          
          <p>Limb lengthening surgery is a significant decision that requires careful consideration and preparation. By understanding these five key aspects, you'll be better equipped to make an informed choice and achieve the best possible outcome.</p>
          
          <p>If you're considering limb lengthening, we invite you to schedule a free consultation with our specialized orthopedic team at Health Luxury Hub. We'll provide personalized information based on your specific situation and help you determine if this procedure is right for you.</p>
        `,
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        date: 'November 15, 2023',
        category: 'Medical Insights',
        author: {
          name: 'Dr. Ahmet Yilmaz',
          title: 'Chief Orthopedic Surgeon',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
        },
        relatedPosts: [
          {
            id: 3,
            title: 'The Rise of Medical Tourism: Why Turkey is Leading the Way',
            image: 'https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            category: 'Medical Insights'
          },
          {
            id: 4,
            title: 'My Hair Transplant Journey in Istanbul: A Patient Story',
            image: 'https://images.unsplash.com/photo-1626954079979-ec4f7b05e032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            category: 'Patient Stories'
          },
          {
            id: 2,
            title: 'Exploring Istanbul: Must-Visit Places During Your Medical Stay',
            image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            category: 'Istanbul Tourism'
          }
        ]
      });
      setLoading(false);
    }, 1000);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="pt-20 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={post.image || "https://placehold.co/1920x800/4fc3f7/ffffff?text=Blog+Post"} 
          alt={post.title}
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl">
              <span className="inline-block bg-primary text-white text-sm font-medium py-1 px-3 rounded mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4 font-serif">{post.title}</h1>
              <div className="flex items-center text-white">
                <div className="flex items-center mr-6">
                  <i className="bi bi-calendar3 mr-2"></i>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-person mr-2"></i>
                  <span>{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Author Info */}
              <div className="flex items-center mb-8 p-6 bg-neutral-lightest rounded-xl">
                <img 
                  src={post.author.image || "https://placehold.co/100x100/4fc3f7/ffffff?text=Author"} 
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  crossOrigin="anonymous"
                />
                <div>
                  <h3 className="font-bold text-lg">{post.author.name}</h3>
                  <p className="text-neutral-dark">{post.author.title}</p>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              {/* Share Links */}
              <div className="mt-12 pt-8 border-t border-neutral">
                <h3 className="font-bold mb-4">Share This Article</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#3b5998] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1da1f2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#0077b5] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-light text-neutral-darkest rounded-full flex items-center justify-center hover:bg-neutral transition-colors">
                    <i className="bi bi-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {/* Sidebar */}
              <div className="sticky top-32">
                {/* CTA */}
                <div className="bg-primary-light p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Interested in Limb Lengthening?</h3>
                  <p className="mb-6">
                    Discover our premium limb lengthening packages in Istanbul with world-class surgeons and luxury recovery experiences.
                  </p>
                  <Link to="/treatments/limb-lengthening" className="btn btn-primary w-full">
                    View Treatment Details
                  </Link>
                </div>
                
                {/* Related Posts */}
                <div className="bg-white border border-neutral rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {post.relatedPosts.map(relatedPost => (
                      <div key={relatedPost.id} className="flex items-start">
                        <Link to={`/blog/${relatedPost.id}`} className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 mr-4">
                          <img 
                            src={relatedPost.image || "https://placehold.co/80x80/4fc3f7/ffffff?text=Post"} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                            crossOrigin="anonymous"
                          />
                        </Link>
                        <div>
                          <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                          <h4 className="font-bold">
                            <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                              {relatedPost.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6 font-serif">Ready to Begin Your Health Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today for a free consultation and discover how we can create a personalized treatment experience for you in Istanbul
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary hover:bg-neutral-light">
              <i className="bi bi-calendar-check mr-2"></i>
              Get Free Consultation
            </Link>
            <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white">
              <i className="bi bi-whatsapp mr-2"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
