import Header from "./Header";
import Footer from "./Footer";
import ProfileCard from "./ProfileCard";
import users from "./mockData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {users.map((users) => {
          return (
            <ProfileCard
              key={users.id}
              img={users.img}
              jobTitle={users.jobTitle}
              name={`${users.firstName} ${users.lastName}`}
              description={users.description}
            />
          );
        })}
      </main>

      <Footer />
    </div>
  );
}

export default App;
