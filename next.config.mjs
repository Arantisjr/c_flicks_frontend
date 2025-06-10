
import createNextIntl from 'next-intl/plugin';

const withNextIntl = createNextIntl(); 


/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export',
};

export default withNextIntl(nextConfig);
