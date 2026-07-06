"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
}

// Dummy data for Instagram posts with images and videos
const dummyPosts: InstagramPost[] = [
  {
    id: "1",
    caption: "This is a highlight from Instagram featuring our latest product.",
    media_url: "./videos/NICE.mp4",
    media_type: "video",
    timestamp: "2024-03-22T10:00:00Z",
    permalink: "https://www.instagram.com/p/1",
  },
  {
    id: "2",
    caption:
      "Another highlight from the social media showcasing our new video.",
    media_url: "./videos/NICE.mp4",
    media_type: "video",
    timestamp: "2024-03-21T10:00:00Z",
    permalink: "https://www.instagram.com/p/2",
  },
  {
    id: "3",
    caption: "This is a highlight from Instagram featuring our latest product.",
    media_url: "./videos/NICE.mp4",
    media_type: "video",
    timestamp: "2024-03-20T10:00:00Z",
    permalink: "https://www.instagram.com/p/3",
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
    <div className="space-y-16">
      {/* Distributor Banner Section */}
      <section className="container-page py-12 md:py-16">
        <div className="bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-6 order-2 md:order-1">
              <div>
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  INTERESTED?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Become a Switchoff Distributor
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Join our growing network of distributors and bring premium
                  Switchoff drinks to your market. We offer competitive margins,
                  comprehensive support, and exclusive marketing partnerships.
                </p>
              </div>

              <ul className="space-y-3 text-white/95">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Competitive wholesale pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Marketing and promotional support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Dedicated account management</span>
                </li>
              </ul>

              {/* <div className="flex flex-wrap gap-4 pt-4">
                                <button className="btn-primary !bg-white !text-brand-600 hover:!bg-gray-100">
                                    Contact Us
                                </button>
                                <button className="btn-ghost !text-white border-2 border-white hover:!bg-white/20">
                                    Learn More
                                </button>
                            </div> */}

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="btn-primary !bg-white !text-brand-600 hover:!bg-gray-100"
                >
                  Contact Us
                </Link>

                <Link
                  href="/about"
                  className="btn-ghost border-2 border-white !text-white hover:!bg-white/20"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="order-1 md:order-2 flex items-center justify-center">
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-center text-white">
                  <p className="text-5xl md:text-6xl font-bold mb-2">5+</p>
                  <p className="text-lg text-white/90">
                    Distributors Worldwide
                  </p>
                  <hr className="my-4 border-white/30" />
                  <p className="text-sm text-white/80">Growing every month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container-page py-12 md:py-16">
        <div className="mb-12">
          <h2 className="section-heading text-gray-900 dark:text-white">
            Recent Highlights From Our Social Media
          </h2>
          <p className="section-subheading">
            Check out our latest updates and behind-the-scenes content
          </p>
        </div>

        {error ? (
          <div className="alert-warning mb-8">
            <p>{error}</p>
          </div>
        ) : null}

        {posts.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: InstagramPost) => (
              <a
                className="card-interactive group"
                href={post.permalink}
                key={post.id}
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* Media Container */}
                <div className="relative w-full aspect-square bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-lg mb-4">
                  {post.media_type === "image" && (
                    <Image
                      alt={post.caption}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      fill
                      src={post.media_url}
                    />
                  )}
                  {post.media_type === "video" && (
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      controls
                    >
                      <source src={post.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      View on Instagram
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {post.caption}
                </p>

                {/* Timestamp */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {new Date(post.timestamp).toLocaleDateString()}
                </p>
              </a>
            ))}
          </div>
        )}
      </section>
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
