import './App.css';
import Profile from './components/Profile';
import AtSymbol from './assets/at_symbol.png'
import SentSymbol from './assets/sent_symbol.png'
import DraftSymbol from './assets/draft_symbol.png'
import DeletedSymbol from './assets/deleted_symbol.png'
import FavouriteSymbol from './assets/favourite_symbol.png'
import AnalyticsSymbol from './assets/analytics_symbol.png'
import SettingsSymbol from './assets/settings_symbol.png'
import CloseIcon from './assets/close_icon.png'
import Link from './interfaces/Link';
import Menu from './components/Menu';
import AnalyticsGraph from './components/AnalyticsGraph';
import UserTable from './components/UserTable';

function App() {

  const links: Link[] = [
    {
      src: AtSymbol,
      title: "Inbox"
    },
    {
      src: SentSymbol,
      title: "Sent"
    },
    {
      src: DraftSymbol,
      title: "Draft"
    },
    {
      src: DeletedSymbol,
      title: "Deleted"
    },
    {
      src: FavouriteSymbol,
      title: "Favourite"
    },
    {
      src: AnalyticsSymbol,
      title: "Analytics"
    },
    {
      src: SettingsSymbol,
      title: "Settings"
    },
  ]

  return (
    <div className="App">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-2 px-0 py-5 me-5" style={{ background: "#fff" }}>
            <Profile profileName="Micheal Atkinson" profileLink="#" />
            <Menu links={links} />
          </div>
          <div className="col-md-9 p-0" style={{ background: "#fff" }}>
            <div className="border-bottom">
              <div className="d-flex justify-content-between align-items-center p-5 mt-3 ">
                <h1 style={{ color: "#272727" }} className="float-start fw-normal">Overview</h1>
                <img src={CloseIcon} alt="close" className="float-end" style={{ height: "22px", width: "22px" }} />
              </div>
            </div>
            <AnalyticsGraph />
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
