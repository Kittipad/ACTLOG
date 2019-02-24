import { StyleSheet } from 'react-native'

const view = StyleSheet.create({
  timeTableContainer: {
    alignItems: 'flex-start'
  },
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
    marginLeft: 1,
    marginRight: 10
  },
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
  },
  actField: {
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
  headerTimeTable: {
    fontSize: 25,
    marginBottom: 5,
    marginLeft: 5,
    alignSelf: 'center',
    color: '#34495E'
  },
  sub: {
    fontSize: 20,
    color: '#34495E'
  },
  _sub: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    margin: 5
  },
  subAct: {
    fontSize: 20,
    color: '#34495E',
    marginBottom: 20
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
  },
  actLabel: {
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: 'lightgray',
    color: '#34495E',
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 5,
    paddingBottom: 5
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
  error
}