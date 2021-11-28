import React from 'react';
import { TextReplacerProps } from './text-replacer.model';
import TypewriterComponent from 'typewriter-effect';

export const Typewriter = ({ texts }: TextReplacerProps): JSX.Element => {
    return (
        <TypewriterComponent
            options={{
                strings: texts,
                autoStart: true,
                loop: true
            }}
        />
    );
};
