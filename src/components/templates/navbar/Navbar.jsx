import React, { useState } from "react";
import {
	FaBars,
	FaRegHeart,
	FaRegUser,
	FaSearch,
	FaShoppingBag,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "./NavbarStyle";

const Navbar = () => {
	const [close, setClose] = useState(false);
	return (
		<Container>
			<nav>
				<Link
					to='/'
					className='navbar_logo_wrapper'
					onClick={(e) => {
						setClose(false);
					}}
				>
					<img
						src='/images/logo/logo-white.png'
						alt=''
						className='navbar_logo_img'
					/>
				</Link>
				<input
					type='checkbox'
					checked={close}
					onChange={(e) => setClose(e.target.checked)}
					id='check'
				/>
				<label htmlFor='check' className='toggle-menu'>
					<FaBars className='navbar_icons' />
				</label>

				<div className='main-nav'>
					<ul className='rightsidenav centerd'>
						<li className='rightsidenav_item'>
							<Link
								to='/'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Home
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/about'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								About us
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/sign-up'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Membership
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/blog'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Blog
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/contact'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Contact
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/shop'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Shop
							</Link>
						</li>
					</ul>
					<ul className='rightsidenav rightsidnav2'>
						<li className='rightsidenav_item'>
							<Link
								to=''
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								{/* <span className="icon search_nav"></span> */}
								<FaSearch className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to=''
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								{/* <span className="icon search_nav"></span> */}
								<FaRegUser className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to=''
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								{/* <span className="icon search_nav"></span> */}
								<FaRegHeart className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to=''
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								{/* <span className="icon search_nav"></span> */}
								<FaShoppingBag className='navbar_icons' />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Container>
	);
};
export default Navbar;
