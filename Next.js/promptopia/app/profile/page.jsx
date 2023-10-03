'use client'

import Profile from '@/components/Profile';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

const ProfilePage = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [prompts, setPrompts] = useState([]);

    const handleEdit = (prompt) => {
        router.push(`/update-prompt?id=${prompt._id}`);
    }

    const handleDelete = (prompt) => {
        console.log('handle delete');
    }

    useEffect(() => {
        const fetchUserPrompts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/prompts`);
            const data = await response.json();

            setPrompts(data);
        }

        if (session?.user.id) {
            fetchUserPrompts();
        }
    }, []);

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={prompts}
            handleEdit={handleEdit}
            handleDelete={handleDelete} />
    )
}

export default ProfilePage