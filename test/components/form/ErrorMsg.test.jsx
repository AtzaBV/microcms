import { render } from '@testing-library/react';
import { ErrorMsg } from "../../../src/components/form/ErrorMsg";

describe('Test on <ErrorMsg> component', () => { 
    test('should show an error message', () => { 
        const showError = true;
        const { container } = render( <ErrorMsg showError={showError}/> );

        const divElement = container.getElementsByClassName('alert alert-danger');
        expect(divElement).toBeTruthy();
        expect(divElement[0].innerHTML).toBe('Fields cannot be empty');
    });
});