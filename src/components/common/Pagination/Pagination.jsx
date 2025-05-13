import React from "react";
import * as S from "./styled";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <S.PaginationContainer>
      <S.PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </S.PaginationButton>
      {pageNumbers.map((number) => (
        <S.PageNumber
          key={number}
          isActive={currentPage === number}
          onClick={() => onPageChange(number)}
        >
          {number}
        </S.PageNumber>
      ))}
      <S.PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </S.PaginationButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
