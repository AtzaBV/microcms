import { render } from '@testing-library/react';
import { PostCard } from '../../src/components/PostCard';
import { MemoryRouter } from 'react-router-dom';

describe('Test on <PostCard /> component', () => { 
    
    const post = {
        id: '123456789',
        title: 'test title',
        content: '<p>Test</p>'
    }
    
    test('should show the postCard with info', () => { 
        const { container } = render( <MemoryRouter><PostCard {...post}/></MemoryRouter> );
        expect(container.getElementsByClassName('card-title')[0].innerHTML).toBe(post.title);

        expect(container.getElementsByClassName('card-text')[0].innerHTML).toBe(post.content + '...');
    });
});