import React from 'react';
import { render, screen} from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Home from './index';

describe('Testing Home Component', () => {
  test('Delete Selected button is implemented', async() => {
    render(<Home />);

    const deleteSelectedBtn = await screen.findByText('Delete Selected');

    expect(deleteSelectedBtn).toBeInTheDocument();
  });
  test('Pages Component is implemented', async() => {
    render(<Home />);

    const listElement= await screen.findByTestId('pageslist');
    expect(listElement).toBeInTheDocument();

  });
  test('Pagination Component is implemented', async() => {
    render(<Home />);

    const listElement= await screen.findByTestId('paginationlist');
    expect(listElement).toBeInTheDocument();

  });
  test('Delete button is implemented', async() => {
    render(<Home />);

    const deleteBtn = await screen.findByTestId('delete1');

    expect(deleteBtn).toBeInTheDocument();
  });
  test('Delete button is Working', async() => {
    render(<Home />);

    const deleteBtn = await screen.findByTestId('delete1');

    UserEvent.click(deleteBtn)

    expect(deleteBtn).not.toBeInTheDocument();
  });
  test('Edit button is implemented', async() => {
    render(<Home />);

    const editBtn = await screen.findByTestId('edit1');

    expect(editBtn).toBeInTheDocument();
  });
  test('Edit button is Working', async() => {
    render(<Home />);

    const editBtn = await screen.findByTestId('edit1');

    UserEvent.click(editBtn)
    const inputElement= await screen.findByTestId('editTest');

    expect(inputElement).toBeInTheDocument();
  });
  test('searchbar is implemented', async() => {
    render(<Home />);

    const searchElement = await screen.findByTestId('searchElement');

    expect(searchElement).toBeInTheDocument();
  });
});