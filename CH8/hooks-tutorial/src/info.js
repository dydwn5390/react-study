import { useState } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
          <div>
            <input name="name" value={name} onChange={onChangeName} />
            <input name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
          <div>
            <div>
              <b>이름:</b> {name}
            </div>
            <div>
              <b>닉네임: </b> {nickname}
            </div>
          </div>
        </div>
      );
    };

    export default Info;