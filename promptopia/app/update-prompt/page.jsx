'use client'

import Form from '@/components/Form'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');

    const [submitting, setSubmitting] = useState(false);
    const [prompt, setPrompt] = useState({
        prompt: '',
        tag: ''
    })

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPrompt({
                prompt: data.prompt,
                tag: data.tag
            });
        }

        if (promptId) getPromptDetails();
    }, [promptId]);

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) alert('Prompt ID not found');

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: prompt.prompt,
                    tag: prompt.tag
                }),
            });

            if (response.ok) {
                router.push('/profile')
            }
        } catch(error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type='Edit'
            prompt={prompt}
            setPrompt={setPrompt}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    )
}

export default UpdatePrompt