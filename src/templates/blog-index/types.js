// @flow

type PostExcerpt = {
  id: string,
  title: string,
  postDate: string,
  body: {
    childMarkdownRemark: {
      excerpt: string,
      html: string,
    },
  },
  headlineImage?: {
    file: {
      url: string,
    },
    title: string,
  },
}

export type PostNode = {
  node: PostExcerpt,
}

export type Post = PostExcerpt & $Shape<PostNode>
