export default function Tabs({children, buttons, buttonsContainer='menu'}){
const Buttonscontainer=buttonsContainer
    return <>
        <Buttonscontainer>
            {buttons}
        </Buttonscontainer>
        {children}
    </>
}