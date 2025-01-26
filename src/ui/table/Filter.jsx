import styled, { css } from "styled-components";
import { useMotorbikes } from "../../features/motorbikes/hooks/useMotorbikes.js";
import SpinnerMini from "../loading/SpinnerMini.jsx";
import { useSearchParams } from "react-router";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options, isLoading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue =
    searchParams.get(filterField) || options.at(0).toLowerCase();

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  if (isLoading) return <SpinnerMini />;
  return (
    <StyledFilter>
      <strong>Filter by:</strong>
      {options?.map((option, index) => (
        <FilterButton
          key={index}
          onClick={() => handleClick(option.toLowerCase())}
          active={option.toLowerCase() === filterValue}
        >
          {option}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
