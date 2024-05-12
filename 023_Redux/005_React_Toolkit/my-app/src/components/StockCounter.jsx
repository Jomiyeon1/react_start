import { useSelector, useDispatch } from 'react-redux'
 import { sale, soldout } from '../modules/stockCounter'

function StockCounter(){
    const{message} = useSelector(state => ({
        message: state.stockReducer.message
    }))
    console.log("message => ", message);
    const dispatch = useDispatch();

    const onSale = () => dispatch(sale());
    const onSoldout = () => dispatch(soldout());

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default StockCounter