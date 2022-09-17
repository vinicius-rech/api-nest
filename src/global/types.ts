export type TaskStatusProps = {
    status: "todo" | "completed"
}

export type TaskProps = {
    title: string; status: TaskStatusProps; description: string;
}
