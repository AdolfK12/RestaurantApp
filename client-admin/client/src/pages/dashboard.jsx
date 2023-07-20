import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsMiddleware, deleteItemMiddleware, fecthItems } from '../actions/actionCreators'

const Dashboard = () => {
    // const [items, setItems] = useState([]);
    // const [newItem, setNewItem] = useState({ name: '', categoryId: '', price: '', authorId: '', mainImage: '', image: '' });

    // useEffect(() => {
    //     const fetchItems = async () => {
    //         const response = await fetch('http://localhost:3000/items');
    //         const data = await response.json();
    //         setItems(data);
    //     };

    //     fetchItems();
    // }, []);

    const { items } = useSelector((state) => state.items)
    const [newItem, setNewItem] = useState({ name: '', categoryId: '', price: '', authorId: '', mainImage: '', image: '' });


    const dispacth = useDispatch()

    useEffect(() => {
        dispacth(fecthItems())
    }, [])


    const createItem = (e) => {
        e.preventDefault();
        dispacth(addItemsMiddleware(newItem))
        // Reset newItem state setelah item ditambahkan
        setNewItem({ name: '', categoryId: '', price: '', authorId: '', mainImage: '', image: '' });
    };

    const handleInputChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: e.target.value });
    };

    const deleteItem = (id) => {
        dispacth(deleteItemMiddleware(id))
    };

    // const createItem = async () => {
    //     const response = await fetch('http://localhost:3000/items', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newItem)
    //     });

    //     const data = await response.json();
    //     setItems([...items, data]);
    // };

    // const handleInputChange = (e) => {
    //     setNewItem({ ...newItem, [e.target.name]: e.target.value });
    // };

    // const deleteItem = async (id) => {
    //     await fetch(`http://localhost:3000/items/${id}`, {
    //         method: 'DELETE'
    //     });

    //     setItems(items.filter(item => item.id !== id));
    // };

    return (
        <>
            <div className="container">
                <h2 className="my-3">Create a new Item</h2>
                <form onSubmit={createItem} className="mb-4">
                    <div className="mb-3">
                        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="categoryId" value={newItem.categoryId} onChange={handleInputChange} className="form-control" placeholder="Category ID" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="price" value={newItem.price} onChange={handleInputChange} className="form-control" placeholder="Price" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="authorId" value={newItem.authorId} onChange={handleInputChange} className="form-control" placeholder="Author ID" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="mainImage" value={newItem.mainImage} onChange={handleInputChange} className="form-control" placeholder="Main Image URL" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="image" value={newItem.image} onChange={handleInputChange} className="form-control" placeholder="Image URL" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Product</button>
                </form>

                <h2 className="my-3">Items List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Created By</th>
                            <th>Main Image</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.categoryId}</td>
                                <td>{item.price}</td>
                                <td>{item.authorId}</td>
                                <td>
                                    <img src={item.mainImage} alt="main" style={{ width: "50px", height: "50px" }} />
                                </td>
                                <td>
                                    <img src={item.image} alt="secondary" style={{ width: "50px", height: "50px" }} />
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Dashboard;
