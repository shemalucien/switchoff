// components/Highlights.tsx
import { useState } from 'react';
import Splide, { AutoScroll } from '@splidejs/react-splide';
import Image from 'next/image';
import bottle from './Image.jpg';

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
            url: 'https://example.com/path/to/video1.mp4',
        },
    },
    {
        id: '3',
        text: 'Another highlight from the social media showcasing our new video.',
        media: {
            type: 'video',
            url: 'https://example.com/path/to/video1.mp4',
        },
    },
    // Add more dummy tweets as needed
];

const Highlights: React.FC = () => {
    const [tweets] = useState<Tweet[]>(dummyTweets); // Use dummy data as the state

    return (
        <div className="highlights">
            <h2 className="text-4xl font-bold text-center mb-8">Recent Highlights From Our Social Medias</h2>
            <ul className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {tweets.map((tweet) => (
                    <li key={tweet.id}>
                        <p>{tweet.text}</p>
                        {tweet.media && (
                            <div>
                                {tweet.media.type === 'image' && (
                                    <><div className="sm:w-1/3 p-2">
                                        <Image src={bottle} alt="Image 1" layout="responsive" width={200} height={100} />
                                    </div></>
                                )}
                                {tweet.media.type === 'video' && (
                                    <video controls>
                                        <source src={tweet.media.url} type="video/mp4" />
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

