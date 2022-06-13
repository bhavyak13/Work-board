import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root: {
        height: '100%',
        backgroundColor:'black',
        color:'white'
    },
    panes: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: '100%'
    }
})
export default useStyles;