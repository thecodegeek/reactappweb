import "bootstrap/dist/css/bootstrap.css";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Nic's
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Utilities
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    Weather
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Work in progress</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function TodayDate() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };

  const formattedDate = new Intl.DateTimeFormat("de-DE", options).format(date);
  return formattedDate;
}

export function Avatar({ person, size }: { size: number; person: any }) {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = TodayDate() + person.name;
  return (
    <figure className="figure">
      <img
        src={avatar}
        className="figure-img img-fluid rounded"
        alt={person.name}
        width={size}
        height={size}
      />
      <figcaption className="figure-caption">{description}</figcaption>
    </figure>
  );
}

export function Card({ children }: { children: any }) {
  return <div className="card">{children}</div>;
}

export function Profile() {
  return (
    <Card>
      <Avatar size={100} person={{ name: "lin", imageId: "sciopa" }} />
    </Card>
  );
}

export function Item({ name, isPacked }: { name: any; isPacked: any }) {
  return <li className="list">{isPacked ? name + " ✔" : name}</li>;
}
