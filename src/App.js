import "./App.css";
import resume from "./resume/Nikunj_Konduru_Resume_v3.pdf";

function App() {
  return (
    <div className="App">
      <header>
        <h1 class="blm">BLACK LIVES MATTER!</h1>
      </header>
      <main class="main flex align-center justify-center">
        <div class="intro">
          <h1>Nikunj Konduru</h1>
          <ul class="flex align-center justify-center clean list-clean list-inline">
            <li>
              <a target="blank" href="https://github.com/nikunjkonduru">
                Github
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://www.linkedin.com/in/nikunj-konduru/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a target="blank" href={resume}>
                Résumé
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
