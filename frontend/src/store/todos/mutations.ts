import { gql } from 'apollo-boost';

export const UPDATE_ALL_TODOS = gql`
    mutation UpdateAllTodos($todos: [TodoInput]) {
        updateAllTodos(todos: $todos) {
            success
            message
            data {
                todos {
                    all {
                        id
                        task
                        isComplete
                    }
                    active {
                        id
                        task
                        isComplete
                    }
                    completed {
                        id
                        task
                        isComplete
                    }
                }
            }
        }
    }
`;

export const CREATE_TODO = gql`
    mutation CreateTodo($task: String!) {
        createTodo(task: $task) {
            success
            message
            data {
                id
                task
                isComplete
            }
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: String!) {
        deleteTodo(id: $id) {
            success
            message
            data
        }
    }
`;

export const TOGGLE_TODO = gql`
    mutation ToggleTodo($id: String!) {
        toggleTodo(id: $id) {
            success
            message
            data {
                id
                task
                isComplete
            }
        }
    }
`;

export const EDIT_TODO = gql`
    mutation EditTodo($id: String!, $task: String!) {
        editTodo(id: $id, task: $task) {
            success
            message
            data {
                id
                task
                isComplete
            }
        }
    }
`;
