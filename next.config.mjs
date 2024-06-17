/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 서버에서 Leaflet 모듈을 무시하도록 설정
      config.externals = config.externals || {}
      config.externals['leaflet'] = 'commonjs leaflet'
    } else {
      // 클라이언트에서 Leaflet 모듈 사용
      config.resolve.fallback = {
        leaflet: false,
        ...config.resolve.fallback,
      }
    }

    return config
  },
}

export default nextConfig
