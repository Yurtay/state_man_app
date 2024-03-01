import { useDispatch } from "react-redux";
import Button from "../components/button/button";
import classes from "./reduxMainPage.module.css";
import { useSelector } from "react-redux";
import img_1 from "../../public/screen_1.png";

const ReduxMainPage = () => {
  const dispatch = useDispatch();
  const numb = useSelector((state) => state.numb.numb);

  return (
    <>
      <div className="div_container">
        <h2>Redux and React</h2>
        <Button
          title="+"
          onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}
        />
        <Button
          title="-"
          onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}
        />
        <Button title={numb} />
        <div className={classes.text_left}>
          <p>
            <b>1. Устанавливаем модули Redux и Redux-React:</b>
          </p>
          <p>npm install redux</p>
          <p>npm install react-redux</p>
        </div>
        <hr />

        <div className={classes.text_left}>
          <p>
            <b>
              2. Пример самого простого store всё прописываем в одном компоненте
              (reducer, store, initial state):
            </b>
          </p>
          <p>- создаем переменную store,</p>
          <p>
            - импортируем createStore и переименовываем его как показанно ниже
            (из-за того что createStore устарел)
          </p>
          <pre className={classes.pre}>{`
          import { legacy_createStore as createStore } from "redux";

          const defaultlState = { numb: 0 };

          const numbReducer = (state = defaultlState, action) => {
            switch (action.type) {
              case "INCREMENT":
                return { ...state, numb: state.numb + action.payload };
                break;
              case "DECREMENT":
                return { ...state, numb: state.numb - action.payload };
                break;
              default:
                return state;
                break;
            }
          };
          export const store = createStore(numbReducer);         
          `}</pre>
        </div>
        <hr />

        <div className={classes.text_left}>
          <p>
            <b>3. Прокидываем наш store в App:</b>
          </p>
          <p>
            - оборачиваем App в Provaider, импортируем store и передаем как
            props, после чего наш store доступен во всем компоненте App
          </p>
          <pre className={classes.pre}>{`
          import React from "react";
          import ReactDOM from "react-dom/client";
          import App from "./App.jsx";
          import { Provider } from "react-redux";
          import { store } from "./redux/state/index.jsx";

          ReactDOM.createRoot(document.getElementById("root")).render(
            <React.StrictMode>
              <Provider store={store}>
                <App />
              </Provider>
            </React.StrictMode>
          );
          `}</pre>
        </div>
        <hr />

        <div className={classes.text_left}>
          <p>
            <b>4. Добавляем диспетчера и наше состояние в компонент:</b>
          </p>
          <p>- создаем переменную и ипортируем dispatch</p>
          <p>- создаем переменную и ипортируем useSelect</p>
          <pre className={classes.pre}>{`
        const dispatch = useDispatch();
        const numb = useSelector((state) => state.numb);
          `}</pre>
          <p>- создаем кнопку, вешаем на неё onClick, отрисовываем numb</p>
          <p>
            - в onClick прописываем dispatch и передаём параметром объект с
            ключами type: "название действия из reducer", payload: "значение"{" "}
          </p>
          <pre className={classes.pre}>{`
          <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>Increment</button>
          <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>Decrement</button>
          <p>{numb}</p>
          `}</pre>
        </div>
        <p>
          <b>
            Теперь наше состояние доступно в любом компоненте внутри App и
            автоматически отрисовывается после его изменения. Для удобства,
            reducer и store можно вынести в отдельный фаил и экспортировать.
          </b>
        </p>
        <hr />

        <div className={classes.text_left}>
          <p>
            <b>5. Если необходимо несколько состояний:</b>
          </p>
          <p>- создаем еще один reducer и initial state для него</p>
          <p>
            - импортируем combineReducers создаем переменную rooReducer,
            передаем туда наши редюсеры
          </p>
          <p>- передаем rootReducer как параметр в createStore</p>
          <pre className={classes.pre}>{`
          import { numbReducer } from "./numbReducer";
          import { combineReducers, legacy_createStore as createStore } from "redux";
          import { usersReducer } from "./usersReducer copy";

          const rooReducer = combineReducers({
            users: usersReducer,
            numb: numbReducer,
          });

          export const store = createStore(rooReducer);
          `}</pre>
          <p>
            - теперь для получения состояния добавляем еще одно погружение:
            state, название reducer, ключ состояния
          </p>
          <pre className={classes.pre}>{`
        const numb = useSelector((state) => state.numb.numb);
        const users = useSelector((state) => state.users);
          `}</pre>
          <hr />
        </div>
        <div className={classes.text_left}>
          <p>
            <b>6. Redux devtools для удобства отслеживания состояния:</b>
          </p>
          <p>- устанавливаем дополнительный пакет</p>
          <p>npm i redux-devtools-extension</p>
          <p>- в createStore 2-м параметром передаем </p>
          <p>
            - импортируем функцию composeWithDevTools и передаем 2-м параметром
            в createStore
          </p>
          <pre className={classes.pre}>{`
        import { composeWithDevTools } from "redux-devtools-extension";
        
        export const store = createStore(rooReducer, composeWithDevTools);
          `}</pre>
          <p>
            - устанавливаем расширение для браузера Redux DevTools из магазина
            браузера
          </p>
          <p>
            - теперь мы можем отслеживать все изменения состояния при помощи
            этого инструмента
          </p>
          <img src={img_1} alt="no image" />
          <hr />
        </div>
        <div className={classes.text_left}>
          <p>
            <b>7 . Если необходимо несколько состояний:</b>
          </p>
          <p>- создаем еще один reducer и initial state для него</p>
          <p>
            - импортируем combineReducers создаем переменную rooReducer,
            передаем туда наши редюсеры
          </p>
          <p>- передаем rootReducer как параметр в createStore</p>
          <pre className={classes.pre}>{`
          import { numbReducer } from "./numbReducer";
          import { combineReducers, legacy_createStore as createStore } from "redux";
          import { usersReducer } from "./usersReducer copy";

          const rooReducer = combineReducers({
            users: usersReducer,
            numb: numbReducer,
          });

          export const store = createStore(rooReducer);
          `}</pre>
          <p>
            - теперь для получения состояния добавляем еще одно погружение:
            state, название reducer, ключ состояния
          </p>
          <pre className={classes.pre}>{`
        const numb = useSelector((state) => state.numb.numb);
        const users = useSelector((state) => state.users);
          `}</pre>
          <hr />
        </div>
      </div>
    </>
  );
};

export default ReduxMainPage;
