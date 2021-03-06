import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation'

import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'

//student side
import StdHome from './Student/index'
import StdTimeTable from './Student/TimeTable/TimeTableScreen'
import StdActivity from './Student/Activity/ActivityScreen'
import StdAddActivity from './Student/Activity/AddActivityScreen'
import StdVisit from './Student/Visit/VisitScreen'
import StdViewVisit from './Student/Visit/ViewVisit'
import StdComment from './Student/Comment/CommentScreen'
import StdDetail from './Student/DetailScreen'
import StdEditDetail from './Student/EditDetailScreen'

//admin side
import AdminHome from './Admin/index'
import AdminUserType from './Admin/UserType/UserTypeScreen'
import AdminTypeEdit from './Admin/UserType/UserTypeEdit'
import AdminListStd from './Admin/Student/GetListStd'
import AdminListTeacher from './Admin/Teacher/GetListTeacher'

//teacher side
import TeachHome from './Teacher/index'
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
    screen: StdHome
  },
  StudentTimeTable: {
    screen: StdTimeTable
  },
  StudentActivity: {
    screen: StdActivity
  },
  StudentAddActivity: {
    screen: StdAddActivity
  },
  StudentVisit: {
    screen: StdVisit,
    navigationOptions: {
      title: 'ดูผลการนิเทศ'
    }
  },
  StudentViewVisit: {
    screen: StdViewVisit,
    navigationOptions: {
      title: 'ดูรูปภาพการนิเทศ'
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
    screen: StdEditDetail
  },

  // แอดมิน
  Admin: {
    screen: AdminHome,
  },
  AdminUserType: {
    screen: AdminUserType,
    navigationOptions: {
      title: 'เพิ่มประเภทผู้ใช้'
    }
  },
  AdminTypeEdit: {
    screen: AdminTypeEdit
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
    screen: TeachHome
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
}, {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#34495E'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white'
    }
  })

export default createAppContainer(RootStack)