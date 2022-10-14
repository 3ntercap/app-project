import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('In document', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const btn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

});