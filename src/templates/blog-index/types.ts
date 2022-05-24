interface PostExcerpt {
  body: {
    childMarkdownRemark: {
      excerpt: string
    }
  }
  fields: {
    slug: string
  }
  headlineImage?: {
    file: {
      url: string
    }
    title: string
  }
  id: string
  postDate: string
  title: string
}

export interface PostNode {
  node: PostExcerpt
}

export type Post = PostExcerpt & Partial<PostNode>
