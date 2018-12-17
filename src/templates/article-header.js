// @flow
import * as React from 'react';
import { css } from 'emotion';

import QuoteCard from '../components/base-components/quote-card';

const headerContainer = css`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
`;

const quoteContainer = css`
  margin-right: 0.5rem;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

type Props = {
  keyQuote: string,
};

const ArticleHeader = ({ keyQuote }: Props) => (
  <div className={headerContainer}>
    {keyQuote && (
      <div className={quoteContainer}>
        <QuoteCard>
          <div
            dangerouslySetInnerHTML={{ __html: keyQuote }} // eslint-disable-line react/no-danger, max-len
          />
        </QuoteCard>
      </div>
    )}
  </div>
);

export default ArticleHeader;
