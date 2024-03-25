import { useContext } from "react";
import { UserInfo } from './context'
// 파일이 분리되어 있을 경우 상단처럼 context를 가져와서 사용하고, App

const HelloLicatTwo = () => {
    const { name, id } = useContext(UserInfo);
    return (
      <div>
        <h2>{name}</h2>
        <strong>{id}</strong>
      </div>
    );
  };

export default HelloLicatTwo