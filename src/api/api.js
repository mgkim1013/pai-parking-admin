import cam1 from './fakeDB/cam/cam1.jpg';
import cam2 from './fakeDB/cam/cam2.jpg';
import cam3 from './fakeDB/cam/cam3.jpg';
import cam4 from './fakeDB/cam/cam4.jpg';
import cam5 from './fakeDB/cam/cam5.jpg';
import cam6 from './fakeDB/cam/cam6.jpg';
import cam7 from './fakeDB/cam/cam7.jpg';
import cam8 from './fakeDB/cam/cam8.jpg';
import cam9 from './fakeDB/cam/cam9.jpg';
import cam10 from './fakeDB/cam/cam10.jpg';
import cam11 from './fakeDB/cam/cam11.jpg';
import cam12 from './fakeDB/cam/cam12.jpg';

const camList = [
  { name: '정문1', video: cam1 },
  { name: '정문2', video: cam2 },
  { name: '후문1', video: cam3 },
  { name: '후문2', video: cam4 },
  { name: '주차장 입구1', video: cam5 },
  { name: '주차장 입구2', video: cam6 },
  { name: '주차장 출구1', video: cam7 },
  { name: '주차장 출구2', video: cam8 },
  { name: '주차장 B1-1', video: cam9 },
  { name: '주차장 B1-2', video: cam10 },
  { name: '주차장 B1-3', video: cam11 },
  { name: '주차장 B1-4', video: cam12 },
];

const getCameraNames = () => camList.map((cam) => cam.name);
const getVideo = (camName) => camList.find((cam) => cam.name === camName).video;

export { getCameraNames, getVideo };
