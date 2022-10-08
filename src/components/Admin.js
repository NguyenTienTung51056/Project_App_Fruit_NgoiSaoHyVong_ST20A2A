import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { TableUser } from './TableUser';
import { Manager } from './Manager';
import { TableProduct } from './TableProduct';
import FormEditUser from './FormEditUser';
import ComfirmDelete from './ComfirmDelete';
import FormEditProduct from './FormEditProduct';
export default function Admin(){
    // API User
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => setUsers(json))
        
    }, [])
    // API Product
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setProducts(json))
    }, [])

    // state
    const [state, setState] = useState("Quản lý sản phẩm");
    const handleChangeState = (e) => {
        setState(e.target.value);
    }

    // User funciton
    const functionUser = {
        change: (e) => {
            setIsShow(!isShow);
            handleChangeUser(e.target.parentElement.parentElement.children[0].children[0].innerText)
        },
        delete: (e) => {
            setIsDeleteUser(!isDeleteUser);
        }
        
    }

    const [isShow, setIsShow] = useState(false);
    const [user, setUser] = useState('');
    const [isDeleteUser, setIsDeleteUser] = useState(false);
    const handleChangeUser = (userId) => {
        users.map((user) => {
            if(user.id === parseInt(userId)){
                setUser(user);
                console.log(user)
                return true;
                
            }
            return false;
        })
    }
    
    
    // Product function
    const functionProduct = {
        change: (e) => {
            setIsShowProduct(!isShowProduct);
            console.log(e);
            handleChangeProduct(e)
        },
        delete: (e) => {
            setIsDeleteProduct(!isDeleteProduct);
        }
    }

    const [product, setProduct] = useState('');
    const [isShowProduct, setIsShowProduct] = useState(false);
    const [isDeleteProduct, setIsDeleteProduct] = useState(false);
    const handleChangeProduct = (product) => {
        setProduct(product);
    }
    return(
      <div className="container-fluid divAdmin">
        <Manager change={handleChangeState} state={state}/>
        {state === "Quản lý sản phẩm"? <TableProduct action={functionProduct} products={products}/>:<TableUser action={functionUser} users={users}/>}
        {isShow && <FormEditUser action={functionUser} user={user}/>}
        {isShowProduct && <FormEditProduct action={functionProduct} product={product}/>}
        {isDeleteUser && <ComfirmDelete action={functionUser}/>}
        {isDeleteProduct && <ComfirmDelete action={functionProduct}/>}
      </div>
    )
}