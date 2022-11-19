import Head from 'next/head'

interface HeadProps {
  title?: string
  description?: string
  imageUrl?: string
  path?: string
}

function MetaHead({
  title,
  description,
  imageUrl,
  path,
}: HeadProps) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, minimal-ui, viewport-fit=cover"
      />
      <title>{title} | 1℃</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        property="og:url"
        content={`${process.env.BASE_URL}${path}`}
      />
      <link
        rel="canonical"
        href={`${process.env.BASE_URL}${path}`}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content="일도씨 - 1℃"
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:title"
        content={`${title} | 1℃`}
      />
      {imageUrl && (
        <meta
          property="og:image"
          content={imageUrl}
        />
      )}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={`${title} | 1℃`}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      {imageUrl && (
        <meta
          name="twitter:image"
          content={imageUrl}
        />
      )}
    </Head>
  )
}

export default MetaHead
