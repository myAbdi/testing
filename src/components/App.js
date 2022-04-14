import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {

    return (
        <div data-testid = "app-1">
            <CommentBox/>
            <CommentList/>
        </div>
    );
};