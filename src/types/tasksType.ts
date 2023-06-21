export type TaskType = {
    name: string;
    isDone: boolean;
    id: string;
    assignedTo: string;
    description: string | null;
    due_date: Date| null;
}