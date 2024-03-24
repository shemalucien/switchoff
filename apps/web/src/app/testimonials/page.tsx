import React from 'react';
import TestimonialCard from './testimonial-card';
import charles from '../../../public/images/Charles.jpg';
import aline from '../../../public/images/aline.jpg';
import junior from '../../../public/images/junior.jpg';
import junior2 from '../../../public/images/junior2.jpg';
import muyango from '../../../public/images/muyango.jpg';
const testimonials = [
 { quote: "This product has changed my life!", author: "Charles", imageUrl: charles },
 { quote: "I am happy with the service.", author: "Aline", imageUrl:aline },
 { quote: "Highly recommended!", author: "Junior", imageUrl: junior },
 { quote: "Excellent quality and service.", author: "Junior", imageUrl: junior2 },
 { quote: "Amazing experience!", author: "Muyango", imageUrl: muyango},
];

const TestimonialsPage = () => {
 return (
    <div className="container px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} imageUrl={testimonial.imageUrl} />
        ))}
      </div>
    </div>
 );
};

export default TestimonialsPage;
