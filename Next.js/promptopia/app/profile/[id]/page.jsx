'use client';

import Profile from '@/components/Profile'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get('name');

    const [userPrompts, setUserPrompts] = useState([]);

    const fetchPrompt = async () => {
        const response = await fetch(`/api/users/${params?.id}/prompts`);
        const data = await response.json();

        setUserPrompts(data);
    };

    useEffect(() => {
        if (params?.id) fetchPrompt();
    }, [params.id]);

    return (
        <Profile
            name={userName}
            desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}
        exceptional prompts and by the power of their imagination`}
            data={userPrompts} />
    )
}

export default UserProfile