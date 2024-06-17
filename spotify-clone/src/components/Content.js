import React from 'react'
import Navbar from './Navbar'
import Collection from 'views/Collection'
import Home from 'views/Home'
import Search from 'views/Search'
import { Route, Routes } from 'react-router-dom';


export default function Content() {
    return (
		<main className="flex-auto overflow-auto">
			<Navbar />
			<div className="px-8 py-5">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/collection" element={<Collection />} />
                </Routes>
            </div>
        </main>
    )
}