// @flow

export type Post = {
  node: {
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
      description: string,
      file: {
        url: string,
      },
    },
  },
};
