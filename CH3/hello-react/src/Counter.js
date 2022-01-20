import { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state // state 를 조회할때는 this.state 로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick 을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    onClick={() => {
                        //this.setState 를 사용하여 state 에 새로운 값을 넣을 수 있습니다.
                        //this.setState({ number: number + 1 });
                        //this.setState({ number: this.state.number + 1 });

                        // 2개씩 증가시키고 싶다면 객체 대신에 함수를 넣습니다.
                        // this.setState(prevState => {
                        //     return {
                        //         // 업데이트 하고 싶은 내용
                        //         number: prevState.number + 1

                        //     };
                        // });
                        // this.setState(prevState => ({
                        //     number: prevState.number + 1
                        // }));
                        
                        // this.setState가 끝난 후 특정 작업 실행하기
                        this.setState({
                            number: number + 1
                        },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;