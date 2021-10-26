import '../src/css/reset.css';
import '../src/css/style.css';

function App() {
  return (
    <body class="body">
      <div class="main-wrapper">
        <div class="page-header">
            <h1 class="page-header__content">
                Page header
            </h1>
        </div>
        <div class="filter">
            <div class="filter__search">
                <div class="filter__search-field"></div>
                <div class="filter__search-options"></div>
            </div>
            <div class="filter__button"></div>
        </div>
        <div class="table">
            <div class="table__header"></div>
            <div class="table__body"></div>
            <div class="table__footer"></div>
        </div>
    </div>
    </body>
  );
}

export default App;
