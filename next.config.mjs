import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

const nextConfig = {
  // output: "export", // or remove if not doing static export
};

export default withNextIntl(nextConfig);
