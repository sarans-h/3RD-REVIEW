import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import { useSelector } from 'react-redux';

function LeftProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const {user}=useSelector((state)=>state.user)
    const [profile, setProfile] = useState({
        name: user?.name,
        email: user?.email,
        password: 'password123',
        image: 'https://picsum.photos/150' // Added image field
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        console.log(profile);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setProfile({ ...profile, image: URL.createObjectURL(files[0]) });
        } else {
            setProfile({ ...profile, [name]: value });
        }
    };

    return (
        <div className="bg-black text-white rounded-lg p-6 max-w-sm mx-auto">
            <img
                src={`https://ui-avatars.com/api/?name=${user?.name?.split(" ")[0]}&background=fff&color=000`}// Updated src
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto"
            />
            {isEditing && (
                <div className="flex justify-center mt-2">
                    <label htmlFor="image-upload" className="cursor-pointer">
                        <Edit className="text-white h-6 w-6" />
                    </label>
                    <input
                        type="file"
                        id="image-upload"
                        name="image"
                        onChange={handleChange}
                        className="hidden"
                    />
                </div>
            )}
            <div className="mt-4">
                <div className="mb-2">
                    <label className="block text-sm font-medium">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        readOnly={!isEditing}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-md bg-white/5 text-white`}
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        readOnly={!isEditing}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-md bg-white/5 text-white`}
                    />
                </div>
               
                
            </div>
        </div>
    );
}

export default LeftProfile;