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

    const handleDelete = async (prompt) => {
        const hasConfirmed = confirm('Are you sure you want to delete this prompt?');
        
        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${prompt._id}`, {
                    method: 'DELETE'
                });

                const filteredPrompts = prompts.filter((p) => p._id !== prompt._id);
                
                setPrompts(filteredPrompts);
            } catch(error) {
                console.log(error);
            }
        }
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