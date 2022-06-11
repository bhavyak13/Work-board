import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Paper: {
        width: '33%',
        margin: 'auto',
        padding: '1rem 2rem',
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (max-width: 600px)': {
            width: '80%',
        },
    },
    task: {
    },
    btns: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    btn: {
        marginRight: '1rem',
        '@media (max-width: 600px)': {
            marginRight: '0.5rem',
        },
    },
    completed: {
        textDecoration: 'line-through'
    }
})
export default useStyles;