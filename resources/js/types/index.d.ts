export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    email_verified_at?: string;
    role: string;
    image?: string;
    created_at: string;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
