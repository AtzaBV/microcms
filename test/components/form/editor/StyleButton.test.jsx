import { render, screen } from "@testing-library/react";
import { StyleButton } from "../../../../src/components/form/editor/StyleButton";

describe('Test <StyleButton /> component', () => { 
    test('should show a button with specific text inside', () => { 
        render( <StyleButton label={'H1'}/> )

        const button = screen.getByRole('button');
        expect(button.innerHTML).toBe('H1');
    });
});