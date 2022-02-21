import { connect, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
import { bindActionCreators } from 'redux';
import { useCallback } from 'react';

// 아래 increase, decrease 는 counter.js 에서 생성한 액션 함수
const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()),[dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()),[dispatch]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props 로 넘겨주기 위해 설정
// state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킴.
const mapStateToProps = (state) => ({
    number: state.counter.number,
});

// 이렇게 액션 생성함수로 이루어진 객체 형태로 넣어주면, connect 함수가 내부적으로 bindActionCreators  작업을 대신 해줌
const mapDispatchToProps = {
    increase,
    decrease,
};

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default CounterContainer;
