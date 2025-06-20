import { CheckCheck, Copy } from "lucide-react";
import React, { useState } from "react";

const CodeContainer = ({
  component = () => <h1>New Component</h1>,
  code = `
    import react from 'react';
    export default function NoCode(){
      return (
      <h1>No Code Copied</h1>
      )
    }    `,
}) => {
  const [copySwitch, setCopySwitch] = useState(false);
  function handleClick() {
    navigator.clipboard.writeText(code);
    setCopySwitch(true);
    setTimeout(() => {
      setCopySwitch(false);
    }, 2000);
  }

  return (
    <div className="mt-8 border rounded border-gray-300 p-4 relative">
      <button onClick={handleClick} className="icon-box absolute top-1 end-1">
        {copySwitch && (
          <p className="text-xs bg-gray-700 px-2 py-0.5 rounded-xl text-white absolute -top-4 end-1">
            Copied
          </p>
        )}
        {copySwitch ? (
          <CheckCheck className="icon-sm" />
        ) : (
          <Copy className="icon-sm" />
        )}
      </button>
      {component()}
    </div>
  );
};

export default CodeContainer;
