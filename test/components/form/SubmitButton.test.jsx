import { render } from '@testing-library/react';
import { SubmitButton } from "../../../src/components/form/SubmitButton";

describe('Test <SubmitButton /> component', () => { 
    test('should show edit button if id is given', () => {
        
        const { container } = render(<SubmitButton id={'10'}/>);

        const buttonElement = container.getElementsByTagName('button');
        expect(buttonElement[0].innerHTML).toBe('Edit');
    });
});