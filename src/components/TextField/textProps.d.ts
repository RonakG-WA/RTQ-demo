export interface textProps{
    label ?:string,
    value?: string
    variant : TextFieldVariants  | undefined;
    onChange: (event:React.ChangeEvent<HTMLInputElement>) =>void;
    margin ?:normal
}