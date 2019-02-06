# ACTLOG

ระบบบันทึกกิจกรรมนักศึกษาฝึกงานของสาขาวิทยาศาสตร์คอมพิวเตอร์

# ขั้นตอนติดตั้ง (Android)
1.ติดตั้ง NodeJS
2.เปิด CMD สั่งรัน npm install -g react-native-cli
3.ติดตั้ง Android Studio
  - Android SDK
  - Android SDK Platform
  - Performance (Intel ® HAXM)
  - Android Virtual Device
4.ติดตั้ง Emulator Android 8.1 (oreo)
  - Android SDK Platform 28
  - Intel x86 Atom_64 System Image
  - รัน Emulator ไว้เลย
5.ตั้งค่า Environment Variables
  - ANDROID_HOME = ที่อยู่ของ Android SDK
6.โหลดไฟล์โปรเจคแล้วแตกไฟล์ไว้ซักที่
7.เปิดหน้า CMD ในโปรเจค
  - npm start
  - เปิด CMD อีกอันแล้วพิมพ์ react-native run-android
8.เสร็จ

**อาจจะไม่ละเอียดมากนัก ต้องตั้งค่า firebase API นิดหน่อย
