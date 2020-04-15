import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container, Button, PageBlock } from './styles';

export default function Pagination({ actualPage = 1, changePage }) {
  const [pages, setPages] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
  ]);

  useEffect(() => {
    if (actualPage === 0) {
      changePage(1);
    }
    const lastpage = pages[pages.length - 1];
    const initialPage = pages[0];

    if (actualPage < initialPage) {
      if (actualPage === 0) {
        return;
      }

      const newPages = pages;
      newPages.unshift(actualPage);
      newPages.pop();
      setPages(newPages);
    }

    if (actualPage > lastpage) {
      const newPages = pages;
      if (actualPage < lastpage) {
        newPages.pop();
      } else {
        newPages.push(actualPage);
        newPages.shift();
      }
      setPages(newPages);
    }
  }, [actualPage]);

  return (
    <Container>
      <Button onClick={() => changePage(actualPage - 1)}>
        <MdKeyboardArrowLeft size={30} />
      </Button>
      {pages.map(page => (
        <PageBlock
          active={page === actualPage}
          onClick={() => changePage(page)}
          key={page}
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
