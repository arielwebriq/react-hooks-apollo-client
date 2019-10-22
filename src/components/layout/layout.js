import React from 'react'
import './layout.css';

const Layout = ({children}) => (
	<>
		<header><nav>header</nav></header>
		<main style={{maxWidth: "640px", margin: "0 auto"}}>
		{children}
		</main>
		<footer> Footer</footer>
	</>
	)

export default Layout