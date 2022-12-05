import { StyleSheet } from "react-native"

export const styles=StyleSheet.create({
    card:{
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 5,
        width: '90%',
        height: 200,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    head:{
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    taskImage:{
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    taskInfo:{
        width: '70%',
        height: '100%',
        justifyContent: 'center'
    },
    group:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    title:{
        fontSize: 16,
        marginLeft: 10
    },
    text:{
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#072d69'
    },
    body:{
        width: '100%',
        height: '55%',
    },
    description:{
        marginTop: 16,
        marginLeft: 18,
        lineHeight: 20,
        color: '#072d69'
    },
    taskDate:{
        position: 'absolute',
        top: 70,
        backgroundColor: 'white'
    },
    due:{
        marginLeft: 20,
        color: 'grey'
    }, 
    date:{
        marginHorizontal: 16,
        color: 'grey'
    }
})