import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5499C7',
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
        backgroundColor: '#5499C7',
        width: '100%',
    },
    label: {
        fontSize: 20,
        color: 'white'
    },
    _label: {
        fontSize: 20,
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
    _button: {
        width: 200, height: 50,
        borderWidth: 1,
        borderColor: '#5499C7',
        backgroundColor: '#5499C7',
        marginTop: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#5499C7',
        fontWeight: 'bold'
    },
    _buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    listView: {
        backgroundColor: '#5499C7',
        borderRadius: 10,
        height: 50,
    },
    listViewText: {
        marginLeft: 10,
        fontSize: 20
    },
    headerRight: {
        marginRight: 10
    },
    card: {
        alignItems: 'center',
        borderRadius: 20,
        width: '95%',
    },
})

const home = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#5499C7'
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
    detailContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    avatar: {
        width: 100, height: 100,
        alignSelf: 'center',
        margin: 10,
        borderColor: 'white',
        borderWidth: 1,
    },
    label: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        width: 300,
        alignSelf: 'center'
    },
    _avatar: {
        width: 100, height: 100,
        alignSelf: 'center',
        margin: 10,
        borderColor: '#5499C7',
        borderWidth: 1,
    },
    labelCenter: {
        fontSize: 30,
        marginBottom: 20,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    icon: {
        marginLeft: 20,
        alignSelf: 'center'
    }
})

const timeTable = StyleSheet.create({
    container: {
        alignItems: 'flex-start'
    },
    label: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        alignSelf: 'center'
    },
})

const activity = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    date: {
        marginBottom: 10,
        fontSize: 20
    },
    detail: {
        marginBottom: 20,
        fontSize: 15
    },
    label: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        alignSelf: 'center'
    },
    input: {
        width: '90%', height: 250,
        marginBottom: 10,
        marginTop: 15,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        fontSize: 20,
        padding: 10,
    }
})

const visit = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label: {
        fontSize: 27,
        marginBottom: 5
    },
    labelSub: {
        fontSize: 18,
        color: 'gray'
    }
})

const comment = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    },
    labelSub: {
        fontSize: 18,
        marginBottom: 20
    },
    input: {
        width: '90%', height: 250,
        marginBottom: 10,
        marginTop: 15,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'lightgray',
        fontSize: 20,
        padding: 10,
    }
})

export default { common, home, detail, timeTable, activity, visit, comment }

