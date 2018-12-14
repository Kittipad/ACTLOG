import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#1976D2'
    },
    input: {
        width: "75%", height: 50,
        margin: 10,
        borderRadius: 5,
        padding: 0,
        alignSelf: 'center',
    },
    input_: {
        borderBottomColor: 'white'
    },
    inputText: {
        color: 'white'
    },
    scrollView: {
        backgroundColor: '#1976D2',
        width: '100%',
    },
    label: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        width: 200, height: 50,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#1976D2',
        fontWeight: 'bold'
    },
    listView: {
        backgroundColor: '#EF9A9A',
        borderRadius: 10,
        height: 50,
    },
    listViewText: {
        marginLeft: 10,
        fontSize: 20
    }
})

const home = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#1976D2'
    },
    menu: {
        width: 150, height: 150,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuItem: {
        backgroundColor: 'lightgray',
        fontSize: 20
    }
})

const detail = StyleSheet.create({
    avatar: {
        width: 100, height: 100,
        alignSelf: 'center',
        margin: 10,
        borderColor: 'white',
        borderWidth: 1,
    },
    text: {
        width: '90%', height: '100%',
        backgroundColor: '#1976D2',
        alignSelf: 'center',
        flexWrap: 'wrap',
        fontSize: 20,
        color: 'white'
    }
})

export default { common, home, detail }