import React from 'react';
import TestimonialCard from './TestimonialCard';
import bottle from './Image.jpg';
const testimonials = [
 { quote: "This product has changed my life!", author: "John Doe", imageUrl: bottle },
 { quote: "I am happy with the service.", author: "Jane Smith", imageUrl:bottle },
 { quote: "Highly recommended!", author: "Alice Johnson", imageUrl: bottle },
 { quote: "Excellent quality and service.", author: "Bob Williams", imageUrl: bottle },
 { quote: "Amazing experience!", author: "Charlie Brown", imageUrl: bottle},
];

const TestimonialsPage = () => {
 return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} imageUrl={testimonial.imageUrl} />
        ))}
      </div>
    </div>
 );
};

export default TestimonialsPage;
