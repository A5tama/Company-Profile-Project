/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
            {
                protocol:"https",
                hostname:"images.pexels.com"
            },
            {
                protocol:"https",
                hostname:"images01.nicepagecdn.com"
            },
            {
                protocol:"https",
                hostname:"img.freepik.com"
            },
        
        ],
    },
};

export default nextConfig;
