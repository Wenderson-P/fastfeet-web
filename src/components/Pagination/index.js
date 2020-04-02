import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container, Button, PageBlock } from './styles';

export default function Pagination({ actualPage = 1, changePage }) {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <Container>
      <Button onClick={() => changePage(actualPage - 1)}>
        <MdKeyboardArrowLeft size={30} />
      </Button>
      {pages.map(page => (
        <PageBlock
          active={page === actualPage}
          onClick={() => changePage(page)}
        >
          {page}
        </PageBlock>
      ))}
      <Button onClick={() => changePage(actualPage + 1)}>
        <MdKeyboardArrowRight size={30} />
      </Button>
    </Container>
  );
}
