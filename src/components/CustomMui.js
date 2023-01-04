import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const BoxCustom = styled(Box)({
    textAlign: "center",
    height: '37px',
    opacity: 0.7,
})

export const GridCustom = styled(Grid)({
    backgroundColor: '#1E90FF',
    textAlign: 'begin',
    lineHeight: '40px',
    color: 'white',
    position: 'fixed',
    height: '40px'
})