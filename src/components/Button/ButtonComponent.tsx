import { Button } from "@mui/material";
import { buttonProps } from "./buttonProps";

const ButtonComponent: React.FC<buttonProps> = (props) => {
    return (
        <>
            <Button
                sx={props.sx}
                type={props.type}
                id={props.id}
                name={props.name}
                color={props.color}
                variant={props.variant}
                onClick={props.onClick}
            >
                {props.name}
            </Button>
        </>
    )
}

export default ButtonComponent;