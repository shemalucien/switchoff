'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface InstagramPost {
    id: string;
    caption: string;
    media_url: string ;
    media_type: string;
    timestamp: string;
    permalink: string;
}


// Dummy data for Instagram posts with images and videos
const dummyPosts: InstagramPost[] = [
    {
        id: '1',
        caption: 'This is a highlight from Instagram featuring our latest product.',
        media_url: './videos/NICE.mp4',
        media_type: 'video',
        timestamp: '2024-03-22T10:00:00Z',
        permalink: 'https://www.instagram.com/p/1',
    },
    {
        id: '2',
        caption: 'Another highlight from the social media showcasing our new video.',
        media_url: './videos/NICE.mp4',
        media_type: 'video',
        timestamp: '2024-03-21T10:00:00Z',
        permalink: 'https://www.instagram.com/p/2',
    },
    {
        id: '3',
        caption: 'This is a highlight from Instagram featuring our latest product.',
        media_url: './videos/NICE.mp4',
        media_type: 'video',
        timestamp: '2024-03-20T10:00:00Z',
        permalink: 'https://www.instagram.com/p/3',
    },
    // Add more dummy posts as needed
];




const Highlights: React.FC = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInstagramFeed = async () => {
            try {
                const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_IG_TOKEN as string}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch Instagram feed");
                }

                const instagramFeed: { data: InstagramPost[] } = await response.json();
                setPosts(instagramFeed.data);
            } catch (err) {
                if (err instanceof Error) {
                    // console.error("Error fetching Instagram feed:", err.message);
                    setError(err.message);
                } else {
                    // console.error("Unexpected error:", err);
                    setError("An unexpected error occurred.");
                }
                // Set dummy data as fallback
                setPosts(dummyPosts);
            }
        };

        void fetchInstagramFeed(); 
    }, []);

    return (
        <div className="highlights">
            <h2 className="text-3xl font-bold text-center mb-8">Recent Highlights From Our Social Medias</h2>
            {error && <p className="text-red-500">{error}</p>}
            {posts.length > 0 && (
                <ul className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {posts.map((post : InstagramPost) => (
                        <li key={post.id} className="flex flex-col items-center">
                            <p className="text-center">{post.caption}</p>
                            {post.media_url && (
                                <div className="flex justify-center">
                                    {post.media_type === 'image' && (
                                        <div className="p-2 flex justify-center items-center">
                                            <Image src={post.media_url} alt={post.caption} layout="responsive" width={50} height={50} />
                                        </div>
                                    )}
                                    {post.media_type === 'video' && (
                                        <video className="p-2 flex justify-center items-center" controls>
                                            <source src={post.media_url} type="video/mp4" />
                                            <track kind="captions" src="path/to/captions.vtt" srcLang="en" label="English" default />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Highlights;


// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import guaran from '../../../public/images/nice.jpg';

// // Define a type for the media object within a tweet
// interface Media {
//     type: 'image' | 'video';
//     url: string;
// }

// // Define a type for a tweet
// interface Tweet {
//     id: string;
//     text: string;
//     media?: Media; // media is optional
// }

// // Dummy data for tweets with images and videos
// const dummyTweets: Tweet[] = [
//     {
//         id: '1',
//         text: 'This is a highlight from the social media featuring our latest product.',
//         media: {
//             type: 'image',
//             url: 'https://example.com/path/to/image1.jpg',
//         },
//     },
//     {
//         id: '2',
//         text: 'Another highlight from the social media showcasing our new video.',
//         media: {
//             type: 'video',
//             url: './videos/ENERGY.mp4',
//         },
//     },
//     {
//         id: '3',
//         text: 'Another highlight from the social media showcasing our new video.',
//         media: {
//             type: 'video',
//             url: './videos/NICE.mp4',
//         },
//     },
//     // Add more dummy tweets as needed
// ];

// const Highlights: React.FC = () => {
//     const [tweets] = useState<Tweet[]>(dummyTweets); // Use dummy data as the state

//     return (
//         <div className="highlights m-2">
//             <h2 className="text-3xl font-bold text-center mb-8">Recent Highlights From Our Social Medias</h2>
//             <ul className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//                 {tweets.map((tweet) => (
//                     <li key={tweet.id} className="flex flex-col items-center">
//                         <p className="text-gray-700 text-base text-center">{tweet.text}</p>
//                         {tweet.media && (
//                             <div className="flex justify-center">
//                                 {tweet.media.type === 'image' && (
//                                     <div className="p-2 flex justify-center items-center">
//                                         <Image src={guaran} alt="Image 1" layout="responsive" width={50} height={50} />
//                                     </div>
//                                 )}
//                                 {tweet.media.type === 'video' && (
//                                     <video className="p-2 flex justify-center items-center" controls>
//                                         <source src={tweet.media.url} type="video/mp4" />
//                                         <track kind="captions" src="path/to/captions.vtt" srcLang="en" label="English" default />
//                                         Your browser does not support the video tag.
//                                     </video>
//                                 )}
//                             </div>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>

//     );
// };

// export default Highlights;



