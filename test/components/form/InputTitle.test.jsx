import { render, screen } from '@testing-library/react';
import { InputTitle } from "../../../src/components/form/InputTitle";

describe('Test <InputTitle /> component', () => { 
    test('should show InputTitle with info if is given', () => {
        const inputTitle = 'test title';
        const onChangeTitle = jest.fn();

        render(<InputTitle inputTitle={inputTitle} onChangeTitle={onChangeTitle}/>);
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('test title');
    });
});