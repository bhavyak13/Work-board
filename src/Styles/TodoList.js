import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        borderRight: props => ((props.status !== 'done') ? '2px solid black' : 'none'),
        marginTop: '2rem',
        height: '50%',
        width: '100%'
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    todos:{
        display:'flex',
        width:'100%',
        flexWrap:'wrap'
    }
})
export default useStyles;