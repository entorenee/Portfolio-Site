// @flow

type PostExcerpt = {
  body: {
    childMarkdownRemark: {
      excerpt: string,
    },
  },
  fields: {
    slug: string,
  },
  headlineImage?: {
    file: {
      url: string,
    },
    title: string,
  },
  id: string,
  postDate: string,
  title: string,
}

export type PostNode = {
  node: PostExcerpt,
}

// eslint-disable-next-line
export type Post = PostExcerpt & $Shape<PostNode>
