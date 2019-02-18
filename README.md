# ACTLOG

ระบบบันทึกกิจกรรมนักศึกษาฝึกงานของสาขาวิทยาศาสตร์คอมพิวเตอร์

### ขั้นตอนติดตั้ง (Android)
* ติดตั้ง [Node.js](https://nodejs.org) โหลดตัว LTS
* เปิด CMD สั่งรัน 
  ```npm install -g react-native-cli```
* ติดตั้ง [Android Studio](https://developer.android.com/studio/)
  - Android SDK
  - Android SDK Platform
  - Performance (Intel ® HAXM)
  - Android Virtual Device
* ติดตั้ง Emulator Android 8.1 (oreo)
  - Android SDK Platform 28
  - Intel x86 Atom_64 System Image
  - รัน Emulator ไว้เลย
* ตั้งค่า Environment Variables
  - ANDROID_HOME = ที่อยู่ของ Android SDK
* โหลดไฟล์โปรเจคแล้วแตกไฟล์ไว้ซักที่
* เปิดหน้า CMD ในโปรเจค
  - npm start
  - เปิด CMD อีกอันแล้วพิมพ์ react-native run-android
* เสร็จ

**อาจจะไม่ละเอียดมากนัก ต้องตั้งค่า firebase API นิดหน่อย
