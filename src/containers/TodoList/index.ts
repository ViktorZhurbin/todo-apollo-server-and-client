import { connect } from 'react-redux';

import { TodoList } from './TodoList';
import { IStore } from '~/models/InterfaceStore';
import {
    todoAddAction,
    todoToggleAction,
    todoDeleteAction,
    todoEditAction,
} from '~/store/todos/actions';

const mapStateToProps = ({ todos }: IStore) => ({
    todos,
});

const mapDispatchToProps = {
    toggleTodo: todoToggleAction,
    addTodo: todoAddAction,
    editTodo: todoEditAction,
    deleteTodo: todoDeleteAction,
};

const ConnectedTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export { ConnectedTodoList as TodoList };
