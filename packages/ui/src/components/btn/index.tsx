import type {FC,ReactNode} from "react"
export type BtnProps = {
    color?: string
    children?: React.ReactNode
}
//  react18的fc没有了children？？
const Btn: FC<BtnProps> = ({ children,color }) => {
    return <div style={{color}}>{ children } </div>
}

export default Btn