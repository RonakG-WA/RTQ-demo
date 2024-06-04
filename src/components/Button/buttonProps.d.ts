import { SxProps } from "@mui/material";

interface buttonProps {
    key?: string | number,
    id?: string,
    color?:"success" | "error" | "primary"
    type?: "button" | "submit" | "reset",
    variant?: "text" | "contained" | "outlined",
    name?: string,
    sx?: SxProps | object,
    onClick?: () => void
}