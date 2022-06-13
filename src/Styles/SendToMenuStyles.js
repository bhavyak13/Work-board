import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    bttn: {
        width: '100%',
        border: "none",
        backgroundColor: 'inherit',
        '&:hover': {
            border: "none",
            cursor: 'pointer'
        }
    }
})
export default useStyles;