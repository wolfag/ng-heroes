import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { TaskComponent } from "../app/task/task.component";

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export default {
    title: 'Task',
    decorators: [withKnobs],
    excludeStories: /.*Data$/,
};

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'Task_INBOX',
    updated_at: new Date(2019, 0, 1, 9, 0),
};
export const Default = () => ({
    component: TaskComponent,
    props: {
        task: object('task', {...taskData}),
        onPinTask: actionsData.onPinTask,
        onArchiveTask: actionsData.onArchiveTask,
    },
});
// pinned task state
export const Pinned = () => ({
    component: TaskComponent,
    props: {
        task: object('task',{
            ...taskData,
            state: 'TASK_PINNED',
        }),
        onPinTask: actionsData.onPinTask,
        onArchiveTask: actionsData.onArchiveTask,
    },
});
// archived task state
export const Archived = () => ({
    component: TaskComponent,
    props: {
        task: object('task',{
            ...taskData,
            state: 'TASK_ARCHIVED',
        }),
        onPinTask: actionsData.onPinTask,
        onArchiveTask: actionsData.onArchiveTask,
    },
});

export const LongTitle = () => ({
    component: TaskComponent,
    props: {
        task: object('task',{
            ...taskData,
            title: longTitle
        }),
        onPinTask: actionsData.onPinTask,
        onArchiveTask: actionsData.onArchiveTask
    }
})