import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'

//student side
import StdHome from './Student/HomeScreen'
import StdTimeTable from './Student/TimeTable/TimeTableScreen'
import StdActivity from './Student/Activity/ActivityScreen'
import StdAddActivity from './Student/Activity/AddActivityScreen'
import StdVisit from './Student/Visit/VisitScreen'
import StdComment from './Student/Comment/CommentScreen'
import StdDetail from './Student/DetailScreen'
import StdEditDetail from './Student/EditDetailScreen'

//admin side
import AdminHome from './Admin/HomeScreen'
import AdminUserType from './Admin/UserType/UserTypeScreen'
import AdminTypeEdit from './Admin/UserType/UserTypeEdit'
import AdminListStd from './Admin/Student/GetListStd'
import AdminListTeacher from './Admin/Teacher/GetListTeacher'

//teacher side
import TeachHome from './Teacher/HomeScreen'
import TeachVisit from './Teacher/Visit/VisitScreen'
import TeachSaveVisit from './Teacher/Visit/SaveVisitScreen'
import TeachActivity from './Teacher/Activity/ActivityScreen'
import TeachViewActivity from './Teacher/Activity/ViewActivityScreen'
import TeachDetail from './Teacher/DetailScreen'
import TeachEditDetail from './Teacher/EditDetailScreen'
import TeachAddStudent from './Teacher/AddStudent/AddStudent'

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

  // นักศึกษา
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
  StudentActivity: {
    screen: StdActivity,
    navigationOptions: {
      title: 'กิจกรรม'
    }
  },
  StudentAddActivity: {
    screen: StdAddActivity
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

  // แอดมิน
  Admin: {
    screen: AdminHome,
    navigationOptions: {
      title: 'หน้าแรก'
    }
  },
  AdminUserType: {
    screen: AdminUserType,
    navigationOptions: {
      title: 'ประเภทผู้ใช้'
    }
  },
  AdminTypeEdit: {
    screen: AdminTypeEdit,
    navigationOptions: {
      title: 'แก้ไขประเภท'
    }
  },
  AdminListStd: {
    screen: AdminListStd,
    navigationOptions: {
      title: 'รายชื่อนักศึกษา'
    }
  },
  AdminListTeacher: {
    screen: AdminListTeacher,
    navigationOptions: {
      title: 'รายชื่ออาจารย์'
    }
  },

  // อาาจารย์
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
    screen: TeachSaveVisit
  },
  TeachActivity: {
    screen: TeachActivity,
    navigationOptions: {
      title: 'ตรวจกิจกรรม'
    }
  },
  TeachViewActivity: {
    screen: TeachViewActivity
  },
  TeachDetail: {
    screen: TeachDetail,
    navigationOptions: {
      title: 'ข้อมูลส่วนตัว'
    }
  },
  TeachEditDetail: {
    screen: TeachEditDetail,
    navigationOptions: {
      title: 'แก้ไขข้อมูลส่วนตัว'
    }
  },
  TeachAddStudent: {
    screen: TeachAddStudent,
    navigationOptions: {
      title: 'เลือกนักศึกษา'
    }
  },
}, { initialRouteName: 'Login' })

export default createAppContainer(RootStack)