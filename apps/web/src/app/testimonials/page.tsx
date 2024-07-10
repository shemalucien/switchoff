import React from 'react';
import TestimonialCard from './testimonial-card';
// import charles from '../../../public/images/Charles.jpg';
// import aline from '../../../public/images/aline.jpg';
import junior from '../../../public/images/junior.jpg';
// import junior2 from '../../../public/images/junior2.jpg';
import muyango from '../../../public/images/muyango.jpg';
import clement from '../../../public/images/clement.jpg';
import judy from '../../../public/images/judy.jpg';
import lady2 from '../../../public/images/lady2.jpg';
const testimonials = [
 { quote: "This product has changed my life!", author: "Clement", imageUrl: clement },
 { quote: "I am happy with the service.", author: "Judy", imageUrl: judy },
 { quote: "Highly recommended!", author: "Junior", imageUrl: junior },
 { quote: "Excellent quality and service.", author: "Lady", imageUrl: lady2 },
 { quote: "Amazing experience!", author: "Muyango", imageUrl: muyango},
];

const TestimonialsPage = () => {
 return (
    <div className="container px-4 py-8  dark:text-white dark:bg-gray-900">
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
