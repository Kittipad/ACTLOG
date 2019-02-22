import { StyleSheet } from 'react-native'

const view = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center'
  },
  containerWithScrollView: {
    height: '90%'
  },
  containerWithBorder: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'lightgray'
  },
  scrollView: {
    backgroundColor: 'white',
    width: '100%',
  },
  home: {
    flex: 1, flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  card: {
    alignItems: 'center',
    height: '100%'
  },
  cards: {
    alignSelf: 'center',
    width: '100%',
  },
  labelHeader: {
    fontSize: 25,
    color: '#34495E',
    alignSelf: 'center'
  },
  labelSub: {
    fontSize: 25,
    color: 'gray',
    alignSelf: 'center'
  }
})

const button = StyleSheet.create({
  main: {
    width: 200, height: 50,
    backgroundColor: '#34495E',
    marginTop: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  mainLabel: {
    color: 'white',
    fontSize: 20
  },
  sub: {
    width: 200, height: 50,
    backgroundColor: 'orange',
    marginTop: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  subLabel: {
    color: 'black',
    fontSize: 20
  }
})

const input = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: 'center'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#34495E',
    borderRadius: 35,
    height: 70
  },
  iconColor: {
    color: '#34495E',
  },
  label: {
    fontSize: 20,
    color: '#34495E',
    height: '85%'
  },
  borderWithFont: {
    borderTopWidth: 1,
    borderColor: 'lightgray',
    height: 70,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
})

const icon = StyleSheet.create({
  color: {
    color: '#34495E'
  },
  homeMenuContainer: {
    width: 150, height: 150,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detail: {
    marginLeft: 20,
    alignSelf: 'center',
    color: '#34495E'
  }
})

const label = StyleSheet.create({
  homeMenu: {
    fontSize: 20,
    color: '#34495E',
    marginTop: 10,
  },
  header: {
    color: '#34495E',
    fontSize: 30,
    margin: 10
  },
  sub: {
    fontSize: 20,
    color: '#34495E'
  },
  detail: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    width: 300,
    alignSelf: 'center',
    color: '#34495E'
  },
  visitComment: {
    fontSize: 20,
    marginTop: 10,
    color: '#34495E'
  }
})

const detail = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabelContainer: {
    alignItems: 'flex-start'
  },
  label: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    width: 300,
    alignSelf: 'center',
    color: '#34495E'
  },
  name: {
    fontSize: 30,
    marginBottom: 20,
    color: '#34495E',
    alignSelf: 'center'
  },
  icon: {

  },
  input: {
    width: '90%', height: 50,
    marginBottom: 10,
    marginTop: 15,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    fontSize: 20,
    padding: 10,
  }
})

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
  }
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

const timeTable = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  headerLabel: {
    fontSize: 25,
    marginBottom: 5,
    marginLeft: 5,
    alignSelf: 'center',
    color: '#34495E'
  },
  timeLabel: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    margin: 5
  },
  timeButtonLeft: {
    backgroundColor: '#34495E',
    width: 120, height: 50,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: 10,
    marginRight: 1
  },
  timeButtonRight: {
    backgroundColor: '#34495E',
    width: 120, height: 50,
    justifyContent: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginRight: 10,
    marginLeft: 1
  }
})

const activity = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  label: {
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: '#34495E',
    color: 'white',
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 5,
    paddingBottom: 5
  },
  detail: {
    marginBottom: 20,
    fontSize: 20
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
    borderWidth: 1,
    borderColor: 'gray'
  }
})

const visit = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    marginBottom: 10,
    fontSize: 30,
    color: '#34495E',
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 5,
    paddingBottom: 5
  },
  labelSub: {
    fontSize: 20,
    color: 'gray'
  }
})

const error = StyleSheet.create({
  password: {
    fontSize: 20,
    marginTop: 15,
    color: 'red',
    alignSelf: 'center'
  }
})

export default {
  button,
  view,
  input,
  icon,
  label,
  common,
  home,
  detail,
  timeTable,
  activity,
  visit,
  error
}