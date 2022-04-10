import { useState, createContext, useContext } from "react";
import { Alert as BsAlert } from "react-bootstrap";
import styled from "styled-components";

const errorContext = createContext();

const Alert = styled(BsAlert)`
  padding: 5px;
  position: fixed;
  width: 300px;
  top: 200px;
  z-index: 1;
  left: 50%;
  font-size: 14px;
  transform: translateX(-50%);
  .btn-close {
    width: 0em;
    height: 0em;
    position: absolute;
    top: 9px;
    right: 10px;
    z-index: 2;
    padding: 6px;
  }
`;

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const setErrorMsg = (errorMsg) => {
    setError(errorMsg);
    setTimeout(() => {
      setError("");
    }, 10000);
  };

  const setNoticeMsg = (msg) => {
    setNotice(msg);
    setTimeout(() => {
      setNotice("");
    }, 10000);
  };

  return (
    <errorContext.Provider value={{ setErrorMsg, setNoticeMsg }}>
      {!!error ? (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          <span>{error}</span>
        </Alert>
      ) : (
        false
      )}
      {!!notice ? (
        <Alert variant="success" onClose={() => setNotice("")} dismissible>
          <span>{notice}</span>
        </Alert>
      ) : (
        false
      )}
      {children}
    </errorContext.Provider>
  );
};

export const useError = () => {
  return useContext(errorContext);
};
