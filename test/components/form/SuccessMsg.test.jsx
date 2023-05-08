import { render } from '@testing-library/react';
import { SuccessMsg } from "../../../src/components/form/SuccessMsg";

describe('Test on <SuccessMsg> component', () => { 
    test('should show an error message', () => { 
        const showSuccess = true;
        const { container } = render( <SuccessMsg showSuccess={showSuccess}/> );

        const divElement = container.getElementsByClassName('alert alert-success');
        expect(divElement).toBeTruthy();
        expect(divElement[0].innerHTML).toBe('Action succesfully');
    });
});