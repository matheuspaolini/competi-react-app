import React from 'react';

export interface PaginationProps {
  count: number;

  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
