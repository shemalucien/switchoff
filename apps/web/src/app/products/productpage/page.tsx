import React from 'react';
import Image, { StaticImageData } from 'next/image';
import guaran from '../../../../public/images/Image.jpg';

interface Product {
  title: string;
  imageUrl: StaticImageData;
  description: string;
  benefits: string[];
  relatedProducts: Product[];
  productDetails: {
    brand: string;
    sample: string;
    volume: string;
    packaging: string;
    shelfLife: string;
    paymentTerm: string;
    fobPrice: string;
    deliveryTime: string;
    certification: string[];
    minimumOrderQuantity: string;
    port: string;
    supplyAbility: string;
  };
}

// Define your static product object outside the component
const staticProduct: Product = {
  title: 'Example Product',
  imageUrl: guaran, // Update this path to your actual image URL
  description: 'This is an example product.',
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
  relatedProducts: [
    {
      title: 'Related Product 1',
      imageUrl: guaran, // Update this path to your actual image URL
      description: 'This is a related product.',
      benefits: [],
      relatedProducts: [],
      productDetails: {
        brand: '',
        sample: '',
        volume: '',
        packaging: '',
        shelfLife: '',
        paymentTerm: '',
        fobPrice: '',
        deliveryTime: '',
        certification: [],
        minimumOrderQuantity: '',
        port: '',
        supplyAbility: ''
      }
    },
    {
      title: 'Related Product 2',
      imageUrl: guaran, // Update this path to your actual image URL
      description: 'This is another related product.',
      benefits: [],
      relatedProducts: [],
      productDetails: {
        brand: '',
        sample: '',
        volume: '',
        packaging: '',
        shelfLife: '',
        paymentTerm: '',
        fobPrice: '',
        deliveryTime: '',
        certification: [],
        minimumOrderQuantity: '',
        port: '',
        supplyAbility: ''
      }
    },
  ],
  productDetails: {
    brand: 'RITA or OEM/ODM available',
    sample: 'Free sample',
    volume: '330 ml',
    packaging: 'Short can',
    shelfLife: '24 months',
    paymentTerm: 'L/C, T/T',
    fobPrice: 'Get Latest Price',
    deliveryTime: '20 - 25 Days after confirming the order',
    certification: ['ISO', 'HACCP', 'FDA', 'HALAL', 'USDA', 'ORGANIC'],
    minimumOrderQuantity: '200 Carton/Order',
    port: 'Ho Chi Minh Port, Vietnam',
    supplyAbility: '300 Twenty-Foot Container/Month',
  },
};

const ProductPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">{staticProduct.title}</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2">
          <Image src={staticProduct.imageUrl} alt={staticProduct.title} width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2">
          <table className="table-auto mt-4">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Description</td>
                <td className="border px-4 py-2">{staticProduct.description}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Product Details</h2>
            <table className="table-auto mt-4 w-full">
              <tbody>
                {Object.entries(staticProduct.productDetails).map(([key, value], index) => (
                  <tr key={index}>
                    <td className="border font-bold px-4 py-2">{key}</td>
                    <td className="border px-4 py-2">{Array.isArray(value) ? value.join(', ') : value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      {/* Add image of the product in big size */}
      <div className='w-full md:w-1/2'>
        <Image src={staticProduct.imageUrl} alt={staticProduct.title} width={700} height={500} />
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Benefits</h2>
        <ul>
          {staticProduct.benefits.map((benefit, index) => (
            <li key={index} className="list-disc pl-5">{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4 text-center ">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-wrap">
          {staticProduct.relatedProducts.map((relatedProduct, index) => (
            <div key={index} className="border p-4 relative">
              <Image src={relatedProduct.imageUrl} alt={relatedProduct.title} width={500} height={500} />
              <div className="p-4">
                <h3 className="text-xl font-bold mt-2">{relatedProduct.title}</h3>
                <p>{relatedProduct.description}</p>
              </div>
            </div>
          ))}
        </div>



      </div>

    </div>
  );
};

export default ProductPage;
