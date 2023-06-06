type Props = {
    cartDate: {
        totalCount: number
        totalPrice: number
    }
}
const CartHeader = ({ cartDate }: Props) => {
    return (
        <div>
            <div>{cartDate.totalCount}</div>
            <div>${cartDate.totalPrice}</div>
        </div>
    )
}
export default CartHeader
