import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // state 초깃값 설정
        this.state = {
            number: 0
        };
    }
    render() {
        const {number} = this.state // state 를 조회할때는 this.state 로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <button
                    // onClick 을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    onClick={()=>{
                        //this.setState 를 사용하여 state 에 새로운 값을 넣을 수 있습니다.
                        this.setState({number: number + 1});
                    }}
                >
                +1
                </button>
            </div>
        );
    }
}

export default Counter;