export function Manager(props){
  return (
    <div className="col col-2 manager">
      <div onClick={props.change} className="row" id={props.state === "Quản lý sản phẩm"? "checked":""}>
        <input type="button" value="Quản lý sản phẩm"/>
      </div>
      <div onClick={props.change} className="row" id={props.state === "Quản lý sản phẩm"? "":"checked"}>
        <input type="button" value="Quản lý người dùng"/>
      </div>
    </div>
  )
}