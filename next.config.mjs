/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true
    },
    images: {
        domains: ['utfs.io'],
    },
};

export default nextConfig;
