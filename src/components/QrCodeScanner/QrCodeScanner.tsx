import  { useState } from 'react';
import QrReader from 'react-qr-scanner';


export const QrCodeScanner=()=>
 {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState('No result');

  const handleScan = data => {
    setResult(data);
  };

  const handleError = err => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  );
}

