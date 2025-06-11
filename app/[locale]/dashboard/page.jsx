import '../globals.scss';
import DashboardUI from './DashboardUI';

const userdata = {
  username: "John Doe",
  email: "john.doe@example.com"
}

export default function Home() {
  return (
  <div className="dash_board_main_container">
    <DashboardUI username={userdata.username} />
  </div>
  );
}
