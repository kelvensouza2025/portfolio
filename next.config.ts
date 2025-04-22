import nextra from "nextra";
import type { NextConfig } from "next";

// Aqui você cria o withNextra, que aplica o Nextra nas configurações
const withNextra = nextra({});

// Aqui ficam suas configurações normais do Next.js
const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Aqui você exporta o nextConfig passando pelo withNextra
export default withNextra(nextConfig);
