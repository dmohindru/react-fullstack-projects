import { useTypeSelector } from "../../hooks/useTypedSelector"
import { Typography } from "@mui/material"

export const AlphaCounterValue: React.FC = () => {
    const alphaCount = useTypeSelector((state) => state.alphaCounter.value)
    return (
        <Typography variant="h1" sx={{flexGrow: 1, textAlign: 'center'}}>
            {alphaCount}
        </Typography>
    )
}