import { makeStyles } from '@material-ui/styles'
import React from 'react'
const useStyles = makeStyles({
    CartStyle: {
        position: 'absolute',
        top: 50,
        width: '100%',
        height: '100vh',
    },
    CartDataStyle: {
        display: 'flex',
        paddingTop: '3rem',
        width: '100%',
        justifyContent: 'center',
        '& img': {
            width: '30%',
            height: '50vh',
        }
    },
    btnNameStyle: {
        display: 'flex',
        flexDirection: 'column',
        ' & h2': {
            backgroundColor: '#581845',
            color: 'white',
        },
        '& button': {
            padding: 10,
            border: 'none',
            backgroundColor: '#581845',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        '& button:hover': {
            backgroundColor: 'red',
            color: 'white',
            cursor: 'pointer',
            transition: '.8s ease-in-out'
        }
    }
})
export default function Cart() {
    const classes = useStyles()


    return (
        <div className={classes.CartStyle}>
            {/* {cartUser ? cartUser.map((val, i) => (
                <div className={classes.CartDataStyle}>
                    <img />
                    <div className={classes.btnNameStyle}>
                        <h2>Breed </h2>
                        <button>Delete</button>
                    </div>
                </div>
            )) : ''} */}
        </div>
    )
}
