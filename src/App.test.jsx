import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const restaurant = {
    name: '한식당',
    category: '한식',
    address: '강남구',
  };
  const restaurants = [
    {
      id: 1, name: '한식당', category: '한식', address: '강남구',
    },
    {
      id: 2, name: '중식당', category: '중식', address: '송파구',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurant,
    restaurants,
  }));

  it('Restaurants가 보인다.', () => {
    const { container } = render(
      <App />,
    );

    expect(container).toHaveTextContent('Restaurants');
  });

  it('3개의 input이 있다.', () => {
    const { getAllByRole } = render(
      <App />,
    );

    const Inputs = getAllByRole('textbox');

    Inputs.forEach((Input) => {
      expect(Input).not.toBeNull();
    });
  });

  it('등록 버튼이 보인다.', () => {
    const { container } = render(
      <App />,
    );

    expect(container).toHaveTextContent('등록');
  });
});