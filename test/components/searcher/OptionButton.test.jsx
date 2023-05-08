import { render, screen } from "@testing-library/react";
import { OptionButton } from "../../../src/components/searcher/OptionButton";

describe('Test on <OptionButton> component', () => { 
    test('should show OptionButton component with title', () => {
        const post = {
            id: '123456789',
            title: 'test title',
            content: '<p>Test</p>'
        };

        const onSelectPost = jest.fn();

        const { container } = render( <OptionButton post={post} onSelectPost={onSelectPost}/>  );

        expect(container.getElementsByTagName('button')[0].innerHTML).toBe('test title');
    });
});