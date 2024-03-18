import React from 'react';
import TestimonialCard from './testimonial-card';
import charles from './Charles.jpg';
import aline from './aline.jpg';
import junior from './junior.jpg';
import junior2 from './junior2.jpg';
import muyango from './muyango.jpg';
const testimonials = [
 { quote: "This product has changed my life!", author: "Charles", imageUrl: charles },
 { quote: "I am happy with the service.", author: "Aline", imageUrl:aline },
 { quote: "Highly recommended!", author: "Junior", imageUrl: junior },
 { quote: "Excellent quality and service.", author: "Junior", imageUrl: junior2 },
 { quote: "Amazing experience!", author: "Muyango", imageUrl: muyango},
];

const TestimonialsPage = () => {
 return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} imageUrl={testimonial.imageUrl} />
        ))}
      </div>
    </div>
 );
};

export default TestimonialsPage;
