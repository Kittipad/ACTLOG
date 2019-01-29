import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import DBRelateTest from './DBRelateTest'

//student side
import StdHome from './Student/HomeScreen'
import StdTimeTable from './Student/TimeTable/TimeTableScreen'
import StdAddTimeTable from './Student/TimeTable/AddTimeTableScreen'
import StdActivity from './Student/Activity/ActivityScreen'
import StdAddActivity from './Student/Activity/AddActivityScreen'
import StdVisit from './Student/Visit/VisitScreen'
import StdComment from './Student/Comment/CommentScreen'
import StdDetail from './Student/DetailScreen'
import StdEditDetail from './Student/EditDetailScreen'

//staff side
import StaffHome from './Staff/HomeScreen'
import StaffTimeTable from './Staff/TimeTable/TimeTableScreen'
import StaffViewTimeTable from './Staff/TimeTable/ViewTimeTableScreen'
import StaffActivity from './Staff/Activity/ActivityScreen'
import StaffViewActivity from './Staff/Activity/ViewActivityScreen'
import StaffComment from './Staff/Comment/CommentScreen'
import StaffSaveComment from './Staff/Comment/SaveCommentScreen'
import StaffDetail from './Staff/DetailScreen'

//teacher side
import TeachHome from './Teacher/HomeScreen'
import TeachVisit from './Teacher/Visit/VisitScreen'
import TeachSaveVisit from './Teacher/Visit/SaveVisitScreen'
import TeachActivity from './Teacher/Activity/ActivityScreen'
import TeachViewActivity from './Teacher/Activity/ViewActivityScreen'
import TeachDetail from './Teacher/DetailScreen'

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'สมัครสมาชิก'
    }
  },
  DBRelateTest: {
    screen: DBRelateTest,
    navigationOptions: {
      title: 'ทดสอบฐานข้อมูล'
    }
  },
  Student: {
    screen: StdHome,
    navigationOptions: {
      title: 'หน้าแรก'
    }
  },
  StudentTimeTable: {
    screen: StdTimeTable,
    navigationOptions: {
      title: 'ตารางลงเวลา'
    }
  },
  StudentAddTimeTable: {
    screen: StdAddTimeTable,
    navigationOptions: {
      title: 'เพิ่มตารางลงเวลา'
    }
  },
  StudentActivity: {
    screen: StdActivity,
    navigationOptions: {
      title: 'กิจกรรม'
    }
  },
  StudentAddActivity: {
    screen: StdAddActivity,
    navigationOptions: {
      title: 'เพิ่มกิจกรรม'
    }
  },
  StudentVisit: {
    screen: StdVisit,
    navigationOptions: {
      title: 'ผลการนิเทศ'
    }
  },
  StudentComment: {
    screen: StdComment,
    navigationOptions: {
      title: 'ความคิดเห็น'
    }
  },
  StudentDetail: {
    screen: StdDetail,
    navigationOptions: {
      title: 'ข้อมูลส่วนตัว'
    }
  },
  StudentEditDetail: {
    screen: StdEditDetail,
    navigationOptions: {
      title: 'แก้ไขข้อมูลส่วนตัว'
    }
  },
  Staff: {
    screen: StaffHome,
    navigationOptions: {
      title: 'หน้าแรก'
    }
  },
  StaffTimeTable: {
    screen: StaffTimeTable,
    navigationOptions: {
      title: 'ตรวจตารางเวลา'
    }
  },
  StaffViewTimeTable: {
    screen: StaffViewTimeTable,
    navigationOptions: {
      title: '%ชื่อนักศึกษา%'
    }
  },
  StaffActivity: {
    screen: StaffActivity,
    navigationOptions: {
      title: 'ตรวจกิจกรรม'
    }
  },
  StaffViewActivity: {
    screen: StaffViewActivity,
    navigationOptions: {
      title: '%ชื่อนักศึกษา%'
    }
  },
  StaffComment: {
    screen: StaffComment,
    navigationOptions: {
      title: 'บันทึกความคิดเห็น'
    }
  },
  StaffSaveComment: {
    screen: StaffSaveComment,
    navigationOptions: {
      title: '%ชื่อนักศึกษา%'
    }
  },
  StaffDetail: {
    screen: StaffDetail,
    navigationOptions: {
      title: 'ข้อมูลส่วนตัว'
    }
  },
  Teacher: {
    screen: TeachHome,
    navigationOptions: {
      title: 'หน้าแรก'
    }
  },
  TeachVisit: {
    screen: TeachVisit,
    navigationOptions: {
      title: 'บันทึกนิเทศ'
    }
  },
  TeachSaveVisit: {
    screen: TeachSaveVisit,
    navigationOptions: {
      title: '%ชื่อนักศึกษา%'
    }
  },
  TeachActivity: {
    screen: TeachActivity,
    navigationOptions: {
      title: 'ตรวจกิจกรรม'
    }
  },
  TeachViewActivity: {
    screen: TeachViewActivity,
    navigationOptions: {
      title: '%ชื่อนักศึกษา%'
    }
  },
  TeachDetail: {
    screen: TeachDetail,
    navigationOptions: {
      title: 'ข้อมูลส่วนตัว'
    }
  },
}, { initialRouteName: 'Login' })

export default createAppContainer(RootStack)