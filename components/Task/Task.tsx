import React from 'react';
import {TouchableOpacity, Text, StyleSheet, SafeAreaView, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

interface TaskItem {
    id: string;
    title: string;
    state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
    updatedAt: Date;
}

interface TaskProps {
    task: TaskItem;
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
}

export const Task = ({task: {id, title, state}, onArchiveTask, onPinTask}: TaskProps) => {
    return (
        <SafeAreaView style={styles.ListItem}>
            <TouchableOpacity onPress={() => onArchiveTask(id)}>
                {state !== 'TASK_ARCHIVED' ? (
                    <View style={styles.CheckBox} />
                ) : (
                    <Icon name="checkmark-outline" size={20} color={'#2cc5d2'} />
                )}
            </TouchableOpacity>
            <TextInput
                placeholder="Input Title"
                style={
                    state === 'TASK_ARCHIVED'
                        ? styles.ListItemInputTaskArchived
                        : styles.ListItemInputTask
                }
                value={title}
                editable={false}
            />
            <TouchableOpacity onPress={() => onPinTask(id)}>
                <Icon
                    name="star-outline"
                    size={20}
                    color={state !== 'TASK_PINNED' ? '#eee' : '#26c6da'}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    ListItem: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'powderblue',
    },
    CheckBox: {
        borderColor: '#2cc5d2',
        borderWidth: 1,
        width: 20,
        height: 20,
    },
    ListItemInputTaskArchived: {
        paddingHorizontal: 20,
    },
    ListItemInputTask: {
        paddingHorizontal: 20,
    },
});
