import { Dashboard, Videocam, VideoLibrary, LocalParking, SyncAlt, DriveEta, Tune, InsertChart } from '@material-ui/icons';
import {
  DashboardView,
  VideoRealView,
  VideoHistView,
  ParkingView,
  InOutView,
  RegistrantView,
  ManualOperationView,
  StatisticsView,
} from 'views';

const routes = [
  {
    path: '/dashboard',
    name: '대시보드',
    icon: Dashboard,
    component: DashboardView,
  },
  {
    path: '/videoReal',
    name: '실시간 영상 모니터링',
    icon: Videocam,
    component: VideoRealView,
  },
  {
    path: '/videoHist',
    name: '영상 기록 모니터링',
    icon: VideoLibrary,
    component: VideoHistView,
  },
  {
    path: '/parking',
    name: '주차 공간 모니터링',
    icon: LocalParking,
    component: ParkingView,
  },
  {
    path: '/inout',
    name: '입출차 모니터링',
    icon: SyncAlt,
    component: InOutView,
  },
  {
    path: '/registrant',
    name: '등록 차량 관리',
    icon: DriveEta,
    component: RegistrantView,
  },
  {
    path: '/manualOperation',
    name: '차단기 수동 조작',
    icon: Tune,
    component: ManualOperationView,
  },
  {
    path: '/statistics',
    name: '통계 및 알림',
    icon: InsertChart,
    component: StatisticsView,
  },
];

export { routes };
