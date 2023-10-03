import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';
import { FaCalendarAlt } from "react-icons/fa";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    return (
        <>
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">All Categories</h2>
                {
                    categories.map(category => <NavLink
                        className="block ml-4 text-xl font-semibold pl-7"
                        key={category.id}
                        to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>
            {/* student */}
            <div>
                {
                    students.map(student => <div key={student.id} className="mt-5">
                        <div className="card bg-base-100">
                            <figure><img src={student?.thumbnail_url} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p>{student?.title}</p>
                                <div className="card-actions">
                                    <p className="font-bold">Sports</p>
                                    <p className="flex items-center"><FaCalendarAlt className="mr-2"></FaCalendarAlt>{moment().format("MMM D , YY")}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default LeftSideNav;