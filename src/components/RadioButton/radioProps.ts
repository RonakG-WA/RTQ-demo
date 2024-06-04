interface Option {
    value: string;
    label: string;
}

export interface radioProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    options: Option[];
}