
export function TableProduct(props){
    
    return(
        <div className="col col-10 divTable">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Categories</th>
                        <th scope="col">Type Details</th>
                        <th scope="col">Color</th>
                        <th scope="col">Price</th>
                        <th scope="col">In Stock</th>
                        <th colSpan={2} scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => (
                        <tr key={product.id}>
                            <th key={product.id+1} scope="row"><p>{product.id}</p></th>
                            <td key={product.id+2}><p>{product.title}</p></td>
                            <td key={product.id+3}><p>{product.body}</p></td>
                            <td key={product.id+4}><p>{product.body}</p></td>
                            <td key={product.id+5}><p>{product.body}</p></td>
                            <td key={product.id+6}><p>{product.body}</p></td>
                            <td key={product.id+7}><p>{product.body}</p></td>
                            <td key={product.id+8}><p>{product.body}</p></td>
                            <td key={product.id+9}><button type="button" className="btn btn-primary" onClick={props.action.change}>Edit</button></td>
                            <td key={product.id+10}><button type="button" className="btn btn-danger" onClick={props.action.delete}>Delete</button></td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
        
    )
}