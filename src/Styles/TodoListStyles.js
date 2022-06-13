import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        borderRight: props => ((props.status !== 'Done') ? '2px dashed white' : 'none'),
        marginTop: '2rem',
        height: '50%',
        width: '100%'
    },
    title: {
        width: '50%',
        textAlign: 'center',
        border:'2px solid white',
        paddingBottom:'0.5rem',
        paddingTop:'0.5rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    todos:{
        display:'flex',
        color:'black',
        width:'100%',
        flexWrap:'wrap'
    }
})
export default useStyles;