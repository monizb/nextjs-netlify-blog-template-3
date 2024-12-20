import Head from "next/head";
import config from "../../lib/config";

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url: string;
  image?: string;
};
export default function BasicMeta({
  title,
  description,
  keywords,
  author,
  url,
  image
}: Props) {
  const previewImage = image || null; // Fallback to a default image if none provided
  const fullUrl = config.base_url + url;
  return (
    <Head>
      <title>
        {title ? [title, config.site_title].join(" | ") : config.site_title}
      </title>
      <meta
        name="description"
        content={description ? description : config.site_description}
      />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords.join(",")
            : config.site_keywords.map((it) => it.keyword).join(",")
        }
      />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={previewImage} />
      <meta property="og:type" content="website" />
      {author ? <meta name="author" content={author} /> : null}
      <link rel="canonical" href={config.base_url + url} />
    </Head>
  );
}
