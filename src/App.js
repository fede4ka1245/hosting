import React, {useEffect} from "react";
import './app.css';

function App() {
  const data = [
    {
      label: "Current deals",
      value: 'currentDeals',
    },
    {
      label: "Navigation on Architecture",
      value: 'navigationOnArchitecture',
    },
    {
      label: "Members",
      value: 'members',
    },
    {
      label: "Ask community",
      value: 'community',
    },
    {
      label: "How to invest",
      value: 'invest',
    },
    {
      label: "Help center",
      value: 'help',
    },
  ];

  const onClick = (value) => {
    window.Telegram?.WebApp?.sendData(JSON.stringify({
      value
    }))
    window.Telegram?.WebApp?.close();
  }

  useEffect(() => {
    window.Telegram?.WebApp?.expand();
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      fontFamily: 'arial',
      color: 'white',
      background: 'inherit',
      cursor: 'pointer',
    }}>
      {data.map((el) => (
        <div
          key={el.label}
          onClick={() => onClick(el.value)}
          style={{
            width: 'calc(33.3% - 10px)',
            textAlign: 'center',
            background: 'rgba(170, 170, 170, 0.47)',
            marginBottom: '10px',
            borderRadius: '8px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>
            {el.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
