import Button, { ThemeButton } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('In document', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('With class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});