import React from "react";
import styled from "styled-components";
import { ChartBar } from "./ChartBar";

export const Chart = ({ expenses }) => {
  const maxPrice = 2000;

  const month = [
    {
      label: "Январь",
      currentPricee: 0,
    },
    {
      label: "Февраль",
      currentPricee: 0,
    },
    {
      label: "Март",
      currentPricee: 0,
    },
    {
      label: "Апрель",
      currentPricee: 0,
    },
    {
      label: "Май",
      currentPricee: 0,
    },
    {
      label: "Июнь",
      currentPricee: 0,
    },
    {
      label: "Июль",
      currentPricee: 0,
    },
    {
      label: "Август",
      currentPricee: 0,
    },
    {
      label: "Сентябрь",
      currentPricee: 0,
    },
    {
      label: "Октябрь",
      currentPricee: 0,
    },
    {
      label: "Ноябрь",
      currentPricee: 0,
    },
    {
      label: "Декабрь",
      currentPricee: 0,
    },
  ];
  expenses.forEach((item) => {
    const getMonth = item.date.getMonth();

    month[getMonth].currentPricee += item.amount;
  });
  return (
    <StyledChartContainer>
      {month.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPricee={item.currentPricee}
          maxPrice={maxPrice}
        />
      ))}
    </StyledChartContainer>
  );
};

const StyledChartContainer = styled.div`
  width: 100%;
  height: 151px;
  padding: 1rem;
  background-color: #f8dfff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;
