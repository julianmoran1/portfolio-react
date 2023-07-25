import { render, screen } from '@testing-library/react';
import Card from './index';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => ({ navigation: jest.fn() })
}));

describe('Card component', () => {

    test('Card component render', () => {
        render(<Card title='Title' text='Text' alt='Alt' src='src' />);
        const card = screen.getByAltText('Alt');
        expect(card).toBeInTheDocument();
    });
});