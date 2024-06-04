import { Button } from "@mui/material";
// import Grid from "@mui/material/Grid";
import { FC } from "react";
import { buttonProps } from "./buttonProps";

const ButtonComponent: FC<buttonProps> = (props) => {
    return (
        <>
            {/* <Grid sx={props.sx}> */}
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
            {/* </Grid> */}
        </>
    )
}

export default ButtonComponent;