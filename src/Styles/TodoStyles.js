import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    todo: {
        width: '50%',
        //100 if length%2===1
        textAlign: "center"
    },
    title: {
        fontWeight: '600',
        marginBottom:'0.5rem',
    },
    box: {
        width: '90%',
        height: '6rem',
        backgroundColor: 'pink',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft:'1rem',
        marginTop:'1rem',
        '&:hover': {
            opacity: [0.9, 0.8, 0.7],
        },
    }
})
export default useStyles;