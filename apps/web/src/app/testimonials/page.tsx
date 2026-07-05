import React from 'react';
// import charles from '../../../public/images/Charles.jpg';
// import aline from '../../../public/images/aline.jpg';
import junior from '../../../public/images/junior.jpg';
// import junior2 from '../../../public/images/junior2.jpg';
import muyango from '../../../public/images/muyango.jpg';
import clement from '../../../public/images/clement.jpg';
import judy from '../../../public/images/judy.jpg';
import lady2 from '../../../public/images/lady2.jpg';
import TestimonialCard from './testimonial-card';

const testimonials = [
 { quote: "This product has changed my life!", author: "Clement", imageUrl: clement },
 { quote: "I am happy with the service.", author: "Judy", imageUrl: judy },
 { quote: "Highly recommended!", author: "Junior", imageUrl: junior },
 { quote: "Excellent quality and service.", author: "Lady", imageUrl: lady2 },
 { quote: "Amazing experience!", author: "Muyango", imageUrl: muyango},
];

function TestimonialsPage() {
 return (
    <section className="container-page py-16 md:py-20">
      <div className="mb-12">
        <h2 className="section-heading text-gray-900 dark:text-white">What Our Customers Say</h2>
        <p className="section-subheading">
          Hear from our satisfied customers about their experience with Switchoff Drinks
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            author={testimonial.author} 
            imageUrl={testimonial.imageUrl} 
            key={index} 
            quote={testimonial.quote} 
          />
        ))}
      </div>
    </section>
 );
}

export default TestimonialsPage;
