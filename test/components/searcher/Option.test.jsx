import { render, screen } from "@testing-library/react";
import { Option } from "../../../src/components/searcher/Option";

describe('Test on <Option> component', () => { 
    test('should show Option component with info and button', () => {
        const post = {
            id: '123456789',
            title: 'test title',
            content: '<p>Test</p>'
        };

        const onSelectPost = jest.fn();

        const { container } = render( <Option post={post} onSelectPost={onSelectPost}/>  );

        const liElement = container.getElementsByClassName('menu-item');
        expect(liElement).toBeTruthy();

        expect( container.getElementsByClassName('menu-item')[0].innerHTML).toBe('<button>test title</button>')
    });
});