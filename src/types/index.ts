export type TaskProps = {
    id: string;
    title: string;
    description: string;
    done: boolean;
    time: 'today' | 'tomorrow'| 'week' | 'month';
  }