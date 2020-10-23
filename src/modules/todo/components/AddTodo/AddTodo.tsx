import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { mutate } from 'swr';

import { TextField } from '../../../../components/TextField';

import styles from './AddTodo.module.css';
import { useTodo } from '../../hooks/useTodo';
import { ITodo } from '../../types';

const cx = classNames.bind(styles);

export const AddTodo: React.FC = () => {
    const [value, setValue] = useState('');
    const [isFocused, setFocused] = useState(false);
    const { createTodo } = useTodo();
    const handleChange = (event: React.SyntheticEvent) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const handleSubmit = async (value: string) => {
        const newTodo: ITodo = { _id: '-1', task: value, isComplete: false };
        mutate(
            '/api/getTodos',
            async ({ data }: { data: ITodo[] }) => {
                return { success: true, data: [...data, newTodo] };
            },
            false
        );
        await createTodo(value);
        mutate('/api/getTodos');
        setValue('');
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSubmit(value);
        } else if (event.key === 'Escape') {
            setFocused(false);
        }
    };

    return (
        <li className={cx('addTodo', { isFocused })}>
            <i className={cx('plus')} />
            <TextField
                value={value}
                placeholder={isFocused ? '' : 'New task'}
                className={cx('input')}
                onChange={handleChange}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                onKeyDown={handleKeyDown}
            />
        </li>
    );
};
