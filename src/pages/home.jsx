import Todos from '@/app/components/todos'
import TopPanel from '@/app/components/toppanel'
import React from 'react'

export default function Home() {
    return (
        <>
            <TopPanel />
            <h2>Home</h2>
            <Todos/>
        </>
    )
}
