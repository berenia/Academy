import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  export const styles = {
    customizeToolbar : {
        maxHeight : 56,
        backgroundColor: '#fff',
        color: '#333',
        paddingTop: 0,
        paddingBottom: 0,
       },
    customizeAppbar : {
        backgroundColor: '#fff',
        minHeight :'36px',
        padding: 0,
        color: '#1133aa',
        marginBottom: 10,
        marginTop: 42
    },
    customizeContainer : {
        padding: 0
    },

    link: {
      textDecoration: 'none',
    }
  };