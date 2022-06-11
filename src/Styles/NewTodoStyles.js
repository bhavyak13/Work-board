import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    Paper: {
        width: '33%',
        margin: 'auto',
        padding: '1rem 2rem',
        marginTop: '3rem',
        '@media (max-width: 600px)': {
            width: '80%',
        },
    },
})

export default useStyles;