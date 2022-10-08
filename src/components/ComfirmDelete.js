export default function ConfirmDelete(props) {
    let text = "Xac nhan xoa";
    if ( window.confirm(text) === true) {
        props.action.delete();
        
    } else {
    props.action.delete();
    }
    // props.delete();
    return(
        <p>
            {text}
        </p>
    )
  }