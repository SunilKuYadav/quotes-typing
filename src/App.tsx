import { useEffect, useState } from "react";

import "./App.css";
import { Footer, Header, TypingGame } from "./components";
import { useDateAndTime, useLocalStorage, useQuotesReducer } from "./hooks";


function App() {
  const { date, time, wish } = useDateAndTime();
  const [currentQuotes, dispatchQuotes] = useQuotesReducer();

  const [timer, setTimer] = useState(0);
  const [name, setName] = useLocalStorage("name", "Sunil Kumar Yadav");
  const [charCount, setCharCount] = useLocalStorage("count", 0);

  const handleQuotesCollectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatchQuotes({ type: e.target.value as any });
  };

  useEffect(() => {
    const timers = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timers);
  }, []);

  return (
    <div style={{ height: "100vh" }} className="App">
      <Header date={date} time={time} wish={wish} name={name} timer={timer} />
      <TypingGame quotes={currentQuotes as any} />

      <Footer
        onCollectionChange={handleQuotesCollectionChange}
        name={name}
        setName={setName}
        charCount={charCount}
        handleReset={() => {
          setName("Sunil Kumar Yadav");
          setCharCount(0);
          setTimer(0);
        }}
      />
    </div>
  );
}

export { App };
