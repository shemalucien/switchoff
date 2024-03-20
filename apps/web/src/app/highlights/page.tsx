'use client';
import { useState } from 'react';
import Image from 'next/image';
import guaran from '../../../public/images/Image.jpg';

// Define a type for the media object within a tweet
interface Media {
    type: 'image' | 'video';
    url: string;
}

// Define a type for a tweet
interface Tweet {
    id: string;
    text: string;
    media?: Media; // media is optional
}

// Dummy data for tweets with images and videos
const dummyTweets: Tweet[] = [
    {
        id: '1',
        text: 'This is a highlight from Twitter featuring our latest product.',
        media: {
            type: 'image',
            url: 'https://example.com/path/to/image1.jpg',
        },
    },
    {
        id: '2',
        text: 'Another highlight from the social media showcasing our new video.',
        media: {
            type: 'video',
            url: './videos/ENERGY.mp4',
        },
    },
    {
        id: '3',
        text: 'Another highlight from the social media showcasing our new video.',
        media: {
            type: 'video',
            url: './videos/NICE.mp4',
        },
    },
    // Add more dummy tweets as needed
];

const Highlights: React.FC = () => {
    const [tweets] = useState<Tweet[]>(dummyTweets); // Use dummy data as the state

    return (
        <div className="highlights">
            <h2 className="text-3xl font-bold text-center mb-8">Recent Highlights From Our Social Medias</h2>
            <ul className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {tweets.map((tweet) => (
                    <li key={tweet.id} className="flex flex-col items-center">
                        <p>{tweet.text}</p>
                        {tweet.media && (
                            <div className="flex justify-center">
                                {tweet.media.type === 'image' && (
                                    <div className="p-2 flex justify-center items-center">
                                        <Image src={guaran} alt="Image 1" layout="responsive" width={50} height={50} />
                                    </div>
                                )}
                                {tweet.media.type === 'video' && (
                                    <video className="p-2 flex justify-center items-center" controls>
                                        <source src={tweet.media.url} type="video/mp4" />
                                        <track kind="captions" src="path/to/captions.vtt" srcLang="en" label="English" default />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default Highlights;



