import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addCategoriesMiddleware, deleteCategoriesMiddleware, fecthCategories } from "../actions/actionCreators";

const Category = () => {

    // const [categories, setCategories] = useState([]);
    // const [newCategory, setNewCategory] = useState({ name: '' });

    // const [newCategory, setNewCategory] = useState({ name: '' });

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const response = await fetch('http://localhost:3000/categories');
    //         const data = await response.json();
    //         setCategories(data);
    //     };

    //     fetchCategories();
    // }, []);

    // const createCategory = async (e) => {
    //     e.preventDefault();

    //     const response = await fetch('http://localhost:3000/categories', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newCategory)
    //     });

    //     const data = await response.json();
    //     setCategories([...categories, data]);
    // };

    // const deleteCategory = async (id) => {
    //     await fetch(`http://localhost:3000/categories/${id}`, {
    //         method: 'DELETE'
    //     });

    //     setCategories(categories.filter(category => category.id !== id));
    // };

    // const handleInputChange = (e) => {
    //     setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
    // };

    const { categories } = useSelector((state) => state.categories);
    const [newCategory, setNewCategory] = useState({ name: '' })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fecthCategories())
    }, [])

    const createCategory = (e) => {
        e.preventDefault()
        dispatch(addCategoriesMiddleware(newCategory))
        setNewCategory({ name: '' })
    }

    const handleInputChange = (e) => {
        setNewCategory({ ...newCategory, [e.target.name]: e.target.value })
    }

    const deleteCategory = (id) => {
        dispatch(deleteCategoriesMiddleware(id))
    }

    return (
        <div className="container">
            <h2 className="my-3">Create a new Category</h2>
            <form onSubmit={createCategory} className="mb-4">
                <div className="mb-3">
                    <input type="text" name="name" value={newCategory.name} onChange={handleInputChange} className="form-control" placeholder="Category Name" />
                </div>
                <button type="submit" className="btn btn-primary">Add Category</button>
            </form>

            <h2 className="my-3">Categories List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{category.name}</td>
                            <td>{new Date(category.createdAt).toLocaleString()}</td>
                            <td>{new Date(category.updatedAt).toLocaleString()}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteCategory(category.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Category;
