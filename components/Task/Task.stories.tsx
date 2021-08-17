import * as React from 'react';
import {ComponentMeta, ComponentStory, storiesOf} from '@storybook/react-native';
import {Task} from './Task';

const TaskMeta: ComponentMeta<typeof Task> = {
    title: 'Task',
    component: Task,
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
            updatedAt: new Date(2021, 0, 1, 9, 0),
        },
    },
    argTypes: {
        onPinTask: {action: 'onPinTask'},
        onArchiveTask: {action: 'onArchiveTask'},
    },
};

export default TaskMeta;

export const Default: ComponentStory<typeof Task> = args => <Task {...args} />;

export const Pinned: ComponentStory<typeof Task> = ({task, ...args}) => (
    <Task task={{...task, state: 'TASK_PINNED'}} {...args} />
);

export const Archived: ComponentStory<typeof Task> = ({task, ...args}) => (
    <Task task={{...task, state: 'TASK_ARCHIVED'}} {...args} />
);
