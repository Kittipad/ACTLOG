import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'steelblue',
        width: "75%", height: 50,
        margin: 10,
        borderRadius: 5,
        padding: 10,
        alignSelf: "center",
    },
    scrollView: {
        backgroundColor: 'white',
        width: '100%'
    },
    label: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'steelblue',
        marginBottom: 10,
        fontSize: 20,
        color: 'gray',
        padding: 10,
        marginLeft: 10,
        marginRight: 10
    }
})

const home = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },
    menu: {
        backgroundColor: 'lightgray',
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
        borderRadius: 50,
        alignSelf: 'center',
        margin: 10
    }
})

export default { common, home, detail }