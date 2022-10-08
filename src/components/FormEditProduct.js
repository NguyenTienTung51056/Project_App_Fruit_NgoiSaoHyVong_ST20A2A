import validator from 'validator';
import { useState } from 'react';
export default function FormEditProduct(props){
    const [title, setTitle] = useState('');
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const [description, setDescription] = useState('');
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const [image, setImage] = useState('');
    const onChangeImage = (e) => {
        setImage(e.target.value);
    }
    const [category, setCategory] = useState('');
    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const [detail, setDetail] = useState('');
    const onChangeDetail = (e) => {
        setDetail(e.target.value);
    }
    const [color, setColor] = useState('');
    const onChangeColor = (e) => {
        setColor(e.target.value);
    }
    const [price, setPrice] = useState('');
    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }
    const [inStock, setInStock] = useState('');
    const onChangeInStock = (e) => {
        setInStock(e.target.value);
    }
    const [errMessage, setErrMessage] = useState('');
    const validatorAll = () => {
        const err = {};
        if(validator.isEmpty(title)){
            err.title = "Title is required";
        }
        if(validator.isEmpty(description)){
            err.description = "Description is required";
        }
        if(validator.isEmpty(image)){
            err.image = "Image is required";
        }
        if(validator.isEmpty(category)){
            err.category = "Category is required";
        }
        if(validator.isEmpty(detail)){
            err.detail = "Detail is required";
        }
        if(validator.isEmpty(color)){
            err.color = "Color is required";
        }
        if(validator.isEmpty(price)){
            err.price = "Price is required";
        }
        if(validator.isEmpty(inStock)){
            err.inStock = "InStock is required";
        }
        setErrMessage(err);
        if(Object.keys(err).length > 0){
            return false;
        }
        return true;
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validatorAll();
        if(isValid){
            console.log("submit");
        }
    }


    return (
        <div className="form-edit">
            <form method="post" className='form-product'>
                {/* button close */}
                <div>
                    <button onClick={props.action.change} type="button" className="btn-close" aria-label="Close"></button>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputTitle">Title</label>
                    <input 
                    type="title" 
                    className="form-control" 
                    id="exampleInputTitle"
                    onChange={onChangeTitle} 
                    aria-describedby="titleHelp" 
                    placeholder="Enter title"/>
                    <p className="text-red-400 text-xs italic">{errMessage.title}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputDescription">Description</label>
                    <input 
                    type="description" 
                    className="form-control" 
                    id="exampleInputDescription"
                    onChange={onChangeDescription} 
                    placeholder="Description"/>
                    <p className="text-red-400 text-xs italic">{errMessage.description}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputImage">Image</label>
                    <input 
                    type="address" 
                    className="form-control" 
                    id="exampleInputImage"
                    onChange={onChangeImage}
                    placeholder="Image"/>
                    <p className="text-red-400 text-xs italic">{errMessage.image}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputCategories">Categories</label>
                    <input 
                    type="categories" 
                    className="form-control" 
                    id="exampleInputCategories"
                    onChange={onChangeCategory} 
                    placeholder="Categories"/>
                    <p className="text-red-400 text-xs italic">{errMessage.category}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputDetails">Details</label>
                    <input 
                    type="details" 
                    className="form-control" 
                    id="exampleInputDetails"
                    onChange={onChangeDetail} 
                    placeholder="Details"/>
                    <p className="text-red-400 text-xs italic">{errMessage.detail}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputColor">Color</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputText"
                    onChange={onChangeColor} 
                    placeholder="Color"/>
                    <p className="text-red-400 text-xs italic">{errMessage.color}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPrice">Price</label>
                    <input 
                    type="price" 
                    className="form-control" 
                    id="exampleInputPrice"
                    onChange={onChangePrice} 
                    placeholder="Price"/>
                    <p className="text-red-400 text-xs italic">{errMessage.price}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputInStock">In Stock</label>
                    <input 
                    type="inStock" 
                    className="form-control" 
                    id="exampleInputInStock"
                    onChange={onChangeInStock} 
                    placeholder="InStock"/>
                    <p className="text-red-400 text-xs italic">{errMessage.inStock}</p>
                </div>
                <div className='form-group'>
                    <button 
                    type="button"
                    onClick={onSubmit} 
                    className="btn btn-primary btnSubmit">Submit</button>
                </div>
                
            </form>
        </div>
    )
}