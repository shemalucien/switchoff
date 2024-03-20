// Import React and Image from 'next/image'
import React from 'react';
import Image from 'next/image';
import energy from '../../../../public/images/ENERGY.jpg';

// interface News {
//     id: string;
//     title: string;
//     imageUrl: StaticImageData;
//     shortDescription: string;
//     content: string;
// }
const NewsDetail = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Example News</h1>
            {/* Use the Image component with the imageUrl string */}
            <div className="w-full mb-4">
                <Image src={energy} alt="Image 1" width={500} height={500}/>
            </div>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto iste neque, culpa a blanditiis quidem eos et minus quia minima sed ex natus accusantium nostrum vero nemo. Non, autem?</p>
        </div>
    );
};

export default NewsDetail;
