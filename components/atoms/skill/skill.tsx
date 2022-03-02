import { Title } from '@components';
import React from 'react';
import { SkillProps } from './skill.model';
import styles from './skill.module.css';

export const Skill = ({ className, logo, title, description }: SkillProps): JSX.Element => {
    const Logo: JSX.Element = React.cloneElement(logo);
    return (
        <div className={`${styles.skill} ${className}`}>
            {!!Logo && Logo}
            <Title level={3} className={styles.title}>
                {title}
            </Title>
            <p className={styles.description}>{description}</p>
        </div>
    );
};
