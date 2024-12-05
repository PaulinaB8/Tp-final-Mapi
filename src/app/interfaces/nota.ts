export interface Nota {
            id: number; 
            assigner_id: number | null;
            assignee_id: number | null;
            project_id: number;
            section_id: number | null;
            parent_id: number | null;
            order: number;
            content: string; 
            description: string; 
            is_completed: boolean;
            labels: string[];
            priority: number;
            comment_count: number;
            creator_id: number;
            created_at: string; 
            due: {
              date: string;
              string: string;
              lang: string;
              is_recurring: boolean;
            } | null;
            url: string;
            duration: string | null;
            deadline: string | null;
            isMarked?: boolean;
}

export interface NotaCreada {
    content: string;
    description: string;
}